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
 * 本模块是Core File Kit的核心模块，提供基础文件操作API，用于对应用沙箱内的文件和目录进行创建、打开、读写、拷贝、移动、删除、查询属性等操作。
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
   * open接口flags参数常量，用于指定文件打开模式（如只读、只写、读写、创建等）。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  namespace OpenMode {
    /**
     * 只读打开。值为 0o0。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const READ_ONLY: int;
    /**
     * 只写打开。值为 0o1。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const WRITE_ONLY: int;
    /**
     * 读写打开。值为 0o2。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const READ_WRITE: int;
    /**
     * 若文件不存在，则创建文件。值为 0o100。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const CREATE: int;
    /**
     * 如果文件存在且以只写或读写的方式打开，则将其长度裁剪为零。值为 0o1000
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const TRUNC: int;
    /**
     * 以追加方式打开，后续写将追加到文件末尾。值为 0o2000。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const APPEND: int;
    /**
     * 如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。值为 0o4000。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const NONBLOCK: int;
    /**
     * 如果path不指向目录，则出错。值为 0o200000。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const DIR: int;
    /**
     * 如果path指向符号链接，则出错。值为 0o400000。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const NOFOLLOW: int;
    /**
     * 以同步IO的方式打开文件。值为 0o4010000。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 23 static
     */
    const SYNC: int;
    /**
     * 读写文件不进行页缓存。值为 0o10000000000。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @since 26.0.0 static
     */
    const UNCACHE: int;
  }

