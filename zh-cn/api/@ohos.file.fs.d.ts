/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';
import stream from './@ohos.util.stream';

/**
 * FileIO
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare namespace fileIo {
  export { access };
  export { accessSync };
  export { close };
  export { closeSync };
  export { copy };
  export { copyDir };
  export { copyDirSync };
  export { copyFile };
  export { copyFileSync };
  export { createRandomAccessFile };
  export { createRandomAccessFileSync };
  export { createStream };
  export { createStreamSync };
  export { createReadStream };
  export { createWriteStream };
  export { createWatcher };
  export { dup };
  export { fdatasync };
  export { fdatasyncSync };
  export { fdopenStream };
  export { fdopenStreamSync };
  export { fsync };
  export { fsyncSync };
  export { getxattr };
  export { getxattrSync };
  export { listFile };
  export { listFileSync };
  export { listFileExt };
  export { listFileExtSync };
  export { lseek };
  export { lstat };
  export { lstatSync };
  export { mkdir };
  export { mkdirSync };
  export { mkdtemp };
  export { mkdtempSync };
  export { mmap };
  export { mmapSync };
  export { moveDir };
  export { moveDirSync };
  export { moveFile };
  export { moveFileSync };
  export { open };
  export { openSync };
  export { read };
  export { readSync };
  export { readLines };
  export { readLinesSync };
  export { readText };
  export { readTextSync };
  export { rename };
  export { renameSync };
  export { rmdir };
  export { rmdirSync };
  export { setxattr };
  export { setxattrSync };
  export { stat };
  export { statSync };
  export { symlink };
  export { symlinkSync };
  export { truncate };
  export { truncateSync };
  export { unlink };
  export { unlinkSync };
  export { utimes };
  export { write };
  export { writeSync };
  export { AccessModeType };
  export { AccessFlagType };
  export { File };
  export { FileMapping };
  export { MappingMode };
  export { OpenMode };
  export { RandomAccessFile };
  export { ReaderIterator };
  export { Stat };
  export { Stream };
  export { ReadStream };
  export { WriteStream };
  export { AtomicFile };
  export { Watcher };
  export { WhenceType };
  export { TaskSignal };
  export { connectDfs };
  export { disconnectDfs };
  export type { Progress };
  export type { CopyOptions };
  export type { ProgressListener };
  export type { DfsListeners };

  /**
   * open接口flags参数常量。文件打开标签。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  namespace OpenMode {
    /**
     * 只读打开。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const READ_ONLY = 0o0;
    /**
     * 只写打开。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const WRITE_ONLY = 0o1;
    /**
     * 读写打开。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const READ_WRITE = 0o2;
    /**
     * 若文件不存在，则创建文件。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const CREATE = 0o100;
    /**
     * 如果文件存在且以只写或读写的方式打开，则将其长度裁剪为零。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const TRUNC = 0o1000;
    /**
     * 以追加方式打开，后续写将追加到文件末尾。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    const APPEND = 0o2000;
    /**
     * 如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    const NONBLOCK = 0o4000;
    /**
     * 如果path不指向目录，则出错。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    const DIR = 0o200000;
    /**
     * 如果path指向符号链接，则出错。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    const NOFOLLOW = 0o400000;
    /**
     * 以同步IO的方式打开文件。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    const SYNC = 0o4010000;
    /**
     * UNCACHE IO。
     *
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    const UNCACHE = 0o10000000000;
  }
}

/**
 * 检查文件或目录是否存在，或校验操作权限，使用promise异步回调。
 *
 * 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。
 *
 * @param { string } path - 文件或目录应用沙箱路径。
 * @param { AccessModeType } [mode] - 文件或目录校验的权限。不填该参数则默认校验文件是否存在。 [since 12]
 * @returns { Promise<boolean> } Promise对象。返回布尔值。返回true，表示文件存在；返回false，表示文件不存在。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function access(path: string, mode?: AccessModeType): Promise<boolean>;

/**
 * 检查文件或目录是否存在，使用callback异步回调。
 *
 * @param { string } path - 文件或目录应用沙箱路径。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function access(path: string, callback: AsyncCallback<boolean>): void;

/**
 * 检查文件或目录是否在本地，或校验操作权限，使用promise异步回调。
 *
 * 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。
 *
 * @param { string } path - 文件或目录应用沙箱路径。
 * @param { AccessModeType } mode - 文件或目录校验的权限。
 * @param { AccessFlagType } flag - 文件或目录校验的位置。
 * @returns { Promise<boolean> } Promise对象。返回布尔值。返回true，表示文件或目录在本地且校验权限存在；返回false，表示文件或目录不存在或者文件或目录在云端或其他分布式设备上。
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
 * @since 12 dynamic
 */
declare function access(path: string, mode: AccessModeType, flag: AccessFlagType): Promise<boolean>;

/**
 * 以同步方法检查文件或目录是否存在，或校验操作权限。
 *
 * 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。
 *
 * @param { string } path - 文件或目录应用沙箱路径。
 * @param { AccessModeType } [mode] - 文件或目录校验的权限。不填该参数则默认校验文件或目录是否存在。 [since 12]
 * @returns { boolean } 返回true，表示文件存在；返回false，表示文件不存在。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function accessSync(path: string, mode?: AccessModeType): boolean;

/**
 * 以同步方法检查文件或目录是否在本地，或校验操作权限。
 *
 * 校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。
 *
 * @param { string } path - 文件应用沙箱路径。
 * @param { AccessModeType } mode - 文件或目录校验的权限。
 * @param { AccessFlagType } flag - 文件或目录校验的位置。
 * @returns { boolean } 返回true，表示文件在本地且校验权限存在；返回false，表示文件不存在或者文件在云端或其他分布式设备上。
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
 * @since 12 dynamic
 */
declare function accessSync(path: string, mode: AccessModeType, flag: AccessFlagType): boolean;

/**
 * 关闭文件或目录，使用promise异步回调。
 *
 * @param { number | File } file - 已打开的File对象或已打开的文件描述符fd。关闭后file对象或文件描述符fd不再具备实际意义，不可再用于进行读写等操作。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function close(file: number | File): Promise<void>;

/**
 * 关闭文件或目录，使用callback异步回调。
 *
 * @param { number | File } file - 已打开的File对象或已打开的文件描述符fd。关闭后file对象或文件描述符fd不再具备实际意义，不可再用于进行读写等操作。
 * @param { AsyncCallback<void> } callback - 异步关闭文件或目录之后的回调。
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function close(file: number | File, callback: AsyncCallback<void>): void;

/**
 * 以同步方法关闭文件或目录。
 *
 * @param { number | File } file - 已打开的File对象或已打开的文件描述符fd。关闭后file对象或文件描述符fd不再具备实际意义，不可再用于进行读写等操作。
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function closeSync(file: number | File): void;

/**
 * 拷贝文件或目录，使用promise异步回调。
 *
 * 支持跨设备拷贝。强制覆盖拷贝。入参支持文件或目录URI。
 *
 * 跨端拷贝时，最多同时存在10个拷贝任务；单次拷贝的文件数量不得超过500个。
 *
 * @param { string } srcUri - 待复制文件或目录的URI。
 * @param { string } destUri - 目标文件或目录的URI。
 * @param { CopyOptions } [options] - options中提供拷贝进度回调。不填该参数则无拷贝进度回调。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
declare function copy(srcUri: string, destUri: string, options?: CopyOptions): Promise<void>;

/**
 * 拷贝文件或者目录，使用callback异步回调。
 *
 * 支持跨设备拷贝。强制覆盖拷贝。入参支持文件或目录URI。
 *
 * 跨端拷贝时，最多同时存在10个拷贝任务；单次拷贝的文件数量不得超过500个。
 *
 * @param { string } srcUri - 待复制文件或目录的URI。
 * @param { string } destUri - 目标文件或目录的URI。
 * @param { AsyncCallback<void> } callback - 异步拷贝之后的回调。
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
 * @since 11 dynamic
 */
declare function copy(srcUri: string, destUri: string, callback: AsyncCallback<void>): void;

/**
 * 拷贝文件或者目录，使用callback异步回调。
 *
 * 支持跨设备拷贝。强制覆盖拷贝。入参支持文件或目录URI。
 *
 * 跨端拷贝时，最多同时存在10个拷贝任务；单次拷贝的文件数量不得超过500个。
 *
 * @param { string } srcUri - 待复制文件或目录的URI。
 * @param { string } destUri - 目标文件或目录的URI。
 * @param { CopyOptions } options - 拷贝进度回调。
 * @param { AsyncCallback<void> } callback - 异步拷贝之后的回调。
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
 * @since 11 dynamic
 */
declare function copy(srcUri: string, destUri: string, options: CopyOptions, callback: AsyncCallback<void>): void;

