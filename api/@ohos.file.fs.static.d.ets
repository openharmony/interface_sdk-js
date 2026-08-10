'use static';
/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * This module is the core module of Core File Kit. It provides APIs for basic file operations, such as creating,
 * opening, reading, writing, copying, moving, deleting, and querying files and directories in the application sandbox.
 *
 * @file File Management
 * @kit CoreFileKit
 */

import { AsyncCallback } from './@ohos.base';
import stream from './@ohos.util.stream';

/**
 * FileIO
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
declare namespace fileIo {

  /**
   * Enumerates the constants of the **mode** parameter used in **open()**, which specifies the file opening mode, such
   * as **READ_ONLY**, **WRITE_ONLY**, **READ_WRITE**, or **CREATE**.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  namespace OpenMode {
    /**
     * Read only Permission. The value is 0o0.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const READ_ONLY: int;
    /**
     * Write only Permission. The value is 0o1.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const WRITE_ONLY: int;
    /**
     * Write and Read Permission. The value is 0o2.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const READ_WRITE: int;
    /**
     * If not exist, create file. The value is 0o100.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const CREATE: int;
    /**
     * File truncate len 0. The value is 0o1000.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const TRUNC: int;
    /**
     * File append write. The value is 0o2000.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const APPEND: int;
    /**
     * File open in nonblocking mode. The value is 0o4000.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const NONBLOCK: int;
    /**
     * File is Dir. The value is 0o200000.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const DIR: int;
    /**
     * File is not symbolic link. The value is 0o400000.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const NOFOLLOW: int;
    /**
     * SYNC IO. The value is 0o4010000.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const SYNC: int;
    /**
     * UNCACHE IO. The value is 0o10000000000.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 26.0.0 static
     */
    const UNCACHE: int;
  }

/**
 * Checks whether a file or directory exists or has the operation permission. This API uses a promise to return the
 * result.
 *
 * If the read, write, or read and write permission verification fails, the error code 13900012
 * (Permission denied) will be thrown.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AccessModeType } [mode] - Permission on the file or directory to check. If this
 *     parameter is left blank, the system checks whether the file exists.
 * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the file or directory
 *     exists; the value **false** means the opposite.
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
 * @since 23 static
 */
function access(path: string, mode?: AccessModeType): Promise<boolean>;

/**
 * Checks whether a file or directory exists. This API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means the file
 *     exists; the value **false** means the opposite.
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
 * @since 23 static
 */
function access(path: string, callback: AsyncCallback<boolean>): void;

/**
 * Checks whether the file or directory is on the local host or verifies the operation permission. This API uses a
 * promise to return the result.
 *
 * If the read, write, or read and write permission verification fails, the error code 13900012
 * (Permission denied) will be thrown.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AccessModeType } mode - Permission on the file or directory to check.
 * @param { AccessFlagType } flag - Position of the file or directory to check.
 * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the file or directory
 *     is a local one and has the related permission. The value **false** means the file or directory
 *     does not exist or is on the cloud or a distributed device.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
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
 * @since 23 static
 */
function access(path: string, mode: AccessModeType, flag: AccessFlagType): Promise<boolean>;

/**
 * Checks whether a file or directory exists or has the operation permission. This API returns the
 * result synchronously.
 *
 * If the read, write, or read and write permission verification fails, the error code 13900012
 * (Permission denied) will be thrown.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AccessModeType } [mode] - Permission on the file or directory to check. If this
 *     parameter is left blank, the system checks whether the file or directory exists.
 * @returns { boolean } The value **true** means the file or directory exists; the value **false** means the opposite.
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
 * @since 23 static
 */
function accessSync(path: string, mode?: AccessModeType): boolean;

/**
 * Checks whether a file or directory is stored locally or has the operation permission. This API returns the result
 * synchronously.
 *
 * If the read, write, or read and write permission verification fails, the error code 13900012
 * (Permission denied) will be thrown.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { AccessModeType } mode - Permission on the file or directory to check.
 * @param { AccessFlagType } flag - Position of the file or directory to check.
 * @returns { boolean } The value **true** means the file or directory is a local one and has the related permission.
 *     The value **false** means the file or directory does not exist or is on the cloud or a distributed device.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
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
 * @since 23 static
 */
function accessSync(path: string, mode: AccessModeType, flag: AccessFlagType): boolean;

/**
 * Closes a file or directory. After the file or directory is closed, the FD becomes invalid and
 * cannot be used for read /write operations. This API uses a promise to return the result.
 *
 * @param { int | File } file - **File** object or FD of the file to close. After the function is disabled,
 *     the **File** object or FD cannot be used for read and write operations.
 *     If the file object or file descriptor is still used, an error may occur or the operation may fail.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function close(file: int | File): Promise<void>;

/**
 * Closes a file or directory. After the file or directory is closed, the FD becomes invalid and
 * cannot be used for read /write operations. This API uses an asynchronous callback to return the result.
 *
 * @param { int | File } file - **File** object or FD of the file to close. After the function is disabled,
 *     the **File** object or FD cannot be used for read and write operations.
 *     If the file object or file descriptor is still used, an error may occur or the operation may fail.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. When the file or directory is
 *     successfully closed asynchronously, **err** is **undefined**; otherwise, **err** is an error object.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function close(file: int | File, callback: AsyncCallback<void>): void;

/**
 * Closes a file or directory synchronously. After the file or directory is closed, the FD becomes
 * invalid and cannot be used for read/write operations.
 *
 * @param { int | File } file - **File** object or FD of the file to close. After the function is disabled,
 *     the **File** object or FD cannot be used for read and write operations.
 *     If the file object or file descriptor is still used, an error may occur or the operation may fail.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function closeSync(file: int | File): void;

/**
 * Copies a file or directory. This API uses a promise to return the result.
 *
 * File copy across devices is supported. This API forcibly overwrites the file or directory. The
 * input parameter can be the URI of the file or directory.
 *
 * A maximum of 10 cross-device copy tasks are allowed at the same time, and the number of files
 * to be copied at a time cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { CopyOptions } [options] - Callback invoked to provide the copy progress. If this parameter is not set, the
 *     callback will not be invoked.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
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
 * @since 23 static
 */
function copy(srcUri: string, destUri: string, options?: CopyOptions): Promise<void>;

/**
 * Copies a file or directory. This API uses an asynchronous callback to return the result.
 *
 * File copy across devices is supported. This API forcibly overwrites the file or directory. The
 * input parameter can be the URI of the file or directory.
 *
 * A maximum of 10 cross-device copy tasks are allowed at the same time, and the number of files
 * to be copied at a time cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the copy is successful, **err** is
 *     **undefined**. Otherwise, **err** is an error object.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
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
 * @since 23 static
 */
function copy(srcUri: string, destUri: string, callback: AsyncCallback<void>): void;

/**
 * Copies a file or directory. This API uses an asynchronous callback to return the result.
 *
 * File copy across devices is supported. This API forcibly overwrites the file or directory. The
 * input parameter can be the URI of the file or directory.
 *
 * A maximum of 10 cross-device copy tasks are allowed at the same time, and the number of files
 * to be copied at a time cannot exceed 500.
 *
 * @param { string } srcUri - URI of the file or directory to copy.
 * @param { string } destUri - URI of the destination file or directory.
 * @param { CopyOptions } options - Callback used to return the copy progress.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the copy is successful, **err** is
 *     **undefined**. Otherwise, **err** is an error object.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
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
 * @since 23 static
 */
function copy(srcUri: string, destUri: string, options: CopyOptions, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory and its content to the destination path. You can set the conflict
 * handling mode. This API uses a promise to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } [mode] - Copy mode. The default value is **0**.
 *     <br>- **0**: Throw an exception if a file conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be copied to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The **data** attribute in the error returned provides information about
 *     the conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format.
 *     <br>- **1**: Forcibly overwrite the files with the same name in the destination directory.
 *     <br> When the destination directory contains a directory with the same name as the source directory, the files
 *     with the same names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function copyDir(src: string, dest: string, mode?: int): Promise<void>;

/**
 * Copies the source directory and its content to the destination path. This API uses an
 * asynchronous callback to return the result.
 *
 * An exception will be thrown if the destination directory contains a directory with the same name as the source
 * directory and there are files with the same name in the conflicting directory. All the non-conflicting files in the
 * source directory will be copied to the destination directory, and the non-conflicting files in the destination
 * directory will be retained.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     copied, **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function copyDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory to the destination path. This API uses an asynchronous callback to return the result.
 *
 * An exception will be thrown if the destination directory contains a directory with the same name as the source
 * directory and there are files with the same name in the conflicting directory. All the non-conflicting files in
 * the source directory will be copied to the destination directory, and the non-conflicting files in the
 * destination directory will be retained. The data attribute in the error returned provides information about the
 * conflicting files in the Array<ConflictFiles> format.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDirWithConflictFiles(src: string, dest: string, callback: AsyncCallback<void,
  Array<ConflictFiles>>): void;

/**
 * Copies the source directory and its content to the destination path. You can set the conflict
 * handling mode. This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } mode - Copy mode.
 *     <br>- **0**: Throw an exception if a file conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be copied to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained.
 *     <br>- **1**: Forcibly overwrite the files with the same name in the destination directory.
 *     <br> When the destination directory contains a directory with the same name as the source directory, the files
 *     with the same names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     copied, **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function copyDir(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Copies the source directory to the destination directory. You can set the copy mode.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } mode - Copy mode. The default value is **0**.
 *     <br>- **0**: Throw an exception if a file conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be copied to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The **data** attribute in the error returned provides information about
 *     the conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format.
 *     <br>- **1**: Forcibly overwrite the files with the same name in the destination directory.
 *     <br> When the destination directory contains a directory with the same name as the source directory, the files
 *     with the same names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDirWithConflictFiles(src: string, dest: string, mode: int,
  callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Copies the source directory to the destination path. This API returns the result synchronously.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } [mode] - Copy mode. The default value is **0**.
 *     <br>- **0**: Throw an exception if a file conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be copied to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The **data** attribute in the error returned provides information about
 *     the conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format.
 *     <br>- **1**: Forcibly overwrite the files with the same name in the destination directory.
 *     <br> When the destination directory contains a directory with the same name as the source directory, the files
 *     with the same names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
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
 * @since 23 static
 */
function copyDirSync(src: string, dest: string, mode?: int): void;

/**
 * Copies a file. This API uses a promise to return the result.
 *
 * @param { string | int } src - Path or FD of the file to copy.
 * @param { string | int } dest - Destination path of the file or FD of the file created.
 * @param { int } [mode] - Whether to overwrite the file with the same name in the destination directory. The default
 *     value is **0**, which is the only value supported.
 *     <br>**0**: Overwrite the file with the same name completely and truncate the part that is not overwritten.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function copyFile(src: string | int, dest: string | int, mode?: int): Promise<void>;

/**
 * Copies a file. This API overwrites the file with the same name in the destination directory and truncates the part
 * that is not overwritten. This API uses an asynchronous callback to return the result.
 *
 * @param { string | int } src - Path or FD of the file to copy.
 * @param { string | int } dest - Destination path of the file or FD of the file created.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is successfully copied,
 *     **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function copyFile(src: string | int, dest: string | int, callback: AsyncCallback<void>): void;

/**
 * Copies a file with the specified mode. This API uses an asynchronous callback to return the result.
 *
 * @param { string | int } src - Path or FD of the file to copy.
 * @param { string | int } dest - Destination path of the file or FD of the file created.
 * @param { int } [mode] - Whether to overwrite the file with the same name in the destination directory. The default
 *     value is **0**, which is the only value supported.
 *     <br>**0**: Overwrite the file with the same name completely and truncate the part that is not overwritten.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is successfully copied,
 *     **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function copyFile(
  src: string | int,
  dest: string | int,
  mode: int,
  callback: AsyncCallback<void>
): void;

/**
 * Copies a file. This API returns the result synchronously.
 *
 * @param { string | int } src - Path or FD of the file to copy.
 * @param { string | int } dest - Destination path of the file or FD of the file created.
 * @param { int } [mode] - Whether to overwrite the file with the same name in the destination directory. The default
 *     value is **0**, which is the only value supported.
 *     <br>**0**: Overwrite the file with the same name completely and truncate the part that is not overwritten.
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
 * @since 23 static
 */
function copyFileSync(src: string | int, dest: string | int, mode?: int): void;

/**
 * Creates a stream based on a file path. This API uses a promise to return the result. To close the stream, use
 * **close()** of [Stream]{@link fileIo.Stream}.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.
 *     <br>- **r+**: Open a file for both reading and writing. The file must exist.
 *     <br>- **w**: Open a file for writing. If the file exists, clear its content. If the file
 *     does not exist, create a file.
 *     <br>- **w+**: Open a file for both reading and writing. If the file exists, clear its content. If the file does
 *     not exist, create a file.
 *     <br>- **a**: Open a file in append mode for writing at the end of the file. If the file
 *     does not exist, create a file.
 *     If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>- **a+**: Open a file in append mode for reading or updating at the end of the file. If the file does not
 *     exist, create a file. If the file exists, write data to the end of the file (the original
 *     content of the file is reserved).
 * @returns { Promise<Stream> } Promise used to return the stream result.
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
 * @since 23 static
 */