/**
 * 检查文件或目录是否存在，或校验操作权限。使用Promise异步回调。
 *
 * 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { AccessModeType } [mode] - 文件或目录校验的权限。不填该参数则默认校验文件是否存在。
 * @returns { Promise<boolean> } Promise对象。返回true表示文件或目录存在；返回false表示文件或目录不存在。
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
 * 检查文件或目录是否存在。使用callback异步回调。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { AsyncCallback<boolean> } callback - 异步检查文件或目录是否存在的回调。如果存在，回调返回true；否则返回false。
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
 * 检查文件或目录是否在本地，或校验操作权限。使用Promise异步回调。
 *
 * 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { AccessModeType } mode - 文件或目录校验的权限。
 * @param { AccessFlagType } flag - 文件或目录校验的位置。
 * @returns { Promise<boolean> } Promise对象。返回true表示文件或目录在本地且校验权限存在；返回false表示文件或目录不存在或者文件或目录在云端或其他分布式设备上。
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
 * 以同步方法检查文件或目录是否存在，或校验操作权限。
 *
 * 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { AccessModeType } [mode] - 文件或目录校验的权限。不填该参数则默认校验文件或目录是否存在。
 * @returns { boolean } 返回true，表示文件或目录存在；返回false，表示文件或目录不存在。
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
 * 以同步方法检查文件或目录是否在本地，或校验操作权限。
 *
 * 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { AccessModeType } mode - 文件或目录校验的权限。
 * @param { AccessFlagType } flag - 文件或目录校验的位置。
 * @returns { boolean } 返回true，表示文件或目录在本地且校验权限存在；返回false，表示文件或目录不存在或者文件或目录在云端或其他分布式设备上。
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
 * 关闭文件或目录，关闭后文件描述符fd失效，不可再用于读写等操作。使用Promise异步回调。
 *
 * @param { int | File } file - 已打开的File对象或已打开的文件描述符fd。关闭后File对象或文件描述符fd不可再用于读写等操作，继续使用可能导致错误或操作失败。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 关闭文件或目录，关闭后文件描述符fd失效，不可再用于读写等操作。使用callback异步回调。
 *
 * @param { int | File } file - 已打开的File对象或已打开的文件描述符fd。关闭后File对象或文件描述符fd不可再用于读写等操作，继续使用可能导致错误或操作失败。
 * @param { AsyncCallback<void> } callback - 回调函数。当异步关闭文件或目录成功，err为undefined，否则为错误对象。
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
 * 以同步方法关闭文件或目录，关闭后文件描述符fd失效，不可再用于读写等操作。
 *
 * @param { int | File } file - 已打开的File对象或已打开的文件描述符fd。关闭后File对象或文件描述符fd不可再用于读写等操作，继续使用可能导致错误或操作失败。
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
 * 拷贝文件或目录。使用Promise异步回调。
 *
 * 支持跨设备拷贝。强制覆盖拷贝。入参支持文件或目录URI。
 *
 * 跨端拷贝时，最多同时存在10个拷贝任务；单次拷贝的文件数量不得超过500个。
 *
 * @param { string } srcUri - 待复制文件或目录的URI。
 * @param { string } destUri - 目标文件或目录的URI。
 * @param { CopyOptions } [options] - options中提供拷贝进度回调。不填该参数则无拷贝进度回调。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 拷贝文件或者目录。使用callback异步回调。
 *
 * 支持跨设备拷贝。强制覆盖拷贝。入参支持文件或目录URI。
 *
 * 跨端拷贝时，最多同时存在10个拷贝任务；单次拷贝的文件数量不得超过500个。
 *
 * @param { string } srcUri - 待复制文件或目录的URI。
 * @param { string } destUri - 目标文件或目录的URI。
 * @param { AsyncCallback<void> } callback - 回调函数。当拷贝成功，err为undefined，否则为错误对象。
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
 * 拷贝文件或者目录。使用callback异步回调。
 *
 * 支持跨设备拷贝。强制覆盖拷贝。入参支持文件或目录URI。
 *
 * 跨端拷贝时，最多同时存在10个拷贝任务；单次拷贝的文件数量不得超过500个。
 *
 * @param { string } srcUri - 待复制文件或目录的URI。
 * @param { string } destUri - 目标文件或目录的URI。
 * @param { CopyOptions } options - 拷贝进度回调。
 * @param { AsyncCallback<void> } callback - 回调函数。当拷贝成功，err为undefined，否则为错误对象。
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
 * 复制源目录及其内容至目标路径下，可设置冲突处理模式。使用Promise异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { int } [mode] - 复制模式，默认值为0。<br/>
 *     - mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部拷贝至目标目录下，目
 *     标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<[ConflictFiles]{@link ConflictFiles}>形式提供。<br/>
 *     - mode为1，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 复制源目录及其内容至目标路径下。使用callback异步回调。
 *
 * 如果目标目录下有与源目录名冲突的目录，且冲突目录下有同名文件，则抛出异常。源目录下未冲突的文件全部拷贝至目标目录下，目标目录下未冲突文件将继续保留。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 回调函数。当复制目录成功，err为undefined，否则为错误对象。
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
 * 复制源目录及其内容至目标路径下，可设置冲突处理模式。使用callback异步回调。
 *
 * 如果目标目录下有与源目录名冲突的目录，且冲突目录下有同名文件，则抛出异常。
 * 源目录下未冲突的文件全部移动至目标目录下，目标目录下冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<ConflictFiles>形式提供。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - 回调函数。当复制目录成功，err为undefined；否则为错误对象。
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDirWithConflictFiles(src: string, dest: string, callback: AsyncCallback<void,
   Array<ConflictFiles>>): void;

/**
 * 复制源目录及其内容至目标路径下，可设置冲突处理模式。使用callback异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { int } mode - 复制模式。<br/>
 *     - mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部拷贝至目标目录下，目标目录下未冲突文
 *     件将继续保留。<br/>- mode为1，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。
 * @param { AsyncCallback<void> } callback - 回调函数。当复制目录成功，err为undefined，否则为错误对象。
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
 * 复制源目录及其内容至目标路径下，可设置冲突处理模式。使用callback异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { int } mode - 复制模式。<br/>
 *     - mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部拷贝至目标目录下，目标目录下未冲突文
 *     件将继续保留。<br/>- mode为1，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - 回调函数。当复制目录成功，err为undefined；否则为错误对象。
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function copyDirWithConflictFiles(src: string, dest: string, mode: int,
  callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * 以同步方法复制源目录至目标路径下。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { int } [mode] - 复制模式，默认值为0。<br/>
 *     - mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部拷贝至目标目录下，目
 *     标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<[ConflictFiles]{@link ConflictFiles}>形式提供。<br/>
 *     - mode为1，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。
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
 * 复制文件。使用Promise异步回调。
 *
 * @param { string | int } src - 待复制文件的路径或待复制文件的文件描述符。
 * @param { string | int } dest - 目标文件路径或目标文件的文件描述符。
 * @param { int } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁剪掉。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 复制文件，覆盖方式为完全覆盖目标文件，未覆盖部分将被裁剪。使用callback异步回调。
 *
 * @param { string | int } src - 待复制文件的路径或待复制文件的文件描述符。
 * @param { string | int } dest - 目标文件路径或目标文件的文件描述符。
 * @param { AsyncCallback<void> } callback - 回调函数。当复制文件成功，err为undefined，否则为错误对象。
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
 * 复制文件，可设置覆盖文件的方式。使用callback异步回调。
 *
 * @param { string | int } src - 待复制文件的路径或待复制文件的文件描述符。
 * @param { string | int } dest - 目标文件路径或目标文件的文件描述符。
 * @param { int } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁剪掉。
 * @param { AsyncCallback<void> } callback - 回调函数。当复制文件成功，err为undefined，否则为错误对象。
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
 * 以同步方法复制文件。
 *
 * @param { string | int } src - 待复制文件的路径或待复制文件的文件描述符。
 * @param { string | int } dest - 目标文件路径或目标文件的文件描述符。
 * @param { int } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁剪掉。
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
 * 基于文件路径创建文件流。使用Promise异步回调。需要配合[Stream]{@link fileIo.Stream}中的close()函数关闭文件流。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>
 *     - w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Promise<Stream> } Promise对象，返回文件流的结果。
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
 * 基于文件路径创建文件流，需要配合[Stream]{@link fileIo.Stream}中的close()函数关闭文件流。使用callback异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>
 *     - w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @param { AsyncCallback<Stream> } callback - 回调函数，返回Stream对象。
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
 * 以同步方法基于文件路径创建文件流。需要配合[Stream]{@link fileIo.Stream}中的close()函数关闭文件流。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>
 *     - w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Stream } 返回文件流的结果。
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
 * 基于文件路径或文件对象创建RandomAccessFile对象。使用Promise异步回调。
 *
 * @param { string | File } file - 文件的应用沙箱路径或已打开的File对象。
 * @param { int } [mode] - 创建文件RandomAccessFile对象的[OpenMode]{@link fileIo.OpenMode}，仅当传入文件沙箱路径时生效，必须指定如下选项中的一个，
 *     默认以只读方式创建：<br/>- OpenMode.READ_ONLY(0o0)：只读创建。<br/>- OpenMode.WRITE_ONLY(0o1)：只写创建。<br/>
 *     - OpenMode.READ_WRITE(0o2)：读写创建。<br/>给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>
 *     - RandomAccessFile对象存在且对应文件具有写权限，则将其长度裁剪为零。<br/>
 *     - OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到RandomAccessFile对象末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。<br/>
 *     - OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>
 *     - OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式创建RandomAccessFile对象。
 * @param { RandomAccessFileOptions } [options] - 支持如下选项：<br/>
 *     - start，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>
 *     - end，number类型，表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。<br/>
 *     此选项仅对[getreadstream]{@link fileIo.RandomAccessFile.getReadStream}及
 *     [getwritestream]{@link fileIo.RandomAccessFile.getWriteStream}获取的文件流对象生效。
 * @returns { Promise<RandomAccessFile> } Promise对象，返回RandomAccessFile对象的结果。
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
 * 基于文件路径或文件对象，以只读方式创建RandomAccessFile对象。使用callback异步回调。
 *
 * @param { string | File } file - 文件的应用沙箱路径或已打开的File对象。
 * @param { AsyncCallback<RandomAccessFile> } callback - 回调函数，返回RandomAccessFile对象。
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
 * 基于文件路径或文件对象创建RandomAccessFile对象。使用callback异步回调。
 *
 * @param { string | File } file - 文件的应用沙箱路径或已打开的File对象。
 * @param { int } [mode] - 创建文件RandomAccessFile对象的[OpenMode]{@link fileIo.OpenMode}，仅当传入文件沙箱路径时生效，必须指定如下选项中的一个，
 *     默认以只读方式创建：<br/>- OpenMode.READ_ONLY(0o0)：只读创建。<br/>- OpenMode.WRITE_ONLY(0o1)：只写创建。<br/>
 *     - OpenMode.READ_WRITE(0o2)：读写创建。<br/>给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>
 *     - RandomAccessFile对象存在且对应文件具有写权限，则将其长度裁剪为零。<br/>
 *     - OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到RandomAccessFile对象末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。<br/>
 *     - OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>
 *     - OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式创建RandomAccessFile对象。
 * @param { AsyncCallback<RandomAccessFile> } callback - 回调函数，返回RandomAccessFile对象。
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
 * 基于文件路径或文件对象创建RandomAccessFile对象。
 *
 * @param { string | File } file - 文件的应用沙箱路径或已打开的File对象。
 * @param { int } [mode] - 创建文件RandomAccessFile对象的[OpenMode]{@link fileIo.OpenMode}，仅当传入文件沙箱路径时生效，必须指定如下选项中的一个，
 *     默认以只读方式创建：<br/>- OpenMode.READ_ONLY(0o0)：只读创建。<br/>- OpenMode.WRITE_ONLY(0o1)：只写创建。<br/>
 *     - OpenMode.READ_WRITE(0o2)：读写创建。<br/>给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>
 *     - RandomAccessFile对象存在且对应文件具有写权限，则将其长度裁剪为零。<br/>
 *     - OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到RandomAccessFile对象末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。<br/>
 *     - OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>
 *     - OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式创建RandomAccessFile对象。
 * @param { RandomAccessFileOptions } [options] - 支持如下选项：<br/>
 *     - start，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>
 *     - end，number类型，表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。<br/>
 *     此选项仅对[getreadstream]{@link fileIo.RandomAccessFile.getReadStream}及
 *     [getwritestream]{@link fileIo.RandomAccessFile.getWriteStream}获取的文件流对象生效。
 * @returns { RandomAccessFile } 返回RandomAccessFile对象。
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
 * 以同步方法打开文件可读流。
 *
 * @param { string } path - 文件路径。
 * @param { ReadStreamOptions } [options] - 支持如下选项：<br/>- start，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>- end，
 *     number类型，表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。
 * @returns { ReadStream } 文件可读流。
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
 * 以同步方法打开文件可写流。
 *
 * @param { string } path - 文件路径。
 * @param { WriteStreamOptions } [options] - 支持如下选项：<br/>- start，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>
 *     - mode，number 类型，创建文件可写流的[OpenMode]{@link fileIo.OpenMode}，可选，默认以只写方式创建。
 * @returns { WriteStream } 文件可写流。
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
 * 创建Watcher对象，用于监听文件或目录的创建、删除、修改等变动事件。
 *
 * @param { string } path - 监听文件或目录的应用沙箱路径。
 * @param { int } events - 监听变动的事件集，多个事件通过或(|)的方式进行集合。<br/>- 0x1: IN_ACCESS， 文件被访问。<br/>
 *     - 0x2: IN_MODIFY，文件内容被修改。<br/>
 *     - 0x4: IN_ATTRIB，文件元数据被修改。<br/>- 0x8: IN_CLOSE_WRITE，文件在打开时进行了写操作，然后被关闭。<br/>
 *     - 0x10: IN_CLOSE_NOWRITE，文件或目录在打开时未进行写操作，然后被关闭。<br/>
 *     - 0x20: IN_OPEN，文件或目录被打开。 <br/>- 0x40: IN_MOVED_FROM，监听目录中文件被移动走。<br/>
 *     - 0x80: IN_MOVED_TO，监听目录中文件被移动过来。<br/>
 *     - 0x100: IN_CREATE，监听目录中文件或子目录被创建。<br/>
 *     - 0x200: IN_DELETE，监听目录中文件或子目录被删除。<br/>
 *     - 0x400: IN_DELETE_SELF，监听的目录被删除，删除后监听停止。<br/>
 *     - 0x800: IN_MOVE_SELF，监听的文件或目录被移动，移动后监听继续。<br/>
 *     - 0xfff: IN_ALL_EVENTS，监听以上所有事件。
 * @param { WatchEventListener } listener - 监听事件发生后的回调。监听事件每发生一次，回调一次。
 * @returns { Watcher } 返回Watcher对象。
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
 * 复制文件描述符，并返回对应的File对象。
 *
 * @param { int } fd - 文件描述符。
 * @returns { File } 打开的File对象。
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
 * 实现文件内容数据同步。使用Promise异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 实现文件内容数据同步。使用callback异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { AsyncCallback<void> } callback - 回调函数。当文件内容数据同步成功，err为undefined，否则为错误对象。
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
 * 以同步方法实现文件内容的数据同步。
 *
 * @param { int } fd - 已打开的文件描述符fd。
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
 * 基于文件描述符打开文件流。使用Promise异步回调。需要配合[Stream]{@link fileIo.Stream}中的close()函数关闭文件流。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>
 *     - w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾，即文件原先的内容会被保留。<br/>
 *     - a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Promise<Stream> } Promise对象，返回文件流的结果。
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
 * 基于文件描述符打开文件流，需要配合[Stream]{@link fileIo.Stream}中的close()函数关闭文件流。使用callback异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>
 *     - w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾，即文件原先的内容会被保留。<br/>
 *     - a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @param { AsyncCallback<Stream> } callback - 回调函数，返回Stream对象。
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
 * 以同步方法基于文件描述符打开文件流。需要配合[Stream]{@link fileIo.Stream}中的close()函数关闭文件流。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>
 *     - w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>
 *     - a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾，即文件原先的内容会被保留。<br/>
 *     - a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Stream } 返回文件流的结果。
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
 * 将文件系统缓存数据写入磁盘。使用Promise异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 将文件系统缓存数据写入磁盘。使用callback异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { AsyncCallback<void> } callback - 回调函数。当文件系统缓存数据写入磁盘成功，err为undefined，否则为错误对象。
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
 * 以同步方法将文件系统缓存数据写入磁盘。
 *
 * @param { int } fd - 已打开的文件描述符fd。
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
 * 默认列出当前目录下所有文件名和目录名，返回文件名数组，支持按后缀、文件名等条件过滤。使用Promise异步回调。
 *
 * 可通过配置ListFileOptions中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { ListFileOptions } [options] - 文件过滤选项。默认不进行过滤。
 * @returns { Promise<string[]> } Promise对象，返回文件名数组，默认以'utf-8'编码。
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
 * 默认列出当前目录下所有文件名和目录名，返回文件名数组。使用callback异步回调。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { AsyncCallback<string[]> } callback - 回调函数，返回文件名数组，默认以'utf-8'编码。
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
 * 默认列出当前目录下所有文件名和目录名，返回文件名数组，支持按后缀、文件名等条件过滤。使用callback异步回调。
 *
 * 可通过配置ListFileOptions中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { ListFileOptions } [options] - 文件过滤选项。
 * @param { AsyncCallback<string[]> } callback - 回调函数，返回文件名数组，默认以'utf-8'编码。
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
 * 默认以同步方式列出当前目录下所有文件名和目录名，返回文件名数组，支持按后缀、文件名等条件过滤。
 *
 * 可通过配置ListFileOptions中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { ListFileOptions } [options] - 文件过滤选项。默认不进行过滤。
 * @returns { string[] } 返回文件名数组，默认以'utf-8'编码。
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
 * 列出目录下所有文件名，支持递归列出和自定义文件名过滤。使用Promise异步回调。
 *
 * 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { ListFileExtOptions } [options] - 文件列出选项。默认为空，表示不递归、不限制列出数量、不进行过滤。
 * @returns { Promise<string[]> } Promise对象，返回文件名数组。
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
 * 以同步方式列出目录下所有文件名，支持递归列出和自定义文件名过滤。
 *
 * 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { ListFileExtOptions } [options] - 文件列出选项。默认为空，表示不递归、不限制列出数量、不进行过滤。
 * @returns { string[] } 返回文件名数组。
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
 * 调整文件偏移指针位置。
 *
 * @param { int } fd - 文件描述符。
 * @param { long } offset - 相对偏移位置，单位为Byte。
 * @param { WhenceType } [whence] - 偏移指针相对位置类型。不指定则默认为文件起始位置处。
 * @returns { long } 当前文件偏移指针位置（相对于文件头的偏移量，单位为Byte）。
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
 * 获取符号链接文件信息，返回符号链接本身的属性而非目标文件的属性。使用Promise异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径path或URI。
 *     <br>**说明**：从API version 22开始，支持传入URI。
 * @returns { Promise<Stat> } Promise对象，返回Stat对象，表示文件的具体信息，详情见Stat。
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
 * 获取符号链接文件信息，返回符号链接本身的属性而非目标文件的属性。使用callback异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径path或URI。
 *     <br>**说明**：从API version 22开始，支持传入URI。
 * @param { AsyncCallback<Stat> } callback - 回调函数，返回Stat对象。
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
 * 以同步方法获取符号链接文件信息，返回符号链接本身的属性而非目标文件的属性。
 *
 * @param { string } path - 文件的应用沙箱路径path或URI。
 *     <br>**说明**：从API version 22开始，支持传入URI。
 * @returns { Stat } 表示文件的具体信息。
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
 * 创建单层目录，若父目录不存在则会报错。使用Promise异步回调。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 创建目录。使用Promise异步回调。当recursion指定为true时，可递归创建目录。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { boolean } recursion - 是否递归创建目录。recursion指定为true时，可递归创建目录。recursion指定为false时，仅可创建单层目录。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 创建单层目录，若父目录不存在则会报错。使用callback异步回调。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 回调函数。当创建目录成功，err为undefined，否则为错误对象。
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
 * 创建目录，当recursion指定为true，可递归创建目录。使用callback异步回调。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { boolean } recursion - 是否递归创建目录。recursion指定为true时，可递归创建目录。recursion指定为false时，仅可创建单层目录。
 * @param { AsyncCallback<void> } callback - 回调函数。当创建目录成功，err为undefined，否则为错误对象。
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
 * 以同步方法创建单层目录，若父目录不存在则会报错。
 *
 * @param { string } path - 目录的应用沙箱路径。
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
 * 以同步方法创建目录。当recursion指定为true，可递归创建目录。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { boolean } recursion - 是否递归创建目录。recursion指定为true时，可递归创建目录。recursion指定为false时，仅可创建单层目录。
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
 * 创建临时目录。使用Promise异步回调。
 *
 * @param { string } prefix - 指定目录路径，命名时需要以"XXXXXX"作为结尾。路径末尾的"XXXXXX"字符串将被替换为随机字符，以创建唯一的目录名。
 * @returns { Promise<string> } Promise对象，返回生成的唯一目录路径。
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
 * 创建临时目录。使用callback异步回调。
 *
 * @param { string } prefix - 指定目录路径，命名时需要以"XXXXXX"作为结尾。路径末尾的"XXXXXX"字符串将被替换为随机字符，以创建唯一的目录名。
 * @param { AsyncCallback<string> } callback - 回调函数，返回临时目录路径。
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
 * 以同步方法创建临时目录。
 *
 * @param { string } prefix - 指定目录路径，命名时需要以"XXXXXX"作为结尾。路径末尾的"XXXXXX"字符串将被替换为随机字符，以创建唯一的目录名。
 * @returns { string } 产生的唯一目录路径。
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
 * 基于文件描述符或文件对象创建文件映射对象，实现文件的高效读写访问。使用Promise异步回调。
 *
 * > **说明：**
 * >
 * > 1. 仅支持对常规文件（regular file）进行内存映射，不支持管道、socket、设备文件等非常规文件类型。可通过[statSync]{@link fileIo.statSync}获取文件属性后调用
 * > [Stat.isFile()]{@link fileIo.Stat.isFile}判断文件是否为常规文件。
 * >
 * > 2. 若映射范围超过原始文件大小且文件具有写权限，将自动扩展映射文件大小。
 * >
 * > 3. 对于外部存储或网络文件等，由于底层文件系统的差异，映射的建立及对映射内存的访问行为不做保证，可能导致应用异常终止。建议此类场景优先使用[read]{@link fileIo.read}、
 * > [write]{@link fileIo.write}或[Stream]{@link fileIo.Stream}等其他文件访问接口。
 *
 * @param { int | File } file - 已打开的File对象或已打开的文件描述符fd。
 * @param { MappingMode } mode - 创建文件内存映射对象的选项，必须指定如下选项中的一个：<br/>
 *     - MappingMode.READ_ONLY(0)：只读映射模式。文件映射区不可写，修改会抛出异常。<br/>
 *     - MappingMode.READ_WRITE(1)：读写映射模式。修改会写入文件映射区，后续由操作系统同步到文件（非实时）。<br/>
 *     - MappingMode.PRIVATE(2)：私有映射模式。是一种写时复制的映射机制，对映射区的修改仅对当前进程可见，不会影响原始文件。
 * @param { long } offset - 文件映射区的起始位置，单位为Byte。
 * @param { int } size - 文件映射区的大小，取值范围(0, INT32_MAX]，单位为Byte。
 * @returns { Promise<FileMapping> } Promise对象，返回文件映射对象。返回的对象初始状态：position为0，limit和capacity均等于size。
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
 * 以同步方法基于文件描述符或文件对象创建文件映射对象，实现文件的高效读写访问。
 *
 * > **说明：**
 * >
 * > 1. 仅支持对常规文件（regular file）进行内存映射，不支持管道、socket、设备文件等非常规文件类型。可通过[statSync]{@link fileIo.statSync}获取文件属性后调用
 * > [Stat.isFile()]{@link fileIo.Stat.isFile}判断文件是否为常规文件。
 * >
 * > 2. 若映射范围超过原始文件大小且文件具有写权限，将自动扩展映射文件大小。
 * >
 * > 3. 对于外部存储或网络文件等，由于底层文件系统的差异，映射的建立及对映射内存的访问行为不做保证，可能导致应用异常终止。建议此类场景优先使用[read]{@link fileIo.read}、
 * > [write]{@link fileIo.write}或[Stream]{@link fileIo.Stream}等其他文件访问接口。
 *
 * @param { int | File } file - 已打开的File对象或已打开的文件描述符fd。
 * @param { MappingMode } mode - 创建文件内存映射对象的选项，必须指定如下选项中的一个：<br/>
 *     - MappingMode.READ_ONLY(0)：只读映射模式。文件映射区不可写，修改会抛出异常。<br/>
 *     - MappingMode.READ_WRITE(1)：读写映射模式。修改会写入文件映射区，后续由操作系统同步到文件（非实时）。<br/>
 *     - MappingMode.PRIVATE(2)：私有映射模式。是一种写时复制的映射机制，对映射区的修改仅对当前进程可见，不会影响原始文件。
 * @param { long } offset - 文件映射区的起始位置，单位为Byte。
 * @param { int } size - 文件映射区的大小，取值范围(0, INT32_MAX]，单位为Byte。
 * @returns { FileMapping } 创建的文件映射对象。返回的对象初始状态：position为0，limit和capacity均等于size。
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
 * 移动源目录及其内容至目标路径下。使用Promise异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { int } [mode] - 移动模式，默认值为0。<br/>- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的非空目录，则抛出异常。<br/>
 *     - mode为1，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，
 *     目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array< [ConflictFiles]{@link ConflictFiles}>形式提供。<br/>
 *     - mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。<br/>
 *     - mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下的所有原始文件将被删除。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 移动源目录及其内容至目标路径下。使用callback异步回调。
 *
 * 移动模式为目录级别抛异常。当目标目录下存在与源目录名冲突的目录，则抛出异常。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 回调函数。当移动目录成功，err为undefined，否则为错误对象。
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
 * Moves the source directory to the destination directory. This API uses an asynchronous callback to return the
 * result.
 *
 * @param { string } src - Application sandbox path of the source directory.
 * @param { string } dest - Application sandbox path of the destination directory.
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - Callback used to return the result.
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
 function moveDirWithConflictFiles(src: string, dest: string, callback:  AsyncCallback<void,
  Array<ConflictFiles>>): void;

/**
 * 移动源目录及其内容至目标路径下，支持设置冲突处理模式。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { int } mode - 移动模式。<br/>- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的目录，则抛出异常。<br/>
 *     - mode为1，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突 目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留。<br/>
 *     - mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。<br/>
 *     - mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下所有原始文件将被删除。
 * @param { AsyncCallback<void> } callback - 回调函数。当移动目录成功，err为undefined，否则为错误对象。
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
 * 移动源目录及其内容至目标路径下，支持设置冲突处理模式。使用callback异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { int } mode - 移动模式。<br/>- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的目录，则抛出异常。<br/>
 *     - mode为1，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留。<br/>
 *     - mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。<br/>
 *     - mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下所有原始文件将被删除。
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - 异步移动目录之后的回调。
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
function moveDirWithConflictFiles(src: string, dest: string, mode: int,
  callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * 以同步方法移动源目录及其内容至目标路径下。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { int } [mode] - 移动模式，默认值为0。<br/>- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的目录，则抛出异常。<br/>
 *     - mode为1，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留，
 *     且冲突文件信息将在抛出异常的data属性中以Array<[ConflictFiles]{@link ConflictFiles}>形式提供。<br/>
 *     - mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。<br/>
 *     - mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下所有原始文件将被删除。
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
 * 移动文件至目标路径，支持设置冲突处理模式。使用Promise异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源文件的应用沙箱路径。
 * @param { string } dest - 目标文件的应用沙箱路径。
 * @param { int } [mode] - 移动模式。若mode为0，移动位置存在同名文件时，强制移动覆盖。若mode为1，移动位置存在同名文件时，抛出异常。默认为0。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 移动文件。如果移动位置存在同名文件，将强制覆盖。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源文件的应用沙箱路径。
 * @param { string } dest - 目标文件的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 回调函数。当移动文件成功，err为undefined，否则为错误对象。
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
 * 移动文件至目标路径，支持设置冲突处理模式。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源文件的应用沙箱路径。
 * @param { string } dest - 目标文件的应用沙箱路径。
 * @param { int } [mode] - 移动模式。若mode为0，移动位置存在同名文件时，强制移动覆盖。若mode为1，移动位置存在同名文件时，抛出异常。默认为0。
 * @param { AsyncCallback<void> } callback - 回调函数。当移动文件成功，err为undefined，否则为错误对象。
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
 * 以同步方式移动文件至目标路径。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源文件的应用沙箱路径。
 * @param { string } dest - 目标文件的应用沙箱路径。
 * @param { int } [mode] - 移动模式。若mode为0，移动位置存在同名文件时，强制移动覆盖。若mode为1，移动位置存在同名文件时，抛出异常。默认为0。
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
 * 打开文件或目录，支持使用URI打开文件。使用Promise异步回调。
 *
 * @param { string } path - 文件或目录的应用沙箱路径或文件URI。
 * @param { int } [mode] - 打开文件或目录的[OpenMode]{@link fileIo.OpenMode}，必须指定如下选项中的一个，默认以只读方式打开：<br/>
 *     - OpenMode.READ_ONLY(0o0)：只读打开。<br/>- OpenMode.WRITE_ONLY(0o1)：只写打开。<br/>
 *     - OpenMode.READ_WRITE(0o2)：读写打开。<br/>可以追加以下功能选项，以按位或的方式组合，默认情况下不追加任何额外选项。<br/>
 *     - OpenMode.CREATE(0o100)：如果文件不存在，则创建文件。<br/>
 *     - OpenMode.TRUNC(0o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>
 *     - OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。<br/>
 *     - OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>
 *     - OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>
 *     - OpenMode.SYNC(0o4010000)：以同步IO方式打开文件。<br/>
 *     - OpenMode.UNCACHE(0o10000000000)：读写文件不进行页缓存，从API版本26.0.0开始支持此选项。
 * @returns { Promise<File> } Promise对象，返回File对象。
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
 * 打开文件或目录，支持使用URI打开文件。使用callback异步回调。
 *
 * @param { string } path - 文件或目录的应用沙箱路径或URI。
 * @param { AsyncCallback<File> } callback - 回调函数，返回File对象。
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
 * 打开文件或目录，可设置打开文件的选项。使用callback异步回调。
 *
 * 支持使用URI打开文件。
 *
 * @param { string } path - 文件或目录的应用沙箱路径或URI。
 * @param { int } [mode] - 打开文件或目录的[OpenMode]{@link fileIo.OpenMode}，必须指定如下选项中的一个，默认以只读方式打开：<br/>
 *     - OpenMode.READ_ONLY(0o0)：只读打开。<br/>- OpenMode.WRITE_ONLY(0o1)：只写打开。<br/>
 *     - OpenMode.READ_WRITE(0o2)：读写打开。<br/>可以追加以下功能选项，以按位或的方式组合，默认情况下不追加任何额外选项。<br/>
 *     - OpenMode.CREATE(0o100)：如果文件不存在，则创建文件。<br/>
 *     - OpenMode.TRUNC(0o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>
 *     - OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。<br/>
 *     - OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>
 *     - OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>
 *     - OpenMode.SYNC(0o4010000)：以同步IO方式打开文件。<br/>
 *     - OpenMode.UNCACHE(0o10000000000)：读写文件不进行页缓存，从API版本26.0.0开始支持此选项。
 * @param { AsyncCallback<File> } callback - 回调函数，返回File对象。
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
 * 以同步方法打开文件或目录。支持使用URI打开文件。
 *
 * @param { string } path - 打开文件或目录的应用沙箱路径或URI。
 * @param { int } [mode] - 打开文件或目录的[OpenMode]{@link fileIo.OpenMode}，必须指定如下选项中的一个，默认以只读方式打开：<br/>
 *     - OpenMode.READ_ONLY(0o0)：只读打开。<br/>- OpenMode.WRITE_ONLY(0o1)：只写打开。<br/>
 *     - OpenMode.READ_WRITE(0o2)：读写打开。<br/>可以追加以下功能选项，以按位或的方式组合，默认情况下不追加任何额外选项。<br/>
 *     - OpenMode.CREATE(0o100)：如果文件不存在，则创建文件。<br/>
 *     - OpenMode.TRUNC(0o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>
 *     - OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。<br/>
 *     - OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>
 *     - OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>
 *     - OpenMode.SYNC(0o4010000)：以同步IO方式打开文件。<br/>
 *     - OpenMode.UNCACHE(0o10000000000)：读写文件不进行页缓存，从API版本26.0.0开始支持此选项。
 * @returns { File } 打开的File对象。
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
 * 从文件读取数据，返回实际读取的字节数。使用Promise异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { ReadOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>- length，
 *     number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。
 * @returns { Promise<long> } Promise对象，返回实际读取的数据长度，单位为Byte。
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
 * 从文件读取数据，返回实际读取的字节数。使用callback异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { AsyncCallback<long> } callback - 回调函数。返回实际读取的数据长度，单位为Byte。
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
 * 从文件读取数据，支持配置读取选项（如偏移位置和读取长度），返回实际读取的字节数。使用callback异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { ReadOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>- length，
 *     number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。
 * @param { AsyncCallback<long> } callback - 回调函数，返回实际读取的数据长度，单位为Byte。
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
 * 以同步方法从文件读取数据，返回实际读取的字节数。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { ReadOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>- length，
 *     number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。
 * @returns { long } 返回实际读取的数据长度，单位为Byte。
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
 * 逐行读取文件文本内容，只支持读取utf-8格式文件。使用promise异步回调。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { Options } [options] - 可选项。支持以下选项：<br/>- encoding，string类型，当数据是 string 类型时有效，表示数据的编码方式，
 *     默认 'utf-8'，仅支持 'utf-8'。
 * @returns { Promise<ReaderIterator> } Promise对象，返回文件读取迭代器。
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
 * 逐行读取文件文本内容，只支持读取utf-8格式文件。使用callback异步回调。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { AsyncCallback<ReaderIterator> } callback - 回调函数，返回文件读取迭代器。
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
 * 逐行读取文件文本内容，可配置读取选项，只支持读取utf-8格式文件。使用callback异步回调。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { Options } options - 读取选项。支持以下选项：<br/>- encoding，string类型，当数据是 string 类型时有效，表示数据的编码方式，
 *     默认 'utf-8'，仅支持 'utf-8'。
 * @param { AsyncCallback<ReaderIterator> } callback - 回调函数，返回文件读取迭代器。
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
 * 以同步方式逐行读取文件的文本内容，只支持读取utf-8格式文件。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { Options } [options] - 可选项。支持以下选项：<br/>- encoding，string类型，当数据是 string 类型时有效，表示数据的编码方式，
 *     默认 'utf-8'，仅支持 'utf-8'。
 * @returns { ReaderIterator } 返回文件读取迭代器。
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
 * 基于文本方式读取文件（即直接读取文件的文本内容）。使用Promise异步回调。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { ReadTextOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>- 
 *     length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认文件长度。<br/>- encoding，string类型，当数据是 string 类型时有效，表示数据的编码方式，默认 'utf-8'，
 *     仅支持'utf-8'。
 * @returns { Promise<string> } Promise对象，返回读取文件的内容。
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
 * 基于文本方式读取文件内容。使用callback异步回调。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { AsyncCallback<string> } callback - 回调函数，返回读取文件的内容。
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
 * 基于文本方式读取文件内容，支持配置读取选项。使用callback异步回调。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { ReadTextOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>- 
 *     length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认文件长度。<br/>- encoding，string类型，表示数据的编码方式，默认 'utf-8'，仅支持 'utf-8'。
 * @param { AsyncCallback<string> } callback - 回调函数，返回读取文件的内容。
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
 * 以同步方法基于文本方式读取文件（即直接读取文件的文本内容）。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { ReadTextOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>- 
 *     length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认文件长度。<br/>- encoding，string类型，当数据是 string 类型时有效，表示数据的编码方式，默认 'utf-8'，
 *     仅支持'utf-8'。
 * @returns { string } 返回读取文件的内容。
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
 * 重命名文件或目录。使用Promise异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } oldPath - 文件或目录的应用沙箱原路径。
 * @param { string } newPath - 文件或目录的应用沙箱新路径。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 重命名文件或目录。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } oldPath - 文件或目录的应用沙箱原路径。
 * @param { string } newPath - 文件或目录的应用沙箱新路径。
 * @param { AsyncCallback<void> } callback - 回调函数。当重命名文件成功，err为undefined，否则为错误对象。
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
 * 以同步方法重命名文件或目录。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } oldPath - 文件或目录的应用沙箱原路径。
 * @param { string } newPath - 文件或目录的应用沙箱新路径。
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
 * 删除目录及其所有子目录和文件。使用Promise异步回调。
 *
 * > **说明：**
 * >
 * > 该接口支持删除单个文件，但不推荐使用此方法删除单个文件，推荐使用unlink接口删除单个文件。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 删除目录及其所有子目录和文件。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口支持删除单个文件，但不推荐使用此方法删除单个文件，推荐使用unlink接口删除单个文件。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 回调函数。当删除目录成功，err为undefined，否则为错误对象。
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
 * 以同步方法删除目录及其所有子目录和文件。
 *
 * > **说明：**
 * >
 * > 该接口支持删除单个文件，但不推荐使用此方法删除单个文件，推荐使用unlinkSync接口删除单个文件。
 *
 * @param { string } path - 目录的应用沙箱路径。
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
 * 获取文件或目录详细属性信息，返回包含文件大小、权限模式、访问时间、修改时间等属性的Stat对象。使用Promise异步回调。
 *
 * @param { string | int } file - 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。
 *     <br>**说明**：从API version 22开始，支持传入URI。
 * @returns { Promise<Stat> } Promise对象，返回文件或目录的具体信息。
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
 * 获取文件或目录的详细属性信息，返回包含文件大小、权限模式、访问时间、修改时间等属性的Stat对象。使用callback异步回调。
 *
 * @param { string | int } file - 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。
 *     <br>**说明**：从API version 22开始，支持传入URI。
 * @param { AsyncCallback<Stat> } callback - 异步获取文件或目录的信息之后的回调。
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
 * 以同步方法获取文件或目录详细属性信息，返回包含文件大小、权限模式、访问时间、修改时间等属性的Stat对象。
 *
 * @param { string | int } file - 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。
 *     <br>**说明**：从API version 22开始，支持传入URI。
 * @returns { Stat } 表示文件或目录的具体信息。
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
 * 基于文件路径创建符号链接。使用Promise异步回调。
 *
 * > **说明：**
 * >
 * > 从API version 11开始，不支持三方应用使用。
 *
 * @param { string } target - 要链接的目标文件的应用沙箱路径。
 * @param { string } srcPath - 符号链接文件的应用沙箱路径。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 基于文件路径创建符号链接。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 从API version 11开始，不支持三方应用使用。
 *
 * @param { string } target - 要链接的目标文件的应用沙箱路径。
 * @param { string } srcPath - 符号链接文件的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 回调函数。当创建符号链接成功，err为undefined，否则为错误对象。
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
 * 以同步的方法基于文件路径创建符号链接。
 *
 * > **说明：**
 * >
 * > 从API version 11开始，不支持三方应用使用。
 *
 * @param { string } target - 要链接的目标文件的应用沙箱路径。
 * @param { string } srcPath - 符号链接文件的应用沙箱路径。
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
 * 截断文件，将文件大小调整为指定长度，超出部分的内容将被删除。使用Promise异步回调。
 *
 * @param { string | int } file - 文件的应用沙箱路径或已打开的文件描述符fd。
 * @param { long } [len] - 文件截断后的长度，单位为Byte。默认为0。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 截断文件，删除文件内容。使用callback异步回调。
 *
 * @param { string | int } file - 文件的应用沙箱路径或已打开的文件描述符fd。
 * @param { AsyncCallback<void> } callback - 回调函数。当截断文件成功，err为undefined，否则为错误对象。
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
 * 截断文件，将文件大小调整为指定长度，超出部分的内容将被删除。使用callback异步回调。
 *
 * @param { string | int } file - 文件的应用沙箱路径或已打开的文件描述符fd。
 * @param { long } len - 文件截断后的长度，单位为Byte。
 * @param { AsyncCallback<void> } callback - 回调函数。当截断文件成功，err为undefined，否则为错误对象。
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
 * 以同步方法截断文件内容，将文件大小调整为指定长度，超出部分的内容将被删除。
 *
 * @param { string | int } file - 文件的应用沙箱路径或已打开的文件描述符fd。
 * @param { long } [len] - 文件截断后的长度，单位为Byte。默认为0。
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
 * 删除单个文件，仅适用于文件，不可用于删除目录。使用Promise异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 删除单个文件，仅适用于文件，不可用于删除目录。使用callback异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 回调函数。当删除文件成功，err为undefined，否则为错误对象。
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
 * 以同步方法删除单个文件，仅适用于文件，不可用于删除目录。
 *
 * @param { string } path - 文件的应用沙箱路径。
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
 * 更改文件上次修改该文件的时间。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { double } mtime - 待更新的时间戳。自1970年1月1日起至目标时间的毫秒数。仅支持更改上次修改该文件的时间属性。
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
 * 将数据写入文件，返回实际写入的字节数。使用Promise异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { WriteOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写入。<br/>- 
 *     length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认 'utf-8'。
 *     当前仅支持 'utf-8'。
 * @returns { Promise<long> } Promise对象，返回实际写入的数据长度，单位为Byte。
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
 * 将数据写入文件，返回实际写入的字节数。使用callback异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { AsyncCallback<long> } callback - 回调函数，返回实际写入的数据长度，单位为Byte。
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
 * 将数据写入文件，支持配置写入选项（如偏移位置和写入长度），返回实际写入的字节数。使用callback异步回调。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { WriteOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- length，
 *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认 'utf-8'。
 *     当前仅支持 'utf-8'。
 * @param { AsyncCallback<long> } callback - 回调函数，返回实际写入的数据长度，单位为Byte。
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
 * 以同步方法将数据写入文件，返回实际写入的字节数。
 *
 * @param { int } fd - 已打开的文件描述符fd。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { WriteOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- length，
 *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认 'utf-8'。
 *     当前仅支持 'utf-8'。
 * @returns { long } 返回实际写入的数据长度，单位为Byte。
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
 * 业务调用connectDfs接口，触发建链。如果对端设备出现异常，业务执行回调DfsListeners内
 * [onStatus](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#onstatus12)通知应用。可参考
 * [跨设备文件共享和访问](docroot://file-management/file-access-across-devices.md)文档进行开发。
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - 设备的网络Id。通过
 *     [distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager}接口调用
 *     [DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}获得。
 * @param { DfsListeners } listeners - 分布式文件系统状态监听器。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 业务调用disconnectDfs接口，传入networkId参数，触发断链。
 * 可参考[跨设备文件共享和访问](docroot://file-management/file-access-across-devices.md)文档进行开发。
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - 设备的网络Id。通过
 *     [distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager}接口调用
 *     [DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}获得。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * @param { string } networkId - 设备的网络Id。
 * @param { int } status - 分布式文件系统的状态码（以connectDfs回调onStatus的特定错误码作为入参）。
 *     触发场景为connectDfs调用过程中出现对端设备异常，对应错误码为：- 13900046：软件造成连接中断。
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 23 static
 */