/**
 * 复制源目录至目标路径下，使用promise异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { number } [mode] - 复制模式，默认值为0。<br/>- mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录
 *     下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<[ConflictFiles]{@link ConflictFiles}>形式提供。<br/>- mode为1，文件级别强制覆盖。目
 *     标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, mode?: number): Promise<void>;

/**
 * 复制源目录至目标路径下，使用callback异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 异步复制目录之后的回调。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * 复制源目录至目标路径下，使用callback异步回调。
 *
 * 如果目标目录下有与源目录名冲突的目录，且冲突目录下有同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array\<
 * [ConflictFiles]{@link ConflictFiles}>形式提供。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - 异步复制目录之后的回调。
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * 复制源目录至目标路径下，可设置复制模式。使用callback异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { number } mode - 复制模式，默认值为0。<br/>- mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，
 *     目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<[ConflictFiles]{@link ConflictFiles}>形式提供。<br/>- mode为1，文件级别强制覆盖。目标目
 *     录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - 异步复制目录之后的回调。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, mode: number, callback: AsyncCallback<void>): void;

/**
 * 复制源目录至目标路径下，可设置复制模式。使用callback异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { number } mode - 复制模式，默认值为0。<br/>- mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，
 *     目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<[ConflictFiles]{@link ConflictFiles}>形式提供。<br/>- mode为1，文件级别强制覆盖。目标目
 *     录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - 异步复制目录之后的回调。
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDir(src: string, dest: string, mode: number, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * 以同步方法复制源目录至目标路径下。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { number } [mode] - 复制模式，默认值为0。<br/>- mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录
 *     下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<[ConflictFiles]{@link ConflictFiles}>形式提供。<br/>- mode为1，文件级别强制覆盖。目
 *     标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function copyDirSync(src: string, dest: string, mode?: number): void;

/**
 * 复制文件，使用promise异步回调。
 *
 * @param { string | number } src - 待复制文件的路径或待复制文件的文件描述符。
 * @param { string | number } dest - 目标文件路径或目标文件的文件描述符。
 * @param { number } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁切掉。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>;

/**
 * 复制文件，覆盖方式为完全覆盖目标文件，未覆盖部分将被裁切。使用callback异步回调。
 *
 * @param { string | number } src - 待复制文件的路径或待复制文件的文件描述符。
 * @param { string | number } dest - 目标文件路径或目标文件的文件描述符。
 * @param { AsyncCallback<void> } callback - 异步复制文件之后的回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void;

/**
 * 复制文件，可设置覆盖文件的方式，使用callback异步回调。
 *
 * @param { string | number } src - 待复制文件的路径或待复制文件的文件描述符。
 * @param { string | number } dest - 目标文件路径或目标文件的文件描述符。
 * @param { number } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁切掉。
 * @param { AsyncCallback<void> } callback - 异步复制文件之后的回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function copyFile(
  src: string | number,
  dest: string | number,
  mode: number,
  callback: AsyncCallback<void>
): void;

/**
 * 以同步方法复制文件。
 *
 * @param { string | number } src - 待复制文件的路径或待复制文件的文件描述符。
 * @param { string | number } dest - 目标文件路径或目标文件的文件描述符。
 * @param { number } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁切掉。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function copyFileSync(src: string | number, dest: string | number, mode?: number): void;

/**
 * 基于文件路径创建文件流，使用promise异步回调。需要配合[Stream]{@link Stream}中的close()函数关闭文件流。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>- w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>- a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Promise<Stream> } Promise对象。返回文件流的结果。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function createStream(path: string, mode: string): Promise<Stream>;

/**
 * 基于文件路径创建文件流，使用callback异步回调。需要配合[Stream]{@link Stream}中的close()函数关闭文件流。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>- w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>- a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @param { AsyncCallback<Stream> } callback - 异步打开文件流之后的回调。
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
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * 以同步方法基于文件路径创建文件流。需要配合[Stream]{@link Stream}中的close()函数关闭文件流。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>- w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>- a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function createStreamSync(path: string, mode: string): Stream;

/**
 * 基于文件路径或文件对象创建RandomAccessFile对象，使用promise异步回调。
 *
 * @param { string | File } file - 文件的应用沙箱路径或已打开的File对象。
 * @param { number } [mode] - 创建文件RandomAccessFile对象的
 *     [选项](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#openmode)，仅当传入文件沙箱路径时生效，必须指定如下选项中的一个，默认以只读方式创建：<br
 *     />- OpenMode.READ_ONLY(0o0)：只读创建。<br/>- OpenMode.WRITE_ONLY(0o1)：只写创建。<br/>- OpenMode.READ_WRITE(0o2)：读写创建。<br/>给
 *     定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。<br/>- OpenMode.TRUNC(0o1000)：如果
 *     RandomAccessFile对象存在且对应文件具有写权限，则将其长度裁剪为零。<br/>- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到RandomAccessFile对象末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。<br/>- OpenMode.DIR(0o200000)：如果path不指向
 *     目录，则出错。不允许附加写权限。<br/>- OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式创建
 *     RandomAccessFile对象。
 * @param { RandomAccessFileOptions } [options] - 支持如下选项：<br/>- start，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>-
 *     end，number类型，表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。<br/>此选项仅对[getreadstream]{@link RandomAccessFile.getReadStream}及
 *     [getwritestream]{@link RandomAccessFile.getWriteStream}获取的文件流对象生效。 [since 12]
 * @returns { Promise<RandomAccessFile> } Promise对象。返回RandomAccessFile对象的结果。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createRandomAccessFile(file: string | File, mode?: number,
  options?: RandomAccessFileOptions): Promise<RandomAccessFile>;

/**
 * 基于文件路径或文件对象，以只读方式创建RandomAccessFile对象，使用callback异步回调。
 *
 * @param { string | File } file - 文件的应用沙箱路径或已打开的File对象。
 * @param { AsyncCallback<RandomAccessFile> } callback - 异步创建RandomAccessFile对象之后的回调。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createRandomAccessFile(file: string | File, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * 基于文件路径或文件对象创建RandomAccessFile对象，使用callback异步回调。
 *
 * @param { string | File } file - 文件的应用沙箱路径或已打开的File对象。
 * @param { number } [mode] - 创建文件RandomAccessFile对象的
 *     [选项](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#openmode)，仅当传入文件沙箱路径时生效，必须指定如下选项中的一个，默认以只读方式创建：<br
 *     />- OpenMode.READ_ONLY(0o0)：只读创建。<br/>- OpenMode.WRITE_ONLY(0o1)：只写创建。<br/>- OpenMode.READ_WRITE(0o2)：读写创建。<br/>给
 *     定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。<br/>- OpenMode.TRUNC(0o1000)：如果
 *     RandomAccessFile对象存在且对应文件具有写权限，则将其长度裁剪为零。<br/>- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到RandomAccessFile对象末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。<br/>- OpenMode.DIR(0o200000)：如果path不指向
 *     目录，则出错。不允许附加写权限。<br/>- OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式创建
 *     RandomAccessFile对象。
 * @param { AsyncCallback<RandomAccessFile> } callback - 异步创建RandomAccessFile对象之后的回调。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createRandomAccessFile(file: string | File, mode: number, callback: AsyncCallback<RandomAccessFile>): void;

/**
 * 基于文件路径或文件对象创建RandomAccessFile对象。
 *
 * @param { string | File } file - 文件的应用沙箱路径或已打开的File对象。
 * @param { number } [mode] - 创建文件RandomAccessFile对象的
 *     [选项](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#openmode)，仅当传入文件沙箱路径时生效，必须指定如下选项中的一个，默认以只读方式创建：<br
 *     />- OpenMode.READ_ONLY(0o0)：只读创建。<br/>- OpenMode.WRITE_ONLY(0o1)：只写创建。<br/>- OpenMode.READ_WRITE(0o2)：读写创建。<br/>给
 *     定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。<br/>- OpenMode.TRUNC(0o1000)：如果
 *     RandomAccessFile对象存在且对应文件具有写权限，则将其长度裁剪为零。<br/>- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到RandomAccessFile对象末尾。<br/>
 *     - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。<br/>- OpenMode.DIR(0o200000)：如果path不指向
 *     目录，则出错。不允许附加写权限。<br/>- OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式创建
 *     RandomAccessFile对象。
 * @param { RandomAccessFileOptions } [options] - 支持如下选项：<br/>- start，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>-
 *     end，number类型，表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。<br/>此选项仅对[getreadstream]{@link RandomAccessFile.getReadStream}及
 *     [getwritestream]{@link RandomAccessFile.getWriteStream}获取的文件流对象生效。 [since 12]
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createRandomAccessFileSync(file: string | File, mode?: number,
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
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function createReadStream(path: string, options?: ReadStreamOptions): ReadStream;

/**
 * 以同步方法打开文件可写流。
 *
 * @param { string } path - 文件路径。
 * @param { WriteStreamOptions } [options] - 支持如下选项：<br/>- start，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- mode，
 *     number 类型，创建文件可写流的[选项](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#openmode)，可选，默认以只写方式创建。
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
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream;

/**
 * 创建Watcher对象，监听文件或目录变动。
 *
 * @param { string } path - 监听文件或目录的沙箱路径。
 * @param { number } events - 监听变动的事件集，多个事件通过或(|)的方式进行集合。<br/>- 0x1: IN_ACCESS， 文件被访问。<br/>- 0x2: IN_MODIFY，文件内容被修改。<br/
 *     >- 0x4: IN_ATTRIB，文件元数据被修改。<br/>- 0x8: IN_CLOSE_WRITE，文件在打开时进行了写操作，然后被关闭。<br/>- 0x10: IN_CLOSE_NOWRITE，文件或目录在打开时未
 *     进行写操作，然后被关闭。<br/>- 0x20: IN_OPEN，文件或目录被打开。 <br/>- 0x40: IN_MOVED_FROM，监听目录中文件被移动走。<br/>- 0x80: IN_MOVED_TO，监听目录中文
 *     件被移动过来。<br/>- 0x100: IN_CREATE，监听目录中文件或子目录被创建。<br/>- 0x200: IN_DELETE，监听目录中文件或子目录被删除。<br/>- 0x400: IN_DELETE_SELF
 *     ，监听的目录被删除，删除后监听停止。<br/>- 0x800: IN_MOVE_SELF，监听的文件或目录被移动，移动后监听继续。<br/>- 0xfff: IN_ALL_EVENTS，监听以上所有事件。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function createWatcher(path: string, events: number, listener: WatchEventListener): Watcher;

/**
 * 复制文件描述符，并返回对应的File对象。
 *
 * @param { number } fd - 文件描述符。
 * @returns { File } 打开的File对象。
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 10 dynamic
 */
declare function dup(fd: number): File;

/**
 * 实现文件内容数据同步，使用promise异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fdatasync(fd: number): Promise<void>;

/**
 * 实现文件内容数据同步，使用callback异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { AsyncCallback<void> } callback - 异步将文件内容数据同步之后的回调。
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fdatasync(fd: number, callback: AsyncCallback<void>): void;

/**
 * 以同步方法实现文件内容的数据同步。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fdatasyncSync(fd: number): void;

/**
 * 基于文件描述符打开文件流，使用promise异步回调。需要配合[Stream]{@link Stream}中的close()函数关闭文件流。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>- w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>- a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Promise<Stream> } Promise对象。返回文件流的结果。
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
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function fdopenStream(fd: number, mode: string): Promise<Stream>;

/**
 * 基于文件描述符打开文件流，使用callback异步回调。需要配合[Stream]{@link Stream}中的close()函数关闭文件流。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>- w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>- a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @param { AsyncCallback<Stream> } callback - 异步打开文件流之后的回调。
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
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function fdopenStream(fd: number, mode: string, callback: AsyncCallback<Stream>): void;

/**
 * 以同步方法基于文件描述符打开文件流。需要配合[Stream]{@link Stream}中的close()函数关闭文件流。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { string } mode - - r：打开只读文件，该文件必须存在。<br/>- r+：打开可读写的文件，该文件必须存在。<br/>- w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>- a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
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
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare function fdopenStreamSync(fd: number, mode: string): Stream;

/**
 * 将文件系统缓存数据写入磁盘，使用promise异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fsync(fd: number): Promise<void>;

/**
 * 将文件系统缓存数据写入磁盘，使用callback异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { AsyncCallback<void> } callback - 异步将文件数据同步之后的回调。
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fsync(fd: number, callback: AsyncCallback<void>): void;

/**
 * 以同步方法将文件系统缓存数据写入磁盘。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function fsyncSync(fd: number): void;

/**
 * 默认列出当前目录下所有文件名和目录名。支持过滤。使用promise异步回调。
 *
 * 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { object } [options] - Options for filtering files. The files are not filtered by default. [since 9 - 10]
 * @param { ListFileOptions } [options] - 文件过滤选项。默认不进行过滤。 [since 11]
 * @returns { Promise<string[]> } Promise对象。返回文件名数组，默认以'utf-8'编码。
 *     default.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function listFile(
  path: string,
  options?: ListFileOptions
): Promise<string[]>;

/**
 * 默认列出当前目录下所有文件名和目录名。支持过滤。使用callback异步回调。
 *
 * 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { AsyncCallback<string[]> } callback - 异步列出文件名数组之后的回调，默认以'utf-8'编码。
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function listFile(path: string, callback: AsyncCallback<string[]>): void;

/**
 * 默认列出当前目录下所有文件名和目录名。支持过滤。使用callback异步回调。
 *
 * 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { object } [options] - Options for filtering files. The files are not filtered by default. [since 9 - 10]
 * @param { ListFileOptions } [options] - 文件过滤选项。默认不进行过滤。 [since 11]
 * @param { AsyncCallback<string[]> } callback - 异步列出文件名数组之后的回调，默认以'utf-8'编码。
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function listFile(
  path: string,
  options: ListFileOptions,
  callback: AsyncCallback<string[]>
): void;

/**
 * 默认以同步方式列出当前目录下所有文件名和目录名。支持过滤。
 *
 * 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { object } [options] - Options for filtering files. The files are not filtered by default. [since 9 - 10]
 * @param { ListFileOptions } [options] - 文件过滤选项。默认不进行过滤。 [since 11]
 * @returns { string[] } 返回文件名数组，默认以'utf-8'编码。
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function listFileSync(
  path: string,
  options?: ListFileOptions
): string[];

/**
 * 列出目录下所有文件名，使用Promise异步回调。
 * 该接口支持通过自定义过滤函数对文件名进行过滤。
 * 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { ListFileExtOptions } [options] - 文件过滤选项。默认不进行过滤。
 * @returns { Promise<string[]> } Promise used to return the file names listed.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare function listFileExt(
  path: string,
  options?: ListFileExtOptions
): Promise<string[]>;

/**
 * 以同步方法列出目录下所有文件名，支持通过自定义过滤函数对文件名进行过滤。
 * 可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { ListFileExtOptions } [options] - 文件过滤选项。默认不进行过滤。
 * @returns { string[] } List of the file names obtained.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare function listFileExtSync(
  path: string,
  options?: ListFileExtOptions
): string[];

/**
 * 调整文件偏移指针位置。
 *
 * @param { number } fd - 文件描述符。
 * @param { number } offset - 相对偏移位置，单位为Byte。
 * @param { WhenceType } [whence] - 偏移指针相对位置类型。不指定则默认为文件起始位置处。
 * @returns { number } 当前文件偏移指针位置（相对于文件头的偏移量，单位为Byte）。
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900026 - Illegal seek
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 12]
 * @since 11 dynamic
 */
