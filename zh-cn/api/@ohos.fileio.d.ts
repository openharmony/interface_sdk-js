/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * fileio
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 */
declare namespace fileIO {

  export { access };

  export { accessSync };

  export { chmod };

  export { chmodSync };

  export { chown };

  export { chownSync };

  export { close };

  export { closeSync };

  export { copyFile };

  export { copyFileSync };

  export { createStream };

  export { createStreamSync };

  export { createWatcher };

  export { fchmod };

  export { fchmodSync };

  export { fchown };

  export { fchownSync };

  export { fdatasync };

  export { fdatasyncSync };

  export { fdopenStream };

  export { fdopenStreamSync };

  export { fstat };

  export { fstatSync };

  export { fsync };

  export { fsyncSync };

  export { ftruncate };

  export { ftruncateSync };

  export { hash };

  export { lchown };

  export { lchownSync };

  export { lstat };

  export { lstatSync };

  export { mkdir };

  export { mkdirSync };

  export { mkdtemp };

  export { mkdtempSync };

  export { open };

  export { openSync };

  export { opendir };

  export { opendirSync };

  export { read };

  export { readSync };

  export { readText };

  export { readTextSync };

  export { rename };

  export { renameSync };

  export { rmdir };

  export { rmdirSync };

  export { stat };

  export { statSync };

  export { symlink };

  export { symlinkSync };

  export { truncate };

  export { truncateSync };

  export { unlink };

  export { unlinkSync };

  export { write };

  export { writeSync };

  export { Dir };

  export { Dirent };

  export { ReadOut };

  export { Stat };

  export { Stream };

  export { Watcher };
}

/**
 * 检查当前进程是否可访问某文件，使用Promise异步回调。
 *
 * @param { string } path - 待访问文件的应用沙箱路径。
 * @param { number } [mode] - 访问文件时的选项，可给定如下选项，以按位或的方式使用多个选项，默认给定0。<br/>确认当前进程是否具有对应权限：<br/>-?0：确认文件是否存在。<br/>-?1：确认当前进程
 *     是否具有可执行权限。<br/>-?2：确认当前进程是否具有写权限。<br/>-?4：确认当前进程是否具有读权限。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:access
 */
declare function access(path: string, mode?: number): Promise<void>;

/**
 * 检查当前进程是否可访问某文件，使用callback异步回调。
 *
 * @param { string } path - 待访问文件的应用沙箱路径。
 * @param { AsyncCallback<void> } [callback] - 异步检查当前进程是否可访问某文件之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:access
 */
declare function access(path: string, callback: AsyncCallback<void>): void;

/**
 * 检查当前进程是否可访问某文件，使用callback异步回调。
 *
 * @param { string } path - 待访问文件的应用沙箱路径。
 * @param { number } [mode] - 访问文件时的选项，可给定如下选项，以按位或的方式使用多个选项，默认给定0。<br/>确认当前进程是否具有对应权限：<br/>-?0：确认文件是否存在。<br/>-?1：确认当前进程
 *     是否具有可执行权限。<br/>-?2：确认当前进程是否具有写权限。<br/>-?4：确认当前进程是否具有读权限。
 * @param { AsyncCallback<void> } [callback] - 异步检查当前进程是否可访问某文件之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:access
 */