function createStream(path: string, mode: string): Promise<Stream>;

/**
 * Creates a stream based on a file path. To close the stream, use **close()** of [Stream]{@link fileIo.Stream}. This
 * API uses an asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.
 *     <br>- **r+**: Open a file for both reading and writing. The file must exist.
 *     <br>- **w**: Open a file for writing. If the file exists, clear its content. If the file
 *     does not exist, create a file.
 *     <br>- **w+**: Open a file for both reading and writing. If the file exists, clear its content. If the file does
 *     not exist, create a file.
 *     <br>- **a**: Open a file in append mode for writing at the end of the file. If the file
 *     does not exist, create a file.
 *     If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>- **a+**: Open a file in append mode for reading or updating at the end of the file. If the file does not
 *     exist, create a file. If the file exists, write data to the end of the file (the original
 *     content of the file is reserved).
 * @param { AsyncCallback<Stream> } callback - Callback used to return the **Stream** object.
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
 * @since 23 static
 */
function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * Creates a stream based on a file path. This API returns the result synchronously. To close the stream, use
 * **close()** of [Stream]{@link fileIo.Stream}.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.
 *     <br>- **r+**: Open a file for both reading and writing. The file must exist.
 *     <br>- **w**: Open a file for writing. If the file exists, clear its content. If the file
 *     does not exist, create a file.
 *     <br>- **w+**: Open a file for both reading and writing. If the file exists, clear its content. If the file does
 *     not exist, create a file.
 *     <br>- **a**: Open a file in append mode for writing at the end of the file. If the file
 *     does not exist, create a file.
 *     If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>- **a+**: Open a file in append mode for reading or updating at the end of the file. If the file does not
 *     exist, create a file. If the file exists, write data to the end of the file (the original
 *     content of the file is reserved).
 * @returns { Stream } File stream.
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
 * @since 23 static
 */
function createStreamSync(path: string, mode: string): Stream;

/**
 * Creates a **RandomAccessFile** instance based on a file path or file object. This API uses a promise to return the
 * result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { int } [mode] - [OpenMode]{@link fileIo.OpenMode} for creating the **RandomAccessFile** instance. This
 *     parameter is valid only when the application sandbox path of the file is passed in. One of
 *     the following options must be specified:
 *     <br>- **OpenMode.READ_ONLY(0o0)**: Create the file in read-only mode. This is the default value.
 *     <br>- **OpenMode.WRITE_ONLY(0o1)**: Create the file in write-only mode.
 *     <br>- **OpenMode.READ_WRITE(0o2)**: Create the file in read/write mode.
 *     <br>You can also specify the following options, separated by a bitwise OR operator (|). By
 *     default, no additional options are given.
 *     <br>- **OpenMode.CREATE(0o100)**: If the file does not exist, create it.
 *     <br>- **OpenMode.TRUNC(0o1000)**: If the **RandomAccessFile** object already exists and is
 *     created in write mode, truncate the file length to 0.
 *     <br>- **OpenMode.APPEND(0o2000)**: Create the file in append mode. New data will be added to the end of the
 *     **RandomAccessFile** object.
 *     <br>- **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special
 *     file, or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>- **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception. The write
 *     permission is not allowed.
 *     <br>- **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.
 *     <br>- **OpenMode.SYNC(0o4010000)**: Create a **RandomAccessFile** instance in synchronous I/O mode.
 * @param { RandomAccessFileOptions } [options] - The options are as follows:
 *     <br>- **start** (number): start position to read data, in bytes. This parameter is
 *     optional. By default, data is read from the current position.
 *     <br>- **end** (number): end position to read data, in bytes. This parameter is optional. The
 *     default value is the end of the file.
 *     <br>This parameter takes effect only for file stream objects obtained by
 *     [getreadstream]{@link fileIo.RandomAccessFile.getReadStream} and
 *     [getwritestream]{@link fileIo.RandomAccessFile.getWriteStream}.
 * @returns { Promise<RandomAccessFile> } Promise used to return the **RandomAccessFile** object.
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
 * @since 23 static
 */
function createRandomAccessFile(file: string | File, mode?: int,
  options?: RandomAccessFileOptions): Promise<RandomAccessFile>;

/**
 * Creates a **RandomAccessFile** instance in read-only mode based on a file path or file object. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { AsyncCallback<RandomAccessFile> } callback - Callback used to return the **RandomAccessFile** object.
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
 * @since 23 static
 */