declare function lseek(fd: number, offset: number, whence?: WhenceType): number;

/**
 * 获取符号链接文件信息，使用promise异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径path或URI。<br>**说明**：从API version 22开始，支持传入URI。
 * @returns { Promise<Stat> } Promise对象。返回Stat对象，表示文件的具体信息，详情见Stat。
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
 * @crossplatform [since 20]
 * @since 9 dynamic
 */
declare function lstat(path: string): Promise<Stat>;

/**
 * 获取符号链接文件信息，使用callback异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径path或URI。<br>**说明**：从API version 22开始，支持传入URI。
 * @param { AsyncCallback<Stat> } callback - 异步获取文件具体信息之后的回调。
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
 * @crossplatform [since 20]
 * @since 9 dynamic
 */
declare function lstat(path: string, callback: AsyncCallback<Stat>): void;

/**
 * 以同步方法获取符号链接文件信息。
 *
 * @param { string } path - 文件的应用沙箱路径path或URI。<br>**说明**：从API version 22开始，支持传入URI。
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
 * @crossplatform [since 20]
 * @since 9 dynamic
 */
declare function lstatSync(path: string): Stat;

/**
 * 创建目录，使用promise异步回调。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function mkdir(path: string): Promise<void>;

/**
 * 创建目录，使用promise异步回调。当recursion指定为true时，可递归创建目录。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { boolean } recursion - 是否递归创建目录。recursion指定为true时，可递归创建目录。recursion指定为false时，仅可创建单层目录。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
declare function mkdir(path: string, recursion: boolean): Promise<void>;

/**
 * 创建目录，使用callback异步回调。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 异步创建目录操作完成之后的回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function mkdir(path: string, callback: AsyncCallback<void>): void;

/**
 * 创建目录，使用callback异步回调。当recursion指定为true，可递归创建目录。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { boolean } recursion - 是否递归创建目录。recursion指定为true时，可递归创建目录。recursion指定为false时，仅可创建单层目录。
 * @param { AsyncCallback<void> } callback - 异步创建目录操作完成之后的回调。
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
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
declare function mkdir(path: string, recursion: boolean, callback: AsyncCallback<void>): void;

/**
 * 以同步方法创建目录。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function mkdirSync(path: string): void;

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
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
declare function mkdirSync(path: string, recursion: boolean): void;

/**
 * 创建临时目录，使用promise异步回调。
 *
 * @param { string } prefix - 指定目录路径，命名时需要以"XXXXXX"作为结尾。路径末尾的"XXXXXX"字符串将被替换为随机字符，以创建唯一的目录名。
 * @returns { Promise<string> } Promise对象。返回生成的唯一目录路径。
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
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function mkdtemp(prefix: string): Promise<string>;

/**
 * 创建临时目录，使用callback异步回调。
 *
 * @param { string } prefix - 指定目录路径，命名时需要以"XXXXXX"作为结尾。路径末尾的"XXXXXX"字符串将被替换为随机字符，以创建唯一的目录名。
 * @param { AsyncCallback<string> } callback - 异步创建临时目录之后的回调。
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
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function mkdtemp(prefix: string, callback: AsyncCallback<string>): void;

/**
 * 以同步的方法创建临时目录。
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
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function mkdtempSync(prefix: string): string;

/**
 * 基于文件描述符或文件对象创建文件映射对象，使用promise异步回调。将文件内容映射到内存，以实现文件的高效读写访问。
 * 注意：读写模式（MappingMode.READ_WRITE）下，若映射范围超过原始文件大小，将自动扩展文件大小。
 * > **说明**
 * > 注意：在读写模式（MappingMode.READ_WRITE）下，如果映射范围超过原始文件大小，则文件大小
 * > 将自动展开。
 *
 * @param { number | File } file - 已打开的File对象或已打开的文件描述符fd。
 * @param { MappingMode } mode - 创建文件内存映射对象的选项，必须指定如下选项中的一个：
 *     <br>MappingMode.READ_ONLY(0)：只读映射模式。文件映射区不可写，修改会抛出异常。
 *     <br>MappingMode.READ_WRITE(1)：读写映射模式。修改会写入文件映射区，后续由操作系统同步到文件（非实时）。
 *     <br>MappingMode.PRIVATE(2)：私有映射模式。是一种写时复制的映射机制，对映射区的修改仅对当前进程可见，不会影响原始文件。
 * @param { number } offset - 文件映射区的起始位置，单位为Byte。
 * @param { number } size - 文件映射区的大小，单位为Byte。
 * @returns { Promise<FileMapping> } Promise对象。返回FileMapping对象。
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
 * @since 26.0.0 dynamic
 */
declare function mmap(file: number | File, mode: MappingMode, offset: number, size: number): Promise<FileMapping>;

/**
 * 以同步方法基于文件描述符或文件对象创建文件映射对象。将文件内容映射到内存，以实现文件的高效读写访问。
 * 注意：读写模式（MappingMode.READ_WRITE）下，若映射范围超过原始文件大小，将自动扩展文件大小。
 *
 * @param { number | File } file - 已打开的File对象或已打开的文件描述符fd。
 * @param { MappingMode } mode - 创建文件内存映射对象的选项，必须指定如下选项中的一个：
 *     <br>MappingMode.READ_ONLY(0)：只读映射模式。文件映射区不可写，修改会抛出异常。
 *     <br>MappingMode.READ_WRITE(1)：读写映射模式。修改会写入文件映射区，后续由操作系统同步到文件（非实时）。
 *     <br>MappingMode.PRIVATE(2)：私有映射模式。是一种写时复制的映射机制，对映射区的修改仅对当前进程可见，不会影响原始文件。
 * @param { number } offset - 文件映射区的起始位置，单位为Byte。
 * @param { number } size - 文件映射区的大小，单位为Byte。
 * @returns { FileMapping } - FileMapping object.
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
 * @since 26.0.0 dynamic
 */
declare function mmapSync(file: number | File, mode: MappingMode, offset: number, size: number): FileMapping;

/**
 * 移动源目录至目标路径下，使用promise异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { number } [mode] - 移动模式，默认值为0。<br/>- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的非空目录，则抛出异常。<br/>- mode为1，文件级别抛异常。目标目录下存在与
 *     源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<
 *     [ConflictFiles]{@link ConflictFiles}>形式提供。<br/>- mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件
 *     ，未冲突文件将继续保留。<br/>- mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下的所有原始文件将被删除。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, mode?: number): Promise<void>;

/**
 * Moves the source directory to the destination directory. This API uses an asynchronous callback to return the result.
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 异步移动目录之后的回调。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * 移动源目录至目标路径下。使用callback异步回调。
 *
 * 移动模式为目录级别抛异常。当目标目录下存在与源目录名冲突的目录，则抛出异常。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - 异步移动目录之后的回调。
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * 移动源目录至目标路径下，支持设置移动模式。使用callback异步回调。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { number } mode - 移动模式，默认值为0。<br/>- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的非空目录，则抛出异常。<br/>- mode为1，文件级别抛异常。目标目录下存在与
 *     源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<
 *     [ConflictFiles]{@link ConflictFiles}>形式提供。<br/>- mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件
 *     ，未冲突文件将继续保留。<br/>- mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下的所有原始文件将被删除。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, mode: number, callback: AsyncCallback<void>): void;

/**
 * 移动源目录至目标路径下，支持设置移动模式。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { number } mode - 移动模式，默认值为0。<br/>- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的非空目录，则抛出异常。<br/>- mode为1，文件级别抛异常。目标目录下存在与
 *     源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<
 *     [ConflictFiles]{@link ConflictFiles}>形式提供。<br/>- mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件
 *     ，未冲突文件将继续保留。<br/>- mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下的所有原始文件将被删除。
 * @param { AsyncCallback<void, Array<ConflictFiles>> } callback - 异步移动目录之后的回调。
 * @throws { BusinessError } 13900015 - File exists
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDir(src: string, dest: string, mode: number, callback: AsyncCallback<void, Array<ConflictFiles>>): void;

/**
 * 以同步方法移动源目录至目标路径下。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源目录的应用沙箱路径。
 * @param { string } dest - 目标目录的应用沙箱路径。
 * @param { number } [mode] - 移动模式，默认值为0。<br/>- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的非空目录，则抛出异常。<br/>- mode为1，文件级别抛异常。目标目录下存在与
 *     源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<
 *     [ConflictFiles]{@link ConflictFiles}>形式提供。<br/>- mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件
 *     ，未冲突文件将继续保留。<br/>- mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下的所有原始文件将被删除。
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
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare function moveDirSync(src: string, dest: string, mode?: number): void;

/**
 * 移动文件，使用promise异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源文件的应用沙箱路径。
 * @param { string } dest - 目标文件的应用沙箱路径。
 * @param { number } [mode] - 移动模式。若mode为0，移动位置存在同名文件时，强制移动覆盖。若mode为1，移动位置存在同名文件时，抛出异常。默认为0。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function moveFile(src: string, dest: string, mode?: number): Promise<void>;

/**
 * 移动文件。如果移动位置存在同名文件，将强制覆盖。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源文件的应用沙箱路径。
 * @param { string } dest - 目标文件的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 异步移动文件之后的回调。
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
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function moveFile(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * 移动文件，支持设置移动模式。使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源文件的应用沙箱路径。
 * @param { string } dest - 目标文件的应用沙箱路径。
 * @param { number } [mode] - 移动模式。若mode为0，移动位置存在同名文件时，强制移动覆盖。若mode为1，移动位置存在同名文件时，抛出异常。默认为0。
 * @param { AsyncCallback<void> } callback - 异步移动文件之后的回调。
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
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function moveFile(src: string, dest: string, mode: number, callback: AsyncCallback<void>): void;

/**
 * 以同步方式移动文件。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } src - 源文件的应用沙箱路径。
 * @param { string } dest - 目标文件的应用沙箱路径。
 * @param { number } [mode] - 移动模式。若mode为0，移动位置存在同名文件时，强制移动覆盖。若mode为1，移动位置存在同名文件时，抛出异常。默认为0。
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
 * @crossplatform [since 10]
 * @since 9 dynamic
 */