type DfsListenerCallback = (networkId: string, status: int) => void;

/**
 * 事件监听类。创建DFSListener对象，用于监听分布式文件系统状态。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 23 static
 */
export interface DfsListeners {
  /**
   * 分布式文件系统状态监听器。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 23 static
   */
  onStatus: DfsListenerCallback;
}

/**
 * 设置文件或目录的扩展属性。使用promise异步回调。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { string } key - 扩展属性的key。仅支持前缀为“user.”的字符串，且长度需小于256字节。
 * @param { string } value - 扩展属性的value。
 * @returns { Promise<void> } Promise对象，无返回结果。
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
 * 设置文件或目录的扩展属性。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { string } key - 扩展属性的key。仅支持前缀为“user.”的字符串，且长度需小于256字节。
 * @param { string } value - 扩展属性的value。
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
 * 获取文件或目录的扩展属性。使用promise异步回调。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { string } key - 扩展属性的key。
 * @returns { Promise<string> } Promise对象，返回扩展属性的value。
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
 * 使用同步接口获取文件或目录的扩展属性。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { string } key - 扩展属性的key。
 * @returns { string } 返回扩展属性的value。
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
 * 拷贝进度回调数据
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Progress {
  /**
   * 已拷贝的数据大小，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly processedSize: long;
  
  /**
   * 待拷贝的数据总大小，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly totalSize: long;
}

/**
 * 拷贝中断信号。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
class TaskSignal {
  /**
   * 取消拷贝任务。
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
 * 拷贝进度回调监听
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface CopyOptions {
  /**
   * 拷贝进度监听。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  progressListener?: ProgressListener;
  /**
   * 取消拷贝信号。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  copySignal?: TaskSignal;
}

/**
 * 拷贝进度监听。
 *
 * @param { Progress } progress - indicates the progress data of copyFile
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
  type ProgressListener = (progress: Progress) => void;

/**
 * 由open接口打开的File对象，持有文件描述符fd，提供文件锁和获取父目录等能力。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface File {

  /**
   * 已打开的文件描述符fd。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fd: int;

  /**
   * 文件路径。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * 文件名。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly name: string;

  /**
   * 获取File对象对应文件的父目录路径。
   *
   * @returns { string } 返回父目录路径。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  getParent(): string;

  /**
   * 对文件阻塞式施加共享锁或独占锁。使用Promise异步回调。
   *
   * @param { boolean } exclusive - 是否施加独占锁，默认false。true：施加独占锁；false：不施加独占锁。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 对文件阻塞式施加共享锁。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当文件上锁成功，err为undefined，否则为错误对象。
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
   * 对文件阻塞式施加共享锁或独占锁。使用callback异步回调。
   *
   * @param { boolean } exclusive - 是否施加独占锁。true：施加独占锁；false：不施加独占锁。
   * @param { AsyncCallback<void> } callback - 回调函数。当文件上锁成功，err为undefined，否则为错误对象。
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
   * 文件非阻塞式施加共享锁或独占锁。
   *
   * @param { boolean } exclusive - 是否施加独占锁，默认false。true：施加独占锁；false：不施加独占锁。
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
   * 以同步方式解锁文件。
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
 * 文件映射对象，在调用FileMapping的方法前，需要先通过[mmap()]{@link fileIo.mmap}或方法[mmapSync()]{@link fileIo.mmapSync}构建一个FileMapping实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
interface FileMapping {
  /**
   * 设置文件映射区的当前位置。
   *
   * @param { int } position - 期望设置的目标位置，单位为Byte。
   *     <br>必须为非负数且不大于当前可读写上界的limit，可通过[getLimit()]{@link fileIo.FileMapping.getLimit}获得可读写上界的limit。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setPosition(position: int): void;

  /**
   * 获取文件映射区的当前位置。
   *
   * @returns { int } 文件映射区的当前位置，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getPosition(): int;

  /**
   * 获取文件映射区的容量。
   *
   * @returns { int } 文件映射区的容量，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  capacity(): int;

  /**
   * 设置文件映射区可读写区域的上界。
   *
   * @param { int } limit - 要设置的可读写区域上界值，单位为Byte。
   *     <br>取值需大于等于0，且小于等于当前[capacity]{@link fileIo.FileMapping.capacity}。若所设值小于文件映射区的当前位置，则当前位置将自动调整至该值。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  setLimit(limit: int): void;

  /**
   * 获取文件映射区可读写区域的上界。
   *
   * @returns { int } 当前可读写区域上界值，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getLimit(): int;

  /**
   * 翻转文件映射区，将写入准备状态切换为读取准备状态。调用后，limit被设置为当前position的值，position被重置为0。
   *
   * 推荐在一系列
   * [write()]{@link fileIo.Stream.write( buffer: ArrayBuffer | string, options: WriteOptions, callback: 
   *     AsyncCallback<long> )}
   * 操作完成后，调用此方法准备后续的
   * [read()]{@link fileIo.Stream.read( buffer: ArrayBuffer, options: ReadOptions, callback: AsyncCallback<long> )}
   * 操作。
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
   * 获取从当前位置（position）到可读写区域的上界（limit）之间的剩余字节数。
   *
   * @returns { int } 剩余可读或可写的字节数，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  remaining(): int;

  /**
   * 从当前位置读取数据，并将位置后移实际读取的字节数。
   *
   * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
   * @param { int } [length] - 期望读取数据的长度，单位为Byte。默认缓冲区长度。
   * @returns { int } 返回实际读取的数据长度，单位为Byte。
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
   * 从指定位置读取数据，当前位置不会发生移动。
   *
   * @param { int } position - 期望读取的起始位置，单位为Byte。
   * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
   * @param { int } [length] - 期望读取数据的长度，单位为Byte。默认缓冲区长度。
   * @returns { int } 返回实际读取的数据长度，单位为Byte。
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
   * 从当前位置写入数据，并将位置后移实际写入的字节数。
   *
   * @param { ArrayBuffer } data - 待写入文件的缓冲区数据。
   * @param { int } [length] - 期望写入数据的长度，单位为Byte。默认缓冲区长度。
   * @returns { int } 返回实际写入的长度，单位为Byte。
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
   * 从指定位置写入数据，当前位置不会发生移动。
   *
   * @param { int } position - 期望写入的起始位置，单位为Byte。
   * @param { ArrayBuffer } data - 待写入文件的缓冲区数据。
   * @param { int } [length] - 期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。
   * @returns { int } 返回实际写入的长度，单位为Byte。
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
   * 将整个文件映射区的数据同步到磁盘文件。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 将文件映射区指定范围内的数据同步到磁盘文件。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。
   *
   * @param { int } position - 期望同步的起始位置，单位为Byte。
   * @param { int } length - 期望同步的数据长度，单位为Byte。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 以同步方法将整个文件映射区的数据同步到磁盘文件。
   *
   * > **说明：**
   * >
   * > 如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。
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
   * 以同步方法将文件映射区指定范围内的数据同步到磁盘文件。
   *
   * > **说明：**
   * >
   * > 如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。
   *
   * @param { int } position - 期望同步的起始位置，单位为Byte。
   * @param { int } length - 期望同步的数据长度，单位为Byte。
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
   * 释放文件映射区。使用Promise异步回调。调用后，position、limit和capacity均被重置为0，FileMapping对象不可再进行任何操作。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  unmap(): Promise<void>;

  /**
   * 以同步方法释放文件映射区。调用后，position、limit和capacity均被重置为0，FileMapping对象不可再进行任何操作。
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
 * 随机读写文件流，提供基于偏移指针的随机读写能力。在调用RandomAccessFile的方法前，需要先通过createRandomAccessFile()方法（同步或异步）来构建一个RandomAccessFile实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface RandomAccessFile {

  /**
   * 已打开的文件描述符fd。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fd: int;

  /**
   * RandomAccessFile对象的偏移指针，表示当前读写位置，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly filePointer: long;

  /**
   * 设置文件偏移指针，用于指定后续读写等操作的起始位置。
   *
   * @param { long } filePointer - RandomAccessFile对象的偏移指针，单位为Byte。
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
   * 以同步方式关闭RandomAccessFile对象，关闭后不可再用于读写等操作。
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
   * 将数据写入文件。使用Promise异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。<br/>- encoding，
   *     string类型，当数据是string类型时有效，表示数据的编码方式，默认 'utf-8'。仅支持 'utf-8'。
   * @returns { Promise<long> } Promise对象，返回实际写入的长度，单位为Byte。
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
   * 将数据写入文件。使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { AsyncCallback<long> } callback - 回调函数，返回实际写入数据长度，单位为Byte。
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
   * 将数据写入文件，支持配置写入选项。使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认为缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。<br/>- encoding，
   *     string类型，当数据是string类型时有效，表示数据的编码方式，默认 'utf-8'。仅支持 'utf-8'。
   * @param { AsyncCallback<long> } callback - 回调函数，返回实际写入数据长度，单位为Byte。
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
   * 以同步方法将数据写入文件。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。<br/>- encoding，
   *     string类型，当数据是string类型时有效，表示数据的编码方式，默认 'utf-8'。仅支持 'utf-8'。
   * @returns { long } 实际写入的长度，单位为Byte。
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
   * 从文件读取数据，返回实际读取的字节数。使用Promise异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认为缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始读。
   * @returns { Promise<long> } Promise对象，返回读取的结果，单位为Byte。
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
   * 从文件读取数据，返回实际读取的字节数。使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { AsyncCallback<long> } callback - 回调函数，返回实际读取的数据长度，单位为Byte。
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
   * 从文件读取数据，支持配置读取选项，返回实际读取的字节数。使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示读取数据的长度，单位为Byte。可选，默认为缓冲区长度。<br/>- offset，
   *     number类型，表示读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从filePointer开始读。
   * @param { AsyncCallback<long> } callback - 回调函数，返回实际读取的数据长度，单位为Byte。
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
   * 以同步方法从文件读取数据，返回实际读取的字节数。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始读。<br/>
   * @returns { long } 实际读取的长度，单位为Byte。
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
   * 获取当前RandomAccessFile的一个ReadStream实例，用于流式读取文件数据。
   *
   * @returns { ReadStream } 文件可读流。
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
   * 获取当前RandomAccessFile的一个WriteStream实例，用于流式写入文件数据。
   *
   * @returns { WriteStream } 文件可写流。
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
 * 文件可读流，需要先通过[fileIo.createReadStream]{@link fileIo.createReadStream}方法来构建一个ReadStream实例。ReadStream继承自数据流基类
 * [stream.Readable]{@link @ohos.util.stream:stream.Readable}。
 *
 * **规格**：ReadStream读到的数据为解码后的字符串，其编码格式当前仅支持'utf-8'。
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
   * 可读流已经读取的字节数。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly bytesRead: long;

  /**
   * 当前可读流对应的文件路径。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * 调整可读流偏移指针位置。
   *
   * @param { long } offset - 相对偏移位置，单位为Byte。
   * @param { WhenceType } [whence = WhenceType.SEEK_SET] - Where to start the offset. The default value is SEEK_SET,
   *     <br>which indicates the beginning of the file.
   * @returns { long } 当前可读流偏移指针位置（相对于文件头的偏移量，单位为Byte）。
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  seek(offset: long, whence?: WhenceType): long;

  /**
   * 关闭可读流。
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
 * 文件可写流，需要先通过[fileIo.createWriteStream]{@link fileIo.createWriteStream}方法来构建一个WriteStream实例。WriteStream继承自数据流基类
 * [stream.Writable]{@link @ohos.util.stream:stream.Writable}。
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
   * 可写流已经写入的字节数。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly bytesWritten: long;

  /**
   * 当前可写流对应的文件路径。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly path: string;

  /**
   * 调整可写流的偏移指针位置。
   *
   * @param { long } offset - 相对偏移位置，单位为Byte。
   * @param { WhenceType } [whence = WhenceType.SEEK_SET] - Where to start the offset.
   *     <br>The default value is SEEK_SET, which indicates the beginning of the file.
   * @returns { long } 当前可写流偏移指针位置（相对于文件头的偏移量，单位为Byte）。
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  seek(offset: long, whence?: WhenceType): long;

  /**
   * 关闭可写流。
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
 * AtomicFile是一个用于对文件进行原子读写等操作的类。
 * 在写操作时，通过写入临时文件，并在写入成功后将其重命名到原始文件位置来确保写入文件的完整性；而在写入失败时删除临时文件，不修改原始文件内容。
 * 使用者可以自行调用finishWrite或failWrite来完成文件内容的写入或回滚。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export class AtomicFile {
  /**
   * 对于给定路径的文件创建一个AtomicFile类。
   *
   * @param { string } path - 文件的沙箱路径。
   * @throws { BusinessError } 401 Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  constructor(path: string);

  /**
   * 通过AtomicFile对象获取文件对象。
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
   * 创建一个读文件流。
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
   * 读取文件全部内容。
   *
   * @returns { ArrayBuffer } Full content of a file.
   * @throws { BusinessError } 13900005 I/O error
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readFully(): ArrayBuffer;

  /**
   * 对文件开始新的写入操作。将返回一个WriteStream，用于在其中写入新的文件数据。
   * 当文件不存在时新建文件。
   * 在写入文件完成后，写入成功需要调用finishWrite()，写入失败需要调用failWrite()。
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
   * 在完成对startWrite返回流的写入操作时调用，表示文件写入成功。
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  finishWrite(): void;

  /**
   * 文件写入失败后调用，将执行文件回滚操作。
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  failWrite(): void;

  /**
   * 删除AtomicFile类，会删除原始文件和临时文件。
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
 * 文件具体信息，包含文件大小、权限模式、访问时间、修改时间等属性。在调用Stat的方法前，需要先通过[stat()]{@link fileIo.stat}方法（同步或异步）构建一个Stat实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Stat {
  /**
   * 标识该文件。通常同设备上的不同文件的INO不同。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ino: bigint;

  /**
   * 表示文件权限，各特征位的含义如下：
   *
   * **说明**：以下值为八进制，取得的返回值为十进制，请换算后查看。
   *
   * - 0o400：用户读。对于普通文件，所有者可读取文件；对于目录，所有者可读取目录项。
   *
   * - 0o200：用户写。对于普通文件，所有者可写入文件；对于目录，所有者可创建/删除目录项。
   *
   * - 0o100：用户执行。对于普通文件，所有者可执行文件；对于目录，所有者可在目录中搜索给定路径名。
   *
   * - 0o040：用户组读。对于普通文件，所有用户组可读取文件；对于目录，所有用户组可读取目录项。
   *
   * - 0o020：用户组写。对于普通文件，所有用户组可写入文件；对于目录，所有用户组可创建/删除目录项。
   *
   * - 0o010：用户组执行。对于普通文件，所有用户组可执行文件；对于目录，所有用户组是否可在目录中搜索给定路径名。
   *
   * - 0o004：其他读。对于普通文件，其余用户可读取文件；对于目录，其他用户组可读取目录项。
   *
   * - 0o002：其他写。对于普通文件，其余用户可写入文件；对于目录，其他用户组可创建/删除目录项。
   *
   * - 0o001：其他执行。对于普通文件，其余用户可执行文件；对于目录，其他用户组可在目录中搜索给定路径名。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mode: long;

  /**
   * 文件所有者的ID。
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
   * 文件所有组的ID。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly gid: long;

  /**
   * 文件的大小，单位为Byte。仅对普通文件有效。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly size: long;

  /**
   * 上次访问该文件的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * **注意**：目前用户数据分区默认以“noatime”方式挂载，atime更新被禁用。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly atime: long;

  /**
   * 上次修改该文件的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mtime: long;

  /**
   * 最近改变文件状态的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ctime: long;

  /**
   * 上次访问该文件的时间，表示距1970年1月1日0时0分0秒的纳秒数。
   *
   * **注意**：目前用户数据分区默认以“noatime”方式挂载，atime更新被禁用。
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly atimeNs?:bigint;

  /**
   * 上次修改该文件的时间，表示距1970年1月1日0时0分0秒的纳秒数。
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly mtimeNs?:bigint;

  /**
   * 最近改变文件状态的时间，表示距1970年1月1日0时0分0秒的纳秒数。
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly ctimeNs?:bigint;

  /**
   * 文件的位置，表示该文件是本地文件或者云端文件。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly location: LocationType;

  /**
   * 用于判断文件是否是块特殊文件。一个块特殊文件只能以块为粒度进行访问，且访问的时候带缓存。
   *
   * @returns { boolean } 表示文件是否是块特殊设备。true：是块特殊设备；false：不是块特殊设备。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isBlockDevice(): boolean;

  /**
   * 判断文件是否为字符特殊文件。字符特殊设备支持随机访问，且访问时无缓存。
   *
   * @returns { boolean } 表示文件是否是字符特殊设备。true：是字符特殊设备；false：不是字符特殊设备。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isCharacterDevice(): boolean;

  /**
   * 判断文件是否为目录。
   *
   * @returns { boolean } 表示文件是否是目录。true：是目录；false：不是目录。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isDirectory(): boolean;

  /**
   * 用于判断文件是否是命名管道（有时也称为FIFO）。命名管道通常用于进程间通信。
   *
   * @returns { boolean } 表示文件是否是 FIFO。true：是FIFO；false：不是FIFO。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isFIFO(): boolean;

  /**
   * 用于判断文件是否是普通文件。
   *
   * @returns { boolean } 表示文件是否是普通文件。true：是普通文件；false：不是普通文件。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isFile(): boolean;

  /**
   * 判断文件是否是套接字。
   *
   * @returns { boolean } 表示文件是否是套接字。true：是套接字；false：不是套接字。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isSocket(): boolean;

  /**
   * 判断文件是否为符号链接。
   *
   * @returns { boolean } 表示文件是否是符号链接。true：是符号链接；false：不是符号链接。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  isSymbolicLink(): boolean;
}

/**
 * 文件流，提供流式读写文件数据的能力，使用完毕后需调用close关闭。在调用Stream的方法前，需要先通过[fileIo.createStream]{@link fileIo.createStream}方法或者
 * [fileIo.fdopenStream]{@link fileIo.fdopenStream}（同步或异步）来构建一个Stream实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Stream {
  /**
   * 关闭文件流，关闭后不可再用于读写等操作。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 关闭文件流，关闭后不可再用于读写等操作。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当关闭文件流成功，err为undefined，否则为错误对象。
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
   * 同步关闭文件流，关闭后不可再用于读写等操作。
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
   * 刷新文件流。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 异步刷新文件流。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当刷新文件流成功，err为undefined，否则为错误对象。
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
   * 同步刷新文件流。
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
   * 将数据写入流文件，返回实际写入的字节数。使用Promise异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- encoding，string类型，当数据是string类型时有效，
   *     表示数据的编码方式，默认 'utf-8'。仅支持 'utf-8'。
   * @returns { Promise<long> } Promise对象，返回实际写入的长度，单位为Byte。
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
   * 将数据写入流文件，返回实际写入的字节数。使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { AsyncCallback<long> } callback - 回调函数，返回实际写入的数据长度，单位为Byte。
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
   * 将数据写入流文件，支持配置写入选项，返回实际写入的字节数。使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，
   *     默认 'utf-8'。仅支持 'utf-8'。
   * @param { AsyncCallback<long> } callback - 回调函数，返回实际写入的数据长度，单位为Byte。
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
   * 以同步方法将数据写入流文件，返回实际写入的字节数。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，
   *     默认 'utf-8'。仅支持 'utf-8'。
   * @returns { long } 实际写入的长度，单位为Byte。
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
   * 从流文件读取数据，返回实际读取的字节数。使用Promise异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。
   * @returns { Promise<long> } Promise对象，返回读取的结果，单位为Byte。
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
   * 从流文件读取数据，返回实际读取的字节数。使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { AsyncCallback<long> } callback - 回调函数，返回读取的结果，单位为Byte。
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
   * 从流文件读取数据，支持配置读取选项，返回实际读取的字节数。使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。
   * @param { AsyncCallback<long> } callback - 回调函数，返回读取的结果，单位为Byte。
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
   * 以同步方法从流文件读取数据，返回实际读取的字节数。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>
   * @returns { long } 实际读取的长度，单位为Byte。
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
 * 文件目录变化监听对象。由createWatcher接口获得。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface Watcher {
  /**
   * 开启监听文件或目录变动事件。
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
   * 停止监听文件或目录变动事件并移除Watcher对象。
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
 * 文件内存映射模式类型的枚举。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
enum MappingMode {
  /**
   * 只读映射模式。文件映射区不可写，修改会抛出异常。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  READ_ONLY = 0,

  /**
   * 读写映射模式。修改会写入文件映射区，后续由操作系统同步到文件（非实时）。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  READ_WRITE = 1,

  /**
   * 私有映射模式。是一种写时复制的映射机制，对映射区的修改仅对当前进程可见，不会影响原始文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PRIVATE = 2
}

/**
 * 枚举，文件偏移指针相对偏移位置类型，支持lseek接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum WhenceType {
  /**
   * 文件起始位置处。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_SET = 0,

  /**
   * 当前文件偏移指针位置处。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_CUR = 1,

  /**
   * 文件末尾位置处。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  SEEK_END = 2
}

/**
 * 枚举，文件位置，表示该文件是否在本地或者云端存在。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum LocationType {
  /**
   * 文件在本地存在。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  LOCAL = 1 << 0,

  /**
   * 文件在云端存在。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  CLOUD = 1 << 1
}

/**
 * 枚举，表示需要校验的具体权限。若不填，默认校验文件是否存在。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum AccessModeType {
  /**
   * 文件是否存在。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  EXIST = 0,

  /**
   * 文件是否具有写入权限。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  WRITE = 2,

  /**
   * 文件是否具有读取权限。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  READ = 4,

  /**
   * 文件是否具有读写权限。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  READ_WRITE = 6
}

/**
 * 枚举，表示需要校验的文件位置。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
enum AccessFlagType {
  /**
   * 文件是否在本地。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  LOCAL = 0
}

/**
 * 文件读取迭代器。在调用ReaderIterator的方法前，需要先通过readLines方法（同步或异步）来构建一个ReaderIterator实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
interface ReaderIterator {
  /**
   * 获取迭代器下一项内容。
   *
   * @returns { ReaderIteratorResult } 文件读取迭代器返回结果。
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
 * 事件监听类，当监听的文件或目录发生变动事件时触发回调。
 *
 * @param { WatchEvent } event - 回调的事件类。
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export type WatchEventListener = (event: WatchEvent) => void;

/**
 * 事件类
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WatchEvent {
  /**
   * 发生监听事件对应文件的沙箱路径，该沙箱路径包含文件名称。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly fileName: string;

  /**
   * 监听变动的事件集，多个事件通过或(|)的方式进行集合。
   *
   * - 0x1: IN_ACCESS， 文件被访问。
   *
   * - 0x2: IN_MODIFY，文件内容被修改。
   *
   * - 0x4: IN_ATTRIB，文件元数据被修改。
   *
   * - 0x8: IN_CLOSE_WRITE，文件在打开时进行了写操作，然后被关闭。
   *
   * - 0x10: IN_CLOSE_NOWRITE，文件或目录在打开时未进行写操作，然后被关闭。
   *
   * - 0x20: IN_OPEN，文件或目录被打开。
   *
   * - 0x40: IN_MOVED_FROM，监听目录中文件被移动走。
   *
   * - 0x80: IN_MOVED_TO，监听目录中文件被移动过来。
   *
   * - 0x100: IN_CREATE，监听目录中文件或子目录被创建。
   *
   * - 0x200: IN_DELETE，监听目录中文件或子目录被删除。
   *
   * - 0x400: IN_DELETE_SELF，监听的目录被删除，删除后监听停止。
   *
   * - 0x800: IN_MOVE_SELF，监听的文件或目录被移动，移动后监听继续。
   *
   * - 0xfff: IN_ALL_EVENTS，监听以上所有事件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly event: int;

  /**
   * 绑定相关事件的cookie。当前仅支持事件IN_MOVED_FROM与IN_MOVED_TO，同一个文件的移动事件IN_MOVED_FROM和IN_MOVED_TO具有相同的cookie值。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  readonly cookie: int;
}

/**
 * 文件读取迭代器返回结果，支持ReaderIterator接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReaderIteratorResult {
  /**
   * 迭代器是否已完成迭代。true：已完成迭代；false：未完成迭代。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  done: boolean;

  /**
   * 逐行读取的文件文本内容。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  value: string;
}

/**
 * 文件过滤配置项，支持listFile接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface Filter {
  /**
   * 文件后缀名完全匹配，各个关键词OR关系。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  suffix?: Array<string>;

  /**
   * 文件名模糊匹配，各个关键词OR关系。当前仅支持通配符*。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  displayName?: Array<string>;

  /**
   * mime类型完全匹配，各个关键词OR关系。预留字段，暂不支持使用。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  mimeType?: Array<string>;

  /**
   * 文件大小匹配，大于指定大小的文件，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  fileSizeOver?: long;

  /**
   * 文件最近修改时间匹配，在指定时间点及之后的文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  lastModifiedAfter?: double;

  /**
   * 是否排除Media中已有的文件。true：排除Media中已有的文件；false：不排除Media中已有的文件。预留字段，暂不支持使用。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  excludeMedia?: boolean;
}

/**
 * 冲突文件信息，支持copyDir及moveDir接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ConflictFiles {
  /**
   * 源冲突文件路径。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  srcFile: string;

  /**
   * 目标冲突文件路径。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  destFile: string;
}

/**
 * 可选项类型，支持readLines接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface Options {
  /**
   * 文件编码方式。可选项。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  encoding?: string;
}

/**
 * 可选项类型，支持read接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadOptions {
  /**
   * 期望读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始读。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  offset?: long;

  /**
   * 期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  length?: long;
}

/**
 * 可选项类型，支持readText接口使用，ReadTextOptions继承自[ReadOptions]{@link ReadOptions}。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadTextOptions extends ReadOptions {
  /**
   * 当数据是 string 类型时有效，表示数据的编码方式，默认 'utf-8'，仅支持 'utf-8'。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  encoding?: string;
}

/**
 * 可选项类型，支持write接口使用，WriteOptions继承自[Options]{@link Options}。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WriteOptions extends Options {
  /**
   * 期望写入文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  offset?: long;
  /**
   * 期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  length?: long;
}

/**
 * 可选项类型，支持listFile接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ListFileOptions {
  /**
   * 是否递归子目录下文件名。可选，默认为false。当recursion为false时，返回当前目录下满足过滤要求的文件名及目录名。当recursion为true时，返回此目录下所有满足过滤要求的文件的相对路径（以“/”开头）。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  recursion?: boolean;

  /**
   * 列出文件名数量。可选，当设置0时，列出所有文件，默认为0。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  listNum?: long;

  /**
   * 文件过滤配置项。 可选，设置过滤条件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  filter?: Filter;
}

/**
 * 文件名过滤器接口，可通过该接口自定义文件名过滤规则。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface FileFilter {
  /**
   * 用于[listFileExt]{@link fileIo.listFileExt}或[listFileExtSync]{@link fileIo.listFileExtSync}接口的文件过滤，
   * 判断指定文件名是否应包含在返回的文件列表中。
   *
   * > **说明**：
   * >
   * > 该函数调用频率较高，请避免执行耗时操作，如文件I/O、网络请求等。
   *
   * @param { string } name - 待过滤的文件名或文件相对路径。递归模式下为文件的相对路径，相对路径以“/”开头。
   * @returns { boolean } 表示是否包含在返回的文件列表中。true：包含该文件；false：不包含该文件。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  filter(name: string): boolean;
}

/**
 * 可选项类型，支持listFileExt接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface ListFileExtOptions {
  /**
   * 是否递归子目录下的文件名，默认为false。
   *
   * false：返回当前目录下满足过滤要求的文件名及目录名。
   *
   * true：返回该目录下所有符合过滤条件的文件的相对路径，相对路径以“/”开头。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  recursion?: boolean;

  /**
   * 列出文件名数量，默认为0，表示列出所有文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  listNum?: long;

  /**
   * 自定义文件名过滤的规则，默认为空，表示不进行过滤。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fileFilter?: FileFilter;
}

/**
 * 可选项类型，支持 createRandomAccessFile 接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface RandomAccessFileOptions {
  /**
   * 表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;

  /**
   * 表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  end?: long;
}

/**
 * 可选项类型，支持 createReadStream 接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface ReadStreamOptions {
  /**
   * 表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;

  /**
   * 表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  end?: long;
}

/**
 * 可选项类型，支持 createWriteStream 接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
export interface WriteStreamOptions {
  /**
   * 创建文件可写流的[OpenMode]{@link fileIo.OpenMode}，必须指定如下选项中的一个，默认只写方式创建：
   *
   * - OpenMode.READ_ONLY(0o0)：只读。
   *
   * - OpenMode.WRITE_ONLY(0o1)：只写。
   *
   * - OpenMode.READ_WRITE(0o2)：读写。
   *
   * 给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：
   *
   * - OpenMode.CREATE(0o100)：若文件不存在，则创建文件。
   *
   * - OpenMode.TRUNC(0o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。
   *
   * - OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。
   *
   * - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。
   *
   * - OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。
   *
   * - OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。
   *
   * - OpenMode.SYNC(0o4010000)：以同步IO的方式打开文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  mode?: int;
  /**
   * 表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 23 static
   */
  start?: long;
}

/**
 * 拷贝中断信号。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type TaskSignal = fileIo.TaskSignal;

/**
 * 文件目录变化监听对象。由createWatcher接口获得。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type Watcher = fileIo.Watcher;

/**
 * AtomicFile类。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 23 static
 */
type AtomicFile = fileIo.AtomicFile;

export default fileIo;
export {TaskSignal, Watcher, AtomicFile};