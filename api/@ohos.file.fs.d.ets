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
 */

import { AsyncCallback } from './@ohos.base';
import stream from './@ohos.util.stream';

/**
 * FileIO
 *
 * @namespace fileIo
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
declare namespace fileIo {

   /**
   * Mode Indicates the open flags.
   *
   * @namespace OpenMode
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  namespace OpenMode {
  /**
   * Read only Permission.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const READ_ONLY = 0o0;
  /**
   * Write only Permission.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const WRITE_ONLY = 0o1;
  /**
   * Write and Read Permission.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const READ_WRITE = 0o2;
  /**
   * If not exist, create file.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const CREATE = 0o100;
  /**
   * File truncate len 0.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const TRUNC = 0o1000;
  /**
   * File append write.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const APPEND = 0o2000;
  /**
   * File open in nonblocking mode.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const NONBLOCK = 0o4000;
  /**
   * File is Dir.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const DIR = 0o200000;
  /**
   * File is not symbolic link.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
    const NOFOLLOW = 0o400000;
  /**
   * SYNC IO.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
 */
function accessSync(path: string, mode: AccessModeType, flag: AccessFlagType): boolean;

/**
 * Close file or fd.
 *
 * @param { int | File } file - file object or fd.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function close(file: int | File): Promise<void>;

/**
 * Close file or fd.
 *
 * @param { int | File } file - file object or fd.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function close(file: int | File, callback: AsyncCallback<void>): void;

/**
 * Close file or fd with sync interface.
 *
 * @param { int | File } file - file object or fd.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function closeSync(file: int | File): void;

/**
 * Copy file or directory.
 *
 * @param { string } srcUri - src uri.
 * @param { string } destUri - dest uri.
 * @param { CopyOptions } [options] - options.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function copy(srcUri: string, destUri: string, options?: CopyOptions): Promise<void>;

/**
 * Copy file or directory.
 *
 * @param { string } srcUri - src uri.
 * @param { string } destUri - dest uri.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function copy(srcUri: string, destUri: string, callback: AsyncCallback<void>): void;

/**
 * Copy file or directory.
 *
 * @param { string } srcUri - src uri.
 * @param { string } destUri - dest uri.
 * @param { CopyOptions } options - options.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied by the file system
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function copy(srcUri: string, destUri: string, options: CopyOptions, callback: AsyncCallback<void>): void;

/**
 * Copy directory.
 *
 * @param { string } src - source path.
 * @param { string } dest - destination path.
 * @param { int } [mode = 0] - mode.
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
 * @since 20 static
 */
function copyDir(src: string, dest: string, mode?: int): Promise<void>;

/**
 * Copy directory.
 *
 * @param { string } src - source path.
 * @param { string } dest - destination path.
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
 * @since 20 static
 */
function copyDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Copy directory.
 *
 * @param { string } src - source path.
 * @param { string } dest - destination path.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Return the callback function.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function copyDir(src: string, dest: string, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Copy directory.
 *
 * @param { string } src - source path.
 * @param { string } dest - destination path.
 * @param { int } mode - mode.
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
 * @since 20 static
 */
function copyDir(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Copy directory.
 *
 * @param { string } src - source path.
 * @param { string } dest - destination path.
 * @param { int } mode - mode.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Return the callback function.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function copyDir(src: string, dest: string, mode: int, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Copy directory with sync interface.
 *
 * @param { string } src - source path.
 * @param { string } dest - destination path.
 * @param { int } [mode = 0] - mode.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
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
 * @since 20 static
 */
function copyDirSync(src: string, dest: string, mode?: int): void;

/**
 * Copy file.
 *
 * @param { string | int } src - src.
 * @param { string | int } dest - dest.
 * @param { int } [mode = 0] - mode.
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
 * @since 20 static
 */
function copyFile(src: string | int, dest: string | int, mode?: int): Promise<void>;

/**
 * Copy file.
 *
 * @param { string | int } src - src.
 * @param { string | int } dest - dest.
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
 * @since 20 static
 */
function copyFile(src: string | int, dest: string | int, callback: AsyncCallback<void>): void;

/**
 * Copy file.
 *
 * @param { string | int } src - src.
 * @param { string | int } dest - dest.
 * @param { int } [mode = 0] - mode.
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
 * @since 20 static
 */
function copyFile(
  src: string | int,
  dest: string | int,
  mode: int,
  callback: AsyncCallback<void>
): void;

/**
 * Copy file with sync interface.
 *
 * @param { string | int } src - src.
 * @param { string | int } dest - dest.
 * @param { int } [mode = 0] - mode.
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
 * @since 20 static
 */
function copyFileSync(src: string | int, dest: string | int, mode?: int): void;

/**
 * Create class Stream.
 *
 * @param { string } path - path.
 * @param { string } mode - mode.
 * @returns { Promise<Stream> } return Promise
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
 * @since 20 static
 */
function createStream(path: string, mode: string): Promise<Stream>;

/**
 * Create class Stream.
 *
 * @param { string } path - path.
 * @param { string } mode - mode.
 * @param { AsyncCallback<Stream> } callback - callback.
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
 * @since 20 static
 */
function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * Create class Stream with sync interface.
 *
 * @param { string } path - path.
 * @param { string } mode - mode.
 * @returns { Stream } createStream
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
 * @since 20 static
 */
function createStreamSync(path: string, mode: string): Stream;

/**
 * Create class RandomAccessFile.
 *
 * @param { string | File } file - file path, object.
 * @param { int } [mode = OpenMode.READ_ONLY] - mode.
 * @param { RandomAccessFileOptions } [options] - RandomAccessFile options
 * @returns { Promise<RandomAccessFile> } Returns the RandomAccessFile object which has been created in promise mode.
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
 * @since 20 static
 */
function createRandomAccessFile(file: string | File, mode?: int,
  options?: RandomAccessFileOptions): Promise<RandomAccessFile>;

/**
 * Create class RandomAccessFile.
 *
 * @param { string | File } file - file path, object.
 * @param { AsyncCallback<RandomAccessFile> } callback - The callback is used to return the RandomAccessFile object which has been created.
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
 * @since 20 static
 */
function createRandomAccessFile(file: string | File, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * Create class RandomAccessFile.
 *
 * @param { string | File } file - file path, object.
 * @param { int } [mode = OpenMode.READ_ONLY] - mode.
 * @param { AsyncCallback<RandomAccessFile> } callback - The callback is used to return the RandomAccessFile object which has been created.
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
 * @since 20 static
 */
function createRandomAccessFile(file: string | File, mode: int, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * Create class RandomAccessFile with sync interface.
 *
 * @param { string | File } file - file path, object.
 * @param { int } [mode = OpenMode.READ_ONLY] - mode.
 * @param { RandomAccessFileOptions } [options] - RandomAccessFile options
 * @returns { RandomAccessFile } Returns the RandomAccessFile object which has been created.
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
 * @since 20 static
 */
function createRandomAccessFileSync(file: string | File, mode?: int,
  options?: RandomAccessFileOptions): RandomAccessFile;

/**
 * Create file read stream.
 *
 * @param { string } path - file path.
 * @param { ReadStreamOptions } [options] - Optional parameters for ReadStream.
 * @returns { ReadStream } Returns the ReadStream object which has been created.
 * @throws { BusinessError } 401 - Parameter error
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function createReadStream(path: string, options?: ReadStreamOptions): ReadStream;

/**
 * Create file write stream.
 *
 * @param { string } path - file path.
 * @param { WriteStreamOptions } [options] - Optional parameters for ReadStream.
 * @returns { WriteStream } Returns the WriteStream object which has been created.
 * @throws { BusinessError } 401 - Parameter error
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream;

/**
 * Create watcher to listen for file changes.
 *
 * @param { string } path - path.
 * @param { int } events - listened events.
 * @param { WatchEventListener } listener - Callback to invoke when an event of the specified type occurs.
 * @returns { Watcher } Returns the Watcher object which has been created.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function createWatcher(path: string, events: int, listener: WatchEventListener): Watcher;

/**
 * Duplicate fd to File Object.
 *
 * @param { int } fd - fd.
 * @returns { File } return File
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function dup(fd: int): File;

/**
 * Synchronize file metadata.
 *
 * @param { int } fd - fd.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function fdatasync(fd: int): Promise<void>;

/**
 * Synchronize file metadata.
 *
 * @param { int } fd - fd.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function fdatasync(fd: int, callback: AsyncCallback<void>): void;

/**
 * Synchronize file metadata with sync interface.
 *
 * @param { int } fd - fd.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function fdatasyncSync(fd: int): void;

/**
 * Create class Stream by using fd.
 *
 * @param { int } fd - fd.
 * @param { string } mode - mode.
 * @returns { Promise<Stream> } Returns the Stream object in promise mode.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
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
 * @since 20 static
 */
function fdopenStream(fd: int, mode: string): Promise<Stream>;

/**
 * Create class Stream by using fd.
 *
 * @param { int } fd - fd.
 * @param { string } mode - mode.
 * @param { AsyncCallback<Stream> } callback - The callback is used to return the Stream object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
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
 * @since 20 static
 */
function fdopenStream(fd: int, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * Create class Stream by using fd with sync interface.
 *
 * @param { int } fd - fd.
 * @param { string } mode - mode.
 * @returns { Stream } Returns the Stream object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
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
 * @since 20 static
 */
function fdopenStreamSync(fd: int, mode: string): Stream;

/**
 * Synchronize file.
 *
 * @param { int } fd - fd.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function fsync(fd: int): Promise<void>;

/**
 * Synchronize file.
 *
 * @param { int } fd - fd.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function fsync(fd: int, callback: AsyncCallback<void>): void;

/**
 * Synchronize file with sync interface.
 *
 * @param { int } fd - fd.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function fsyncSync(fd: int): void;

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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
 */
function listFileSync(
  path: string,
  options?: ListFileOptions
): string[];

/**
 *  Reposition file offset.
 *
 * @param { int } fd - file descriptor.
 * @param { long } offset - file offset.
 * @param { WhenceType } [whence = WhenceType.SEEK_SET] - directive whence.
 * @returns { long } Returns the file offset relative to starting position of file.
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900026 - Illegal seek
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function lseek(fd: int, offset: long, whence?: WhenceType): long;

/**
 * Stat link file.
 *
 * @param { string } path - path.
 * @returns { Promise<Stat> } Returns the Stat object in promise mode.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function lstat(path: string): Promise<Stat>;

/**
 * Stat link file.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<Stat> } callback - The callback is used to return the Stat object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function lstat(path: string, callback: AsyncCallback<Stat>): void;

/**
 * Stat link file with sync interface.
 *
 * @param { string } path - path.
 * @returns { Stat } Returns the Stat object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function lstatSync(path: string): Stat;

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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
 */
function mkdirSync(path: string, recursion: boolean): void;

/**
 * Make temp dir.
 *
 * @param { string } prefix - dir prefix.
 * @returns { Promise<string> } Returns the path to the new directory in promise mode.
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
 * @since 20 static
 */
function mkdtemp(prefix: string): Promise<string>;

/**
 * Make temp dir.
 *
 * @param { string } prefix - dir prefix.
 * @param { AsyncCallback<string> } callback - The callback is used to return the path to the new directory.
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
 * @since 20 static
 */
function mkdtemp(prefix: string, callback: AsyncCallback<string>): void;

/**
 * Make temp dir with sync interface.
 *
 * @param { string } prefix - dir prefix.
 * @returns { string } Returns the path to the new directory.
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
 * @since 20 static
 */
function mkdtempSync(prefix: string): string;

/**
 * Move directory.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { int } [mode = 0] - move mode when duplicate file name exists.
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
 * @since 20 static
 */
function moveDir(src: string, dest: string, mode?: int): Promise<void>;

/**
 * Move directory.
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
 * @since 20 static
 */
function moveDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Move directory.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Return the callback function.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function moveDir(src: string, dest: string, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Move directory.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { int } mode - move mode when duplicate file name exists.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
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
 * @since 20 static
 */
function moveDir(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Move directory.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { int } mode - move mode when duplicate file name exists.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Return the callback function.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function moveDir(src: string, dest: string, mode: int, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Move directory with sync interface.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { int } [mode = 0] - move mode when duplicate file name exists.
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
 * @since 20 static
 */
function moveDirSync(src: string, dest: string, mode?: int): void;

/**
 * Move file.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { int } [mode = 0] - move mode when duplicate file name exists.
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
 * @since 20 static
 */
function moveFile(src: string, dest: string, mode?: int): Promise<void>;

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
 * @since 20 static
 */
function moveFile(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Move file.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { int } [mode = 0] - move mode when duplicate file name exists.
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
 * @since 20 static
 */
function moveFile(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Move file with sync interface.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { int } [mode = 0] - move mode when duplicate file name exists.
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
 * @since 20 static
 */
function moveFileSync(src: string, dest: string, mode?: int): void;

/**
 * Open file.
 *
 * @param { string } path - path.
 * @param { int } [mode = OpenMode.READ_ONLY] - mode.
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
 * @since 20 static
 */
function open(path: string, mode?: int): Promise<File>;

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
 * @since 20 static
 */
function open(path: string, callback: AsyncCallback<File>): void;

/**
 * Open file.
 *
 * @param { string } path - path.
 * @param { int } [mode = OpenMode.READ_ONLY] - mode.
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
 * @since 20 static
 */
function open(path: string, mode: int, callback: AsyncCallback<File>): void;

/**
 * Open file with sync interface.
 *
 * @param { string } path - path.
 * @param { int } [mode = OpenMode.READ_ONLY] - mode.
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
 * @since 20 static
 */
function openSync(path: string, mode?: int): File;

/**
 * Read file.
 *
 * @param { int } fd - file descriptor.
 * @param { ArrayBuffer } buffer - buffer.
 * @param { ReadOptions } [options] - options.
 * @returns { Promise<long> } Returns the number of file bytes read to buffer in promise mode.
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
 * @since 20 static
 */
function read(
  fd: int,
  buffer: ArrayBuffer,
  options?: ReadOptions
): Promise<long>;

/**
 * Read file.
 *
 * @param { int } fd - file descriptor.
 * @param { ArrayBuffer } buffer - buffer.
 * @param { AsyncCallback<long> } callback - The callback is used to return the number of file bytes read to buffer.
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
 * @since 20 static
 */
function read(fd: int, buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

/**
 * Read file.
 *
 * @param { int } fd - file descriptor.
 * @param { ArrayBuffer } buffer - buffer.
 * @param { ReadOptions } [options] - options.
 * @param { AsyncCallback<long> } callback - The callback is used to return the number of file bytes read to buffer.
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
 * @since 20 static
 */
function read(
  fd: int,
  buffer: ArrayBuffer,
  options: ReadOptions,
  callback: AsyncCallback<long>
): void;

/**
 * Read file with sync interface.
 *
 * @param { int } fd - file descriptor.
 * @param { ArrayBuffer } buffer - buffer.
 * @param { ReadOptions } [options] - options.
 * @returns { long } Returns the number of file bytes read to buffer.
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
 * @since 20 static
 */
function readSync(
  fd: int,
  buffer: ArrayBuffer,
  options?: ReadOptions
): long;

/**
 * Read content line by line.
 *
 * @param { string } filePath - file path.
 * @param { Options } [options] - optional parameters
 * @returns { Promise<ReaderIterator> } Returns the iterator object in promise mode.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function readLines(filePath: string, options?: Options): Promise<ReaderIterator>;

/**
 * Read content line by line.
 *
 * @param { string } filePath - file path.
 * @param { AsyncCallback<ReaderIterator> } callback - The callback is used to return the iterator object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function readLines(filePath: string, callback: AsyncCallback<ReaderIterator>): void;

/**
 * Read content line by line.
 *
 * @param { string } filePath - file path.
 * @param { Options } options - optional parameters
 * @param { AsyncCallback<ReaderIterator> } callback - The callback is used to return the iterator object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function readLines(filePath: string, options: Options, callback: AsyncCallback<ReaderIterator>): void;

/**
 * Read content line by line with sync interface.
 *
 * @param { string } filePath - file path.
 * @param { Options } [options] - optional parameters
 * @returns { ReaderIterator } Returns the iterator object.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function readLinesSync(filePath: string, options?: Options): ReaderIterator;

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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
 */
function readTextSync(
  filePath: string,
  options?: ReadTextOptions
): string;

/**
 * Rename file.
 *
 * @param { string } oldPath - oldPath.
 * @param { string } newPath - newPath.
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
 * @since 20 static
 */
function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * Rename file.
 *
 * @param { string } oldPath - oldPath.
 * @param { string } newPath - newPath.
 * @param { AsyncCallback<void> } callback - Returns the callback function.
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
 * @since 20 static
 */
function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void;

/**
 * Rename file with sync interface.
 *
 * @param { string } oldPath - oldPath.
 * @param { string } newPath - newPath.
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
 * @since 20 static
 */
function renameSync(oldPath: string, newPath: string): void;

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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
 */
function rmdirSync(path: string): void;

/**
 * Get file information.
 *
 * @param { string | int } file - path or file descriptor.
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
 * @since 20 static
 */
function stat(file: string | int): Promise<Stat>;

/**
 * Get file information.
 *
 * @param { string | int } file - path or file descriptor.
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
 * @since 20 static
 */
function stat(file: string | int, callback: AsyncCallback<Stat>): void;

/**
 * Get file information with sync interface.
 *
 * @param { string | int } file - path or file descriptor.
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
 * @since 20 static
 */
function statSync(file: string | int): Stat;

/**
 * Link file.
 *
 * @param { string } target - target.
 * @param { string } srcPath - srcPath.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function symlink(target: string, srcPath: string): Promise<void>;

/**
 * Link file.
 *
 * @param { string } target - target.
 * @param { string } srcPath - srcPath.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void;

/**
 * Link file with sync interface.
 *
 * @param { string } target - target.
 * @param { string } srcPath - srcPath.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function symlinkSync(target: string, srcPath: string): void;

/**
 * Truncate file.
 *
 * @param { string | int } file - path or file descriptor.
 * @param { long } [len = 0] - len.
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
 * @since 20 static
 */
function truncate(file: string | int, len?: long): Promise<void>;

/**
 * Truncate file.
 *
 * @param { string | int } file - path or file descriptor.
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
 * @since 20 static
 */
function truncate(file: string | int, callback: AsyncCallback<void>): void;

/**
 * Truncate file.
 *
 * @param { string | int } file - path or file descriptor.
 * @param { long } [len = 0] - len.
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
 * @since 20 static
 */
function truncate(file: string | int, len: long, callback: AsyncCallback<void>): void;

/**
 * Truncate file with sync interface.
 *
 * @param { string | int } file - path or file descriptor.
 * @param { long } [len = 0] - len.
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
 * @since 20 static
 */
function truncateSync(file: string | int, len?: long): void;

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
 * @since 20 static
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
 * @since 20 static
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
 * @since 20 static
 */
function unlinkSync(path: string): void;

/**
 * Change file mtime.
 *
 * @param { string } path - path.
 * @param { double } mtime - last modification time
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function utimes(path: string, mtime: double): void;

/**
 * Write file.
 *
 * @param { int } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer.
 * @param { WriteOptions } [options] - options.
 * @returns { Promise<long> } Returns the number of bytes written to the file in promise mode.
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
 * @since 20 static
 */
function write(
  fd: int,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): Promise<long>;

/**
 * Write file.
 *
 * @param { int } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer.
 * @param { AsyncCallback<long> } callback - The callback is used to return the number of bytes written to the file.
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
 * @since 20 static
 */
function write(fd: int, buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

/**
 * Write file.
 *
 * @param { int } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer.
 * @param { WriteOptions } [options] - options.
 * @param { AsyncCallback<long> } callback - The callback is used to return the number of bytes written to the file.
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
 * @since 20 static
 */
function write(
  fd: int,
  buffer: ArrayBuffer | string,
  options: WriteOptions,
  callback: AsyncCallback<long>
): void;

/**
 * Write file with sync interface.
 *
 * @param { int } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer.
 * @param { WriteOptions } [options] - options.
 * @returns { long } Returns the number of bytes written to the file.
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
 * @since 20 static
 */
function writeSync(
  fd: int,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): long;

/**
 * Connect Distributed File System.
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - The networkId of device.
 * @param { DfsListeners } listeners - The listeners of Distributed File System.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 201 - Permission denied.
 * @throws { BusinessError } 401 - The parameter check failed.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900045 - Connection failed.
 * @throws { BusinessError } 13900046 - Software caused connection abort.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function connectDfs(networkId: string, listeners: DfsListeners): Promise<void>;

/**
 * Disconnect Distributed File System.
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - The networkId of device.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 201 - Permission denied.
 * @throws { BusinessError } 401 - The parameter check failed.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13600004 - Unmount failed.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function disconnectDfs(networkId: string): Promise<void>;

/**
 * Set extended attributes information of the file.
 *
 * @param { string } path - path.
 * @param { string } key - the key of extended attribute.
 * @param { string } value - the value of extended attribute.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function setxattr(path: string, key: string, value: string): Promise<void>;

/**
 * Set extended attributes information of the file.
 *
 * @param { string } path - path.
 * @param { string } key - the key of extended attribute.
 * @param { string } value - the value of extended attribute.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */

function setxattrSync(path: string, key: string, value: string): void;

/**
 * Get extended attributes information of the file.
 *
 * @param { string } path - path.
 * @param { string } key - the key of extended attribute.
 * @returns { Promise<string> } The promise returned by the function.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900007 - Arg list too long
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900037 - No data available
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function getxattr(path: string, key: string): Promise<string>;

/**
 * Get extended attributes information of the file with sync interface.
 *
 * @param { string } path - path.
 * @param { string } key - the key of extended attribute.
 * @returns { string } Return the value of extended attribute.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900007 - Arg list too long
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900037 - No data available
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
function getxattrSync(path: string, key: string): string;

/**
 * Progress data of copyFile
 *
 * @typedef Progress
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
interface Progress {
  /**
   * @type { long }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly processedSize: long;

  /**
   * @type { long }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly totalSize: long;
}

/**
 * Task signal.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
class TaskSignal {
  /**
   * Cancel the copy task in progress.
   *
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900043 - No task can be canceled.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  cancel(): void;

  /**
   * Subscribe the cancel event of current task.
   *
   * @returns { Promise<string> } Return the result of the cancel event.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  onCancel(): Promise<string>;
}

/**
 * Get options of copy
 *
 * @typedef CopyOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
interface CopyOptions {
  /**
   * Listener of copy progress
   *
   * @type { ?ProgressListener }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  progressListener?: ProgressListener;
  /**
   * Cancel signal of copy.
   *
   * @type { ?TaskSignal }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  copySignal?: TaskSignal;
}

/**
 * Listener of copy progress.
 *
 * @typedef { function } ProgressListener
 * @param { Progress } progress - indicates the progress data of copyFile
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
type ProgressListener = (progress: Progress) => void;

/**
 * File object.
 *
 * @interface File
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
interface File {

  /**
   * @type { int }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly fd: int;

  /**
   * File path
   * 
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
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
   * @since 20 static
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
   * @since 20 static
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
   * @since 20 static
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
   * @since 20 static
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
   * @since 20 static
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
   * @since 20 static
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
   * @since 20 static
   */
  unlock(): void;
}

/**
 * RandomAccessFile object.
 *
 * @interface RandomAccessFile
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
interface RandomAccessFile {

  /**
   * File descriptor
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly fd: int;

  /**
   * File pointer
   *
   * @type { long }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly filePointer: long;

  /**
   * Set file pointer.
   *
   * @param { long } filePointer - filePointer.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  setFilePointer(filePointer: long): void;

  /**
   * Close randomAccessFile with sync interface.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  close(): void;

  /**
   * Write randomAccessFile.
   *
   * @param { ArrayBuffer | string } buffer - buffer.
   * @param { WriteOptions } [options] - options.
   * @returns { Promise<long> } Returns the number of bytes written to the file in promise mode.
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
   * @since 20 static
   */
  write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<long>;

  /**
   * Write randomAccessFile.
   *
   * @param { ArrayBuffer | string } buffer - buffer.
   * @param { AsyncCallback<long> } callback - The callback is used to return the number of bytes written to the file.
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
   * @since 20 static
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

  /**
   * Write randomAccessFile.
   *
   * @param { ArrayBuffer | string } buffer - buffer.
   * @param { WriteOptions } [options] - options.
   * @param { AsyncCallback<long> } callback - The callback is used to return the number of bytes written to the file.
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
   * @since 20 static
   */
  write(
    buffer: ArrayBuffer | string,
    options: WriteOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Write randomAccessFile with sync interface.
   *
   * @param { ArrayBuffer | string } buffer - buffer.
   * @param { WriteOptions } [options] - options.
   * @returns { long } Returns the number of bytes written to the file.
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
   * @since 20 static
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): long;

  /**
   * Read randomAccessFile.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { ReadOptions } [options] - options.
   * @returns { Promise<long> } Returns the number of file bytes read to buffer in promise mode.
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
   * @since 20 static
   */
  read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<long>;

  /**
   * Read randomAccessFile.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { AsyncCallback<long> } callback - The callback is used to return the number of file bytes read to buffer.
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
   * @since 20 static
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

  /**
  * Read randomAccessFile.
  *
  * @param { ArrayBuffer } buffer - buffer.
  * @param { ReadOptions } [options] - options.
  * @param { AsyncCallback<long> } callback - The callback is used to return the number of file bytes read to buffer.
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
  * @since 20 static
  */
  read(
    buffer: ArrayBuffer,
    options: ReadOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Read randomAccessFile with sync interface.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { ReadOptions } [options] - options.
   * @returns { long } Returns the number of file bytes read to buffer.
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
   * @since 20 static
   */
  readSync(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): long;

  /**
   * Generate read stream from RandomAccessFile object.
   *
   * @returns { ReadStream } Return ReadStream object.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error 
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  getReadStream(): ReadStream;

  /**
   * Generate write stream from RandomAccessFile object.
   *
   * @returns { WriteStream } Return WriteStream object.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error 
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  getWriteStream(): WriteStream;
}

/**
 * File Read Stream.
 * 
 * @extends stream.Readable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
class ReadStream extends stream.Readable {
  /**
    * The ReadStream constructor.
    *
    * @syscap SystemCapability.FileManagement.File.FileIO
    * @since 20 static
    */
  constructor();

  /**
   * The Number of bytes read in the stream.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly bytesRead: long;

  /**
   * The path of the file being read.
   *
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly path: string;

  /**
   * Set the file position indicator for the read stream.
   *
   * @param { long } offset - file offset.
   * @param { WhenceType } [whence = WhenceType.SEEK_SET] - directive whence.
   * @returns { long } Returns the offset relative to starting position of stream.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  seek(offset: long, whence?: WhenceType): long;

  /**
   * Close ReadStream with sync interface.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  close(): void;
}

/**
 * File Write Stream.
 * 
 * @extends stream.Writable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
class WriteStream extends stream.Writable {
  /**
    * The WriteStream constructor.
    *
    * @syscap SystemCapability.FileManagement.File.FileIO
    * @since 20 static
    */
  constructor();

  /**
   * The Number of bytes written in the stream.
   *
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly bytesWritten: long;

  /**
   * The path of the file being written.
   *
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly path: string;

  /**
   * Set the file position indicator for the write stream.
   *
   * @param { long } offset - file offset.
   * @param { WhenceType } [whence = WhenceType.SEEK_SET] - directive whence.
   * @returns { long } Returns the offset relative to starting position of stream.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  seek(offset: long, whence?: WhenceType): long;

  /**
   * Close WriteStream with sync interface.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  close(): void;
}

/**
 * The AtomicFile class provides methods for performing atomic operations on files.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export class AtomicFile {
  /**
   * The AtomicFile constructor.
   * @param { string } path file path.
   * @throws { BusinessError } 401 Parameter error.Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  constructor(path: string);

  /**
   * Get the File object from AtomicFile object.
   * @returns { File } Returns the file object.
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900005 IO error
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  getBaseFile(): File;

  /**
   * Create the file read stream.
   * @returns { ReadStream } Returns the file read stream.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  openRead(): ReadStream;

  /**
   * Read the entire contents of the file.
   * @returns { ArrayBuffer } Returns the ArrayBuffer of the file contents.
   * @throws { BusinessError } 13900005 I/O error
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readFully(): ArrayBuffer;

  /**
   * Create the file write stream.
   * @returns { WriteStream } Returns the file write stream.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  startWrite(): WriteStream;

  /**
   * If the file is written successfully, the file is closed.
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  finishWrite(): void;

  /**
   * If writing to the file fails, the file is rolled back.
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  failWrite(): void;

  /**
   * Delete all file.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  delete(): void;
}

/**
 * Stat object.
 *
 * @interface Stat
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
interface Stat {

  /**
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly ino: bigint;

  /**
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly mode: long;

  /**
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly uid: long;

  /**
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly gid: long;

  /**
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly size: long;

  /**
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly atime: long;

  /**
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly mtime: long;

  /**
   * @type { long }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly ctime: long;

  /**
   * Returns nanosecond of the access time.
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly atimeNs?:bigint;

  /**
   * Returns nanosecond of the modification time.
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly mtimeNs?:bigint;

  /**
   * Returns nanosecond of the change time.
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly ctimeNs?:bigint;

  /**
   *
   * @type { LocationType }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly location: LocationType;

  /**
   * Whether path/fd is block device.
   *
   * @returns { boolean } Returns whether the path/fd point to a block device or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  isBlockDevice(): boolean;

  /**
   * Whether path/fd is character device.
   *
   * @returns { boolean } Returns whether the path/fd point to a character device or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  isCharacterDevice(): boolean;

  /**
   * Whether path/fd is directory.
   *
   * @returns { boolean } Returns whether the path/fd point to a directory or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  isDirectory(): boolean;

  /**
   * Whether path/fd is fifo.
   *
   * @returns { boolean } Returns whether the path/fd point to a fifo file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  isFIFO(): boolean;

  /**
   * Whether path/fd is file.
   *
   * @returns { boolean } Returns whether the path/fd point to a normal file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  isFile(): boolean;

  /**
   * Whether path/fd is socket.
   *
   * @returns { boolean } Returns whether the path/fd point to a socket file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  isSocket(): boolean;

  /**
   * Whether path/fd is symbolic link.
   *
   * @returns { boolean } Returns whether the path/fd point to a symbolic link or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  isSymbolicLink(): boolean;
}

/**
 * Stream object
 *
 * @interface Stream
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
interface Stream {
  /**
   * Close stream.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  close(): Promise<void>;

  /**
   * Close stream.
   *
   * @param { AsyncCallback<void> } callback - Return the callback function.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  close(callback: AsyncCallback<void>): void;

  /**
   * Close stream with sync interface.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  closeSync(): void;

  /**
   * Flush stream.
   *
   * @returns { Promise<void> } The promise returned by the function.
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
   * @since 20 static
   */
  flush(): Promise<void>;

  /**
   * Flush stream.
   *
   * @param { AsyncCallback<void> } callback - Return the callback function.
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
   * @since 20 static
   */
  flush(callback: AsyncCallback<void>): void;

  /**
   * Flush stream with sync interface.
   *
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
   * @since 20 static
   */
  flushSync(): void;

  /**
   * Write stream.
   *
   * @param { ArrayBuffer | string } buffer - buffer.
   * @param { WriteOptions } [options] - options.
   * @returns { Promise<long> } Returns the number of file bytes written to file in promise mode.
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
   * @since 20 static
   */
  write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<long>;

  /**
   * Write stream.
   *
   * @param { ArrayBuffer | string } buffer - buffer.
   * @param { AsyncCallback<long> } callback - The callback is used to return the number of file bytes written to file.
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
   * @since 20 static
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

  /**
   * Write stream.
   *
   * @param { ArrayBuffer | string } buffer - buffer.
   * @param { WriteOptions } [options] - options.
   * @param { AsyncCallback<long> } callback - The callback is used to return the number of file bytes written to file.
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
   * @since 20 static
   */
  write(
    buffer: ArrayBuffer | string,
    options: WriteOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Write stream with sync interface.
   *
   * @param { ArrayBuffer | string } buffer - buffer.
   * @param { WriteOptions } [options] - options.
   * @returns { long } Returns the number of file bytes written to file.
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
   * @since 20 static
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): long;

  /**
   * Read stream.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { ReadOptions } [options] - options.
   * @returns { Promise<long> } Returns the number of file bytes read to buffer in promise mode.
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
   * @since 20 static
   */
  read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<long>;

  /**
   * Read stream.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { AsyncCallback<long> } callback - The callback is used to return the number of file bytes read to buffer.
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
   * @since 20 static
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

  /**
   * Read stream.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { ReadOptions } [options] - options.
   * @param { AsyncCallback<long> } callback - The callback is used to return the number of file bytes read to buffer.
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
   * @since 20 static
   */
  read(
    buffer: ArrayBuffer,
    options: ReadOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Read stream with sync interface.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { ReadOptions } [options] - options.
   * @returns { long } Returns the number of file bytes read to file.
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
   * @since 20 static
   */
  readSync(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): long;
}

/**
 * Watcher object
 *
 * @interface Watcher
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
interface Watcher {
  /**
   * Start watcher.
   *
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900021 - File table overflow
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  start(): void;

  /**
   * Stop watcher.
   *
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900021 - File table overflow
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  stop(): void;
}

/**
 * Enumeration of different types of whence.
 *
 * @enum { int } whence type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
enum WhenceType {
  /**
   * Starting position of the file offset.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  SEEK_SET = 0,

  /**
   * Current position of the file offset.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  SEEK_CUR = 1,

  /**
   * Ending position of the file offset.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  SEEK_END = 2,
}

/**
 * Enumeration of different types of file location.
 *
 * @enum { int } location type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
enum LocationType {
  /**
   * Local file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  LOCAL = 1 << 0,

  /**
   * Cloud file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  CLOUD = 1 << 1,
}

/**
 * Enumeration of different types of access mode.
 *
 * @enum { int } access mode type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
enum AccessModeType {
  /**
   * Check if the file exists.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  EXIST = 0,

  /**
   * Check if the file has write permission.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  WRITE = 2,

  /**
   * Check if the file has read permission.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  READ = 4,

  /**
   * Check if the file has read and write permission.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  READ_WRITE = 6,
}

/**
 * Enumeration of different types of access flag.
 *
 * @enum { int } access flag type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
enum AccessFlagType {
  /**
   * Check if the file is on the local.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  LOCAL = 0,
}

/**
 * ReaderIterator object
 *
 * @interface ReaderIterator
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
interface ReaderIterator {
  /**
   * Get next result from the iterator.
   *
   * @returns { ReaderIteratorResult } Returns the result of reader iterator.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  next(): ReaderIteratorResult;
}

}

/**
 * Implements watcher event listening.
 *
 * @typedef { function } WatchEventListener
 * @param { WatchEvent } event - Event type for the callback to invoke.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export type WatchEventListener = (event: WatchEvent) => void;

/**
 * Event Listening.
 *
 * @interface WatchEvent
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface WatchEvent {
  /**
   * File name.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly fileName: string;

  /**
   * Event happened.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly event: int;

  /**
   * Associated rename event.
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  readonly cookie: int;
}

/**
 * Reader Iterator Result
 *
 * @interface ReaderIteratorResult
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface ReaderIteratorResult {
  /**
   * Whether reader iterator completes the traversal.
   * 
   * @type { boolean }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  done: boolean;

  /**
   * The value of reader iterator.
   * 
   * @type { string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  value: string;
}

/**
 * File filter type
 *
 * @interface Filter
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface Filter {

  /**
   * The suffix of the file.
   * 
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  suffix?: Array<string>;

  /**
   * The display name of the file.
   * 
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  displayName?: Array<string>;

  /**
   * The mimetype of the file.
   * 
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  mimeType?: Array<string>;

  /**
   * The exceeding size of the file.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  fileSizeOver?: long;

  /**
   * The last modification time of the file.
   * 
   * @type { ?double }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  lastModifiedAfter?: double;

  /**
   * Whether to exclude media files.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  excludeMedia?: boolean;
}

/**
 * Conflict Files type
 *
 * @interface ConflictFiles
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface ConflictFiles {

  /**
   * The path of the source file.
   * 
   * @type { string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  srcFile: string;

  /**
   * The path of the destination file.
   * 
   * @type { string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  destFile: string;
}

/**
 * Options type
 *
 * @interface Options
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface Options {
  /**
   * The encoding style.
   * 
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  encoding?: string;
}

/**
 * ReadOptions type
 *
 * @interface ReadOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface ReadOptions {
  /**
   * The offset when reading the file.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  offset?: long;
  /**
   * The length for reading.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  length?: long;
}

/**
 * ReadTextOptions type
 *
 * @extends ReadOptions
 * @interface ReadTextOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface ReadTextOptions extends ReadOptions {
  /**
   * The encoding style when reading text.
   * 
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  encoding?: string;
}

/**
 * WriteOptions type
 *
 * @extends Options
 * @interface WriteOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface WriteOptions extends Options {
  /**
   * The offset when writing the file.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  offset?: long;
  /**
   * The length for writing.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  length?: long;
}

/**
 * ListFileOptions type
 *
 * @interface ListFileOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface ListFileOptions {
  /**
   * Whether to recursively list files.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  recursion?: boolean;

  /**
   * The number of files listed.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  listNum?: long;

  /**
   * The filter of listing files.
   * 
   * @type { ?Filter }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  filter?: Filter;
}

/**
 * RandomAccessFileOptions type
 *
 * @interface RandomAccessFileOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface RandomAccessFileOptions {
  /**
   * The starting position of file offset.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  start?: long;

  /**
   * The ending position of file offset.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  end?: long;
}

/**
 * ReadStreamOptions type
 *
 * @interface ReadStreamOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface ReadStreamOptions {
  /**
   * The starting range for reading a file by stream.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  start?: long;

  /**
   * The ending range for reading a file by stream.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  end?: long;
}

/**
 * WriteStreamOptions type
 *
 * @interface WriteStreamOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface WriteStreamOptions {
  /**
   * The mode for creating write stream.
   * 
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  mode?: int;
  /**
   * The starting range for writing a file by stream.
   * 
   * @type { ?long }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  start?: long;
}

/**
 * The listeners of Distributed File System.
 *
 * @typedef DfsListeners
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
export interface DfsListeners {
  /**
   * The Listener of Distributed File System status
   *
   * @param { string } networkId - The networkId of device.
   * @param { number } status - The status code of Distributed File System.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20 static
   */
  onStatus(networkId: string, status: number): void;
}

/**
 * Task signal.
 * @typedef { fileIo.TaskSignal }
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
type TaskSignal = fileIo.TaskSignal;

/**
 * Watcher object
 * @typedef { fileIo.Watcher }
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
type Watcher = fileIo.Watcher;

/**
 * Watcher object
 * @typedef { fileIo.AtomicFile }
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20 static
 */
type AtomicFile = fileIo.AtomicFile;

export default fileIo;
export {TaskSignal, Watcher, AtomicFile}