declare function moveFileSync(src: string, dest: string, mode?: number): void;

/**
 * 打开文件或目录，使用promise异步回调。支持使用URI打开文件。
 *
 * @param { string } path - 文件或目录的应用沙箱路径或文件URI。
 * @param { number } [mode] - 打开文件或目录的[选项](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#openmode)，必须指定如下选项中
 *     的一个，默认以只读方式打开：<br/>- OpenMode.READ_ONLY(0o0)：只读打开。<br/>- OpenMode.WRITE_ONLY(0o1)：只写打开。<br/>- OpenMode.READ_WRITE
 *     (0o2)：读写打开。<br/>给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。<br/>- OpenMode.TRUNC(0
 *     o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。<br/>- OpenMode.NONBLOCK(0o400
 *     0)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。<br/>- OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>-
 *     OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式打开文件。<br/>- OpenMode.UNCACHE(0o10000000000)：
 *     读写文件不进行页缓存，从API版本26.0.0开始支持此选项。
 * @returns { Promise<File> } Promise对象。返回File对象。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function open(path: string, mode?: number): Promise<File>;

/**
 * 打开文件或目录，使用callback异步回调。支持使用URI打开文件。
 *
 * @param { string } path - 文件或目录的应用沙箱路径或URI。
 * @param { AsyncCallback<File> } callback - 异步打开文件之后的回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function open(path: string, callback: AsyncCallback<File>): void;

/**
 * 打开文件或目录，可设置打开文件的选项。使用callback异步回调。
 *
 * 支持使用URI打开文件。
 *
 * @param { string } path - 文件或目录的应用沙箱路径或URI。
 * @param { number } [mode] - 打开文件或目录的[选项](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#openmode)，必须指定如下选项中
 *     的一个，默认以只读方式打开：<br/>- OpenMode.READ_ONLY(0o0)：只读打开。<br/>- OpenMode.WRITE_ONLY(0o1)：只写打开。<br/>- OpenMode.READ_WRITE
 *     (0o2)：读写打开。<br/>给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。<br/>- OpenMode.TRUNC(0
 *     o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。<br/>- OpenMode.NONBLOCK(0o400
 *     0)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。<br/>- OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>-
 *     OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式打开文件。<br/>- OpenMode.UNCACHE(0o10000000000)：
 *     读写文件不进行页缓存，从API版本26.0.0开始支持此选项。
 * @param { AsyncCallback<File> } callback - 异步打开文件之后的回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function open(path: string, mode: number, callback: AsyncCallback<File>): void;

/**
 * 以同步方法打开文件或目录。支持使用URI打开文件。
 *
 * @param { string } path - 打开文件或目录的应用沙箱路径或URI。
 * @param { number } [mode] - 打开文件或目录的[选项](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#openmode)，必须指定如下选项中
 *     的一个，默认以只读方式打开：<br/>- OpenMode.READ_ONLY(0o0)：只读打开。<br/>- OpenMode.WRITE_ONLY(0o1)：只写打开。<br/>- OpenMode.READ_WRITE
 *     (0o2)：读写打开。<br/>给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：<br/>- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。<br/>- OpenMode.TRUNC(0
 *     o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。<br/>- OpenMode.NONBLOCK(0o400
 *     0)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。<br/>- OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。<br/>-
 *     OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。<br/>- OpenMode.SYNC(0o4010000)：以同步IO的方式打开文件。<br/>- OpenMode.UNCACHE(0o10000000000)：
 *     读写文件不进行页缓存，从API版本26.0.0开始支持此选项。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function openSync(path: string, mode?: number): File;

/**
 * 读取文件数据，使用promise异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): position of the data to read in
 *     the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>-
 *     **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is the
 *     buffer length. [since 9 - 10]
 * @param { ReadOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>- length，
 *     number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。 [since 11]
 * @returns { Promise<number> } Promise对象。返回实际读取的数据长度，单位为Byte。
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function read(
  fd: number,
  buffer: ArrayBuffer,
  options?: ReadOptions
): Promise<number>;

/**
 * 从文件读取数据，使用callback异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { AsyncCallback<number> } callback - 异步读取数据之后的回调。返回实际读取的数据长度，单位为Byte。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function read(fd: number, buffer: ArrayBuffer, callback: AsyncCallback<number>): void;

/**
 * 从文件读取数据，使用callback异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): position of the data to read in
 *     the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>-
 *     **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is the
 *     buffer length. [since 9 - 10]
 * @param { ReadOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>- length，
 *     number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。 [since 11]
 * @param { AsyncCallback<number> } callback - 异步读取数据之后的回调。返回实际读取的数据长度，单位为Byte。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function read(
  fd: number,
  buffer: ArrayBuffer,
  options: ReadOptions,
  callback: AsyncCallback<number>
): void;

/**
 * 以同步方法从文件读取数据。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): position of the data to read in
 *     the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>-
 *     **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is the
 *     buffer length. [since 9 - 10]
 * @param { ReadOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/>- length，
 *     number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。 [since 11]
 * @returns { number } 返回实际读取的数据长度，单位为Byte。
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readSync(
  fd: number,
  buffer: ArrayBuffer,
  options?: ReadOptions
): number;

/**
 * 逐行读取文件文本内容，使用promise异步回调。只支持读取utf-8格式文件。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { Options } [options] - 可选项。支持以下选项：<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'，仅支持'utf-8'
 *     。
 * @returns { Promise<ReaderIterator> } Promise对象。返回文件读取迭代器。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare function readLines(filePath: string, options?: Options): Promise<ReaderIterator>;

/**
 * 逐行读取文件文本内容，使用callback异步回调，只支持读取utf-8格式文件。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { AsyncCallback<ReaderIterator> } callback - 逐行读取文件文本内容回调。返回文件读取迭代器。
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
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare function readLines(filePath: string, callback: AsyncCallback<ReaderIterator>): void;

/**
 * 逐行读取文件文本内容，使用callback异步回调，只支持读取utf-8格式文件。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { Options } options - 可选项。支持以下选项：<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'，仅支持'utf-8'。
 * @param { AsyncCallback<ReaderIterator> } callback - 逐行读取文件文本内容回调。返回文件读取迭代器。
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
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare function readLines(filePath: string, options: Options, callback: AsyncCallback<ReaderIterator>): void;

/**
 * 以同步方式逐行读取文件的文本内容。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { Options } [options] - 可选项。支持以下选项：<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'，仅支持'utf-8'
 *     。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare function readLinesSync(filePath: string, options?: Options): ReaderIterator;

/**
 * 基于文本方式读取文件（即直接读取文件的文本内容），使用promise异步回调。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): position of the data to read in
 *     the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>-
 *     **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is the
 *     file length.<br>- **encoding** (string): format of the data to be encoded.<br>It is valid only when the data is
 *     of the string type. The default value is **'utf-8'**, which is the only value supported. [since 9 - 10]
 * @param { ReadTextOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>- length
 *     ，number类型，表示期望读取数据，单位为Byte。可选，默认文件长度。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'，仅支持'utf-8'
 *     。 [since 11]
 * @returns { Promise<string> } Promise对象。返回读取文件的内容。
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readText(
  filePath: string,
  options?: ReadTextOptions
): Promise<string>;

/**
 * 基于文本方式读取文件内容，使用callback异步回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readText(filePath: string, callback: AsyncCallback<string>): void;

/**
 * 基于文本方式读取文件内容，使用callback异步回调。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): position of the data to read in
 *     the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>-
 *     **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is the
 *     file length.<br>- **encoding** (string): format of the data to be encoded. The default value is **'utf-8'**,
 *     which is the only value supported. [since 9 - 10]
 * @param { ReadTextOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>- length
 *     ，number类型，表示期望读取数据，单位为Byte。可选，默认文件长度。<br/>- encoding，string类型，表示数据的编码方式，默认'utf-8'，仅支持'utf-8'。 [since 11]
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readText(
  filePath: string,
  options: ReadTextOptions,
  callback: AsyncCallback<string>
): void;

/**
 * 以同步方法基于文本方式读取文件（即直接读取文件的文本内容）。
 *
 * @param { string } filePath - 文件的应用沙箱路径。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): position of the data to read in
 *     the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>-
 *     **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is the
 *     file length.<br>- **encoding** (string): format of the data to be encoded.<br>It is valid only when the data is
 *     of the string type. The default value is **'utf-8'**, which is the only value supported. [since 9 - 10]
 * @param { ReadTextOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>- length
 *     ，number类型，表示期望读取数据，单位为Byte。可选，默认文件长度。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'，仅支持'utf-8'
 *     。 [since 11]
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
 * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function readTextSync(
  filePath: string,
  options?: ReadTextOptions
): string;

/**
 * 重命名文件或目录，使用promise异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } oldPath - 文件的应用沙箱原路径。
 * @param { string } newPath - 文件的应用沙箱新路径。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * 重命名文件或目录，使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } oldPath - 文件的应用沙箱原路径。
 * @param { string } newPath - 文件的应用沙箱新路径。
 * @param { AsyncCallback<void> } callback - 异步重命名文件之后的回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void;

/**
 * 以同步方法重命名文件或目录。
 *
 * > **说明：**
 * >
 * > 该接口不支持在分布式文件路径下操作。
 *
 * @param { string } oldPath - 文件的应用沙箱原路径。
 * @param { string } newPath - 文件的应用沙箱新路径。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function renameSync(oldPath: string, newPath: string): void;

/**
 * 删除目录及其所有子目录和文件，使用promise异步回调。
 *
 * > **说明：**
 * >
 * > 该接口支持删除单个文件，但不推荐使用此方法删除单个文件，推荐使用unlink接口删除单个文件。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rmdir(path: string): Promise<void>;

/**
 * 删除目录及其所有子目录和文件，使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 该接口支持删除单个文件，但不推荐使用此方法删除单个文件，推荐使用unlink接口删除单个文件。
 *
 * @param { string } path - 目录的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 异步删除目录之后的回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rmdir(path: string, callback: AsyncCallback<void>): void;

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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function rmdirSync(path: string): void;

/**
 * 获取文件或目录详细属性信息，使用promise异步回调。
 *
 * @param { string | number } file - 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。<br>**说明**：从API version 22开始，支持传入URI。
 * @returns { Promise<Stat> } Promise对象。返回文件或目录的具体信息。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function stat(file: string | number): Promise<Stat>;

/**
 * 获取文件或目录的详细属性信息，使用callback异步回调。
 *
 * @param { string | number } file - 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。<br>**说明**：从API version 22开始，支持传入URI。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function stat(file: string | number, callback: AsyncCallback<Stat>): void;

/**
 * 以同步方法获取文件或目录详细属性信息。
 *
 * @param { string | number } file - 文件或目录的应用沙箱路径path、URI或已打开的文件描述符fd。<br>**说明**：从API version 22开始，支持传入URI。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function statSync(file: string | number): Stat;

/**
 * 基于文件路径创建符号链接，使用promise异步回调。
 *
 * > **说明：**
 * >
 * > 从API version 11开始，不支持三方应用使用。
 *
 * @param { string } target - 要链接的目标文件的应用沙箱路径。
 * @param { string } srcPath - 符号链接文件的应用沙箱路径。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @since 9 dynamic
 */