declare function access(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法检查当前进程是否可访问某文件。
 *
 * @param { string } path - 待访问文件的应用沙箱路径。
 * @param { number } [mode] - 访问文件时的选项，可给定如下选项，以按位或的方式使用多个选项，默认给定0。<br/>确认当前进程是否具有对应权限：<br/>-?0：确认文件是否存在。<br/>-?1：确认当前进程
 *     是否具有可执行权限。<br/>-?2：确认当前进程是否具有写权限。<br/>-?4：确认当前进程是否具有读权限。
 * @throws { TypedError | Error } access fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:accessSync
 */
declare function accessSync(path: string, mode?: number): void;
/**
 * 关闭文件，使用Promise异步回调。
 *
 * @param { number } fd - 待关闭文件的文件描述符。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:close
 */
declare function close(fd: number): Promise<void>;

/**
 * 关闭文件，使用callback异步回调。
 *
 * @param { number } fd - 待关闭文件的文件描述符。
 * @param { AsyncCallback<void> } [callback] - 异步关闭文件之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:close
 */
declare function close(fd: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法关闭文件。
 *
 * @param { number } fd - 待关闭文件的文件描述符。
 * @throws { TypedError | Error } close fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:closeSync
 */
declare function closeSync(fd: number): void;
/**
 * 复制文件，使用Promise异步回调。
 *
 * @param { string | number } src - 待复制文件的路径或待复制文件的描述符。
 * @param { string | number } dest - 目标文件路径或目标文件描述符。
 * @param { number } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁切掉。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:copyFile
 */
declare function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>;

/**
 * copyFile.
 *
 * @param { string | number } src - 待复制文件的路径或待复制文件的描述符。
 * @param { string | number } dest - 目标文件路径或目标文件描述符。
 * @param { AsyncCallback<void> } [callback] - 异步复制文件之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:copyFile
 */
declare function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void;

/**
 * 复制文件，使用callback异步回调。
 *
 * @param { string | number } src - 待复制文件的路径或待复制文件的描述符。
 * @param { string | number } dest - 目标文件路径或目标文件描述符。
 * @param { number } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁切掉。
 * @param { AsyncCallback<void> } [callback] - 异步复制文件之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:copyFile
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
 * @param { string | number } src - 待复制文件的路径或待复制文件的描述符。
 * @param { string | number } dest - 目标文件路径或目标文件描述符。
 * @param { number } [mode] - mode提供覆盖文件的选项，当前仅支持0，且默认为0。<br/>0：完全覆盖目标文件，未覆盖部分将被裁切掉。
 * @throws { TypedError | Error } copyFile fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:copyFileSync
 */
declare function copyFileSync(src: string | number, dest: string | number, mode?: number): void;
/**
 * 基于文件路径打开文件流，使用Promise异步回调。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { string } mode - -?r：打开只读文件，该文件必须存在。<br/>-?r+：打开可读写的文件，该文件必须存在。<br/>-?w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>-?w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>-?a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>-?a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Promise<Stream> } Promise对象。返回文件流的结果。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:createStream
 */
declare function createStream(path: string, mode: string): Promise<Stream>;

/**
 * 基于文件路径打开文件流，使用callback异步回调。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { string } mode - -?r：打开只读文件，该文件必须存在。<br/>-?r+：打开可读写的文件，该文件必须存在。<br/>-?w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>-?w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>-?a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>-?a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @param { AsyncCallback<Stream> } [callback] - 异步打开文件流之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:createStream
 */
declare function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void;
/**
 * 以同步方法基于文件路径打开文件流。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { string } mode - -?r：打开只读文件，该文件必须存在。<br/>-?r+：打开可读写的文件，该文件必须存在。<br/>-?w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>-?w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>-?a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>-?a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Stream } 返回文件流的结果。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:createStreamSync
 */
declare function createStreamSync(path: string, mode: string): Stream;
/**
 * 基于文件路径改变文件所有者，使用Promise异步回调。
 *
 * @param { string } path - 待改变文件的应用沙箱路径。
 * @param { number } uid - 新的UID（UserID）。
 * @param { number } gid - 新的GID（GroupID）。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chown(path: string, uid: number, gid: number): Promise<void>;

/**
 * 基于文件路径改变文件所有者，使用callback异步回调。
 *
 * @param { string } path - 待改变文件的应用沙箱路径。
 * @param { number } uid - 新的UID。
 * @param { number } gid - 新的GID。
 * @param { AsyncCallback<void> } [callback] - 异步改变文件所有者之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chown(path: string, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * 以同步的方法基于文件路径改变文件所有者。
 *
 * @param { string } path - 待改变文件的应用沙箱路径。
 * @param { number } uid - 新的UID。
 * @param { number } gid - 新的GID。
 * @throws { TypedError | Error } chown fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chownSync(path: string, uid: number, gid: number): void;
/**
 * 改变文件权限，使用Promise异步回调。
 *
 * @param { string } path - 所需变更权限的文件的应用沙箱路径。
 * @param { number } mode - 改变文件权限，可给定如下权限，以按位或的方式追加权限。<br/>-?0o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有
 *     者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/
 *     >-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用
 *     户具有可执行权限。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chmod(path: string, mode: number): Promise<void>;

/**
 * 改变文件权限，使用callback异步回调。
 *
 * @param { string } path - 所需变更权限的文件的应用沙箱路径。
 * @param { number } mode - 改变文件权限，可给定如下权限，以按位或的方式追加权限。<br/>-?0o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有
 *     者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/
 *     >-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用
 *     户具有可执行权限。
 * @param { AsyncCallback<void> } [callback] - 异步改变文件权限之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chmod(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法改变文件权限。
 *
 * @param { string } path - 所需变更权限的文件的应用沙箱路径。
 * @param { number } mode - 改变文件权限，可给定如下权限，以按位或的方式追加权限。<br/>-?0o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有
 *     者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/
 *     >-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用
 *     户具有可执行权限。
 * @throws { TypedError | Error } chmod fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chmodSync(path: string, mode: number): void;
/**
 * 基于文件描述符截断文件，使用Promise异步回调。
 *
 * @param { number } fd - 待截断文件的文件描述符。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:truncate
 */
declare function ftruncate(fd: number, len?: number): Promise<void>;

/**
 * 基于文件描述符截断文件，使用callback异步回调。
 *
 * @param { number } fd - 待截断文件的文件描述符。
 * @param { AsyncCallback<void> } [callback] - 回调函数，本调用无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:truncate
 */
declare function ftruncate(fd: number, callback: AsyncCallback<void>): void;

/**
 * 基于文件描述符截断文件，使用callback异步回调。
 *
 * @param { number } fd - 待截断文件的文件描述符。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。
 * @param { AsyncCallback<void> } [callback] - 回调函数，本调用无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:truncate
 */
declare function ftruncate(fd: number, len: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法基于文件描述符截断文件。
 *
 * @param { number } fd - 待截断文件的文件描述符。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。
 * @throws { TypedError | Error } ftruncate fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:truncateSync
 */
declare function ftruncateSync(fd: number, len?: number): void;
/**
 * 同步文件数据，使用Promise异步回调。
 *
 * @param { number } fd - 待同步文件的文件描述符。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fsync
 */
declare function fsync(fd: number): Promise<void>;

/**
 * 同步文件数据，使用callback异步回调。
 *
 * @param { number } fd - 待同步文件的文件描述符。
 * @param { AsyncCallback<void> } [callback] - 异步将文件数据同步之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fsync
 */
declare function fsync(fd: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法同步文件数据。
 *
 * @param { number } fd - 待同步文件的文件描述符。
 * @throws { TypedError | Error } fsync fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fsyncSync
 */
declare function fsyncSync(fd: number): void;
/**
 * 基于文件描述符获取文件状态信息，使用Promise异步回调。
 *
 * @param { number } fd - 待获取文件状态的文件描述符。
 * @returns { Promise<Stat> } Promise对象。返回表示文件状态的具体信息。
 * @throws { TypedError } fstat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:stat
 */
declare function fstat(fd: number): Promise<Stat>;

/**
 * 基于文件描述符获取文件状态信息，使用callback异步回调。
 *
 * @param { number } fd - 待获取文件状态的文件描述符。
 * @param { AsyncCallback<Stat> } callback - 异步获取文件状态信息之后的回调。
 * @throws { TypedError } fstat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:stat
 */
declare function fstat(fd: number, callback: AsyncCallback<Stat>): void;
/**
 * 以同步方法基于文件描述符获取文件状态信息。
 *
 * @param { number } fd - 待获取文件状态的文件描述符。
 * @returns { Stat } 表示文件状态的具体信息。
 * @throws { TypedError | Error } fstat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:statSync
 */
declare function fstatSync(fd: number): Stat;
/**
 * 实现文件内容数据同步，使用Promise异步回调。
 *
 * @param { number } fd - 待同步文件的文件描述符。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fdatasync
 */
declare function fdatasync(fd: number): Promise<void>;

/**
 * 实现文件内容数据同步，使用callback异步回调。
 *
 * @param { number } fd - 待同步文件的文件描述符。
 * @param { AsyncCallback<void> } [callback] - 异步将文件内容数据同步之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fdatasync
 */
declare function fdatasync(fd: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法实现文件内容数据同步。
 *
 * @param { number } fd - 待同步文件的文件描述符。
 * @throws { TypedError | Error } fdatasync fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fdatasyncSync
 */
declare function fdatasyncSync(fd: number): void;
/**
 * 基于文件描述符改变文件所有者，使用Promise异步回调。
 *
 * @param { number } fd - 待改变文件的文件描述符。
 * @param { number } uid - 文件所有者的UID。
 * @param { number } gid - 文件所有组的GID。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchown(fd: number, uid: number, gid: number): Promise<void>;

/**
 * 基于文件描述符改变文件所有者，使用callback异步回调。
 *
 * @param { number } fd - 待改变文件的文件描述符。
 * @param { number } uid - 文件所有者的UID。
 * @param { number } gid - 文件所有组的GID。
 * @param { AsyncCallback<void> } [callback] - 异步改变文件所有者之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchown(fd: number, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法基于文件描述符改变文件所有者。
 *
 * @param { number } fd - 待改变文件的文件描述符。
 * @param { number } uid - 文件所有者的UID。
 * @param { number } gid - 文件所有组的GID。
 * @throws { TypedError | Error } fchown fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchownSync(fd: number, uid: number, gid: number): void;
/**
 * 基于文件描述符改变文件权限，使用Promise异步回调。
 *
 * @param { number } fd - 待改变文件的文件描述符。
 * @param { number } mode - 若创建文件，则指定文件的权限，可给定如下权限，以按位或的方式追加权限。<br/>-?0o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?
 *     0o200：所有者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有
 *     写权限。<br/>-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0
 *     o001：其余用户具有可执行权限。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchmod(fd: number, mode: number): Promise<void>;

/**
 * 基于文件描述符改变文件权限，使用callback异步回调。
 *
 * @param { number } fd - 待改变文件的文件描述符。
 * @param { number } mode - 若创建文件，则指定文件的权限，可给定如下权限，以按位或的方式追加权限。<br/>-?0o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?
 *     0o200：所有者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有
 *     写权限。<br/>-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0
 *     o001：其余用户具有可执行权限。
 * @param { AsyncCallback<void> } [callback] - 异步改变文件权限之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchmod(fd: number, mode: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法基于文件描述符改变文件权限。
 *
 * @param { number } fd - 待改变文件的文件描述符。
 * @param { number } mode - 若创建文件，则指定文件的权限，可给定如下权限，以按位或的方式追加权限。<br/>-?0o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?
 *     0o200：所有者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有
 *     写权限。<br/>-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0
 *     o001：其余用户具有可执行权限。
 * @throws { TypedError | Error } fchmod fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchmodSync(fd: number, mode: number): void;
/**
 * 基于文件描述符打开文件流，使用Promise异步回调。
 *
 * @param { number } fd - 待打开文件的文件描述符。
 * @param { string } mode - -?r：打开只读文件，该文件必须存在。<br/>-?r+：打开可读写的文件，该文件必须存在。<br/>-?w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>-?w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>-?a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>-?a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Promise<Stream> } Promise对象。返回文件流的结果。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fdopenStream
 */
declare function fdopenStream(fd: number, mode: string): Promise<Stream>;

/**
 * 基于文件描述符打开文件流，使用callback异步回调。
 *
 * @param { number } fd - 待打开文件的文件描述符。
 * @param { string } mode - -?r：打开只读文件，该文件必须存在。<br/>-?r+：打开可读写的文件，该文件必须存在。<br/>-?w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>-?w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>-?a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>-?a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @param { AsyncCallback<Stream> } [callback] - 异步打开文件流之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fdopenStream
 */
declare function fdopenStream(fd: number, mode: string, callback: AsyncCallback<Stream>): void;
/**
 * 以同步方法基于文件描述符打开文件流。
 *
 * @param { number } fd - 待打开文件的文件描述符。
 * @param { string } mode - -?r：打开只读文件，该文件必须存在。<br/>-?r+：打开可读写的文件，该文件必须存在。<br/>-?w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则
 *     建立该文件。<br/>-?w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。<br/>-?a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到
 *     文件尾，即文件原先的内容会被保留。<br/>-?a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。
 * @returns { Stream } 返回文件流的结果。
 * @throws { TypedError | Error } open fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:fdopenStreamSync
 */
declare function fdopenStreamSync(fd: number, mode: string): Stream;
/**
 * 计算文件的哈希值，使用Promise异步回调。
 *
 * @param { string } path - 待计算哈希值文件的应用沙箱路径。
 * @param { string } algorithm - 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。
 * @returns { Promise<string> } Promise对象。返回文件的哈希值。表示为十六进制数字串，所有字母均大写。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.hash:hash
 */
declare function hash(path: string, algorithm: string): Promise<string>;

/**
 * 计算文件的哈希值，使用callback异步回调。
 *
 * @param { string } path - 待计算哈希值文件的应用沙箱路径。
 * @param { string } algorithm - 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。
 * @param { AsyncCallback<string> } [callback] - 异步计算文件哈希操作之后的回调函数（其中给定文件哈希值表示为十六进制数字串，所有字母均大写）。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.hash:hash
 */
declare function hash(path: string, algorithm: string, callback: AsyncCallback<string>): void;
/**
 * 基于文件路径改变文件所有者，更改符号链接本身的所有者，而不是符号链接所指向的实际文件，使用Promise异步回调。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { number } uid - 新的UID。
 * @param { number } gid - 新的GID。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function lchown(path: string, uid: number, gid: number): Promise<void>;

/**
 * 基于文件路径改变文件所有者，更改符号链接本身的所有者，而不是更改符号链接所指向的实际文件，使用callback异步回调。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { number } uid - 新的UID。
 * @param { number } gid - 新的GID。
 * @param { AsyncCallback<void> } [callback] - 异步改变文件所有者之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function lchown(path: string, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法基于文件路径改变文件所有者，更改符号链接本身的所有者，而不是更改符号链接所指向的实际文件。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { number } uid - 新的UID。
 * @param { number } gid - 新的GID。
 * @throws { TypedError | Error } lchown fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function lchownSync(path: string, uid: number, gid: number): void;
/**
 * 获取链接信息，使用Promise异步回调。
 *
 * @param { string } path - 目标文件的应用沙箱路径。
 * @returns { Promise<Stat> } promise对象，返回文件对象，表示文件的具体信息，详情见stat。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:lstat
 */
declare function lstat(path: string): Promise<Stat>;

/**
 * 获取链接信息，使用callback异步回调。
 *
 * @param { string } path - 目标文件的应用沙箱路径。
 * @param { AsyncCallback<Stat> } [callback] - 回调函数，返回文件的具体信息。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:lstat
 */
declare function lstat(path: string, callback: AsyncCallback<Stat>): void;
/**
 * 以同步方法获取链接信息。
 *
 * @param { string } path - 目标文件的应用沙箱路径。
 * @returns { Stat } 表示文件的具体信息。
 * @throws { TypedError | Error } lstat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:lstatSync
 */
declare function lstatSync(path: string): Stat;
/**
 * 创建目录，使用Promise异步回调。
 *
 * @param { string } path - 待创建目录的应用沙箱路径。
 * @param { number } [mode] - 创建目录的权限，可给定如下权限，以按位或的方式追加权限，默认给定0o775。<br/>-?0o775：所有者具有读、写及可执行权限，其余用户具有读及可执行权限。<br/>-?0o7
 *     00：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行
 *     权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/>-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?
 *     0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用户具有可执行权限。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:mkdir
 */
declare function mkdir(path: string, mode?: number): Promise<void>;

/**
 * 创建目录，使用callback异步回调。
 *
 * @param { string } path - 待创建目录的应用沙箱路径。
 * @param { AsyncCallback<void> } [callback] - 异步创建目录操作完成之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:mkdir
 */
declare function mkdir(path: string, callback: AsyncCallback<void>): void;

/**
 * 创建目录，使用callback异步回调。
 *
 * @param { string } path - 待创建目录的应用沙箱路径。
 * @param { number } [mode] - 创建目录的权限，可给定如下权限，以按位或的方式追加权限，默认给定0o775。<br/>-?0o775：所有者具有读、写及可执行权限，其余用户具有读及可执行权限。<br/>-?0o7
 *     00：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行
 *     权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/>-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?
 *     0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用户具有可执行权限。
 * @param { AsyncCallback<void> } [callback] - 异步创建目录操作完成之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:mkdir
 */
declare function mkdir(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法创建目录。
 *
 * @param { string } path - 待创建目录的应用沙箱路径。
 * @param { number } [mode] - 创建目录的权限，可给定如下权限，以按位或的方式追加权限，默认给定0o775。<br/>-?0o775：所有者具有读、写及可执行权限，其余用户具有读及可执行权限。<br/>-?0o7
 *     00：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行
 *     权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/>-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?
 *     0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用户具有可执行权限。
 * @throws { TypedError | Error } mkdir fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:mkdirSync
 */
declare function mkdirSync(path: string, mode?: number): void;
/**
 * 创建临时目录，使用Promise异步回调。
 *
 * @param { string } prefix - 用随机产生的字符串替换以“XXXXXX”结尾目录路径。
 * @returns { Promise<string> } Promise对象。返回生成的唯一目录路径。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:mkdtemp
 */
declare function mkdtemp(prefix: string): Promise<string>;

/**
 * 创建临时目录，使用callback异步回调。
 *
 * @param { string } prefix - 用随机产生的字符串替换以“XXXXXX”结尾目录路径。
 * @param { AsyncCallback<string> } [callback] - 异步创建临时目录之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:mkdtemp
 */
declare function mkdtemp(prefix: string, callback: AsyncCallback<string>): void;
/**
 * 以同步的方法创建临时目录。
 *
 * @param { string } prefix - 用随机产生的字符串替换以“XXXXXX”结尾目录路径。
 * @returns { string } 产生的唯一目录路径。
 * @throws { TypedError | Error } mkdtemp fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:mkdtempSync
 */
declare function mkdtempSync(prefix: string): string;
/**
 * 打开文件，使用Promise异步回调。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { number } [flags] - 打开文件的选项，必须指定如下选项中的一个，默认以只读方式打开：<br/>-?0o0：只读打开。<br/>-?0o1：只写打开。<br/>-?0o2：读写打开。<br/>同时，也可
 *     给定如下选项，以按位或的方式追加，默认不给定任何额外选项：<br/>-?0o100：若文件不存在，则创建文件。使用该选项时必须指定第三个参数?mode。<br/>-?0o200：如果追加了0o100选项，且文件已经存在，则出错
 *     。<br/>-?0o1000：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>-?0o2000：以追加方式打开，后续写将追加到文件末尾。<br/>-?0o4000：如果path指向FIFO、块特殊文件或字符特殊文件
 *     ，则本次打开及后续?IO?进行非阻塞操作。<br/>-?0o200000：如果path不指向目录，则出错。<br/>-?0o400000：如果path指向符号链接，则出错。<br/>-?0o4010000：以同步IO的方式打开
 *     文件。
 * @param { number } [mode] - 若创建文件，则指定文件的权限，可给定如下权限，以按位或的方式追加权限，默认给定0o660。<br/>-?0o660：所有者具有读、写权限，所有用户组具有读、写权限。<br/>-?0
 *     o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可
 *     执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/>-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>
 *     -?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用户具有可执行权限。
 * @returns { Promise<number> } Promise对象。返回打开文件的文件描述符。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:open
 */
declare function open(path: string, flags?: number, mode?: number): Promise<number>;

/**
 * 打开文件，使用callback异步回调。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { AsyncCallback<number> } [callback] - 异步打开文件之后的回调，返回打开文件的文件描述符。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:open
 */
declare function open(path: string, callback: AsyncCallback<number>): void;

/**
 * 打开文件，使用callback异步回调。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { number } [flags] - 打开文件的选项，必须指定如下选项中的一个，默认以只读方式打开：<br/>-?0o0：只读打开。<br/>-?0o1：只写打开。<br/>-?0o2：读写打开。<br/>同时，也可
 *     给定如下选项，以按位或的方式追加，默认不给定任何额外选项：<br/>-?0o100：若文件不存在，则创建文件。使用该选项时必须指定第三个参数?mode。<br/>-?0o200：如果追加了0o100选项，且文件已经存在，则出错
 *     。<br/>-?0o1000：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>-?0o2000：以追加方式打开，后续写将追加到文件末尾。<br/>-?0o4000：如果path指向FIFO、块特殊文件或字符特殊文件
 *     ，则本次打开及后续?IO?进行非阻塞操作。<br/>-?0o200000：如果path不指向目录，则出错。<br/>-?0o400000：如果path指向符号链接，则出错。<br/>-?0o4010000：以同步IO的方式打开
 *     文件。
 * @param { AsyncCallback<number> } [callback] - 异步打开文件之后的回调，返回打开文件的文件描述符。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:open
 */
declare function open(path: string, flags: number, callback: AsyncCallback<number>): void;

/**
 * 打开文件，使用callback异步回调。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { number } [flags] - 打开文件的选项，必须指定如下选项中的一个，默认以只读方式打开：<br/>-?0o0：只读打开。<br/>-?0o1：只写打开。<br/>-?0o2：读写打开。<br/>同时，也可
 *     给定如下选项，以按位或的方式追加，默认不给定任何额外选项：<br/>-?0o100：若文件不存在，则创建文件。使用该选项时必须指定第三个参数?mode。<br/>-?0o200：如果追加了0o100选项，且文件已经存在，则出错
 *     。<br/>-?0o1000：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>-?0o2000：以追加方式打开，后续写将追加到文件末尾。<br/>-?0o4000：如果path指向FIFO、块特殊文件或字符特殊文件
 *     ，则本次打开及后续?IO?进行非阻塞操作。<br/>-?0o200000：如果path不指向目录，则出错。<br/>-?0o400000：如果path指向符号链接，则出错。<br/>-?0o4010000：以同步IO的方式打开
 *     文件。
 * @param { number } [mode] - 若创建文件，则指定文件的权限，可给定如下权限，以按位或的方式追加权限，默认给定0o660。<br/>-?0o660：所有者具有读、写权限，所有用户组具有读、写权限。<br/>-?0
 *     o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有者具有写权限。<br/>-?0o100：所有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可
 *     执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/>-?0o010：所有用户组具有可执行权限。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>
 *     -?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用户具有可执行权限。
 * @param { AsyncCallback<number> } [callback] - 异步打开文件之后的回调，返回打开文件的文件描述符。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:open
 */
declare function open(path: string, flags: number, mode: number, callback: AsyncCallback<number>): void;
/**
 * 以同步方法打开文件。
 *
 * @param { string } path - 待打开文件的应用沙箱路径。
 * @param { number } [flags] - 打开文件的选项，必须指定如下选项中的一个，默认以只读方式打开：<br/>-?0o0：只读打开。<br/>-?0o1：只写打开。<br/>-?0o2：读写打开。<br/>同时，也可
 *     给定如下选项，以按位或的方式追加，默认不给定任何额外选项：<br/>-?0o100：若文件不存在，则创建文件。使用该选项时必须指定第三个参数?mode。<br/>-?0o200：如果追加了0o100选项，且文件已经存在，则出错
 *     。<br/>-?0o1000：如果文件存在且文件具有写权限，则将其长度裁剪为零。<br/>-?0o2000：以追加方式打开，后续写将追加到文件末尾。<br/>-?0o4000：如果path指向FIFO、块特殊文件或字符特殊文件
 *     ，则本次打开及后续?IO?进行非阻塞操作。<br/>-?0o200000：如果path不指向目录，则出错。<br/>-?0o400000：如果path指向符号链接，则出错。<br/>-?0o4010000：以同步IO的方式打开
 *     文件。
 * @param { number } [mode] - 若创建文件，则指定文件的权限，可给定如下权限，以按位或的方式追加权限，默认给定0o660。<br/>-?0o660：所有者具有读、写权限，所有用户组具有读、写权限。<br/>-?0
 *     o640：所有者具有读、写权限，所有用户组具有读权限。<br/>-?0o700：所有者具有读、写及可执行权限。<br/>-?0o400：所有者具有读权限。<br/>-?0o200：所有者具有写权限。<br/>-?0o100：所
 *     有者具有可执行权限。<br/>-?0o070：所有用户组具有读、写及可执行权限。<br/>-?0o040：所有用户组具有读权限。<br/>-?0o020：所有用户组具有写权限。<br/>-?0o010：所有用户组具有可执行权限
 *     。<br/>-?0o007：其余用户具有读、写及可执行权限。<br/>-?0o004：其余用户具有读权限。<br/>-?0o002：其余用户具有写权限。<br/>-?0o001：其余用户具有可执行权限。<br/>创建出的文件权
 *     限受umask影响，umask随进程启动确定，其修改当前不开放。
 * @returns { number } 打开文件的文件描述符。
 * @throws { TypedError | Error } open fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:openSync
 */
declare function openSync(path: string, flags?: number, mode?: number): number;
/**
 * 打开文件目录，使用Promise异步回调。
 *
 * @param { string } path - 待打开文件目录的应用沙箱路径。
 * @returns { Promise<Dir> } Promise对象。返回Dir对象。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:listFile
 */
declare function opendir(path: string): Promise<Dir>;

/**
 * 打开文件目录，使用callback异步回调。
 *
 * @param { string } path - 待打开文件目录的应用沙箱路径。
 * @param { AsyncCallback<Dir> } [callback] - 异步打开文件目录之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:listFile
 */
declare function opendir(path: string, callback: AsyncCallback<Dir>): void;
/**
 * 以同步方法打开文件目录。
 *
 * @param { string } path - 待打开文件目录的应用沙箱路径。
 * @returns { Dir } 返回Dir对象。
 * @throws { TypedError | Error } opendir fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:listFileSync
 */
declare function opendirSync(path: string): Dir;
/**
 * 基于文本方式读取文件（即直接读取文件的文本内容），使用Promise异步回调。
 *
 * @param { string } filePath - 待读取文件的应用沙箱路径。
 * @param { object } [options] - 支持如下选项：<br/>-?position，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>-?length，number
 *     类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?encoding，string类型，当数据是?string?类型时有效，表示数据的编码方式，默认?'utf-8'，仅支持?'utf-
 *     8'。
 * @returns { Promise<string> } Promise对象。返回读取文件的内容。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:readText
 */
declare function readText(
  filePath: string,
  options?: {
    position?: number;
    length?: number;
    encoding?: string;
  }
): Promise<string>;

/**
 * 基于文本方式读取文件（即直接读取文件的文本内容），使用callback异步回调。
 *
 * @param { string } filePath - 待读取文件的应用沙箱路径。
 * @param { object } [options] - 支持如下选项：<br/>-?position，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>-?length，number
 *     类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?encoding，string类型，表示数据的编码方式，默认?'utf-8'，仅支持?'utf-8'。
 * @param { AsyncCallback<string> } [callback] - 回调函数，返回读取文件的内容。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:readText
 */
declare function readText(
  filePath: string,
  options: {
    position?: number;
    length?: number;
    encoding?: string;
  },
  callback: AsyncCallback<string>
): void;

/**
 * 以同步方法基于文本方式读取文件（即直接读取文件的文本内容）。
 *
 * @param { string } filePath - 待读取文件的应用沙箱路径。
 * @param { object } [options] - 支持如下选项：<br/>-?position，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读取。<br/>-?length，number
 *     类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?encoding，string类型，当数据是?string?类型时有效，表示数据的编码方式，默认?'utf-8'，仅支持?'utf-
 *     8'。
 * @returns { string } 返回读取文件的内容。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:readTextSync
 */
declare function readTextSync(
  filePath: string,
  options?: {
    position?: number;
    length?: number;
    encoding?: string;
  }
): string;

/**
 * 从文件读取数据，使用Promise异步回调。
 *
 * @param { number } fd - 待读取文件的文件描述符。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示将数据读取到缓冲区的位置，即相对于缓冲区首地址的偏移，单位为Byte。可选，默认为0。<br/>-?
 *     length，number类型，表示期望读取数据的长度。可选，默认缓冲区长度减去偏移长度，单位为Byte。<br/>-?position，number类型，表示期望读取文件的位置。可选，默认从当前位置开始读，单位为Byte。<
 *     br/>约束：offset+length<=buffer.size。
 * @returns { Promise<ReadOut> } Promise对象。返回读取的结果。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:read
 */
declare function read(
  fd: number,
  buffer: ArrayBuffer,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
  }
): Promise<ReadOut>;

/**
 * 从文件读取数据，使用callback异步回调。
 *
 * @param { number } fd - 待读取文件的文件描述符。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { AsyncCallback<ReadOut> } [callback] - 异步读取数据之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:read
 */
declare function read(fd: number, buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void;

/**
 * 从文件读取数据，使用callback异步回调。
 *
 * @param { number } fd - 待读取文件的文件描述符。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示将数据读取到缓冲区的位置，单位为Byte，即相对于缓冲区首地址的偏移。可选，默认为0。<br/>-?
 *     length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?position，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读。<
 *     br/>约束：offset+length<=buffer.size。
 * @param { AsyncCallback<ReadOut> } [callback] - 异步读取数据之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:read
 */
declare function read(
  fd: number,
  buffer: ArrayBuffer,
  options: {
    offset?: number;
    length?: number;
    position?: number;
  },
  callback: AsyncCallback<ReadOut>
): void;
/**
 * 以同步方法从文件读取数据。
 *
 * @param { number } fd - 待读取文件的文件描述符。
 * @param { ArrayBuffer } buffer - 用于保存读取到的文件数据的缓冲区。
 * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示将数据读取到缓冲区的位置，即相对于缓冲区首地址的偏移，单位为Byte。可选，默认为0。<br/>-?
 *     length，number类型，表示期望读取数据的长度。可选，默认缓冲区长度减去偏移长度，单位为Byte。<br/>-?position，number类型，表示期望读取文件的位置。可选，默认从当前位置开始读，单位为Byte。<
 *     br/>约束：offset+length<=buffer.size。
 * @returns { number } 实际读取的长度，单位为Byte。
 * @throws { TypedError | Error } read fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:readSync
 */
declare function readSync(
  fd: number,
  buffer: ArrayBuffer,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
  }
): number;
/**
 * 重命名文件，使用Promise异步回调。
 *
 * @param { string } oldPath - 目标文件的当前应用沙箱路径。
 * @param { string } newPath - 目标文件的新应用沙箱路径。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:rename
 */
declare function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * 重命名文件，使用callback异步回调。
 *
 * @param { string } oldPath - 目标文件的当前应用沙箱路径。
 * @param { string } newPath - 目标文件的新应用沙箱路径。
 * @param { AsyncCallback<void> } [callback] - 异步重命名文件之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:rename
 */
declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void;
/**
 * 以同步方法重命名文件。
 *
 * @param { string } oldPath - 目标文件的当前应用沙箱路径。
 * @param { string } newPath - 目标文件的新应用沙箱路径。
 * @throws { TypedError | Error } rename fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:renameSync
 */
declare function renameSync(oldPath: string, newPath: string): void;
/**
 * 删除目录，使用Promise异步回调。
 *
 * @param { string } path - 待删除目录的应用沙箱路径。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:rmdir
 */
declare function rmdir(path: string): Promise<void>;

/**
 * 删除目录，使用callback异步回调。
 *
 * @param { string } path - 待删除目录的应用沙箱路径。
 * @param { AsyncCallback<void> } [callback] - 异步删除目录之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:rmdir
 */
declare function rmdir(path: string, callback: AsyncCallback<void>): void;
/**
 * 以同步方法删除目录。
 *
 * @param { string } path - 待删除目录的应用沙箱路径。
 * @throws { TypedError | Error } rmdir fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:rmdirSync
 */
declare function rmdirSync(path: string): void;
/**
 * 获取文件信息，使用Promise异步回调。
 *
 * @param { string } path - 待获取文件的应用沙箱路径。
 * @returns { Promise<Stat> } Promise对象。返回文件的具体信息。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:stat
 */
declare function stat(path: string): Promise<Stat>;

/**
 * 获取文件信息，使用callback异步回调。
 *
 * @param { string } path - 待获取文件的应用沙箱路径。
 * @param { AsyncCallback<Stat> } [callback] - 异步获取文件的信息之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:stat
 */
declare function stat(path: string, callback: AsyncCallback<Stat>): void;
/**
 * 以同步方法获取文件的信息。
 *
 * @param { string } path - 待获取文件的应用沙箱路径。
 * @returns { Stat } 表示文件的具体信息。
 * @throws { TypedError | Error } stat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:statSync
 */
declare function statSync(path: string): Stat;
/**
 * 基于文件路径创建符号链接，使用Promise异步回调。
 *
 * @param { string } target - 目标文件的应用沙箱路径。
 * @param { string } srcPath - 符号链接文件的应用沙箱路径。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:symlink
 */
declare function symlink(target: string, srcPath: string): Promise<void>;

/**
 * 基于文件路径创建符号链接，使用callback异步回调。
 *
 * @param { string } target - 目标文件的应用沙箱路径。
 * @param { string } srcPath - 符号链接文件的应用沙箱路径。
 * @param { AsyncCallback<void> } [callback] - 异步创建符号链接信息之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:symlink
 */
declare function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void;
/**
 * 以同步的方法基于文件路径创建符号链接。
 *
 * @param { string } target - 目标文件的应用沙箱路径。
 * @param { string } srcPath - 符号链接文件的应用沙箱路径。
 * @throws { TypedError | Error } symlink fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:symlinkSync
 */
declare function symlinkSync(target: string, srcPath: string): void;
/**
 * 基于文件路径截断文件，使用Promise异步回调。
 *
 * @param { string } path - 待截断文件的应用沙箱路径。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:truncate
 */
declare function truncate(path: string, len?: number): Promise<void>;

/**
 * 基于文件路径截断文件，使用callback异步回调。
 *
 * @param { string } path - 待截断文件的应用沙箱路径。
 * @param { AsyncCallback<void> } [callback] - 回调函数，本调用无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:truncate
 */
declare function truncate(path: string, callback: AsyncCallback<void>): void;

/**
 * 基于文件路径截断文件，使用callback异步回调。
 *
 * @param { string } path - 待截断文件的应用沙箱路径。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。
 * @param { AsyncCallback<void> } [callback] - 回调函数，本调用无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:truncate
 */
declare function truncate(path: string, len: number, callback: AsyncCallback<void>): void;
/**
 * 以同步方法基于文件路径截断文件。
 *
 * @param { string } path - 待截断文件的应用沙箱路径。
 * @param { number } [len] - 文件截断后的长度，单位为Byte。默认为0。
 * @throws { TypedError | Error } truncate fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.file.fs:truncateSync
 */
declare function truncateSync(path: string, len?: number): void;
/**
 * 删除文件，使用Promise异步回调。
 *
 * @param { string } path - 待删除文件的应用沙箱路径。
 * @returns { Promise<void> } Promise对象。无返回值。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:unlink
 */
declare function unlink(path: string): Promise<void>;

/**
 * 删除文件，使用callback异步回调。
 *
 * @param { string } path - 待删除文件的应用沙箱路径。
 * @param { AsyncCallback<void> } [callback] - 异步删除文件之后的回调。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:unlink
 */
declare function unlink(path: string, callback: AsyncCallback<void>): void;
/**
 * 以同步方法删除文件。
 *
 * @param { string } path - 待删除文件的应用沙箱路径。
 * @throws { TypedError | Error } unlink fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:unlinkSync
 */
declare function unlinkSync(path: string): void;
/**
 * 将数据写入文件，使用Promise异步回调。
 *
 * @param { number } fd - 待写入文件的文件描述符。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示期望写入数据的位置相对于数据首地址的偏移，单位为Byte。可选，默认为0。<br/>-?length，
 *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?position，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>-?
 *     encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认?'utf-8'。仅支持?'utf-8'。<br/>约束：offset+length<=buffer.size。
 * @returns { Promise<number> } Promise对象。返回实际写入的长度，单位为Byte。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:write
 */
declare function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  }
): Promise<number>;

/**
 * 将数据写入文件，使用callback异步回调。
 *
 * @param { number } fd - 待写入文件的文件描述符。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { AsyncCallback<number> } [callback] - 异步将数据写入完成后执行的回调函数。返回实际写入的长度，单位为Byte。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:write
 */
declare function write(fd: number, buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

/**
 * 将数据写入文件，使用callback异步回调。
 *
 * @param { number } fd - 待写入文件的文件描述符。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示期望写入数据的位置相对于数据首地址的偏移，单位为Byte。可选，默认为0。<br/>-?length，
 *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?position，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>-?
 *     encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认?'utf-8'。仅支持?'utf-8'。<br/>约束：offset+length<=buffer.size。
 * @param { AsyncCallback<number> } [callback] - 异步将数据写入完成后执行的回调函数。返回实际写入的长度，单位为Byte。
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:write
 */
declare function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  },
  callback: AsyncCallback<number>
): void;
/**
 * 以同步方法将数据写入文件。
 *
 * @param { number } fd - 待写入文件的文件描述符。
 * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
 * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示期望写入数据的位置相对于数据首地址的偏移，单位为Byte。可选，默认为0。<br/>-?length，
 *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?position，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>-?
 *     encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认?'utf-8'。仅支持?'utf-8'。<br/>约束：offset+length<=buffer.size。
 * @returns { number } 实际写入的长度，单位为Byte。
 * @throws { TypedError | Error } write fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:writeSync
 */
declare function writeSync(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  }
): number;

/**
 * 监听文件或者目录的变化，使用callback异步回调。
 *
 * @param { string } filename - 待监视文件的应用沙箱路径。
 * @param { number } events - -?1:?监听文件或者目录是否发生重命名。<br/>-?2：监听文件或者目录内容的是否修改。<br/>-?3：两者都有。
 * @param { AsyncCallback<number> } [callback] - 每发生变化一次，调用一次此函数。
 * @returns { Watcher } Promise对象。返回文件变化监听的实例。
 * @throws { TypedError | Error } watch fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 10
 * @useinstead @ohos.file.fs:createWatcher
 */
declare function createWatcher(filename: string, events: number, callback: AsyncCallback<number>): Watcher;
/**
 * 管理目录，在调用Dir的方法前，需要先通过opendir方法（同步或异步）来构建一个Dir实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:listFile
 */
declare interface Dir {
  /**
   * 读取下一个目录项，使用Promise异步回调。
   *
   * @returns { Promise<Dirent> } Promise对象。返回表示异步读取目录项的结果。
   * @throws { TypedError } Parameter check failed if read to end, Error.msg = "NoMore"
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  read(): Promise<Dirent>;

  /**
   * 读取下一个目录项，使用callback异步回调。
   *
   * @param { AsyncCallback<Dirent> } [callback] - 异步读取下一个目录项之后的回调。
   * @throws { TypedError } Parameter check failed if read to end, Error.msg = "NoMore"
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  read(callback: AsyncCallback<Dirent>): void;
  /**
   * 同步读取下一个目录项。
   *
   * @returns { Dirent } 表示一个目录项。
   * @throws { TypedError | Error } read fail if read to end, Error.msg = "NoMore"
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  readSync(): Dirent;
  /**
   * 异步关闭目录，使用promise形式返回结果。目录被关闭后，Dir中持有的文件描述将被释放，后续将无法从Dir中读取目录项。
   *
   * @returns { Promise<void> } return Promise
   * @throws { TypedError } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  close(): Promise<void>;

  /**
   * 异步关闭目录，使用callback形式返回结果。目录被关闭后，Dir中持有的文件描述将被释放，后续将无法从Dir中读取目录项。
   *
   * @param { AsyncCallback<void> } [callback] - callback.
   * @throws { TypedError } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  close(callback: AsyncCallback<void>): void;
  /**
   * 用于关闭目录。目录被关闭后，Dir中持有的文件描述将被释放，后续将无法从Dir中读取目录项。
   *
   * @throws { TypedError | Error } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  closeSync(): void;
}

/**
 * 在调用Dirent的方法前，需要先通过[dir.read()]{@link read}方法（同步或异步）来构建一个Dirent实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:listFile
 */
declare interface Dirent {
  /**
   * 目录项的名称。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  readonly name: string;
  /**
   * 用于判断当前目录项是否是块特殊文件。一个块特殊文件只能以块为粒度进行访问，且访问的时候带缓存。
   *
   * @returns { boolean } 表示当前目录项是否是块特殊设备。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  isBlockDevice(): boolean;
  /**
   * 用于判断当前目录项是否是字符特殊设备。一个字符特殊设备可进行随机访问，且访问的时候不带缓存。
   *
   * @returns { boolean } 表示当前目录项是否是字符特殊设备。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  isCharacterDevice(): boolean;
  /**
   * 用于判断当前目录项是否是目录。
   *
   * @returns { boolean } 表示当前目录项是否是目录。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  isDirectory(): boolean;
  /**
   * 用于判断当前目录项是否是命名管道（有时也称为FIFO）。命名管道通常用于进程间通信。
   *
   * @returns { boolean } 表示当前目录项是否是FIFO。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  isFIFO(): boolean;
  /**
   * 用于判断当前目录项是否是普通文件。
   *
   * @returns { boolean } 表示当前目录项是否是普通文件。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  isFile(): boolean;
  /**
   * 用于判断当前目录项是否是套接字。
   *
   * @returns { boolean } 表示当前目录项是否是套接字。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  isSocket(): boolean;
  /**
   * 用于判断当前目录项是否是符号链接。
   *
   * @returns { boolean } 表示当前目录项是否是符号链接。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:listFile
   */
  isSymbolicLink(): boolean;
}

/**
 * 文件具体信息，在调用Stat的方法前，需要先通过[stat()]{@link stat}方法（同步或异步）来构建一个Stat实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:Stat
 */
declare interface Stat {
  /**
   * 标识包含该文件的主设备号。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  readonly dev: number;
  /**
   * 标识该文件。通常同设备上的不同文件的INO不同。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.ino
   */
  readonly ino: number;
  /**
   * 表示文件类型及权限，其首?4?位表示文件类型，后?12?位表示权限。各特征位的含义如下：
   * -?0o170000：可用于获取文件类型的掩码。
   * -?0o140000：文件是套接字。
   * -?0o120000：文件是符号链接。
   * -?0o100000：文件是一般文件。
   * -?0o060000：文件属于块设备。
   * -?0o040000：文件是目录。
   * -?0o020000：文件是字符设备。
   * -?0o010000：文件是命名管道，即FIFO。
   * -?0o0700：可用于获取用户权限的掩码。
   * -?0o0400：用户读，对于普通文件，所有者可读取文件；对于目录，所有者可读取目录项。
   * -?0o0200：用户写，对于普通文件，所有者可写入文件；对于目录，所有者可创建/删除目录项。
   * -?0o0100：用户执行，对于普通文件，所有者可执行文件；对于目录，所有者可在目录中搜索给定路径名。
   * -?0o0070：可用于获取用户组权限的掩码。
   * -?0o0040：用户组读，对于普通文件，所有用户组可读取文件；对于目录，所有用户组可读取目录项。
   * -?0o0020：用户组写，对于普通文件，所有用户组可写入文件；对于目录，所有用户组可创建/删除目录项。
   * -?0o0010：用户组执行，对于普通文件，所有用户组可执行文件；对于目录，所有用户组是否可在目录中搜索给定路径名。
   * -?0o0007：可用于获取其他用户权限的掩码。
   * -?0o0004：其他读，对于普通文件，其余用户可读取文件；对于目录，其他用户组可读取目录项。
   * -?0o0002：其他写，对于普通文件，其余用户可写入文件；对于目录，其他用户组可创建/删除目录项。
   * -?0o0001：其他执行，对于普通文件，其余用户可执行文件；对于目录，其他用户组可在目录中搜索给定路径名。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.mode
   */
  readonly mode: number;
  /**
   * 文件的硬链接数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  readonly nlink: number;
  /**
   * 文件所有者的ID。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.uid
   */
  readonly uid: number;
  /**
   * 文件所有组的ID。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.gid
   */
  readonly gid: number;
  /**
   * 标识包含该文件的从设备号。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  readonly rdev: number;
  /**
   * 文件的大小，单位为Byte。仅对普通文件有效。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.size
   */
  readonly size: number;
  /**
   * 文件占用的块数，计算时块大小按512B计算。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  readonly blocks: number;
  /**
   * 上次访问该文件的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.atime
   */
  readonly atime: number;
  /**
   * 上次修改该文件的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.mtime
   */
  readonly mtime: number;
  /**
   * 最近改变文件状态的时间，表示距1970年1月1日0时0分0秒的秒数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.ctime
   */
  readonly ctime: number;
  /**
   * 用于判断文件是否是块特殊文件。一个块特殊文件只能以块为粒度进行访问，且访问的时候带缓存。
   *
   * @returns { boolean } 表示文件是否是块特殊设备。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.isBlockDevice
   */
  isBlockDevice(): boolean;
  /**
   * 用于判断文件是否是字符特殊文件。一个字符特殊设备可进行随机访问，且访问的时候不带缓存。
   *
   * @returns { boolean } 表示文件是否是字符特殊设备。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.isCharacterDevice
   */
  isCharacterDevice(): boolean;
  /**
   * 用于判断文件是否是目录。
   *
   * @returns { boolean } 表示文件是否是目录。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.isDirectory
   */
  isDirectory(): boolean;
  /**
   * 用于判断文件是否是命名管道（有时也称为FIFO）。命名管道通常用于进程间通信。
   *
   * @returns { boolean } 表示文件是否是?FIFO。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.isFIFO
   */
  isFIFO(): boolean;
  /**
   * 用于判断文件是否是普通文件。
   *
   * @returns { boolean } 表示文件是否是普通文件。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.isFile
   */
  isFile(): boolean;
  /**
   * 用于判断文件是否是套接字。
   *
   * @returns { boolean } 表示文件是否是套接字。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.isSocket
   */
  isSocket(): boolean;
  /**
   * 用于判断文件是否是符号链接。
   *
   * @returns { boolean } 表示文件是否是符号链接。true为是，false为不是。
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stat.isSymbolicLink
   */
  isSymbolicLink(): boolean;
}

/**
 * 文件流，在调用Stream的方法前，需要先通过createStream()方法（同步或异步）来构建一个Stream实例。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead @ohos.file.fs:Stream
 */
declare interface Stream {
  /**
   * 关闭文件流，使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。返回表示异步关闭文件流的结果。
   * @throws { TypedError } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.close
   */
  close(): Promise<void>;

  /**
   * 异步关闭文件流，使用callback异步回调。
   *
   * @param { AsyncCallback<void> } [callback] - 异步关闭文件流之后的回调。
   * @throws { TypedError } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.close
   */
  close(callback: AsyncCallback<void>): void;
  /**
   * 同步关闭文件流。
   *
   * @throws { TypedError | Error } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.closeSync
   */
  closeSync(): void;
  /**
   * 刷新文件流，使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。返回表示异步刷新文件流的结果。
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.flush
   */
  flush(): Promise<void>;

  /**
   * 异步刷新文件流，使用callback异步回调。
   *
   * @param { AsyncCallback<void> } [callback] - 异步刷新文件流后的回调函数。
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.flush
   */
  flush(callback: AsyncCallback<void>): void;
  /**
   * 同步刷新文件流。
   *
   * @throws { TypedError | Error } flush fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.flushSync
   */
  flushSync(): void;
  /**
   * 将数据写入流文件，使用Promise异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示期望写入数据的位置相对于数据首地址的偏移，单位为Byte。可选，默认为0。<br/>-?length，
   *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?position，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>-
   *     ?encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认?'utf-8'。仅支持?'utf-8'。<br/>约束：offset+length<=buffer.size。
   * @returns { Promise<number> } Promise对象。返回实际写入的长度，单位为Byte。
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.write
   */
  write(
    buffer: ArrayBuffer | string,
    options?: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    }
  ): Promise<number>;

  /**
   * Writes data to a stream file. This API uses an asynchronous callback to return the result.
   *
   * @param { ArrayBuffer | string } buffer - Data to write. It can be a string or data from a buffer.
   * @param { AsyncCallback<number> } [callback] - Callback invoked when the data is written asynchronously, which is
   *     used to return the length of the data written, in bytes.
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.write
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

  /**
   * 将数据写入流文件，使用callback异步回调。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示期望写入数据的位置相对于数据首地址的偏移，单位为Byte。可选，默认为0。<br/>-?length，
   *     number类型，表示期望写入数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?position，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>-
   *     ?encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认?'utf-8'。仅支持?'utf-8'。<br/>约束：offset+length<=buffer.size。
   * @param { AsyncCallback<number> } [callback] - 异步写入完成后执行的回调函数，返回实际写入的长度，单位为Byte。
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.write
   */
  write(
    buffer: ArrayBuffer | string,
    options: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    },
    callback: AsyncCallback<number>
  ): void;
  /**
   * 以同步方法将数据写入流文件。
   *
   * @param { ArrayBuffer | string } buffer - 待写入文件的数据，可来自缓冲区或字符串。
   * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示期望写入数据的位置相对于数据首地址的偏移，单位为Byte。可选，默认为0。<br/>-?length，
   *     number类型，表示期望写入数据的长度。可选，默认缓冲区长度减去偏移长度。<br/>-?position，number类型，表示期望写入文件的位置，单位为Byte。可选，默认从当前位置开始写。<br/>-?
   *     encoding，string类型，当数据是string类型时有效，表示数据的编码方式，默认?'utf-8'。仅支持?'utf-8'。<br/>约束：offset+length<=buffer.size。
   * @returns { number } 实际写入的长度，单位为Byte。
   * @throws { TypedError | Error } write fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.writeSync
   */
  writeSync(
    buffer: ArrayBuffer | string,
    options?: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    }
  ): number;
  /**
   * 从流文件读取数据，使用Promise异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示将数据读取到缓冲区的位置，即相对于缓冲区首地址的偏移，单位为Byte。可选，默认为0。<br/>-?
   *     length，number类型，表示期望读取数据的长度。可选，默认缓冲区长度减去偏移长度，单位为Byte。<br/>-?position，number类型，表示期望读取文件的位置。可选，默认从当前位置开始读，单位为Byte
   *     。<br/>约束：offset+length<=buffer.size。
   * @returns { Promise<ReadOut> } Promise对象。返回读取的结果。
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.read
   */
  read(
    buffer: ArrayBuffer,
    options?: {
      position?: number;
      offset?: number;
      length?: number;
    }
  ): Promise<ReadOut>;

  /**
   * read.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { AsyncCallback<ReadOut> } [callback] - callback.
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.read
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void;

  /**
   * 从流文件读取数据，使用callback异步回调。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示将数据读取到缓冲区的位置，即相对于缓冲区首地址的偏移，单位为Byte。可选，默认为0。<br/>-?
   *     length，number类型，表示期望读取数据的长度，单位为Byte。可选，默认缓冲区长度减去偏移长度。<br/>-?position，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读
   *     。<br/>约束：offset+length<=buffer.size。
   * @param { AsyncCallback<ReadOut> } [callback] - 异步从流文件读取数据之后的回调。
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.read
   */
  read(
    buffer: ArrayBuffer,
    options: {
      position?: number;
      offset?: number;
      length?: number;
    },
    callback: AsyncCallback<ReadOut>
  ): void;
  /**
   * 以同步方法从流文件读取数据。
   *
   * @param { ArrayBuffer } buffer - 用于读取文件的缓冲区。
   * @param { object } [options] - 支持如下选项：<br/>-?offset，number类型，表示将数据读取到缓冲区的位置，即相对于缓冲区首地址的偏移，单位为Byte。可选，默认为0。<br/>-?
   *     length，number类型，表示期望读取数据的长度。可选，默认缓冲区长度减去偏移长度，单位为Byte。<br/>-?position，number类型，表示期望读取文件的位置，单位为Byte。可选，默认从当前位置开始读
   *     。<br/>约束：offset+length<=buffer.size。
   * @returns { number } 实际读取的长度，单位为Byte。
   * @throws { TypedError | Error } read fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.file.fs:Stream.readSync
   */
  readSync(
    buffer: ArrayBuffer,
    options?: {
      position?: number;
      offset?: number;
      length?: number;
    }
  ): number;
}

/**
 * 仅用于read方法，获取文件的读取结果。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 */
declare interface ReadOut {
  /**
   * 实际读取长度，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  bytesRead: number;
  /**
   * 读取数据相对于缓冲区首地址的偏移，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  offset: number;
  /**
   * 保存读取数据的缓冲区。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  buffer: ArrayBuffer;
}

/**
 * Watcher是文件变化监听的实例，调用Watcher.stop()方法（同步或异步）来停止文件监听。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 10
 * @useinstead @ohos.file.fs:Watcher
 */
declare interface Watcher {
  /**
   * 关闭watcher监听，使用Promise异步回调。
   *
   * @returns { Promise<void> } return Promise
   * @throws { TypedError | Error } stop fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 10
   * @useinstead @ohos.file.fs:Watcher.stop
   */
  stop(): Promise<void>;

  /**
   * 关闭watcher监听，使用callback异步回调。
   *
   * @param { AsyncCallback<void> } [callback] - 以异步方法关闭watcher监听之后的回调。
   * @throws { TypedError | Error } stop fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 10
   * @useinstead @ohos.file.fs:Watcher.stop
   */
  stop(callback: AsyncCallback<void>): void;
}

export default fileIO;