function createRandomAccessFile(file: string | File, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * Creates a **RandomAccessFile** instance based on a file path or file object. This API uses an asynchronous callback
 * to return the result.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { int } [mode] - [OpenMode]{@link fileIo.OpenMode} for creating the **RandomAccessFile** instance. This
 *     parameter is valid only when the application sandbox path of the file is passed in. One of
 *     the following options must be specified:
 *     <br>- **OpenMode.READ_ONLY(0o0)**: Create the file in read-only mode. This is the default value.
 *     <br>- **OpenMode.WRITE_ONLY(0o1)**: Create the file in write-only mode.
 *     <br>- **OpenMode.READ_WRITE(0o2)**: Create the file in read/write mode.
 *     <br>You can also specify the following options, separated by a bitwise OR operator (|). By
 *     default, no additional options are given.
 *     <br>- **OpenMode.CREATE(0o100)**: If the file does not exist, create it.
 *     <br>- **OpenMode.TRUNC(0o1000)**: If the **RandomAccessFile** object already exists and is
 *     created in write mode, truncate the file length to 0.
 *     <br>- **OpenMode.APPEND(0o2000)**: Create the file in append mode. New data will be added to the end of the
 *     **RandomAccessFile** object.
 *     <br>- **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special
 *     file, or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>- **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception. The write
 *     permission is not allowed.
 *     <br>- **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.
 *     <br>- **OpenMode.SYNC(0o4010000)**: Create a **RandomAccessFile** instance in synchronous I/O mode.
 * @param { AsyncCallback<RandomAccessFile> } callback - Callback used to return the **RandomAccessFile** object.
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
 * @since 23 static
 */
function createRandomAccessFile(file: string | File, mode: int, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * Creates a **RandomAccessFile** instance based on a file path or file object.
 *
 * @param { string | File } file - Application sandbox path of the file or an opened file object.
 * @param { int } [mode] - [OpenMode]{@link fileIo.OpenMode} for creating the **RandomAccessFile** instance. This
 *     parameter is valid only when the application sandbox path of the file is passed in. One of
 *     the following options must be specified:
 *     <br>- **OpenMode.READ_ONLY(0o0)**: Create the file in read-only mode. This is the default value.
 *     <br>- **OpenMode.WRITE_ONLY(0o1)**: Create the file in write-only mode.
 *     <br>- **OpenMode.READ_WRITE(0o2)**: Create the file in read/write mode.
 *     <br>You can also specify the following options, separated by a bitwise OR operator (|). By
 *     default, no additional options are given.
 *     <br>- **OpenMode.CREATE(0o100)**: If the file does not exist, create it.
 *     <br>- **OpenMode.TRUNC(0o1000)**: If the **RandomAccessFile** object already exists and is
 *     created in write mode, truncate the file length to 0.
 *     <br>- **OpenMode.APPEND(0o2000)**: Create the file in append mode. New data will be added to the end of the
 *     **RandomAccessFile** object.
 *     <br>- **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special
 *     file, or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>- **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception. The write
 *     permission is not allowed.
 *     <br>- **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.
 *     <br>- **OpenMode.SYNC(0o4010000)**: Create a **RandomAccessFile** instance in synchronous I/O mode.
 * @param { RandomAccessFileOptions } [options] - The options are as follows:
 *     <br>- **start** (number): start position to read data, in bytes. This parameter is
 *     optional. By default, data is read from the current position.
 *     <br>- **end** (number): end position to read data, in bytes. This parameter is optional. The
 *     default value is the end of the file.
 *     <br>This parameter takes effect only for file stream objects obtained by
 *     [getreadstream]{@link fileIo.RandomAccessFile.getReadStream} and
 *     [getwritestream]{@link fileIo.RandomAccessFile.getWriteStream}.
 * @returns { RandomAccessFile } **RandomAccessFile** instance created.
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
 * @since 23 static
 */
function createRandomAccessFileSync(file: string | File, mode?: int,
  options?: RandomAccessFileOptions): RandomAccessFile;

/**
 * Creates a readable stream. This API returns the result synchronously.
 *
 * @param { string } path - Path of the file.
 * @param { ReadStreamOptions } [options] - The options are as follows:
 *     <br>- **start** (number): start position to read data, in bytes. This parameter is
 *     optional. By default, data is read from the current position.
 *     <br>- **end** (number): end position to read data, in bytes. This parameter is optional. The
 *     default value is the end of the file.
 * @returns { ReadStream } **ReadStream** instance obtained.
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
 * @since 23 static
 */
function createReadStream(path: string, options?: ReadStreamOptions): ReadStream;

/**
 * Creates a writeable stream. This API returns the result synchronously.
 *
 * @param { string } path - Path of the file.
 * @param { WriteStreamOptions } [options] - The options are as follows:
 *     <br>- **start** (number): start position to write the data, in bytes. This parameter is optional. By default,
 *     data is written from the current position.
 *     <br>- **mode** (number): [OpenMode]{@link fileIo.OpenMode} for creating the writeable stream. This parameter is
 *     optional. The default value is the write-only mode.
 * @returns { WriteStream } **WriteStream** instance obtained.
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
 * @since 23 static
 */
function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream;

/**
 * Creates a **Watcher** object to listen for file or directory changes such as creating, deleting, and modifying.
 *
 * @param { string } path - Application sandbox path of the file or director.
 * @param { int } events - Events to observe. Multiple events can be separated by vertical bars (|).
 *     <br>- **0x1: IN_ACCESS**: A file is accessed.
 *     <br>- **0x2: IN_MODIFY**: The file content is modified.
 *     <br>- **0x4: IN_ATTRIB**: The file metadata is modified.
 *     <br>- **0x8: IN_CLOSE_WRITE**: A file is opened, written with data, and then closed.
 *     <br>- **0x10: IN_CLOSE_NOWRITE**: A file or directory is opened and then closed without data written.
 *     <br>- **0x20: IN_OPEN**: A file or directory is opened.
 *     <br>- **0x40: IN_MOVED_FROM**: A file in the observed directory is moved.
 *     <br>- **0x80: IN_MOVED_TO**: A file is moved to the observed directory.
 *     <br>- **0x100: IN_CREATE**: A file or directory is created in the observed directory.
 *     <br>- **0x200: IN_DELETE**: A file or directory is deleted from the observed directory.
 *     <br>- **0x400: IN_DELETE_SELF**: The observed directory is deleted. After the directory is
 *     deleted, the listening stops.
 *     <br>- **0x800: IN_MOVE_SELF**: The observed file or directory is moved. After the file or
 *     directory is moved, the listening continues.
 *     <br>- **0xfff: IN_ALL_EVENTS**: All events.
 * @param { WatchEventListener } listener - Callback invoked when an observed event occurs. The
 *     callback will be invoked each time an observed event occurs.
 * @returns { Watcher } **Watcher** object created.
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
 * @since 23 static
 */
function createWatcher(path: string, events: int, listener: WatchEventListener): Watcher;

/**
 * Duplicates the file descriptor and returns the corresponding **File** object.
 *
 * @param { int } fd - File descriptor.
 * @returns { File } File object opened.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function dup(fd: int): File;

/**
 * Synchronizes data in a file. This API uses a promise to return the result.
 *
 * @param { int } fd - FD of the file.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdatasync(fd: int): Promise<void>;

/**
 * Synchronizes data in a file. This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file data is successfully
 *     synchronized, **err** is **undefined**. Otherwise, **err** is an error object.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdatasync(fd: int, callback: AsyncCallback<void>): void;

/**
 * Synchronizes the data of a file. This API returns the result synchronously.
 *
 * @param { int } fd - FD of the file.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fdatasyncSync(fd: int): void;

/**
 * Opens a file stream based on the file descriptor. This API uses a promise to return the result.
 * To close the stream, use **close()** of [Stream]{@link fileIo.Stream}.
 *
 * @param { int } fd - FD of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.
 *     <br>- **r+**: Open a file for both reading and writing. The file must exist.
 *     <br>- **w**: Open a file for writing. If the file exists, clear its content. If the file
 *     does not exist, create a file.
 *     <br>- **w+**: Open a file for both reading and writing. If the file exists, clear its content. If the file does
 *     not exist, create a file.
 *     <br>- **a**: Open a file in append mode for writing at the end of the file. If the file
 *     does not exist, create a file.
 *     If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>- **a+**: Open a file in append mode for reading or updating at the end of the file. If the file does not
 *     exist, create a file. If the file exists, write data to the end of the file (the original
 *     content of the file is reserved).
 * @returns { Promise<Stream> } Promise used to return the stream result.
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
 * @since 23 static
 */
function fdopenStream(fd: int, mode: string): Promise<Stream>;

/**
 * Opens a stream based on the file descriptor. To close the stream, use **close()** of [Stream]{@link fileIo.Stream}.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.
 *     <br>- **r+**: Open a file for both reading and writing. The file must exist.
 *     <br>- **w**: Open a file for writing. If the file exists, clear its content. If the file
 *     does not exist, create a file.
 *     <br>- **w+**: Open a file for both reading and writing. If the file exists, clear its content. If the file does
 *     not exist, create a file.
 *     <br>- **a**: Open a file in append mode for writing at the end of the file. If the file
 *     does not exist, create a file.
 *     If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>- **a+**: Open a file in append mode for reading or updating at the end of the file. If the file does not
 *     exist, create a file. If the file exists, write data to the end of the file (the original
 *     content of the file is reserved).
 * @param { AsyncCallback<Stream> } callback - Callback used to return the **Stream** object.
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
 * @since 23 static
 */
function fdopenStream(fd: int, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * Opens a stream based on an FD. This API returns the result synchronously. To close the stream, use **close()** of
 * [Stream]{@link fileIo.Stream}.
 *
 * @param { int } fd - FD of the file.
 * @param { string } mode - - **r**: Open a file for reading. The file must exist.
 *     <br>- **r+**: Open a file for both reading and writing. The file must exist.
 *     <br>- **w**: Open a file for writing. If the file exists, clear its content. If the file
 *     does not exist, create a file.
 *     <br>- **w+**: Open a file for both reading and writing. If the file exists, clear its content. If the file does
 *     not exist, create a file.
 *     <br>- **a**: Open a file in append mode for writing at the end of the file. If the file
 *     does not exist, create a file.
 *     If the file exists, write data to the end of the file (the original content of the file is reserved).
 *     <br>- **a+**: Open a file in append mode for reading or updating at the end of the file. If the file does not
 *     exist, create a file. If the file exists, write data to the end of the file (the original
 *     content of the file is reserved).
 * @returns { Stream } File stream.
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
 * @since 23 static
 */
function fdopenStreamSync(fd: int, mode: string): Stream;

/**
 * Synchronizes the cached data of a file to storage. This API uses a promise to return the result.
 *
 * @param { int } fd - FD of the file.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fsync(fd: int): Promise<void>;

/**
 * Synchronizes the cached data of a file to storage. This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the cache data
 *     of the file system is
 *     successfully written to the disk, **err** is **undefined**. Otherwise, **err** is an error object.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fsync(fd: int, callback: AsyncCallback<void>): void;

/**
 * Synchronizes the cached data of a file to storage. This API returns the result synchronously.
 *
 * @param { int } fd - FD of the file.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function fsyncSync(fd: int): void;

/**
 * Lists the names of all files and directories in the current directory. A file name array is returned, which can be
 * filtered by file name or file name extension. This API uses a promise to return the result.
 *
 * This API supports recursively listing the relative paths of all files by setting **recursion** in
 * **ListFileOptions**. The relative path starts with a slash (/).
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileOptions } [options] - Options for filtering files. The files are not filtered by default.
 * @returns { Promise<string[]> } Promise used to return the file name array, which is encoded in UTF-8 format by
 *     default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function listFile(
  path: string,
  options?: ListFileOptions
): Promise<string[]>;

/**
 * Lists the names of all files and directories in the current path. A file name array is returned. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<string[]> } callback - Callback used to return the file name array,
 *     which is encoded in UTF-8 format by default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function listFile(path: string, callback: AsyncCallback<string[]>): void;

/**
 * Lists the names of all files and directories in the current directory. A file name array is returned, which can be
 * filtered by file name or file name extension. This API uses an asynchronous callback to return the result.
 *
 * This API supports recursively listing the relative paths of all files by setting **recursion** in
 * **ListFileOptions**. The relative path starts with a slash (/).
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileOptions } [options] - Options for filtering files.
 * @param { AsyncCallback<string[]> } callback - Callback used to return the file name array,
 *     which is encoded in UTF-8 format by default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function listFile(
  path: string,
  options: ListFileOptions,
  callback: AsyncCallback<string[]>
): void;

/**
 * Lists the names of all files and directories in the current directory synchronously. A file name array is returned,
 * which can be filtered by file name or file name extension.
 *
 * This API supports recursively listing the relative paths of all files by setting **recursion** in
 * **ListFileOptions**. The relative path starts with a slash (/).
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileOptions } [options] - Options for filtering files. The files are not filtered by default.
 * @returns { string[] } File name array, which is encoded in UTF-8 format by default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function listFileSync(
  path: string,
  options?: ListFileOptions
): string[];

/**
 * Lists all files in a directory. This API supports recursive listing of files and file filtering. This API uses a
 * promise to return the result.
 *
 * You can configure the **recursion** parameter in **options** to recursively list the relative
 * paths of all files. The relative path starts with a slash (/).
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileExtOptions } [options] - Options for listing files. The default value is empty, indicating no
 *     recursive listing of files or file filtering and no limit on the number of files to be listed.
 * @returns { Promise<string[]> } Promise used to return the files names listed.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
function listFileExt(
  path: string,
  options?: ListFileExtOptions
): Promise<string[]>;

/**
 * Lists all files in a directory. This API supports recursive listing of files and file filtering and returns the
 * result synchronously.
 *
 * You can configure the **recursion** parameter in **options** to recursively list the relative
 * paths of all files. The relative path starts with a slash (/).
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { ListFileExtOptions } [options] - Options for listing files. The default value is empty, indicating no
 *     recursive listing of files or file filtering and no limit on the number of files to be listed.
 * @returns { string[] } File names listed.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
function listFileExtSync(
  path: string,
  options?: ListFileExtOptions
): string[];

/**
 * Adjusts the position of the file offset pointer.
 *
 * @param { int } fd - File descriptor.
 * @param { long } offset - Relative offset, in bytes.
 * @param { WhenceType } [whence] - Where to start the offset. If this parameter is not specified, the file start
 *     position is used by default.
 * @returns { long } Position of the current offset as measured from the beginning of the file, in bytes.
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900026 - Illegal seek
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function lseek(fd: int, offset: long, whence?: WhenceType): long;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory. The attributes of the
 * symbolic link are returned, instead of the attributes of the target file. This API uses a promise to return the
 * result.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 *     <br>**Note**: URIs can be passed since API version 22.
 * @returns { Promise<Stat> } Promise used to return the **Stat** object. For details, see **Stat**.
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
 * @since 23 static
 */
function lstat(path: string): Promise<Stat>;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory. The attributes of the
 * symbolic link are returned, instead of the attributes of the target file. This API uses an asynchronous callback to
 * return the result.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 *     <br>**Note**: URIs can be passed since API version 22.
 * @param { AsyncCallback<Stat> } callback - Callback used to return the **Stat** object.
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
 * @since 23 static
 */
function lstat(path: string, callback: AsyncCallback<Stat>): void;

/**
 * Obtains information about a symbolic link that is used to refer to a file or directory
 * synchronously. The attributes of the symbolic link are returned, instead of the attributes of the target file.
 *
 * @param { string } path - Application sandbox path or URI of the file.
 *     <br>**Note**: URIs can be passed since API version 22.
 * @returns { Stat } File information obtained.
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
 * @since 23 static
 */
function lstatSync(path: string): Stat;

/**
 * Creates a single-level directory. If the parent directory does not exist, an error is reported. This API uses a
 * promise to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function mkdir(path: string): Promise<void>;

/**
 * Creates a directory. This API uses a promise to return the result. The value **true** means to create a directory
 * recursively.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively.
 *     <br> The value **true** means to create a directory recursively. The value **false** means to create a single-
 *     level directory.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function mkdir(path: string, recursion: boolean): Promise<void>;

/**
 * Creates a single-level directory. If the parent directory does not exist, an error is reported. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     created, **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function mkdir(path: string, callback: AsyncCallback<void>): void;

/**
 * Creates a directory. If **recursion** is set to **true**, a directory is created recursively. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively.
 *     <br> The value **true** means to create a directory recursively. The value **false** means to create a single-
 *     level directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     created, **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function mkdir(path: string, recursion: boolean, callback: AsyncCallback<void>): void;

/**
 * Creates a single-level directory synchronously. If the parent directory does not exist, an error is reported.
 *
 * @param { string } path - Application sandbox path of the directory.
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
 * @since 23 static
 */
function mkdirSync(path: string): void;

/**
 * Creates a directory. This API returns the result synchronously. The value **true** means to create a directory
 * recursively.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { boolean } recursion - Whether to create a directory recursively.
 *     <br> The value **true** means to create a directory recursively. The value **false** means to create a single-
 *     level directory.
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
 * @since 23 static
 */
function mkdirSync(path: string, recursion: boolean): void;

/**
 * Create a temporary directory. This API uses a promise to return the result.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to
 *     create a unique temporary directory.
 * @returns { Promise<string> } Promise used to return the unique directory generated.
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
 * @since 23 static
 */
function mkdtemp(prefix: string): Promise<string>;

/**
 * Create a temporary directory. This API uses an asynchronous callback to return the result.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to
 *     create a unique temporary directory.
 * @param { AsyncCallback<string> } callback - Callback used to return the temporary directory.
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
 * @since 23 static
 */
function mkdtemp(prefix: string, callback: AsyncCallback<string>): void;

/**
 * Creates a temporary directory. This API returns the result synchronously.
 *
 * @param { string } prefix - String to be replaced with six randomly generated characters to
 *     create a unique temporary directory.
 * @returns { string } Unique directory generated.
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
 * @since 23 static
 */
function mkdtempSync(prefix: string): string;

/**
 * Creates a file mapping object based on a file descriptor or file object for efficient read and
 * write access to files. This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > 1. Memory mapping can be performed only for regular files. Non-regular files, such as
 * > pipeline, socket, and device
 * > files, are not supported. You can use [statSync()]{@link fileIo.statSync} to obtain file attributes and then call
 * > [Stat.isFile()]{@link fileIo.Stat.isFile} to check whether the file is a regular file.
 * >
 * > 2. If the mapping range exceeds the raw file size and the write permission is granted for the file, the mapping
 * > file size will be automatically expanded.
 * >
 * > 3. For files from external storage or network files, the establishment of mappings and access
 * > to the mapped memory
 * > are not guaranteed due to differences in the underlying file system. This may cause the application to terminate
 * > unexpectedly. You are advised to use other file access APIs such as [read]{@link fileIo.read},
 * > [write]{@link fileIo.write}, or [Stream]{@link fileIo.Stream} in this scenario.
 *
 * @param { int | File } file - **File** object or FD of the file to close.
 * @param { MappingMode } mode - Option to create a file memory-mapped object. You must specify one of the following
 *     options:
 *     <br>- **MappingMode.READ_ONLY(0)**: read-only mode. The file mapping area is not writable.
 *     An exception is thrown when the file mapping area is modified.
 *     <br>- **MappingMode.READ_WRITE(1)**: read/write mode. The modification is written to the file mapping area and
 *     then synchronized to the file by the operating system (non-real-time).
 *     <br>- **MappingMode.PRIVATE(2)**: private mode. It is a copy-on-write mapping mechanism. Modifications to the
 *     mapping area are visible only to the current process and do not affect the raw file.
 * @param { long } offset - Start position of the file mapping area, in bytes.
 * @param { int } size - Size of the file mapping area, in bytes. The value ranges from 0 to **INT32_MAX**.
 * @returns { Promise<FileMapping> } Promise used to return the file mapping object. Initial state of the returned
 *     object: The value of **position** is **0**, and the values of **limit** and **capacity** are equal to the value
 *     of **size**.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900050 - Internal resource error
 * @throws { BusinessError } 13900056 - Mmap does not support mapping this file
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
function mmap(file: int | File, mode: MappingMode, offset: long, size: int): Promise<FileMapping>;

/**
 * Creates a file mapping object synchronously based on a file descriptor or file object for efficient read and write
 * access to files.
 *
 * > **NOTE**
 * >
 * > 1. Memory mapping can be performed only for regular files. Non-regular files, such as
 * > pipeline, socket, and device
 * > files, are not supported. You can use [statSync()]{@link fileIo.statSync} to obtain file attributes and then call
 * > [Stat.isFile()]{@link fileIo.Stat.isFile} to check whether the file is a regular file.
 * >
 * > 2. If the mapping range exceeds the raw file size and the write permission is granted for the file, the mapping
 * > file size will be automatically expanded.
 * >
 * > 3. For files from external storage or network files, the establishment of mappings and access
 * > to the mapped memory
 * > are not guaranteed due to differences in the underlying file system. This may cause the application to terminate
 * > unexpectedly. You are advised to use other file access APIs such as [read]{@link fileIo.read},
 * > [write]{@link fileIo.write}, or [Stream]{@link fileIo.Stream} in this scenario.
 *
 * @param { int | File } file - **File** object or FD of the file to close.
 * @param { MappingMode } mode - Option to create a file memory-mapped object. You must specify one of the following
 *     options:
 *     <br>- **MappingMode.READ_ONLY(0)**: read-only mode. The file mapping area is not writable.
 *     An exception is thrown when the file mapping area is modified.
 *     <br>- **MappingMode.READ_WRITE(1)**: read/write mode. The modification is written to the file mapping area and
 *     then synchronized to the file by the operating system (non-real-time).
 *     <br>- **MappingMode.PRIVATE(2)**: private mode. It is a copy-on-write mapping mechanism. Modifications to the
 *     mapping area are visible only to the current process and do not affect the raw file.
 * @param { long } offset - Start position of the file mapping area, in bytes.
 * @param { int } size - Size of the file mapping area, in bytes. The value ranges from 0 to **INT32_MAX**.
 * @returns { FileMapping } File mapping object created. Initial state of the returned object: The
 *     value of **position**
 *     is **0**, and the values of **limit** and **capacity** are equal to the value of **size**.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900021 - File table overflow
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900050 - Internal resource error
 * @throws { BusinessError } 13900056 - Mmap does not support mapping this file
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
function mmapSync(file: int | File, mode: MappingMode, offset: long, size: int): FileMapping;

/**
 * Moves the source directory and its content to the destination path. This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } [mode] - Move mode. The default value is **0**.
 *     <br>- **0**: Throw an exception if a directory conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a non-empty directory with the same name
 *     as the source directory.
 *     <br>- **1**: Throw an exception if a file conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be moved to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The data attribute in the error returned provides information about the
 *     conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format.
 *     <br>- **2**: Forcibly overwrite the conflicting files in the destination directory.
 *     <br> When the destination directory contains a directory with the same name as the source directory, the files
 *     with the same names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
 *     <br>- **3**: Forcibly overwrite the conflicting directory.
 *     <br> The source directory is moved to the destination directory, and the content of the moved directory is the
 *     same as that of the source directory. If the destination directory contains a directory with
 *     the same name as the source directory, all original files in the directory will be deleted.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function moveDir(src: string, dest: string, mode?: int): Promise<void>;

/**
 * Moves the source directory and its content to the destination path. This API uses an
 * asynchronous callback to return the result.
 *
 * An exception will be thrown if a directory conflict occurs, that is, the destination directory contains a directory
 * with the same name as the source directory.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory
 *     is successfully moved, **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function moveDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Moves the source directory and its content to the destination path. This API uses an asynchronous
 * callback to return the result.
 *
 * An exception will be thrown if a directory conflict occurs, that is, the destination directory contains a directory
 * with the same name as the source directory.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDirWithConflictFiles(src: string, dest: string, callback: AsyncCallback<void,
  Array<ConflictFiles>>): void;

/**
 * Moves the source directory and its content to the destination path. You can set the conflict
 * handling mode. This API uses an asynchronous callback to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } mode - Move mode.
 *     <br>- **0**: Throw an exception if a directory conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory.
 *     <br>- **1**: Throw an exception if a file conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be moved to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained.
 *     <br>- **2**: Forcibly overwrite the conflicting files in the destination directory.
 *     <br> When the destination directory contains a directory with the same name as the source directory, the files
 *     with the same names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
 *     <br>- **3**: Forcibly overwrite the conflicting directory.
 *     <br> The source directory is moved to the destination directory, and the content of the moved directory is the
 *     same as that of the source directory. If the destination directory contains a directory with
 *     the same name as the source directory, all original files in the directory will be deleted.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory
 *     is successfully moved, **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function moveDir(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Moves the source directory to the destination directory. You can set the move mode.
 * This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } mode - Move mode. The default value is **0**.
 *     <br>- **0**: Throw an exception if a directory conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory.
 *     <br>- **1**: Throw an exception if a file conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be moved to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The data attribute in the error returned provides information about the
 *     conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format.
 *     <br>- **2**: Forcibly overwrite the conflicting files in the destination directory.
 *     <br> When the destination directory contains a directory with the same name as the source directory, the files
 *     with the same names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
 *     <br>- **3**: Forcibly overwrite the conflicting directory.
 *     <br> The source directory is moved to the destination directory, and the content of the moved directory is the
 *     same as that of the source directory. If the destination directory contains a directory with
 *     the same name as the source directory, all original files in the directory will be deleted.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDirWithConflictFiles(src: string, dest: string, mode: int,
    callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * Moves the source directory and its content to the destination directory. This API returns the result synchronously.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { int } [mode] - Move mode. The default value is **0**.
 *     <br>- **0**: Throw an exception if a directory conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory.
 *     <br>- **1**: Throw an exception if a file conflict occurs.
 *     <br> An exception will be thrown if the destination directory contains a directory with the same name as the
 *     source directory, and a file with the same name exists in the conflict directory. All the non-conflicting files
 *     in the source directory will be moved to the destination directory, and the non-conflicting files in the
 *     destination directory will be retained. The data attribute in the error returned provides information about the
 *     conflicting files in the Array<[ConflictFiles]{@link ConflictFiles}> format.
 *     <br>- **2**: Forcibly overwrite the conflicting files in the destination directory.
 *     <br> When the destination directory contains a directory with the same name as the source directory, the files
 *     with the same names in the destination directory are overwritten forcibly; the files without conflicts in the
 *     destination directory are retained.
 *     <br>- **3**: Forcibly overwrite the conflicting directory.
 *     <br> The source directory is moved to the destination directory, and the content of the moved directory is the
 *     same as that of the source directory. If the destination directory contains a directory with
 *     the same name as the source directory, all original files in the directory will be deleted.
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
 * @since 23 static
 */
function moveDirSync(src: string, dest: string, mode?: int): void;

/**
 * Moves a file to the target path. You can set the conflict handling mode. This API uses a promise to return the
 * result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the file to move.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { int } [mode] - Move mode.
 *     <br> The value **0** means to overwrite the file with the same name in the destination
 *     directory; the value **1** means to throw an exception. The default value is **0**.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function moveFile(src: string, dest: string, mode?: int): Promise<void>;

/**
 * Moves a file and forcibly overwrites the file with the same name in the destination directory. This API uses an
 * asynchronous callback to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the file to move.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is moved successfully,
 *     **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function moveFile(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Moves a file to the target path. You can set the conflict handling mode. This API uses an asynchronous callback to
 * return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the file to move.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { int } [mode] - Move mode.
 *     <br> The value **0** means to overwrite the file with the same name in the destination
 *     directory; the value **1** means to throw an exception. The default value is **0**.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is moved successfully,
 *     **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function moveFile(src: string, dest: string, mode: int, callback: AsyncCallback<void>): void;

/**
 * Moves a file to the destination path. This API returns the result synchronously.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } src - Application sandbox path of the file to move.
 * @param { string } dest - Application sandbox path of the destination file.
 * @param { int } [mode] - Move mode.
 *     <br> The value **0** means to overwrite the file with the same name in the destination
 *     directory; the value **1** means to throw an exception. The default value is **0**.
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
 * @since 23 static
 */
function moveFileSync(src: string, dest: string, mode?: int): void;

/**
 * Opens a file or directory. This API supports the use of a URI. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path or URI of the file or directory.
 * @param { int } [mode] - [OpenMode]{@link fileIo.OpenMode} for opening the file or directory.
 *     You must specify one of the following options. By default, the file is opened in read-only mode.
 *     <br>- **OpenMode.READ_ONLY(0o0)**: Open the file in read-only mode.
 *     <br>- **OpenMode.WRITE_ONLY(0o1)**: Open the file in write-only mode.
 *     <br>- **OpenMode.READ_WRITE(0o2)**: Open the file in read/write mode.
 *     <br>You can add the following function options in bitwise OR mode. By default, no additional option is added.
 *     <br>- **OpenMode.CREATE(0o100)**: Create a file if the file does not exist.
 *     <br>- **OpenMode.TRUNC(0o1000)**: If the file exists and is opened in write mode, truncate
 *     the file length to 0.
 *     <br>- **OpenMode.APPEND(0o2000)**: Open the file in append mode. New data will be added to the end of the file.
 *     <br>- **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special
 *     file, or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>- **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception. The write
 *     permission is not allowed.
 *     <br>- **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.
 *     <br>- **OpenMode.SYNC(0o4010000)**: Open the file in synchronous I/O mode.
 *     <br>- **OpenMode.UNCACHE(0o10000000000)**: Disable the page cache for reading and writing a
 *     file. This option is supported since API version 26.0.0.
 * @returns { Promise<File> } Promise used to return the **File** object.
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
 * @since 23 static
 */
function open(path: string, mode?: int): Promise<File>;

/**
 * Opens a file or directory. This API supports the use of a URI. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { string } path - Application sandbox path or URI of a file or directory.
 * @param { AsyncCallback<File> } callback - Callback used to return the **File** object.
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
 * @since 23 static
 */
function open(path: string, callback: AsyncCallback<File>): void;

/**
 * Opens a file or directory with the specified mode. This API uses an asynchronous callback to return the result.
 *
 * This API supports the use of a URI.
 *
 * @param { string } path - Application sandbox path or URI of a file or directory.
 * @param { int } [mode] - [OpenMode]{@link fileIo.OpenMode} for opening the file or directory.
 *     You must specify one of the following options. By default, the file is opened in read-only mode.
 *     <br>- **OpenMode.READ_ONLY(0o0)**: Open the file in read-only mode.
 *     <br>- **OpenMode.WRITE_ONLY(0o1)**: Open the file in write-only mode.
 *     <br>- **OpenMode.READ_WRITE(0o2)**: Open the file in read/write mode.
 *     <br>You can also specify the following options, separated by a bitwise OR operator (|). By
 *     default, no additional options are given.
 *     <br>- **OpenMode.CREATE(0o100)**: If the file does not exist, create it.
 *     <br>- **OpenMode.TRUNC(0o1000)**: If the file exists and is opened in write mode, truncate
 *     the file length to 0.
 *     <br>- **OpenMode.APPEND(0o2000)**: Open the file in append mode. New data will be added to the end of the file.
 *     <br>- **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special
 *     file, or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>- **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception. The write
 *     permission is not allowed.
 *     <br>- **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.
 *     <br>- **OpenMode.SYNC(0o4010000)**: Open the file in synchronous I/O mode.
 *     <br>- **OpenMode.UNCACHE(0o10000000000)**: Disable the page cache for reading and writing a
 *     file. This option is supported since API version 26.0.0.
 * @param { AsyncCallback<File> } callback - Callback used to return the **File** object.
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
 * @since 23 static
 */
function open(path: string, mode: int, callback: AsyncCallback<File>): void;

/**
 * Opens a file or directory. This API returns the result synchronously. This API supports the use of a URI.
 *
 * @param { string } path - Application sandbox path or URI of a file or directory to open.
 * @param { int } [mode] - [OpenMode]{@link fileIo.OpenMode} for opening the file or directory.
 *     You must specify one of the following options. By default, the file is opened in read-only mode.
 *     <br>- **OpenMode.READ_ONLY(0o0)**: Open the file in read-only mode.
 *     <br>- **OpenMode.WRITE_ONLY(0o1)**: Open the file in write-only mode.
 *     <br>- **OpenMode.READ_WRITE(0o2)**: Open the file in read/write mode.
 *     <br>You can also specify the following options, separated by a bitwise OR operator (|). By
 *     default, no additional options are given.
 *     <br>- **OpenMode.CREATE(0o100)**: If the file does not exist, create it.
 *     <br>- **OpenMode.TRUNC(0o1000)**: If the file exists and is opened in write mode, truncate
 *     the file length to 0.
 *     <br>- **OpenMode.APPEND(0o2000)**: Open the file in append mode. New data will be added to the end of the file.
 *     <br>- **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special
 *     file, or character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
 *     <br>- **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception. The write
 *     permission is not allowed.
 *     <br>- **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.
 *     <br>- **OpenMode.SYNC(0o4010000)**: Open the file in synchronous I/O mode.
 *     <br>- **OpenMode.UNCACHE(0o10000000000)**: Disable the page cache for reading and writing a
 *     file. This option is supported since API version 26.0.0.
 * @returns { File } File object opened.
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
 * @since 23 static
 */
function openSync(path: string, mode?: int): File;

/**
 * Reads data from a file and returns the number of bytes read. This API uses a promise to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { ReadOptions } [options] - The options are as follows:
 *     <br>- **offset** (number): position of the data to read in the file, in bytes. This parameter is optional. By
 *     default, data is read from the current position.
 *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length.
 * @returns { Promise<long> } Promise used to return the length of the data read, in bytes.
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
 * @since 23 static
 */
function read(
  fd: int,
  buffer: ArrayBuffer,
  options?: ReadOptions
): Promise<long>;

/**
 * Reads data from a file and returns the number of bytes read. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { AsyncCallback<long> } callback - Callback used to return the length of the data read, in bytes.
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
 * @since 23 static
 */
function read(fd: int, buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

/**
 * Reads data from a file. Read options (such as the offset position and length of the data read)
 * can be configured. The
 * number of bytes read is returned. This API uses an asynchronous callback to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { ReadOptions } [options] - The options are as follows:
 *     <br>- **offset** (number): position of the data to read in the file, in bytes. This parameter is optional. By
 *     default, data is read from the current position.
 *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length.
 * @param { AsyncCallback<long> } callback - Callback used to return the length of the data read, in bytes.
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
 * @since 23 static
 */
function read(
  fd: int,
  buffer: ArrayBuffer,
  options: ReadOptions,
  callback: AsyncCallback<long>
): void;

/**
 * Reads data from a file synchronously and returns the number of bytes read.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
 * @param { ReadOptions } [options] - The options are as follows:
 *     <br>- **offset** (number): position of the data to read in the file, in bytes. This parameter is optional. By
 *     default, data is read from the current position.
 *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the buffer length.
 * @returns { long } Length of the data read, in bytes.
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
 * @since 23 static
 */
function readSync(
  fd: int,
  buffer: ArrayBuffer,
  options?: ReadOptions
): long;

/**
 * Reads a file text line by line. Only the files in UTF-8 format are supported. This API uses a promise to return the
 * result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } [options] - Options for reading the text. The options are as follows:
 *     <br>- **encoding** (string): format of the data to be encoded.
 *     <br>It is valid only when the data is of the string type.
 *     <br>The default value is **'utf-8'**, which is the only value supported.
 * @returns { Promise<ReaderIterator> } Promise used to return the **ReaderIterator** object.
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
 * @since 23 static
 */
function readLines(filePath: string, options?: Options): Promise<ReaderIterator>;

/**
 * Reads a file text line by line. Only the files in UTF-8 format are supported. This API uses an
 * asynchronous callback to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { AsyncCallback<ReaderIterator> } callback - Callback used to return a **ReaderIterator** object.
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
 * @since 23 static
 */
function readLines(filePath: string, callback: AsyncCallback<ReaderIterator>): void;

/**
 * Reads a file text line by line. Read options can be configured. Only the files in UTF-8 format are supported. This
 * API uses an asynchronous callback to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } options - Read options. The options are as follows:
 *     <br>- **encoding** (string): format of the data to be encoded.
 *     <br>It is valid only when the data is of the string type.
 *     <br>The default value is **'utf-8'**, which is the only value supported.
 * @param { AsyncCallback<ReaderIterator> } callback - Callback used to return a **ReaderIterator** object.
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
 * @since 23 static
 */
function readLines(filePath: string, options: Options, callback: AsyncCallback<ReaderIterator>): void;

/**
 * Reads a file text line by line synchronously. Only the files in UTF-8 format are supported.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { Options } [options] - Options for reading the text. The options are as follows:
 *     <br>- **encoding** (string): format of the data to be encoded.
 *     <br>It is valid only when the data is of the string type.
 *     <br>The default value is **'utf-8'**, which is the only value supported.
 * @returns { ReaderIterator } **ReaderIterator** object.
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
 * @since 23 static
 */
function readLinesSync(filePath: string, options?: Options): ReaderIterator;

/**
 * Reads the text content of a file synchronously. This API returns the result synchronously. This
 * API uses a promise to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { ReadTextOptions } [options] - The options are as follows:
 *     <br>- **offset** (number): position of the data to read in the file, in bytes. This parameter is optional. By
 *     default, data is read from the current position.
 *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the file length.
 *     <br>- **encoding** (string): format of the data to be encoded.
 *     <br>It is valid only when the data is of the string type. The default value is **'utf-8'**, which is the only
 *     value supported.
 * @returns { Promise<string> } Promise used to return the content read.
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
 * @since 23 static
 */
function readText(
  filePath: string,
  options?: ReadTextOptions
): Promise<string>;

/**
 * Reads the text of a file. This API uses an asynchronous callback to return the result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { AsyncCallback<string> } callback - Callback used to return the content read.
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
 * @since 23 static
 */
function readText(filePath: string, callback: AsyncCallback<string>): void;

/**
 * Reads the text of a file. Read options can be configured. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { ReadTextOptions } [options] - The options are as follows:
 *     <br>- **offset** (number): position of the data to read in the file, in bytes. This parameter is optional. By
 *     default, data is read from the current position.
 *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the file length.
 *     <br>- **encoding** (string): format of the data to be encoded. The default value is **'utf-8'**, which is the
 *     only value supported.
 * @param { AsyncCallback<string> } callback - Callback used to return the content read.
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
 * @since 23 static
 */
function readText(
  filePath: string,
  options: ReadTextOptions,
  callback: AsyncCallback<string>
): void;

/**
 * Reads the text content of a file. This API returns the result synchronously.
 *
 * @param { string } filePath - Application sandbox path of the file.
 * @param { ReadTextOptions } [options] - The options are as follows:
 *     <br>- **offset** (number): position of the data to read in the file, in bytes. This parameter is optional. By
 *     default, data is read from the current position.
 *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
 *     The default value is the file length.
 *     <br>- **encoding** (string): format of the data to be encoded.
 *     <br>It is valid only when the data is of the string type. The default value is **'utf-8'**, which is the only
 *     value supported.
 * @returns { string } File content read.
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
 * @since 23 static
 */
function readTextSync(
  filePath: string,
  options?: ReadTextOptions
): string;

/**
 * Renames a file or directory. This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } oldPath - Original application sandbox path of the file or directory.
 * @param { string } newPath - New application sandbox path of the file or directory.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * Renames a file or directory. This API uses an asynchronous callback to return the result.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } oldPath - Original application sandbox path of the file or directory.
 * @param { string } newPath - New application sandbox path of the file or directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is renamed successfully,
 *     **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void;

/**
 * Renames a file or directory. This API returns the result synchronously.
 *
 * > **NOTE**
 * >
 * > This API is not supported in a distributed directory.
 *
 * @param { string } oldPath - Original application sandbox path of the file or directory.
 * @param { string } newPath - New application sandbox path of the file or directory.
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
 * @since 23 static
 */
function renameSync(oldPath: string, newPath: string): void;

/**
 * Deletes a directory and all its subdirectories and files. This API uses a promise to return the result.
 *
 * > **NOTE**
 * >
 * > This API can be used to remove a single file. However, you are advised to use **unlink()** instead.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function rmdir(path: string): Promise<void>;

/**
 * Deletes a directory and all its subdirectories and files. This API uses an asynchronous callback to return the
 * result.
 *
 * > **NOTE**
 * >
 * > This API can be used to remove a single file. However, you are advised to use **unlink()** instead.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the directory is successfully
 *     deleted, **err** is **undefined**; otherwise, **err** is an error object.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function rmdir(path: string, callback: AsyncCallback<void>): void;

/**
 * Removes a directory and all its subdirectories and files synchronously.
 *
 * > **NOTE**
 * >
 * > This API can be used to remove a single file. However, you are advised to use **unlinkSync** instead.
 *
 * @param { string } path - Application sandbox path of the directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function rmdirSync(path: string): void;

/**
 * Obtains detailed attributes of a file or directory. The returned **Stat** object contains attributes such as the
 * file size, permission mode, access time, and modification time. This API uses a promise to return the result.
 *
 * @param { string | int } file - Application sandbox path, URI, or FD of the file or directory.
 *     <br>**Note**: URIs can be passed since API version 22.
 * @returns { Promise<Stat> } Promise used to return the file or directory information.
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
 * @since 23 static
 */
function stat(file: string | int): Promise<Stat>;

/**
 * Obtains detailed attributes of a file or directory. The returned **Stat** object contains attributes such as the
 * file size, permission mode, access time, and modification time. This API uses an asynchronous callback to
 * return the result.
 *
 * @param { string | int } file - Application sandbox path, URI, or FD of the file or directory.
 *     <br>**Note**: URIs can be passed since API version 22.
 * @param { AsyncCallback<Stat> } callback - Callback used to return the file or directory information obtained.
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
 * @since 23 static
 */
function stat(file: string | int, callback: AsyncCallback<Stat>): void;

/**
 * Obtains detailed attributes of a file or directory synchronously. The returned **Stat** object contains attributes
 * such as the file size, permission mode, access time, and modification time.
 *
 * @param { string | int } file - Application sandbox path, URI, or FD of the file or directory.
 *     <br>**Note**: URIs can be passed since API version 22.
 * @returns { Stat } Detailed information of a file or directory.
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
 * @since 23 static
 */
function statSync(file: string | int): Stat;

/**
 * Creates a symbolic link based on a file path. This API uses a promise to return the result.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function symlink(target: string, srcPath: string): Promise<void>;

/**
 * Creates a symbolic link based on a file path. This API uses an asynchronous callback to return the result.
 *
 * > **NOTE**
 * >
 * > Since API version 11, this API cannot be used by third-party applications.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the symbolic link is successfully
 *     created, **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void;

/**
 * Creates a symbolic link based on the file path. This API returns the result synchronously.
 *
 * > **NOTE**
 * >
 * > Since API version 11, this API cannot be used by third-party applications.
 *
 * @param { string } target - Application sandbox path of the target file.
 * @param { string } srcPath - Application sandbox path of the symbolic link.
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
 * @since 23 static
 */
function symlinkSync(target: string, srcPath: string): void;

/**
 * Truncates a file to the specified length. Excess content will be deleted. This API uses a promise to return the
 * result.
 *
 * @param { string | int } file - Application sandbox path or FD of the file.
 * @param { long } [len] - File length after truncation, in bytes. The default value is **0**.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function truncate(file: string | int, len?: long): Promise<void>;

/**
 * Truncates a file and deletes its content. This API uses an asynchronous callback to return the result.
 *
 * @param { string | int } file - Application sandbox path or FD of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 *    If the file is truncated successfully, **err** is **undefined**. Otherwise, **err** is an error object.
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
 * @since 23 static
 */
function truncate(file: string | int, callback: AsyncCallback<void>): void;

/**
 * Truncates a file to the specified length. Excess content will be deleted. This API uses an asynchronous callback to
 * return the result.
 *
 * @param { string | int } file - Application sandbox path or FD of the file.
 * @param { long } len - File length after truncation, in bytes.
 * @param { AsyncCallback<void> } callback - Callback used to return the result.
 *     If the file is truncated successfully,**err** is **undefined**. Otherwise, **err** is an error object.
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
 * @since 23 static
 */
function truncate(file: string | int, len: long, callback: AsyncCallback<void>): void;

/**
 * Truncates a file to the specified length synchronously. Excess content will be deleted.
 *
 * @param { string | int } file - Application sandbox path or FD of the file.
 * @param { long } [len] - File length after truncation, in bytes. The default value is **0**.
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
 * @since 23 static
 */
function truncateSync(file: string | int, len?: long): void;

/**
 * Deletes a single file. This method cannot be used to delete a directory. This API uses a promise to return the
 * result.
 *
 * @param { string } path - Application sandbox path of the file.
 * @returns { Promise<void> } Promise that returns no value.
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
 * @since 23 static
 */
function unlink(path: string): Promise<void>;

/**
 * Deletes a single file. This method cannot be used to delete a directory. This API uses an asynchronous callback to
 * return the result.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is deleted successfully,
 *     **err** is **undefined**; otherwise, **err** is an error object.
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
 * @since 23 static
 */
function unlink(path: string, callback: AsyncCallback<void>): void;

/**
 * Deletes a single file synchronously. This method cannot be used to delete a directory.
 *
 * @param { string } path - Application sandbox path of the file.
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
 * @since 23 static
 */
function unlinkSync(path: string): void;

/**
 * Changes the time when the file was last modified.
 *
 * @param { string } path - Application sandbox path of the file.
 * @param { double } mtime - New timestamp. The value is the number of milliseconds elapsed since the Epoch
 *     time (00:00:00 UTC on January 1, 1970). Only the time when the file was last modified can be changed.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function utimes(path: string, mtime: double): void;

/**
 * Writes data to a file and returns the number of bytes written. This API uses a promise to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { WriteOptions } [options] - The options are as follows: <br>
 *     - **offset** (number): start position to write the data in the file, in bytes.
 *     This parameter is optional. Bydefault, data is written from the current position.
 *     <br>- **length** (number): length of the data to write, in bytes. This parameter is optional.
 *     The default valueis the buffer length.<br>
 *     - **encoding** (string): format of the data to be encoded when the data is a string. The default value is
 *     **'utf-8'**, which is the only value supported currently.
 * @returns { Promise<long> } Promise used to return the length of the data written, in bytes.
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
 * @since 23 static
 */
function write(
  fd: int,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): Promise<long>;

/**
 * Writes data to a file and returns the number of bytes written. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { AsyncCallback<long> } callback - Callback used to return the length of the data written, in bytes.
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
 * @since 23 static
 */
function write(fd: int, buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

/**
 * Writes data to a file. Write options (such as the offset position and length of the data written)
 * can be configured.The number of bytes written is returned. This API uses an asynchronous callback
 * to return the result.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { WriteOptions } [options] - The options are as follows:
 *     <br>- **offset** (number): start position to write the data in the file, in bytes.
 *     This parameter is optional. Bydefault, data is written from the current position.
 *     <br>- **length** (number): length of the data to write, in bytes. This parameter is optional.
 *     The default valueis the buffer length.
 *     <br>- **encoding** (string): format of the data to be encoded when the data is a string.
 *     The default value is**'utf-8'**, which is the only value supported currently.
 * @param { AsyncCallback<long> } callback - Callback used to return the length of the data written, in bytes.
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
 * @since 23 static
 */
function write(
  fd: int,
  buffer: ArrayBuffer | string,
  options: WriteOptions,
  callback: AsyncCallback<long>
): void;

/**
 * Writes data to a file synchronously and returns the number of bytes written.
 *
 * @param { int } fd - FD of the file.
 * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
 * @param { WriteOptions } [options] - The options are as follows:
 *     <br>- **offset** (number): start position to write the data in the file, in bytes.
 *     This parameter is optional. Bydefault, data is written from the current position.
 *     <br>- **length** (number): length of the data to write, in bytes. This parameter is optional.
 *     The default valueis the buffer length.
 *     <br>- **encoding** (string): format of the data to be encoded when the data is a string.
 *     The default value is**'utf-8'**, which is the only value supported currently.
 * @returns { long } Length of the data written, in bytes.
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
 * @since 23 static
 */
function writeSync(
  fd: int,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): long;

  /**
   * Triggers connection. If the peer device is abnormal, [onStatus]{@link DfsListeners.onStatus}
   * in DfsListeners will be called to notify the application.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } networkId - Network ID of the device. The device network ID can be obtained from
   *     [DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}
   *     using the related [distributedDeviceManager]{@link @ohos.distributedDeviceManager} API.
   * @param { DfsListeners } listeners - Listeners for distributed file system status.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13900045 - Connection failed.
   * @throws { BusinessError } 13900046 - Software caused connection abort.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  function connectDfs(networkId: string, listeners: DfsListeners): Promise<void>;

  /**
   * Triggers disconnection.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } networkId - Network ID of the device. The device network ID can be obtained from
   *     [DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}
   *     using the related [distributedDeviceManager]{@link @ohos.distributedDeviceManager} API.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.Possible causes:1.Mandatory parameters are left
   *     unspecified;
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 13600004 - Unmount failed.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  function disconnectDfs(networkId: string): Promise<void>;

  /**
   * DfsListener Callback function.
   *
   * @param { string } networkId - The networkId of device.
   * @param { int } status - The status code of Distributed File System.
   *     The value should be an integer.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 23 static
   */
  type DfsListenerCallback = (networkId: string, status: int) => void;

  /**
   * The listeners of Distributed File System.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 23 static
   */
  export interface DfsListeners {
    /**
     * The Listener of Distributed File System status
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    onStatus: DfsListenerCallback;
}

/**
 * Sets an extended attribute of a file or directory. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { string } key - Key of the extended attribute to obtain.
 *     The value is a string of less than 256 bytes and can contain only the **user.** prefix.
 * @param { string } value - Value of the extended attribute to set.
 * @returns { Promise<void> } Promise that returns no value.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
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
 * @since 23 static
 */
function setxattr(path: string, key: string, value: string): Promise<void>;

/**
 * Sets an extended attribute of a file or directory.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { string } key - Key of the extended attribute to obtain.
 *     The value is a string of less than 256 bytes and can contain only the **user.** prefix.
 * @param { string } value - Value of the extended attribute to set.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
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
 * @since 23 static
 */
function setxattrSync(path: string, key: string, value: string): void;

/**
 * Obtains an extended attribute of a file or directory. This API uses a promise to return the result.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { string } key - Key of the extended attribute to obtain.
 * @returns { Promise<string> } Promise used to return the value of the extended attribute obtained.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900007 - Arg list too long
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900037 - No data available
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function getxattr(path: string, key: string): Promise<string>;

/**
 * Obtains an extended attribute of a file. This API returns the result synchronously.
 *
 * @param { string } path - Application sandbox path of the file or directory.
 * @param { string } key - Key of the extended attribute to obtain.
 * @returns { string } Value of the extended attribute obtained.
 * @throws { BusinessError } 401 - Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900007 - Arg list too long
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900037 - No data available
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function getxattrSync(path: string, key: string): string;

/**
 * Defines the copy progress information.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Progress {
  /**
   * Size of the copied data, in bytes.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly processedSize: long;

  /**
   * Total size of the data to be copied, in bytes.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly totalSize: long;
}

  /**
   * Provides APIs for interrupting a copy task.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  class TaskSignal {
    /**
     * Cancels a copy task.
     *
     * @throws { BusinessError } 13900010 - Try again
     * @throws { BusinessError } 13900012 - Permission denied by the file system
     * @throws { BusinessError } 13900043 - No task can be canceled.
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    cancel(): void;
}

  /**
   * Defines the callback for listening for the copy progress.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  interface CopyOptions {
    /**
     * Listener used to observe the copy progress.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    progressListener?: ProgressListener;
    /**
     * Signal used to cancel a copy task.
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @since 23 static
     */
    copySignal?: TaskSignal;
}

  /**
   * Listener used to observe the copy progress.
   *
   * @param { Progress } progress - indicates the progress data of copyFile
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  type ProgressListener = (progress: Progress) => void;

/**
 * Represents a **File** object opened by **open()**. It contains the FD and provides capabilities such as locking a
 * file and obtaining the parent directory.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface File {

  /**
   * FD of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fd: int;

  /**
   * Path of the file.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * Name of the file.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly name: string;

  /**
   * Obtains the parent directory of this file object.
   *
   * @returns { string } Parent directory obtained.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getParent(): string;

  /**
   * Applies an exclusive lock or a shared lock on a file in blocking mode. This API uses a promise to return the
   * result.
   *
   * @param { boolean } exclusive - Lock to apply.
   *     <br> The value **true** means an exclusive lock, and the value **false** (default) means a shared lock.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lock(exclusive?: boolean): Promise<void>;

  /**
   * Applies a shared lock on a file in blocking mode. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file is locked successfully,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lock(callback: AsyncCallback<void>): void;

  /**
   * Applies an exclusive lock or a shared lock on a file in blocking mode. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { boolean } exclusive - Whether to apply an exclusive lock.
   *     The value **true** means an exclusive lock, and the value **false** (default) means a shared lock.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   *     If the file is locked successfully, **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lock(exclusive: boolean, callback: AsyncCallback<void>): void;

  /**
   * Applies an exclusive lock or a shared lock on this file in non-blocking mode.
   *
   * @param { boolean } exclusive - Lock to apply.
   *     <br> The value **true** means an exclusive lock, and the value **false** (default) means a shared lock.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  tryLock(exclusive?: boolean): void;

  /**
   * Unlocks a file. This API returns the result synchronously.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  unlock(): void;
}

/**
 * Defines a file mapping object. Before calling the **FileMapping** method,
 * construct a **FileMapping** instance using [mmap()]{@link fileIo.mmap} or [mmapSync()]{@link fileIo.mmapSync}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
interface FileMapping {
  /**
   * Sets the current location of the file mapping area.
   *
   * @param { int } position - Target position to set, in bytes.
   *     <br>The value must be a non-negative number and cannot be greater than the upper bound (**limit**) of the
   *     readable and writable area. You can obtain the value of **limit** by calling
   *     [getLimit()]{@link fileIo.FileMapping.getLimit}.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setPosition(position: int): void;

  /**
   * Gets the current location of the file mapping area.
   *
   * @returns { int } Current position of the file mapping area, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getPosition(): int;

  /**
   * Obtains the capacity of the file mapping area.
   *
   * @returns { int } Capacity of the file mapping area, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  capacity(): int;

  /**
   * Sets the upper bound of the readable and writable area of the file mapping area.
   *
   * @param { int } limit - Upper bound of the readable and writable area to set, in bytes.
   *     <br>The value is greater than or equal to 0 and less than or equal to the value of
   *     [capacity]{@link fileIo.FileMapping.capacity}. If the value of **limit** is smaller than that of **position**
   *     in the file mapping area, the value of **position** is automatically adjusted to that of **limit**.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setLimit(limit: int): void;

  /**
   * Obtains the upper bound of the readable and writable area of the file mapping area.
   *
   * @returns { int } Upper bound of the current readable and writable area, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getLimit(): int;

  /**
   * Flips the file mapping area to switch from the write-ready state to the read-ready state.
   * After this API is called, **limit** is set to the value of **position**, and **position** is reset to **0**.
   *
   * It is recommended that this API be called to prepare for subsequent
   * [read()]{@link fileIo.Stream.read( buffer: ArrayBuffer, options: ReadOptions, callback: AsyncCallback<long> )}
   * operations after the[write()]{@link fileIo.Stream.write( buffer: ArrayBuffer | string, options: WriteOptions,
   * callback: AsyncCallback<long> )} operations are complete.
   *
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  flip(): void;

  /**
   * Obtains the number of remaining bytes between the current position (**position**) and the upper bound (**limit**)
   * of the readable and writable area.
   *
   * @returns { int } Number of remaining readable or writable bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  remaining(): int;

  /**
   * Reads data from the current position and moves the position backward by the number of bytes actually read.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
   * @param { int } [length] - Length of the data to read, in bytes. The default value is the buffer length.
   * @returns { int } Length of the data read, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  read(buffer: ArrayBuffer, length?: int): int;

  /**
   * Reads data from the specified position. The current position does not move.
   *
   * @param { int } position - Start position to read the data, in bytes.
   * @param { ArrayBuffer } buffer - Buffer used to store the file data read.
   * @param { int } [length] - Length of the data to read, in bytes. The default value is the buffer length.
   * @returns { int } Length of the data read, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  read(position: int, buffer: ArrayBuffer, length?: int): int;

  /**
   * Writes data from the current position and moves the position backward by the number of bytes actually written.
   *
   * @param { ArrayBuffer } data - Buffer data to be written to the file.
   * @param { int } [length] - Length of the data to write, in bytes. The default value is the buffer length.
   * @returns { int } return the length of the data written, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900053 - Read-only mmap buffer
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  write(data: ArrayBuffer, length?: int): int;

  /**
   * Writes data to the specified position. The current position does not move.
   *
   * @param { int } position - Start position to write, in bytes.
   * @param { ArrayBuffer } data - Buffer data to be written to the file.
   * @param { int } [length] - Length of the data to write, in bytes. This parameter is optional. The default value is
   *     the buffer length.
   * @returns { int } return the length of the data written, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900053 - Read-only mmap buffer
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  write(position: int, data: ArrayBuffer, length?: int): int;

  /**
   * Synchronizes data of the entire file mapping area to the disk file synchronously.
   * This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > If the file is not stored on the local device, calling this API does not ensure that all changes are stored
   * > persistently.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  msync(): Promise<void>;

  /**
   * Synchronizes data in the specified range of the file mapping area to the disk file synchronously. This API uses a
   * promise to return the result.
   *
   * > **NOTE**
   * >
   * > If the file is not stored on the local device, calling this API does not ensure that all changes are stored
   * > persistently.
   *
   * @param { int } position - Start position to synchronize, in bytes.
   * @param { int } length - Length of the data to synchronize, in bytes.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  msync(position: int, length: int): Promise<void>;

  /**
   * Synchronizes data of the entire file mapping area to the disk file synchronously.
   *
   * > **NOTE**
   * >
   * > If the file is not stored on the local device, calling this API does not ensure that all changes are stored
   * > persistently.
   *
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  msyncSync(): void;

  /**
   * Synchronizes data in the specified range of the file mapping area to the disk file synchronously.
   *
   * > **NOTE**
   * >
   * > If the file is not stored on the local device, calling this API does not ensure that all changes are stored
   * > persistently.
   *
   * @param { int } position - Start position to synchronize, in bytes.
   * @param { int } length - Length of the data to synchronize, in bytes.
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  msyncSync(position: int, length: int): void;

  /**
   * Releases the file mapping area. This API uses a promise to return the result. After this API is called,
   * **position**, **limit**, and **capacity** are all reset to **0**, and no operation can be performed on the
   * **FileMapping** object.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  unmap(): Promise<void>;

  /**
   * Releases the file mapping area synchronously. After this API is called, **position**, **limit**, and **capacity**
   * are all reset to **0**, and no operation can be performed on the **FileMapping** object.
   *
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  unmapSync(): void;
}

/**
 * Provides APIs for randomly reading and writing a stream based on offset pointers. Before invoking any API of
 * **RandomAccessFile**, you need to use **createRandomAccessFile()** to create a **RandomAccessFile** instance
 * synchronously or asynchronously.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface RandomAccessFile {

  /**
   * FD of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fd: int;

  /**
   * Offset pointer to the **RandomAccessFile** instance, in bytes. This parameter indicates the current read/write
   * position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly filePointer: long;

  /**
   * Sets the file offset pointer to specify the start position of subsequent read and write operations.
   *
   * @param { long } filePointer - Offset pointer to the **RandomAccessFile** instance, in bytes.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  setFilePointer(filePointer: long): void;

  /**
   * Closes a **RandomAccessFile** object synchronously. After the object is closed,
   * it cannot be used for read or write operations.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(): void;

  /**
   * Writes data to a file. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to write, in bytes. The default value is the buffer length.
   *     <br>- **offset** (number): start position to write the data, in bytes (it is determined by
   *     **filePointer** plus **offset**). This parameter is optional. By default,
   *     data is written from the **filePointer**.
   *     <br>- **encoding** (string): format of the data to be encoded when the data is a string.
   *     The default value is **'utf-8'**, which is the only value supported.
   * @returns { Promise<long> } Promise used to return the length of the data written, in bytes.
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
   * @since 23 static
   */
  write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<long>;

  /**
   * Writes data to a file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { AsyncCallback<long> } callback - Callback used to return the length of the data written, in bytes.
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
   * @since 23 static
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

  /**
   * Writes data to a file. Write options can be configured. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to write, in bytes. The default value is the buffer length.
   *     <br>- **offset** (number): start position to write the data, in bytes (it is determined by
   *     **filePointer** plus **offset**). This parameter is optional. By default,
   *     data is written from the **filePointer**.
   *     <br>- **encoding** (string): format of the data to be encoded when the data is a string.
   *     The default value is **'utf-8'**, which is the only value supported.
   * @param { AsyncCallback<long> } callback - Callback used to return the length of the data written, in bytes.
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
   * @since 23 static
   */
  write(
    buffer: ArrayBuffer | string,
    options: WriteOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Writes data to a file. This API returns the result synchronously.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to write, in bytes. The default value is the buffer length.
   *     <br>- **offset** (number): start position to write the data, in bytes (it is determined by
   *     **filePointer** plus **offset**). This parameter is optional. By default,
   *     data is written from the **filePointer**.
   *     <br>- **encoding** (string): format of the data to be encoded when the data is a string.
   *     The default value is **'utf-8'**, which is the only value supported.
   * @returns { long } Length of the data written in the file, in bytes.
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
   * @since 23 static
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): long;

  /**
   * Reads data from a file and returns the number of bytes read. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.<br>
   *     - **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**.
   * @returns { Promise<long> } Promise used to return the data read, in bytes.
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
   * @since 23 static
   */
  read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<long>;

  /**
   * Reads data from a file and returns the number of bytes read. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { AsyncCallback<long> } callback - Callback used to return the length of the data read, in bytes.
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
   * @since 23 static
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

  /**
   * Reads data from a file and returns the number of bytes read. The read options can be configured. This API uses an
   * asynchronous callback to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default valueis the buffer length.<br>-
   *     **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**.
   * @param { AsyncCallback<long> } callback - Callback used to return the length of the data read, in bytes.
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
   * @since 23 static
   */
  read(
    buffer: ArrayBuffer,
    options: ReadOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Reads data from a file synchronously and returns the number of bytes read.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default valueis the buffer length.<br>-
   *     **offset** (number): start position to read the data, in bytes (it is determined by **filePointer** plus
   *     **offset**). This parameter is optional. By default, data is read from the **filePointer**.
   * @returns { long } Length of the data read, in bytes.
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
   * @since 23 static
   */
  readSync(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): long;

  /**
   * Obtains a **ReadStream** instance of this **RandomAccessFile** to read data from a stream file.
   *
   * @returns { ReadStream } **ReadStream** instance obtained.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getReadStream(): ReadStream;

  /**
   * Obtains a **WriteStream** instance of this **RandomAccessFile** to write data to a stream file.
   *
   * @returns { WriteStream } **WriteStream** instance obtained.
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getWriteStream(): WriteStream;
}

/**
 * Defines a readable stream. You need to use [fileIo.createReadStream]{@link fileIo.createReadStream} to create a
 * **ReadStream** instance, which is inherited from [stream.Readable]{@link @ohos.util.stream:stream.Readable}.
 *
 * The data obtained by **ReadStream** is a decoded string. Currently, only the UTF-8 format is supported.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
class ReadStream extends stream.Readable {
  /**
   * The ReadStream constructor.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  constructor();

  /**
   * Number of bytes read by the readable stream.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly bytesRead: long;

  /**
   * Path of the file corresponding to the readable stream.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * Adjusts the position of the readable stream offset pointer.
   *
   * @param { long } offset - Relative offset, in bytes.
   * @param { WhenceType } [whence = WhenceType.SEEK_SET] - Where to start the offset. The default value is SEEK_SET,
   *     <br>which indicates the beginning of the file.
   * @returns { long } Position of the current offset pointer (offset relative to the file header, in bytes).
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  seek(offset: long, whence?: WhenceType): long;

  /**
   * Closes this readable stream.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(): void;
}

/**
 * Defines a writeable stream. You need to use [fileIo.createWriteStream]{@link fileIo.createWriteStream} to create a
 * **WriteStream** instance, which is inherited from [stream.Writable]{@link @ohos.util.stream:stream.Writable}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
class WriteStream extends stream.Writable {
  /**
   * The WriteStream constructor.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  constructor();

  /**
   * Number of bytes written to the writable stream.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly bytesWritten: long;

  /**
   * Path of the file corresponding to the writeable stream.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * Adjusts the position of the writeable stream offset pointer.
   *
   * @param { long } offset - Relative offset, in bytes.
   * @param { WhenceType } [whence = WhenceType.SEEK_SET] - Where to start the offset.
   *     <br>The default value is SEEK_SET, which indicates the beginning of the file.
   * @returns { long } Position of the current offset pointer (offset relative to the file header, in bytes).
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  seek(offset: long, whence?: WhenceType): long;

  /**
   * Closes this writeable stream.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(): void;
}

/**
 * AtomicFile is a class used to perform atomic read and write operations on files.
 * A temporary file is written and renamed to the original file location, which ensures file integrity.
 * If the write operation fails, the temporary file is deleted without modifying the original file content.
 * You can call finishWrite() or failWrite() to write or roll back file content.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export class AtomicFile {
  /**
   * The AtomicFile constructor.
   *
   * @param { string } path - Application sandbox path of the file.
   * @throws { BusinessError } 401 Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  constructor(path: string);

  /**
   * Obtains the file object through the AtomicFile object. The FD needs to be closed by calling close().
   *
   * @returns { File } File object opened.
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900005 IO error
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getBaseFile(): File;

  /**
   * Creates a ReadStream instance.
   *
   * @returns { ReadStream } ReadStream instance obtained.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  openRead(): ReadStream;

  /**
   * Reads all content of a file.
   *
   * @returns { ArrayBuffer } Full content of a file.
   * @throws { BusinessError } 13900005 I/O error
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readFully(): ArrayBuffer;

  /**
   * Starts to write new file data in the WriteStream object returned. If the file does not exist, create a file.
   * Call finishWrite() if the write operation is successful; call failWrite() if the write operation fails.
   *
   * @returns { WriteStream } Returns the file write stream.
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  startWrite(): WriteStream;

  /**
   * Finishes writing file data when the write operation is complete.
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  finishWrite(): void;

  /**
   * Rolls back the file after the file fails to be written.
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  failWrite(): void;

  /**
   * Deletes the AtomicFile class, including the original files and temporary files.
   *
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  delete(): void;
}

/**
 * Obtains detailed information of a file, including attributes such as the file size, permission mode,
 * access time, and modification time. Before calling an API of the **Stat** class,
 * use [stat()]{@link fileIo.stat} to create a **Stat** instance.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Stat {
  /**
   * File ID. Different files on the same device have different **ino**s.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ino: bigint;

  /**
   * File permissions. The meaning of each bit is as follows:
   *
   * Note: The following values are in octal format. The return values are in decimal format. You need to convert the
   * values.
   *
   * - **0o400**: The user has the read permission on a regular file or a directory entry.
   * - **0o200**: The user has the permission to write a regular file or create and delete a directory entry.
   * - **0o100**: The user has the permission to execute a regular file or search for the specified path in a
   * directory.
   * - **0o040**: The user group has the read permission on a regular file or a directory entry.
   * - **0o020**: The user group has the permission to write a regular file or create and delete a directory entry.
   * - **0o010**: The user group has the permission to execute a regular file or search for the specified path in a
   * directory.
   * - **0o004**: Other users have the permission to read a regular file or read a directory entry.
   * - **0o002**: Other users have the permission to write a regular file or create and delete a directory entry.
   * - **0o001**: Other users have the permission to execute a regular file or search for the specified path in a
   * directory.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mode: long;

  /**
   * ID of the file owner.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly uid: long;

  /**
   * ID of the user group of the file.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly gid: long;

  /**
   * File size, in bytes. This parameter is valid only for regular files.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly size: long;

  /**
   * Time when the file was last accessed. The value is the number of seconds elapsed since 00:00:00
   * on January 1, 1970.
   *
   * **Note**: Currently, user data partitions are mounted in **noatime** mode by default, and **atime** update is
   * disabled.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly atime: long;

  /**
   * Time when the file content was last modified. The value is the number of seconds elapsed since 00:00:00
   *  on January 1, 1970.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mtime: long;

  /**
   * Time when the file metadata was last modified. The value is the number of seconds elapsed since 00:00:00
   * on January 1, 1970.
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ctime: long;

  /**
   * Time of the last access to the file. The value is the number of nanoseconds elapsed since 00:00:00 on
   *  January 1, 1970.
   *
   * **Note**: Currently, user data partitions are mounted in **noatime** mode by default, and **atime** update is
   * disabled.
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly atimeNs?:bigint;

  /**
   * Time of the last modification to the file. The value is the number of nanoseconds elapsed since 00:00:00
   * on January 1, 1970.
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mtimeNs?:bigint;

  /**
   * Time of the last status change of the file. The value is the number of nanoseconds elapsed since 00:00:00 on
   * January 1, 1970.
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ctimeNs?:bigint;

  /**
   * File location, which indicates whether the file is stored in a local device or in the cloud.
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly location: LocationType;

  /**
   * Checks whether this file is a block special file. A block special file supports access by block only, and it is
   * cached when accessed.
   *
   * @returns { boolean } Whether the file is a block special file. The value **true** means the file
   *     is a block special file; the value **false** means the file is not a block special file.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isBlockDevice(): boolean;

  /**
   * Checks whether this file is a character special file. A character special device supports random access,
   * and it is not cached when accessed.
   *
   * @returns { boolean } Whether the file is a character special device. The value **true** means the file is a
   *     character special device; the value **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isCharacterDevice(): boolean;

  /**
   * Checks whether this file is a directory.
   *
   * @returns { boolean } Whether the file is a directory. The value **true** means the file is a directory; the value
   *     **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isDirectory(): boolean;

  /**
   * Checks whether this file is a named pipe (or FIFO). Named pipes are used for inter-process communication.
   *
   * @returns { boolean } Whether the file is an FIFO. The value **true** means the file is an FIFO;
   *     the value **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isFIFO(): boolean;

  /**
   * Checks whether this file is a regular file.
   *
   * @returns { boolean } Whether the file is a regular file. The value **true** means that
   *     the file is a regular file; the value **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isFile(): boolean;

  /**
   * Checks whether this file is a socket.
   *
   * @returns { boolean } Whether the file is a socket. The value **true** means that the file is a socket; the value
   *     **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isSocket(): boolean;

  /**
   * Checks whether this file is a symbolic link.
   *
   * @returns { boolean } Whether the file is a symbolic link. The value **true** means that the file is a symbolic
   *     link; the value **false** means the opposite.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isSymbolicLink(): boolean;
}

/**
 * Provides APIs for stream operations, such as reading and writing data streams of files. After using an API of the
 * **Stream** class, you need to call **close** to close the file stream. Before calling an API of the
 *  **Stream** class, you need to create a **Stream** instance by using
 *  [fileIo.createStream]{@link fileIo.createStream} or [fileIo.fdopenStream]{@link fileIo.fdopenStream}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Stream {
  /**
   * Closes the file stream. After the stream is closed, it cannot be used for read or write operations.
   * This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(): Promise<void>;

  /**
   * Closes the file stream. After the stream is closed, it cannot be used for read or write operations. This API uses
   * an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file stream is closed
   *     successfully, **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  close(callback: AsyncCallback<void>): void;

  /**
   * Closes the file stream synchronously. After the stream is closed, it cannot be used for read or write operations.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  closeSync(): void;

  /**
   * Flushes all data from this stream. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
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
   * @since 23 static
   */
  flush(): Promise<void>;

  /**
   * Flushes the file stream. This API returns the result asynchronously. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the file stream is refreshed
   *     successfully, **err** is **undefined**; otherwise, **err** is an error object.
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
   * @since 23 static
   */
  flush(callback: AsyncCallback<void>): void;

  /**
   * Flushes the file stream. This API returns the result synchronously.
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
   * @since 23 static
   */
  flushSync(): void;

  /**
   * Writes data to a stream file and returns the number of bytes written.
   * This API uses a promise to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to write, in bytes. The default value is the buffer length.
   *     <br>- **offset** (number): start position to write the data in the file, in bytes.
   *     This parameter is optional. By default, data is written from the current position.
   *     <br>- **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported.
   * @returns { Promise<long> } Promise used to return the length of the data written, in bytes.
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
   * @since 23 static
   */
  write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<long>;

  /**
   * Writes data to a stream file and returns the number of bytes written. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { AsyncCallback<long> } callback - Callback used to return the length of the data written, in bytes.
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
   * @since 23 static
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<long>): void;

  /**
   * Writes data to a stream file and returns the number of bytes written. The write options can be configured.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to write, in bytes. This parameter is optional.
   *     The default value is the buffer length.
   *     <br>- **offset** (number): start position to write the data in the file, in bytes.
   *     This parameter is optional. By default, data is written from the current position.
   *     <br>- **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported.
   * @param { AsyncCallback<long> } callback - Callback used to return the length of the data written, in bytes.
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
   * @since 23 static
   */
  write(
    buffer: ArrayBuffer | string,
    options: WriteOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Writes data to a stream file synchronously and returns the number of bytes written.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { WriteOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to write, in bytes. This parameter is optional.
   *     The default value is the buffer length.
   *     <br>- **offset** (number): start position to write the data in the file, in bytes.
   *     This parameter is optional. By default, data is written from the current position.
   *     <br>- **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported.
   * @returns { long } Length of the data written in the file, in bytes.
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
   * @since 23 static
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): long;

  /**
   * Reads data from a stream file and returns the number of bytes read. This API uses a promise to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.
   *     <br>- **offset** (number): position of the data to read in the file, in bytes. This parameter is optional. By
   *     default, data is read from the current position.
   * @returns { Promise<long> } Promise used to return the data read, in bytes.
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
   * @since 23 static
   */
  read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<long>;

  /**
   * Reads data from a stream file and returns the number of bytes read. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { AsyncCallback<long> } callback - Callback used to return the data read, in bytes.
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
   * @since 23 static
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<long>): void;

  /**
   * Reads data from a stream file and returns the number of bytes read. The read options can be configured. This API
   * uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.
   *     <br>- **offset** (number): position of the data to read in the file, in bytes.
   *     This parameter is optional. By default, data is read from the current position.
   * @param { AsyncCallback<long> } callback - Callback used to return the data read, in bytes.
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
   * @since 23 static
   */
  read(
    buffer: ArrayBuffer,
    options: ReadOptions,
    callback: AsyncCallback<long>
  ): void;

  /**
   * Reads data from a stream file synchronously and returns the number of bytes read.
   *
   * @param { ArrayBuffer } buffer - Buffer used to store the file read.
   * @param { ReadOptions } [options] - The options are as follows:
   *     <br>- **length** (number): length of the data to read, in bytes. This parameter is optional.
   *     The default value is the buffer length.
   *     <br>- **offset** (number): position of the data to read in the file, in bytes.
   *     This parameter is optional. By default, data is read from the current position.
   *     <br>
   * @returns { long } Length of the data read, in bytes.
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
   * @since 23 static
   */
  readSync(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): long;
}

/**
 * Provides APIs for observing the changes of files or directories.
 * Before using the APIs of Watcher, call createWatcher() to create a Watcher object.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Watcher {
  /**
   * Starts listening.
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
   * @since 23 static
   */
  start(): void;

  /**
   * Stops listening and removes the Watcher object.
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
   * @since 23 static
   */
  stop(): void;
}

/**
 * Enumerates file memory mapping modes.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
enum MappingMode {
  /**
   * Read-only mode. The file mapping area is not writable. An exception is thrown when the file mapping area is
   * modified.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  READ_ONLY = 0,

  /**
   * Read/Write mode. The modification is written to the file mapping area and then synchronized to the file by the
   * operating system (non-real-time).
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  READ_WRITE = 1,

  /**
   * Private mode. It is a copy-on-write mapping mechanism. Modifications to the mapping area are visible only to the
   * current process and do not affect the raw file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PRIVATE = 2
}

/**
 * Enumerates the types of the relative offset position used in **lseek()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum WhenceType {
  /**
   * Beginning of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_SET = 0,

  /**
   * Current offset position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_CUR = 1,

  /**
   * End of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_END = 2
}

/**
 * Enumerates the file locations.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum LocationType {
  /**
   * The file is stored in a local device.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  LOCAL = 1 << 0,

  /**
   * The file is stored in the cloud.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  CLOUD = 1 << 1
}

/**
 * Enumerates the access modes to verify. If this parameter is left blank, the system checks whether the file exists.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum AccessModeType {
  /**
   * Whether the file exists.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  EXIST = 0,

  /**
   * Verify the write permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  WRITE = 2,

  /**
   * Verify the read permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  READ = 4,

  /**
   * Verify the read/write permission on the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  READ_WRITE = 6
}

/**
 * Enumerates the locations of the file to verify.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum AccessFlagType {
  /**
   * The file is stored locally.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  LOCAL = 0
}

/**
 * Provides a **ReaderIterator** object. Before calling APIs of **ReaderIterator**, you need to use **readLines()** to
 * create a **ReaderIterator** instance.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface ReaderIterator {
  /**
   * Obtains the **ReaderIterator** result.
   *
   * @returns { ReaderIteratorResult } **ReaderIteratorResult** object obtained.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  next(): ReaderIteratorResult;
}

}

/**
 * Defines a watch event listener. When the monitored file or directory changes, a callback is triggered.
 *
 * @param { WatchEvent } event - Event for the callback to invoke.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export type WatchEventListener = (event: WatchEvent) => void;

/**
 * Defines the event to observe.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WatchEvent {
  /**
   * Sandbox path of the file to observe. The sandbox path contains the file name.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fileName: string;

  /**
   * Events to observe. Multiple events can be separated by vertical bars (|).
   *
   * - **0x1: IN_ACCESS**: A file is accessed.
   * - **0x2: IN_MODIFY**: The file content is modified.
   * - **0x4: IN_ATTRIB**: The file metadata is modified.
   * - **0x8: IN_CLOSE_WRITE**: A file is opened, written with data, and then closed.
   * - **0x10: IN_CLOSE_NOWRITE**: A file or directory is opened and then closed without data written.
   * - **0x20: IN_OPEN**: A file or directory is opened.
   * - **0x40: IN_MOVED_FROM**: A file in the observed directory is moved.
   * - **0x80: IN_MOVED_TO**: A file is moved to the observed directory.
   * - **0x100: IN_CREATE**: A file or directory is created in the observed directory.
   * - **0x200: IN_DELETE**: A file or directory is deleted from the observed directory.
   * - **0x400: IN_DELETE_SELF**: The observed directory is deleted. After the directory is deleted, the listening
   * stops.
   * - **0x800: IN_MOVE_SELF**: The observed file or directory is moved. After the file or directory is moved, the
   * listening continues.
   * - **0xfff: IN_ALL_EVENTS**: All events.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly event: int;

  /**
   * Cookie bound with the event.
   *
   * Currently, only the **IN_MOVED_FROM** and **IN_MOVED_TO** events are supported. The **IN_MOVED_FROM** and
   * **IN_MOVED_TO** events of the same file have the same **cookie** value.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly cookie: int;
}

/**
 * Represents the information obtained by the **ReaderIterator** object.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReaderIteratorResult {
  /**
   * Whether the iteration is complete. The value **true** means the iteration is complete; the value **false** means
   * the opposite.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  done: boolean;

  /**
   * File text content read line by line.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  value: string;
}

/**
 * Defines the file filtering configuration used by **listFile()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface Filter {
  /**
   * Locate files that fully match the specified file name extensions, which are of the OR relationship.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  suffix?: Array<string>;

  /**
   * Locate files that fuzzy match the specified file names, which are of the OR relationship. Currently, only the
   * wildcard * is supported.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  displayName?: Array<string>;

  /**
   * Locate files that fully match the specified MIME types, which are of the OR relationship. This parameter is
   * reserved.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  mimeType?: Array<string>;

  /**
   * Locate files that are greater than the specified size, in bytes.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  fileSizeOver?: long;

  /**
   * Locate files whose last modification time is the same or later than the specified time.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lastModifiedAfter?: double;

  /**
   * Whether to exclude the files already in **Media**.
   *
   * The value **true** means to exclude the files already in **Media**; the value **false** means not to exclude the
   * files already in **Media**. This parameter is reserved.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  excludeMedia?: boolean;
}

/**
 * Defines conflicting file information used in **copyDir()** or **moveDir()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ConflictFiles {
  /**
   * Path of the source file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  srcFile: string;

  /**
   * Path of the destination file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  destFile: string;
}

/**
 * Defines the options used in **readLines()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface Options {
  /**
   * File encoding format. It is optional.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  encoding?: string;
}

/**
 * Defines the options used in **read()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadOptions {
  /**
   * Start position of the file to read, in bytes. This parameter is optional.
   * By default, data is read from the current position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  offset?: long;

  /**
   * Length of the data to read, in bytes. This parameter is optional. The default value is the buffer length.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  length?: long;
}

/**
 * Defines the options used in **readText()**. It inherits from [ReadOptions]{@link ReadOptions}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadTextOptions extends ReadOptions {
  /**
   * Format of the data to be encoded. This parameter is valid only when the data type is string.
   * The default value is 'utf-8', which is the only value supported.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  encoding?: string;
}

/**
 * Defines the options used in **write()**. It inherits from [Options]{@link Options}.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WriteOptions extends Options {
  /**
   * Start position of the file to write, in bytes. This parameter is
   * optional. By default, data is written from the current position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  offset?: long;
  /**
   * Length of the data to write, in bytes. This parameter is optional. The default value is the buffer length.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  length?: long;
}

/**
 * Defines the options used in **listFile()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ListFileOptions {
  /**
   * Whether to list all files in the subdirectories recursively. This parameter is optional. The default value is
   * **false**. If **recursion** is **false**, the names of files and directories that meet the filtering requirements
   * in the current directory are returned. If **recursion** is **true**, relative paths (starting with /) of all files
   * that meet the specified conditions in the current directory are returned.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  recursion?: boolean;

  /**
   * Number of file names to list. This parameter is optional. The default value is **0**, which means to list all
   * files.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  listNum?: long;

  /**
   * File filtering configuration. This parameter is optional. It specifies the file filtering conditions.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  filter?: Filter;
}

/**
 * Describes a file name filter, which can be used to customize file name filtering rules.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface FileFilter {
  /**
   * Filters files of the [listFileExt]{@link fileIo.listFileExt} or [listFileExtSync]{@link fileIo.listFileExtSync} API
   * and determines whether a specified file name should be included in the returned file list.
   *
   * > **NOTE**
   * >
   * > This function is frequently called. Do not perform time-consuming operations, such as file I/O operations and
   * > network requests.
   *
   * @param { string } name - Name or relative path of the file to be filtered. In recursive mode, the value is a
   *     relative file path, which starts with a slash (/).
   * @returns { boolean } Whether the file is included in the returned file list. The value **true** indicates the file
   *     is included, and the value **false** indicates the opposite.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  filter(name: string): boolean;
}

/**
 * Defines the options used in **listFileExt**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface ListFileExtOptions {
  /**
   * Whether to list all files in subfolders recursively. The default value is **false**.
   *
   * **false**: The names of files and directories that meet the filtering requirements in the current directory are
   * returned.
   *
   * **true**: Relative paths (starting with /) of all files that meet the filtering requirements in the directory are
   * returned.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  recursion?: boolean;

  /**
   * Number of file names to be listed. The default value is **0**, indicating that all files are listed.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  listNum?: long;

  /**
   * File name filtering rule. The default value is empty, indicating that no filtering is performed.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fileFilter?: FileFilter;
}

/**
 * Defines the options used in **createRandomAccessFile()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface RandomAccessFileOptions {
  /**
   * Start position to read the data, in bytes. This parameter is optional. By default, data is read from the current
   * position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;

  /**
   * End position to read the data, in bytes. This parameter is optional. The default value is the end of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  end?: long;
}

/**
 * Defines the options used in **createReadStream()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadStreamOptions {
  /**
   * Start position to read the data, in bytes. This parameter is optional. By default, data is read from the current
   * position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;

  /**
   * End position to read the data, in bytes. This parameter is optional. The default value is the end of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  end?: long;
}

/**
 * Defines the options used in **createWriteStream()**.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WriteStreamOptions {
  /**
   * [OpenMode]{@link fileIo.OpenMode} for creating the writeable stream. You must specify one of the following options.
   *
   * - **OpenMode.READ_ONLY(0o0)**: read-only, which is the default value.
   * - **OpenMode.WRITE_ONLY(0o1)**: write-only.
   * - **OpenMode.READ_WRITE(0o2)**: read/write.
   *
   * You can also specify the following options, separated by a bitwise OR operator (|). By default, no additional
   * options are given.
   *
   * - **OpenMode.CREATE(0o100)**: If the file does not exist, create it.
   * - **OpenMode.TRUNC(0o1000)**: If the file exists and is opened in write mode, truncate the file length to 0.
   * - **OpenMode.APPEND(0o2000)**: Open the file in append mode. New data will be added to the end of the file.
   * - **OpenMode.NONBLOCK(0o4000)**: If **path** points to a named pipe (also known as a FIFO), block special file, or
   * character special file, perform non-blocking operations on the opened file and in subsequent I/Os.
   * - **OpenMode.DIR(0o200000)**: If **path** does not point to a directory, throw an exception. The write permission
   * is not allowed.
   * - **OpenMode.NOFOLLOW(0o400000)**: If **path** points to a symbolic link, throw an exception.
   * - **OpenMode.SYNC(0o4010000)**: Open the file in synchronous I/O mode.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  mode?: int;
  /**
   * Start position to write the data, in bytes. This parameter is optional. By default, data is written from the
   * current position.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;
}

/**
 * Provides APIs for interrupting a copy task.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type TaskSignal = fileIo.TaskSignal;

/**
 * Provides APIs for observing the changes of files or directories. Before using the APIs of **Watcher**, call
 * **createWatcher()** to create a **Watcher** object.
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type Watcher = fileIo.Watcher;

/**
 * AtomicFile
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type AtomicFile = fileIo.AtomicFile;

export default fileIo;
export {TaskSignal, Watcher, AtomicFile};