declare function symlink(target: string, srcPath: string): Promise<void>;

/**
 * 基于文件路径创建符号链接，使用callback异步回调。
 *
 * > **说明：**
 * >
 * > 从API version 11开始，不支持三方应用使用。
 *
 * @param { string } target - 要链接的目标文件的应用沙箱路径。
 * @param { string } srcPath - 符号链接文件的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 异步创建符号链接信息之后的回调。
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
 * @since 9 dynamic
 */
declare function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void;

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
 * @since 9 dynamic
 */
declare function symlinkSync(target: string, srcPath: string): void;

/**
 * 截断文件，使用promise异步回调。
 *
 * @param { string | number } file - 文件的应用沙箱路径或已打开的文件描述符fd。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function truncate(file: string | number, len?: number): Promise<void>;

/**
 * 截断文件，使用callback异步回调。
 *
 * @param { string | number } file - 文件的应用沙箱路径或已打开的文件描述符fd。
 * @param { AsyncCallback<void> } callback - 回调函数，本调用无返回值。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function truncate(file: string | number, callback: AsyncCallback<void>): void;

/**
 * 截断文件，使用callback异步回调。
 *
 * @param { string | number } file - 文件的应用沙箱路径或已打开的文件描述符fd。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。 [since 9 - 10]
 * @param { number } len - 文件截断后的长度，单位为Byte。默认为0。 [since 11]
 * @param { AsyncCallback<void> } callback - 回调函数，本调用无返回值。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function truncate(file: string | number, len: number, callback: AsyncCallback<void>): void;

/**
 * 以同步方法截断文件内容。
 *
 * @param { string | number } file - 文件的应用沙箱路径或已打开的文件描述符fd。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function truncateSync(file: string | number, len?: number): void;

/**
 * 删除单个文件，使用promise异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function unlink(path: string): Promise<void>;

/**
 * 删除文件，使用callback异步回调。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { AsyncCallback<void> } callback - 异步删除文件之后的回调。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function unlink(path: string, callback: AsyncCallback<void>): void;

/**
 * 以同步方法删除文件。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function unlinkSync(path: string): void;

/**
 * 更改文件上次修改该文件的时间。
 *
 * @param { string } path - 文件的应用沙箱路径。
 * @param { number } mtime - 待更新的时间戳。自1970年1月1日起至目标时间的毫秒数。仅支持更改上次修改该文件的时间属性。
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 12]
 * @since 11 dynamic
 */
declare function utimes(path: string, mtime: number): void;

/**
 * 将数据写入文件，使用promise异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): start position to write the data
 *     in the file, in bytes. This parameter is optional. By default, data is written from the current position.<br>-
 *     **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is the
 *     buffer length.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 9 - 10]
 * @param { WriteOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写入。<br/>- length，
 *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'。当前仅支持?'utf-
 *     8'。 [since 11]
 * @returns { Promise<number> } Promise对象。返回实际写入的数据长度，单位为Byte。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): Promise<number>;

/**
 * 将数据写入文件，使用callback异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { AsyncCallback<number> } callback - 异步将数据写入完成后执行的回调函数。返回实际写入的数据长度，单位为Byte。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function write(fd: number, buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

/**
 * 将数据写入文件，使用callback异步回调。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): start position to write the data
 *     in the file, in bytes. This parameter is optional. By default, data is written from the current position.<br>-
 *     **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is the
 *     buffer length.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 9 - 10]
 * @param { WriteOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- length，
 *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'。当前仅支持?'utf-
 *     8'。 [since 11]
 * @param { AsyncCallback<number> } callback - 异步将数据写入完成后执行的回调函数。返回实际写入的数据长度，单位为Byte。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options: WriteOptions,
  callback: AsyncCallback<number>
): void;

/**
 * 以同步方法将数据写入文件。
 *
 * @param { number } fd - 已打开的文件描述符。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { object } [options] - The options are as follows:<br>- **offset** (number): start position to write the data
 *     in the file, in bytes. This parameter is optional. By default, data is written from the current position.<br>-
 *     **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is the
 *     buffer length.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The
 *     default value is **'utf-8'**, which is the only value supported currently. [since 9 - 10]
 * @param { WriteOptions } [options] - 支持如下选项：<br/>- offset，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- length，
 *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'。当前仅支持?'utf-
 *     8'。 [since 11]
 * @returns { number } 返回实际写入的数据长度，单位为Byte。
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
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare function writeSync(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): number;

/**
 * 业务调用connectDfs接口，触发建链。如果对端设备出现异常，业务执行回调DfsListeners内
 * [onStatus](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#onstatus12)通知应用。
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - 设备的网络Id。通过
 *     [distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager}接口调用
 *     [DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}获得。
 * @param { DfsListeners } listeners - 分布式文件系统状态监听器。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { BusinessError } 201 - Permission denied.
 * @throws { BusinessError } 401 - The parameter check failed.Possible causes:
 *     1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900045 - Connection failed.
 * @throws { BusinessError } 13900046 - Software caused connection abort.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
declare function connectDfs(networkId: string, listeners: DfsListeners): Promise<void>;

/**
 * 业务调用disconnectDfs接口，传入networkId参数，触发断链。
 *
 * @permission ohos.permission.DISTRIBUTED_DATASYNC
 * @param { string } networkId - 设备的网络Id。通过
 *     [distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager}接口调用
 *     [DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}获得。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { BusinessError } 201 - Permission denied.
 * @throws { BusinessError } 401 - The parameter check failed.Possible causes:
 *     1.Mandatory parameters are left unspecified;
 *     <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13600004 - Unmount failed.
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
declare function disconnectDfs(networkId: string): Promise<void>;

/**
 * 设置文件或目录的扩展属性。使用promise异步回调。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { string } key - 扩展属性的key。仅支持前缀为“user.”的字符串，且长度需小于256字节。
 * @param { string } value - 扩展属性的value。
 * @returns { Promise<void> } Promise对象。无返回值。
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
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function setxattr(path: string, key: string, value: string): Promise<void>;

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
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function setxattrSync(path: string, key: string, value: string): void;

/**
 * 获取文件或目录的扩展属性。使用promise异步回调。
 *
 * @param { string } path - 文件或目录的应用沙箱路径。
 * @param { string } key - 扩展属性的key。
 * @returns { Promise<string> } Promise对象。返回扩展属性的value。
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
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function getxattr(path: string, key: string): Promise<string>;

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
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare function getxattrSync(path: string, key: string): string;

/**
 * 拷贝进度回调数据
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
interface Progress {
  /**
   * 已拷贝的数据大小，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  readonly processedSize: number;

  /**
   * 待拷贝的数据总大小，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  readonly totalSize: number;
}

/**
 * 拷贝中断信号。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
export class TaskSignal {
  /**
   * 取消拷贝任务。
   *
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900012 - Permission denied by the file system
   * @throws { BusinessError } 13900043 - No task can be canceled.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  cancel(): void;

  /**
   * > **说明：**
   * >
   * > 从API version 12开始支持，从API version 24开始废弃。
   *
   * 取消拷贝事件监听。
   *
   * @returns { Promise<string> } Promise对象。最后一个拷贝的文件路径。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamiconly
   * @deprecated since 24
   */
  onCancel(): Promise<string>;
}

/**
 * 拷贝进度回调监听
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
interface CopyOptions {
  /**
   * 拷贝进度监听。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  progressListener?: ProgressListener;
  /**
   * 取消拷贝信号。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  copySignal?: TaskSignal;
}

/**
 * 拷贝进度监听。
 *
 * @param { Progress } progress - indicates the progress data of copyFile
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
type ProgressListener = (progress: Progress) => void;

/**
 * 由open接口打开的File对象。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface File {
  /**
   * 打开的文件描述符。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly fd: number;

  /**
   * 文件路径。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 10 dynamic
   */
  readonly path: string;

  /**
   * 文件名。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 10 dynamic
   */
  readonly name: string;

  /**
   * 获取File对象对应文件父目录。
   *
   * @returns { string } 返回父目录路径。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  getParent(): string;

  /**
   * 对文件阻塞式施加共享锁或独占锁，使用promise异步回调。
   *
   * @param { boolean } exclusive - 是否施加独占锁，默认false。true：施加独占锁；false：不施加独占锁。
   * @returns { Promise<void> } Promise对象。无返回值。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   */
  lock(exclusive?: boolean): Promise<void>;

  /**
   * 对文件阻塞式施加共享锁或独占锁，使Callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 异步文件上锁之后的回调。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
   */
  lock(callback: AsyncCallback<void>): void;

  /**
   * 对文件阻塞式施加共享锁或独占锁，使Callback异步回调。
   *
   * @param { boolean } exclusive - 是否施加独占锁，默认false。true：施加独占锁；false：不施加独占锁。
   * @param { AsyncCallback<void> } callback - 异步文件上锁之后的回调。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 9 dynamic
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
   * @since 9 dynamic
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
   * @since 9 dynamic
   */
  unlock(): void;
}

/**
 * 文件映射对象，在调用FileMapping的方法前，需要先通过mmap()方法（同步或异步）构建一个FileMapping实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface FileMapping {
  /**
   * 设置文件映射区的当前位置。
   *
   * @param { number } position - 期望设置的目标位置，单位为Byte。必须为非负数且不大于当前可读写上限（limit）。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  setPosition(position: number): void;

  /**
   * 获取文件映射区的当前位置，单位为Byte。
   *
   * @returns { number } - Current location of the file mapping area.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getPosition(): number;

  /**
   * 获取文件映射区的容量，单位为Byte。
   *
   * @returns { number } - Size of the file mapping area, in bytes.
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  capacity(): number;

  /**
   * 设置文件映射区可读写区域的上界。该上界不会超过映射区的总容量（0 ≤ limit ≤ capacity）。
   *
   * @param { number } limit - 要设置的可读写区域上界值，单位为Byte。如果当前位置大于新上界，则会被自动调整为 limit。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  setLimit(limit: number): void;

  /**
   * 获取文件映射区可读写区域的上界。
   *
   * @returns { number } - 当前可读写区域上界值，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getLimit(): number;

  /**
   * 模式翻转。即将 limit 属性设置为当前 position，再将当前 position 设置为0。
   *
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  flip(): void;

  /**
   * 获取从当前位置（pisition）到可读写区域的上界（limit）之间的剩余字节数。
   *
   * @returns { number } - 剩余可读或可写的字节数，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  remaining(): number;

  /**
   * 从当前位置读取数据，并将位置后移实际读取的字节数。
   *
   * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
   * @param { number } [length] - 期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。
   * @returns { number } - 返回实际读取的数据长度，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  read(buffer: ArrayBuffer, length?: number): number;

  /**
   * 从指定位置读取数据，不影响当前位置。
   *
   * @param { number } position - 期望读取的起始位置。
   * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
   * @param { number } [length] - 期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。
   * @returns { number } - 返回实际读取的数据长度，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  read(position: number, buffer: ArrayBuffer, length?: number): number;

  /**
   * 从当前位置写入数据，并将位置后移实际写入的字节数。
   *
   * @param { ArrayBuffer } data - 待写入文件的缓冲区数据。
   * @param { number } [length] - 期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。
   * @returns { number } - 返回实际写入的长度，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900053 - Read-only mmap buffer
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  write(data: ArrayBuffer, length?: number): number;

  /**
   * 从指定位置写入数据，不影响当前位置。
   *
   * @param { number } position - 期望写入的起始位置，单位为Byte。
   * @param { ArrayBuffer } data - 待写入文件的缓冲区数据。
   * @param { number } [length] - 期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。
   * @returns { number } - 返回实际写入的长度，单位为Byte。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900051 - Buffer read/write out of bounds
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900053 - Read-only mmap buffer
   * @throws { BusinessError } 13900054 - Mmap buffer is inaccessible
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  write(position: number, data: ArrayBuffer, length?: number): number;

  /**
   * 将整个文件映射区的脏页数据同步到磁盘文件，使用promise异步回调。
   * 注意：如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。
   *
   * @returns { Promise<void> } - Promise对象。无返回值。
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  msync(): Promise<void>;

  /**
   * 将文件映射区指定范围内的脏页数据同步到磁盘文件，使用promise异步回调。
   * 注意：如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。
   *
   * @param { number } position - 期望同步的起始位置，单位为Byte。
   * @param { number } length - 期望同步的数据长度，单位为Byte。
   * @returns { Promise<void> } - Promise对象。无返回值。
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  msync(position: number, length: number): Promise<void>;

  /**
   * 以同步方法将整个文件映射区的脏页数据同步到磁盘文件。
   * 注意：如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。
   *
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  msyncSync(): void;

  /**
   * 以同步方法将文件映射区指定范围内的脏页数据同步到磁盘文件。
   * 注意：如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。
   *
   * @param { number } position - 期望同步的起始位置，单位为Byte。
   * @param { number } length - 期望同步的数据长度，单位为Byte。
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @throws { BusinessError } 13900052 - Mmap buffer released
   * @throws { BusinessError } 13900055 - Mmap operation not supported
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  msyncSync(position: number, length: number): void;

  /**
   * 释放文件映射区，使用promise异步回调。
   *
   * @returns { Promise<void> } - Promise对象。无返回值。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  unmap(): Promise<void>;

  /**
   * 以同步方法释放文件映射区。
   *
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900050 - Internal resource error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  unmapSync(): void;
}

/**
 * 随机读写文件流。在调用RandomAccessFile的方法前，需要先通过createRandomAccessFile()方法（同步或异步）来构建一个RandomAccessFile实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
declare interface RandomAccessFile {

  /**
   * 打开的文件描述符。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly fd: number;

  /**
   * RandomAccessFile对象的偏移指针，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly filePointer: number;

  /**
   * 设置文件偏移指针。
   *
   * @param { number } filePointer - RandomAccessFile对象的偏移指针，单位为Byte。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  setFilePointer(filePointer: number): void;

  /**
   * 以同步方式关闭RandomAccessFile对象。
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  close(): void;

  /**
   * 将数据写入文件，使用promise异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to write, in
   *     bytes. The default value is the buffer length.<br>- **offset** (number): start position to write the data, in
   *     bytes (it is determined by **filePointer** plus **offset**). This parameter is optional. By default, data is
   *     written from the **filePointer**.<br>- **encoding** (string): format of the data to be encoded when the data is
   *     a string. The default value is **'utf-8'**, which is the only value supported. [since 10 - 10]
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。默认缓冲区长度。<br/>- offset，number类
   *     型，表示期望写入文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。<br/>- encoding，string类型，当数据是string
   *     类型时有效，表示数据的编码方式，默认'utf-8'。仅支持'utf-8'。 [since 11]
   * @returns { Promise<number> } Promise对象。返回实际写入的长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<number>;

  /**
   * 将数据写入文件，使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { AsyncCallback<number> } callback - 异步写入完成后执行的回调函数。返回实际写入数据长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

  /**
   * 将数据写入文件，使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to write, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): start
   *     position to write the data, in bytes (it is determined by **filePointer** plus **offset**). This parameter is
   *     optional. By default, data is written from the **filePointer**.<br>- **encoding** (string): format of the data
   *     to be encoded when the data is a string. The default value is **'utf-8'**, which is the only value
   *     supported. [since 10 - 10]
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认为缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。<br/>- encoding，string类型，当数据
   *     是string类型时有效，表示数据的编码方式，默认'utf-8'。仅支持'utf-8'。 [since 11]
   * @param { AsyncCallback<number> } callback - 异步写入完成后执行的回调函数。返回实际写入数据长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  write(
    buffer: ArrayBuffer | string,
    options: WriteOptions,
    callback: AsyncCallback<number>
  ): void;

  /**
   * 以同步方法将数据写入文件。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to write, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): start
   *     position to write the data, in bytes (it is determined by **filePointer** plus **offset**). This parameter is
   *     optional. By default, data is written from the **filePointer**.<br>- **encoding** (string): format of the data
   *     to be encoded when the data is a string. The default value is **'utf-8'**, which is the only value
   *     supported. [since 10 - 10]
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。<br/>- encoding，string类型，当数据
   *     是string类型时有效，表示数据的编码方式，默认'utf-8'。仅支持'utf-8'。 [since 11]
   * @returns { number } 实际写入的长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): number;

  /**
   * 从文件读取数据，使用promise异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to read, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): start
   *     position to read the data, in bytes (it is determined by **filePointer** plus **offset**). This parameter is
   *     optional. By default, data is read from the **filePointer**. [since 10 - 10]
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认为缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始读。 [since 11]
   * @returns { Promise<number> } Promise对象。返回读取的结果，单位为Byte。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<number>;

  /**
   * 从文件读取数据，使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { AsyncCallback<number> } callback - 异步读取完成后的回调。返回实际读取的数据长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<number>): void;

  /**
   * 从文件读取数据，使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to read, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): start
   *     position to read the data, in bytes (it is determined by **filePointer** plus **offset**). This parameter is
   *     optional. By default, data is read from the **filePointer**. [since 10 - 10]
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示读取数据的长度，单位为Byte。可选，默认为缓冲区长度。<br/>- offset，number
   *     类型，表示读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从filePointer开始读。 [since 11]
   * @param { AsyncCallback<number> } callback - 异步读取完成后的回调。返回实际读取的数据长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  read(
    buffer: ArrayBuffer,
    options: ReadOptions,
    callback: AsyncCallback<number>
  ): void;

  /**
   * 以同步方法从文件读取数据。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to read, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): start
   *     position to read the data, in bytes (it is determined by **filePointer** plus **offset**). This parameter is
   *     optional. By default, data is read from the **filePointer**.<br> [since 10 - 10]
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始读。<br/> [since 11]
   * @returns { number } 实际读取的长度，单位为Byte。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readSync(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): number;

  /**
   * 获取当前 RandomAccessFile 的一个 ReadStream 实例。
   *
   * @returns { ReadStream } 文件可读流。
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  getReadStream(): ReadStream;

  /**
   * 获取当前 RandomAccessFile 的一个 WriteStream 实例。
   *
   * @returns { WriteStream } 文件可写流。
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  getWriteStream(): WriteStream;
}

/**
 * 文件可读流，需要先通过fileIo.createReadStream方法来构建一个ReadStream实例。ReadStream继承自数据流基类stream.Readable。
 * ReadStream读到的数据为解码后的字符串，其编码格式当前仅支持'utf-8'。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare class ReadStream extends stream.Readable {
  /**
   * 构造一个文件可读流.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  constructor();

  /**
   * 可读流已经读取的字节数。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  readonly bytesRead: number;

  /**
   * 当前可读流对应的文件路径。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  readonly path: string;

  /**
   * 调整可读流偏移指针位置。
   *
   * @param { number } offset - Relative offset, in bytes.
   * @param { WhenceType } [whence] - Where to start the offset. The default value is **SEEK_SET**, which indicates the
   *     beginning of the file.
   * @returns { number } Position of the current offset pointer (offset relative to the file header, in bytes).
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  seek(offset: number, whence?: WhenceType): number;

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
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  close(): void;
}

/**
 * 文件可写流，需要先通过
 * [fileIo.createWriteStream](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileiocreatewritestream12)方法来构建一
 * 个WriteStream实例。WriteStream继承自数据流基类[stream.Writable]{@link @ohos.util.stream:stream.Writable}。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
declare class WriteStream extends stream.Writable {
  /**
   * The WriteStream constructor.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  constructor();

  /**
   * 可写流已经写入的字节数。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  readonly bytesWritten: number;

  /**
   * 当前可写流对应的文件路径。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  readonly path: string;

  /**
   * 调整可写流的偏移指针位置。
   *
   * @param { number } offset - 相对偏移位置，单位为Byte。
   * @param { WhenceType } [whence] - 偏移指针相对位置类型。默认值：SEEK_SET，文件起始位置处。
   * @returns { number } 当前可写流偏移指针位置（相对于文件头的偏移量，单位为Byte）。
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900026 - Illegal seek
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  seek(offset: number, whence?: WhenceType): number;

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
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  close(): void;
}

/**
 * AtomicFile是一个用于对文件进行原子读写操作的类。
 *
 * 在写操作时，通过写入临时文件，并在写入成功后将其重命名到原始文件位置来确保写入文件的完整性；而在写入失败时删除临时文件，不修改原始文件内容。
 *
 * 使用者可以自行调用finishWrite或failWrite来完成文件内容的写入或回滚。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 15 dynamic
 */
export class AtomicFile {
  /**
   * 对于给定路径的文件创建一个AtomicFile类。
   *
   * @param { string } path - 文件的沙箱路径。
   * @throws { BusinessError } 401 Parameter error. Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  constructor(path: string);

  /**
   * 通过AtomicFile对象获取文件对象。
   *
   * 文件描述符fd需要由用户调用close方法关闭。
   *
   * @returns { File } 打开的File对象。
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900005 IO error
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  getBaseFile(): File;

  /**
   * 创建一个读文件流。
   *
   * @returns { ReadStream } 文件可读流。
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  openRead(): ReadStream;

  /**
   * 读取文件全部内容。
   *
   * @returns { ArrayBuffer } 文件的全部内容。
   * @throws { BusinessError } 13900005 I/O error
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  readFully(): ArrayBuffer;

  /**
   * 对文件开始新的写入操作。将返回一个WriteStream，用于在其中写入新的文件数据。
   *
   * 当文件不存在时新建文件。
   *
   * 在写入文件完成后，写入成功需要调用finishWrite()，写入失败需要调用failWrite()。
   *
   * @returns { WriteStream } 文件可写流。
   * @throws { BusinessError } 13900001 Operation not permitted
   * @throws { BusinessError } 13900002 No such file or directory
   * @throws { BusinessError } 13900012 Permission denied
   * @throws { BusinessError } 13900027 Read-only file system
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  startWrite(): WriteStream;

  /**
   * 在完成对startWrite返回流的写入操作时调用，表示文件写入成功。
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  finishWrite(): void;

  /**
   * 文件写入失败后调用，将执行文件回滚操作。
   *
   * @throws { BusinessError } 13900042 Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 15 dynamic
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
   * @crossplatform [since 20]
   * @since 15 dynamic
   */
  delete(): void;
}

/**
 * 文件具体信息，在调用Stat的方法前，需要先通过[stat()](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileiostat)方法（同步或异步）构建一个
 * Stat实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface Stat {
  /**
   * 标识该文件。通常同设备上的不同文件的INO不同。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  readonly ino: bigint;
  /**
   * 表示文件权限，各特征位的含义如下：
   *
   * **说明**：以下值为八进制，取得的返回值为十进制，请换算后查看。
   *
   * - 0o400：用户读。对于普通文件，所有者可读取文件；对于目录，所有者可读取目录项。
   *
   * - 0o200：用户写。对于普通文件，所有者可写入文件；对于目录，所有者可创建/删除目录项。
   *
   * - 0o100：用户执行。对于普通文件，所有者可执行文件；对于目录，所有者可在目录中搜索给定路径名。
   *
   * - 0o040：用户组读。对于普通文件，所有用户组可读取文件；对于目录，所有用户组可读取目录项。
   *
   * - 0o020：用户组写。对于普通文件，所有用户组可写入文件；对于目录，所有用户组可创建/删除目录项。
   *
   * - 0o010：用户组执行。对于普通文件，所有用户组可执行文件；对于目录，所有用户组是否可在目录中搜索给定路径名。
   *
   * - 0o004：其他读。对于普通文件，其余用户可读取文件；对于目录，其他用户组可读取目录项。
   *
   * - 0o002：其他写。对于普通文件，其余用户可写入文件；对于目录，其他用户组可创建/删除目录项。
   *
   * - 0o001：其他执行。对于普通文件，其余用户可执行文件；对于目录，其他用户组可在目录中搜索给定路径名。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly mode: number;
  /**
   * 文件所有者的ID。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  readonly uid: number;
  /**
   * 文件所有组的ID。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  readonly gid: number;
  /**
   * 文件的大小，单位为Byte。仅对普通文件有效。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly size: number;
  /**
   * 上次访问该文件的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * **注意**：目前用户数据分区默认以“noatime”方式挂载，atime更新被禁用。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly atime: number;
  /**
   * 上次修改该文件的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  readonly mtime: number;
  /**
   * 最近改变文件状态的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  readonly ctime: number;

  /**
   * 上次访问该文件的时间，表示距1970年1月1日0时0分0秒的纳秒数。
   *
   * **注意**：目前用户数据分区默认以“noatime”方式挂载，atime更新被禁用。
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 15 dynamic
   */
  readonly atimeNs?:bigint;

  /**
   * 上次修改该文件的时间，表示距1970年1月1日0时0分0秒的纳秒数。
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 15 dynamic
   */
  readonly mtimeNs?:bigint;

  /**
   * 最近改变文件状态的时间，表示距1970年1月1日0时0分0秒的纳秒数。
   *
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 15 dynamic
   */
  readonly ctimeNs?:bigint;

  /**
   * 文件的位置，表示该文件是本地文件或者云端文件。
   *
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  readonly location: LocationType;

  /**
   * 用于判断文件是否是块特殊文件。一个块特殊文件只能以块为粒度进行访问，且访问的时候带缓存。
   *
   * @returns { boolean } 表示文件是否是块特殊设备。true：是块特殊设备；false：不是块特殊设备。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isBlockDevice(): boolean;
  /**
   * 判断文件是否为字符特殊文件。字符特殊设备支持随机访问，且访问时无缓存。
   *
   * @returns { boolean } 表示文件是否是字符特殊设备。true：是字符特殊设备；false：不是字符特殊设备。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isCharacterDevice(): boolean;
  /**
   * 判断文件是否为目录。
   *
   * @returns { boolean } 表示文件是否是目录。true：是目录；false：不是目录。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isDirectory(): boolean;
  /**
   * 用于判断文件是否是命名管道（有时也称为FIFO）。命名管道通常用于进程间通信。
   *
   * @returns { boolean } 表示文件是否是 FIFO。true：是FIFO；false：不是FIFO。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isFIFO(): boolean;
  /**
   * 用于判断文件是否是普通文件。
   *
   * @returns { boolean } 表示文件是否是普通文件。true：是普通文件；false：不是普通文件。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  isFile(): boolean;
  /**
   * 判断文件是否是套接字。
   *
   * @returns { boolean } 表示文件是否是套接字。true：是套接字；false：不是套接字。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isSocket(): boolean;
  /**
   * 判断文件是否为符号链接。
   *
   * @returns { boolean } 表示文件是否是符号链接。true：是符号链接；false：不是符号链接。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  isSymbolicLink(): boolean;
}

/**
 * 文件流，在调用Stream的方法前，需要先通过
 * [fileIo.createStream](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileiocreatestream)方法或者
 * [fileIo.fdopenStream](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileiofdopenstream)（同步或异步）来构建一个Stream
 * 实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 20]
 * @since 9 dynamic
 */
declare interface Stream {
  /**
   * 关闭文件流，使用promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回值。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  close(): Promise<void>;

  /**
   * 异步关闭文件流，使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 异步关闭文件流之后的回调。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  close(callback: AsyncCallback<void>): void;

  /**
   * 同步关闭文件流。
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  closeSync(): void;

  /**
   * 刷新文件流，使用promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。返回表示异步刷新文件流的结果。
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  flush(): Promise<void>;

  /**
   * 异步刷新文件流，使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 异步刷新文件流后的回调函数。
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  flushSync(): void;

  /**
   * 将数据写入流文件，使用promise异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to write, in
   *     bytes. The default value is the buffer length.<br>- **offset** (number): start position to write the data in
   *     the file, in bytes. This parameter is optional. By default, data is written from the current position.<br>-
   *     **encoding** (string): format of the data to be encoded when the data is a string. The default value is
   *     **'utf-8'**, which is the only value supported. [since 9 - 10]
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。默认缓冲区长度。<br/>- offset，number类
   *     型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'。仅支持'utf-8'
   *     。 [since 11]
   * @returns { Promise<number> } Promise对象。返回实际写入的长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  write(
      buffer: ArrayBuffer | string,
      options?: WriteOptions
  ): Promise<number>;

  /**
   * 将数据写入流文件，使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { AsyncCallback<number> } callback - 异步写入完成后执行的回调函数。返回实际写入的数据长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

  /**
   * 将数据写入流文件，使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to write, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): start
   *     position to write the data in the file, in bytes. This parameter is optional. By default, data is written from
   *     the current position.<br>- **encoding** (string): format of the data to be encoded when the data is a string.
   *     The default value is **'utf-8'**, which is the only value supported. [since 9 - 10]
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'。仅支持?'
   *     utf-8'。 [since 11]
   * @param { AsyncCallback<number> } callback - 异步写入完成后执行的回调函数。返回实际写入的数据长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  write(
      buffer: ArrayBuffer | string,
      options: WriteOptions,
      callback: AsyncCallback<number>
  ): void;

  /**
   * 以同步方法将数据写入流文件。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to write, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): start
   *     position to write the data in the file, in bytes. This parameter is optional. By default, data is written from
   *     the current position.<br>- **encoding** (string): format of the data to be encoded when the data is a string.
   *     The default value is **'utf-8'**, which is the only value supported. [since 9 - 10]
   * @param { WriteOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>- encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认'utf-8'。仅支持?'
   *     utf-8'。 [since 11]
   * @returns { number } 实际写入的长度，单位为Byte。
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  writeSync(
      buffer: ArrayBuffer | string,
      options?: WriteOptions
  ): number;

  /**
   * 从流文件读取数据，使用promise异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to read, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): position
   *     of the data to read in the file, in bytes. This parameter is optional. By default, data is read from the
   *     current position. [since 9 - 10]
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。 [since 11]
   * @returns { Promise<number> } Promise对象。返回读取的结果，单位为Byte。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  read(
      buffer: ArrayBuffer,
      options?: ReadOptions
  ): Promise<number>;

  /**
   * 从流文件读取数据，使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { AsyncCallback<number> } callback - 异步读取完成后的回调。返回读取的结果，单位为Byte。
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<number>): void;

  /**
   * 从流文件读取数据，使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to read, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): position
   *     of the data to read in the file, in bytes. This parameter is optional. By default, data is read from the
   *     current position. [since 9 - 10]
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。 [since 11]
   * @param { AsyncCallback<number> } callback - 异步读取完成后的回调。返回读取的结果，单位为Byte。
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
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  read(
      buffer: ArrayBuffer,
      options: ReadOptions,
      callback: AsyncCallback<number>
  ): void;

  /**
   * 以同步方法从流文件读取数据。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - The options are as follows:<br>- **length** (number): length of the data to read, in
   *     bytes. This parameter is optional. The default value is the buffer length.<br>- **offset** (number): position
   *     of the data to read in the file, in bytes. This parameter is optional. By default, data is read from the
   *     current position.<br> [since 9 - 10]
   * @param { ReadOptions } [options] - 支持如下选项：<br/>- length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。<br/>- offset，
   *     number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<br/> [since 11]
   * @returns { number } 实际读取的长度，单位为Byte。
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900010 - Try again
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900044 - Network is unreachable [since 12]
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 20]
   * @since 9 dynamic
   */
  readSync(
      buffer: ArrayBuffer,
      options?: ReadOptions
  ): number;
}

/**
 *
 * 事件监听类。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
export interface WatchEventListener {
  /**
   * Specifies the callback function to be invoked.
   *
   * @param { WatchEvent } event - Event for the callback to invoke.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  (event: WatchEvent): void;
}

/**
 * 事件类
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
export interface WatchEvent {
  /**
   * 发生监听事件对应文件的沙箱路径，该沙箱路径包含文件名称。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly fileName: string;

  /**
   * 监听变动的事件集，多个事件通过或(|)的方式进行集合。
   *
   * - 0x1: IN_ACCESS， 文件被访问。
   *
   * - 0x2: IN_MODIFY，文件内容被修改。
   *
   * - 0x4: IN_ATTRIB，文件元数据被修改。
   *
   * - 0x8: IN_CLOSE_WRITE，文件在打开时进行了写操作，然后被关闭。
   *
   * - 0x10: IN_CLOSE_NOWRITE，文件或目录在打开时未进行写操作，然后被关闭。
   *
   * - 0x20: IN_OPEN，文件或目录被打开。
   *
   * - 0x40: IN_MOVED_FROM，监听目录中文件被移动走。
   *
   * - 0x80: IN_MOVED_TO，监听目录中文件被移动过来。
   *
   * - 0x100: IN_CREATE，监听目录中文件或子目录被创建。
   *
   * - 0x200: IN_DELETE，监听目录中文件或子目录被删除。
   *
   * - 0x400: IN_DELETE_SELF，监听的目录被删除，删除后监听停止。
   *
   * - 0x800: IN_MOVE_SELF，监听的文件或目录被移动，移动后监听继续。
   *
   * - 0xfff: IN_ALL_EVENTS，监听以上所有事件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly event: number;

  /**
   * 绑定相关事件的cookie。当前仅支持事件IN_MOVED_FROM与IN_MOVED_TO，同一个文件的移动事件IN_MOVED_FROM和IN_MOVED_TO具有相同的cookie值。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  readonly cookie: number;
}

/**
 * 文件目录变化监听对象。由createWatcher接口获得。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
export interface Watcher {
  /**
   * 开启监听。
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
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  start(): void;

  /**
   * 停止监听并移除Watcher对象。
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
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  stop(): void;
}

/**
 * 文件读取迭代器返回结果，支持ReaderIterator接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
export interface ReaderIteratorResult {
  /**
   * 迭代器是否已完成迭代。true：已完成迭代；false：未完成迭代。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  done: boolean;

  /**
   * 逐行读取的文件文本内容。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  value: string;
}

/**
 * 文件读取迭代器。在调用ReaderIterator的方法前，需要先通过readLines方法（同步或异步）来构建一个ReaderIterator实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare interface ReaderIterator {
  /**
   * 获取迭代器下一项内容。
   *
   * @returns { ReaderIteratorResult } 文件读取迭代器返回结果。
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900037 - No data available
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  next(): ReaderIteratorResult;
}

/**
 * 文件过滤配置项，支持listFile接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
export interface Filter {
  /**
   * 文件后缀名完全匹配，各个关键词OR关系。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  suffix?: Array<string>;
  /**
   * 文件名模糊匹配，各个关键词OR关系。当前仅支持通配符*。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  displayName?: Array<string>;
  /**
   * mime类型完全匹配，各个关键词OR关系。预留字段，暂不支持使用。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mimeType?: Array<string>;
  /**
   * 文件大小匹配，大于指定大小的文件，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fileSizeOver?: number;
  /**
   * 文件最近修改时间匹配，在指定时间点及之后的文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lastModifiedAfter?: number;
  /**
   * 是否排除Media中已有的文件。true：排除Media中已有的文件；false：不排除Media中已有的文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  excludeMedia?: boolean;
}

/**
 * 冲突文件信息，支持copyDir及moveDir接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 10 dynamic
 */
export interface ConflictFiles {
  /**
   * 源冲突文件路径。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  srcFile: string;

  /**
   * 目标冲突文件路径。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   */
  destFile: string;
}

/**
 * 可选项类型，支持readLines接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
export interface Options {
  /**
   * 文件编码方式。可选项。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  encoding?: string;
}

/**
 * 可选项类型，支持read接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
export interface ReadOptions {
  /**
   * 期望读取文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始读。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  offset?: number;
  /**
   * 期望读取数据的长度，单位为Byte。可选，默认缓冲区长度。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  length?: number;
}

/**
 * 可选项类型，支持readText接口使用，ReadTextOptions继承至[ReadOptions]{@link ReadOptions}。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
export interface ReadTextOptions extends ReadOptions {
  /**
   * 当数据是 string 类型时有效，表示数据的编码方式，默认 'utf-8'，仅支持 'utf-8'。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  encoding?: string;
}

/**
 * 可选项类型，支持write接口使用，WriteOptions继承至[Options]{@link Options}。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 11 dynamic
 */
export interface WriteOptions extends Options {
  /**
   * 期望写入文件位置，单位为Byte（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  offset?: number;
  /**
   * 期望写入数据的长度，单位为Byte。可选，默认缓冲区长度。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 11 dynamic
   */
  length?: number;
}

/**
 * 可选项类型，支持ListFile接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @atomicservice
 * @since 11 dynamic
 */
export interface ListFileOptions {
  /**
   * 是否递归子目录下文件名。可选，默认为false。当recursion为false时，返回当前目录下满足过滤要求的文件名及目录名。当recursion为true时，返回此目录下所有满足过滤要求的文件的相对路径（以“/”开头）。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 11 dynamic
   */
  recursion?: boolean;

  /**
   * 列出文件名数量。可选，当设置0时，列出所有文件，默认为0。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 11 dynamic
   */
  listNum?: number;

  /**
   * 文件过滤配置项。 可选，设置过滤条件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 11 dynamic
   */
  filter?: Filter;
}

/**
 * 文件名过滤器，支持listFileExt接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
export interface FileFilter {
  /**
   * 过滤函数，判断指定的文件名是否应该包含在文件列表中。
   *
   * 注意：此函数被频繁调用。尽量避免文件I/O、网络请求等耗时操作。
   *
   * @param { string } name - 需要过滤的文件名。
   * @returns { boolean } 如果应该包含文件，则返回true，否则返回false。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  filter(name: string): boolean;
}

/**
 * 可选项类型，支持listFileExt接口使用自定义过滤规则。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
export interface ListFileExtOptions {
  /**
   * 是否递归子目录下文件名。可选，默认为false。当recursion为false时，返回当前目录下满足过滤要求的文件名及目录名。当recursion为true时，返回此目录下所有满足过滤要求的文件的相对路径（以“/”开头）。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  recursion?: boolean;

  /**
   * 列出文件名数量。可选，当设置0时，列出所有文件，默认为0。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  listNum?: number;

  /**
   * 文件名过滤器接口。可选，设置自定义文件名过滤规则。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  fileFilter?: FileFilter;
}

/**
 * 可选项类型，支持 createRandomAccessFile 接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
export interface RandomAccessFileOptions {
  /**
   * 表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  start?: number;

  /**
   * 表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  end?: number;
}

/**
 * 可选项类型，支持 createReadStream 接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
export interface ReadStreamOptions {
  /**
   * 表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  start?: number;

  /**
   * 表示期望读取结束的位置，单位为Byte。可选，默认文件末尾。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  end?: number;
}

/**
 * 可选项类型，支持 createWriteStream 接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 12 dynamic
 */
export interface WriteStreamOptions {
  /**
   * 创建文件可写流的[选项](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#openmode)，必须指定如下选项中的一个，默认只写方式创建：
   *
   * - OpenMode.READ_ONLY(0o0)：只读。
   *
   * - OpenMode.WRITE_ONLY(0o1)：只写。
   *
   * - OpenMode.READ_WRITE(0o2)：读写。
   *
   * 给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项：
   *
   * - OpenMode.CREATE(0o100)：若文件不存在，则创建文件。
   *
   * - OpenMode.TRUNC(0o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。
   *
   * - OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。
   *
   * - OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续IO进行非阻塞操作。
   *
   * - OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。
   *
   * - OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。
   *
   * - OpenMode.SYNC(0o4010000)：以同步IO的方式打开文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  mode?: number;
  /**
   * 表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   */
  start?: number;
}

/**
 * 事件监听类。创建DFSListener对象，用于监听分布式文件系统状态。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
export interface DfsListeners {
  /**
   * 事件回调类。参数由[connectDfs]{@link connectDfs}传入。
   *
   * @param { string } networkId - 设备的网络Id。
   * @param { number } status - 分布式文件系统的状态码（以connectDfs回调onStatus的特定错误码作为入参）。触发场景为
   *     connectDfs调用过程中出现对端设备异常，对应错误码为：- 13900046：软件造成连接中断。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  onStatus(networkId: string, status: number): void;
}

/**
 * 枚举，文件内存映射模式类型，支持mmap接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum MappingMode {
  /**
   * 只读映射模式。文件映射区不可写，修改会抛出异常。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  READ_ONLY = 0,

  /**
   * 读写映射模式。修改会写入文件映射区，后续由操作系统同步到文件（非实时）。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  READ_WRITE = 1,

  /**
   * 私有映射模式。是一种写时复制的映射机制，对映射区的修改仅对当前进程可见，不会影响原始文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  PRIVATE = 2
}

/**
 * 枚举，文件偏移指针相对偏移位置类型，支持lseek接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 11 dynamic
 */
declare enum WhenceType {
  /**
   * 文件起始位置处。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  SEEK_SET = 0,

  /**
   * 当前文件偏移指针位置处。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  SEEK_CUR = 1,

  /**
   * 文件末尾位置处。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 11 dynamic
   */
  SEEK_END = 2
}

/**
 * 枚举，文件位置，表示该文件是否在本地或者云端存在。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 11 dynamic
 */
declare enum LocationType {
  /**
   * 文件在本地存在。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  LOCAL = 1 << 0,

  /**
   * 文件在云端存在。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 11 dynamic
   */
  CLOUD = 1 << 1
}

/**
 * 枚举，表示需要校验的具体权限。若不填，默认校验文件是否存在。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AccessModeType {
  /**
   * 文件是否存在。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  EXIST = 0,

  /**
   * 文件是否具有写入权限。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  WRITE = 2,

  /**
   * 文件是否具有读取权限。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  READ = 4,

  /**
   * 文件是否具有读写权限。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  READ_WRITE = 6
}

/**
 * 枚举，表示需要校验的文件位置。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 12 dynamic
 */
declare enum AccessFlagType {
  /**
   * 文件是否在本地。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 12 dynamic
   */
  LOCAL = 0
}

export default fileIo;