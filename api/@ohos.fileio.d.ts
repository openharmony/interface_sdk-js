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
 */

import { AsyncCallback } from './@ohos.base';

export default fileIO;

/**
 * fileio
 *
 * @namespace fileIO
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
 * access.
 *
 * @param { string } path - path.
 * @param { number } [mode = 0] - mode.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.access
 */
declare function access(path: string, mode?: number): Promise<void>;

/**
 * access.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.access
 */
declare function access(path: string, callback: AsyncCallback<void>): void;

/**
 * access.
 *
 * @param { string } path - path.
 * @param { number } [mode = 0] - mode.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.access
 */
declare function access(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * accessSync.
 *
 * @param { string } path - path.
 * @param { number } [mode = 0] - mode.
 * @throws { TypedError | Error } access fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.accessSync
 */
declare function accessSync(path: string, mode?: number): void;
/**
 * close.
 *
 * @param { number } fd - fd.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.close
 */
declare function close(fd: number): Promise<void>;

/**
 * close.
 *
 * @param { number } fd - fd.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.close
 */
declare function close(fd: number, callback: AsyncCallback<void>): void;
/**
 * closeSync.
 *
 * @param { number } fd - fd.
 * @throws { TypedError | Error } close fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.closeSync
 */
declare function closeSync(fd: number): void;
/**
 * copyFile.
 *
 * @param { string | number } src - Path of the source file or FD of the file to copy.
 * @param { string | number } dest - Destination path of the file or FD of the file created.
 * @param { number } [mode = 0] - mode.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.copyFile
 */
declare function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>;

/**
 * copyFile.
 *
 * @param { string | number } src - Path of the source file or FD of the file to copy.
 * @param { string | number } dest - Destination path of the file or FD of the file created.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.copyFile
 */
declare function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void;

/**
 * copyFile.
 *
 * @param { string | number } src - Path of the source file or FD of the file to copy.
 * @param { string | number } dest - Destination path of the file or FD of the file created.
 * @param { number } [mode = 0] - mode.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.copyFile
 */
declare function copyFile(
  src: string | number,
  dest: string | number,
  mode: number,
  callback: AsyncCallback<void>
): void;
/**
 * copyFileSync.
 *
 * @param { string | number } src - Path of the source file or FD of the file to copy.
 * @param { string | number } dest - Destination path of the file or FD of the file created.
 * @param { number } [mode = 0] - mode.
 * @throws { TypedError | Error } copyFile fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.copyFileSync
 */
declare function copyFileSync(src: string | number, dest: string | number, mode?: number): void;
/**
 * createStream.
 *
 * @param { string } path - path.
 * @param { string } mode - mode.
 * @returns { Promise<Stream> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.createStream
 */
declare function createStream(path: string, mode: string): Promise<Stream>;

/**
 * createStream.
 *
 * @param { string } path - path.
 * @param { string } mode - mode.
 * @param { AsyncCallback<Stream> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.createStream
 */
declare function createStream(path: string, mode: string, callback: AsyncCallback<Stream>): void;
/**
 * createStreamSync.
 *
 * @param { string } path - path.
 * @param { string } mode - mode.
 * @returns { Stream } createStream success
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.createStreamSync
 */
declare function createStreamSync(path: string, mode: string): Stream;
/**
 * chown.
 *
 * @param { string } path - path.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chown(path: string, uid: number, gid: number): Promise<void>;

/**
 * chown.
 *
 * @param { string } path - path.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chown(path: string, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * chownSync.
 *
 * @param { string } path - path.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @throws { TypedError | Error } chown fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chownSync(path: string, uid: number, gid: number): void;
/**
 * chmod.
 *
 * @param { string } path - path.
 * @param { number } mode - mode.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chmod(path: string, mode: number): Promise<void>;

/**
 * chmod.
 *
 * @param { string } path - path.
 * @param { number } mode - mode.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chmod(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * chmodSync.
 *
 * @param { string } path - path.
 * @param { number } mode - mode.
 * @throws { TypedError | Error } chmod fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function chmodSync(path: string, mode: number): void;
/**
 * ftruncate.
 *
 * @param { number } fd - fd.
 * @param { number } [len = 0] - File length after truncation, in bytes. The default value is 0.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.truncate
 */
declare function ftruncate(fd: number, len?: number): Promise<void>;

/**
 * ftruncate.
 *
 * @param { number } fd - fd.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.truncate
 */
declare function ftruncate(fd: number, callback: AsyncCallback<void>): void;

/**
 * ftruncate.
 *
 * @param { number } fd - fd.
 * @param { number } [len = 0] - File length after truncation, in bytes.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.truncate
 */
declare function ftruncate(fd: number, len: number, callback: AsyncCallback<void>): void;
/**
 * ftruncateSync.
 *
 * @param { number } fd - fd.
 * @param { number } [len = 0] - File length after truncation, in bytes.
 * @throws { TypedError | Error } ftruncate fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.truncateSync
 */
declare function ftruncateSync(fd: number, len?: number): void;
/**
 * fsync.
 *
 * @param { number } fd - fd.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fsync
 */
declare function fsync(fd: number): Promise<void>;

/**
 * fsync.
 *
 * @param { number } fd - fd.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fsync
 */
declare function fsync(fd: number, callback: AsyncCallback<void>): void;
/**
 * fsyncSync.
 *
 * @param { number } fd - fd.
 * @throws { TypedError | Error } fsync fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fsyncSync
 */
declare function fsyncSync(fd: number): void;
/**
 * fstat.
 *
 * @param { number } fd - fd.
 * @returns { Promise<Stat> } return Promise
 * @throws { TypedError } fstat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.stat
 */
declare function fstat(fd: number): Promise<Stat>;

/**
 * fstat.
 *
 * @param { number } fd - fd.
 * @param { AsyncCallback<Stat> } callback
 * @throws { TypedError } fstat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.stat
 */
declare function fstat(fd: number, callback: AsyncCallback<Stat>): void;
/**
 * fstatSync.
 *
 * @param { number } fd - fd.
 * @returns { Stat } stat success
 * @throws { TypedError | Error } fstat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.statSync
 */
declare function fstatSync(fd: number): Stat;
/**
 * fdatasync.
 *
 * @param { number } fd - fd.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fdatasync
 */
declare function fdatasync(fd: number): Promise<void>;

/**
 * fdatasync.
 *
 * @param { number } fd - fd.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fdatasync
 */
declare function fdatasync(fd: number, callback: AsyncCallback<void>): void;
/**
 * fdatasyncSync.
 *
 * @param { number } fd - fd.
 * @throws { TypedError | Error } fdatasync fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fdatasyncSync
 */
declare function fdatasyncSync(fd: number): void;
/**
 * fchown.
 *
 * @param { number } fd - fd.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchown(fd: number, uid: number, gid: number): Promise<void>;

/**
 * fchown.
 *
 * @param { number } fd - fd.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchown(fd: number, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * fchownSync.
 *
 * @param { number } fd - fd.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @throws { TypedError | Error } fchown fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchownSync(fd: number, uid: number, gid: number): void;
/**
 * fchmod.
 *
 * @param { number } fd - fd.
 * @param { number } mode - mode.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchmod(fd: number, mode: number): Promise<void>;

/**
 * fchmod.
 *
 * @param { number } fd - fd.
 * @param { number } mode - mode.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchmod(fd: number, mode: number, callback: AsyncCallback<void>): void;
/**
 * fchmodSync.
 *
 * @param { number } fd - fd.
 * @param { number } mode - mode.
 * @throws { TypedError | Error } fchmod fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function fchmodSync(fd: number, mode: number): void;
/**
 * fdopenStream.
 *
 * @param { number } fd - fd.
 * @param { string } mode - mode.
 * @returns { Promise<Stream> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fdopenStream
 */
declare function fdopenStream(fd: number, mode: string): Promise<Stream>;

/**
 * fdopenStream.
 *
 * @param { number } fd - fd.
 * @param { string } mode - mode.
 * @param { AsyncCallback<Stream> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fdopenStream
 */
declare function fdopenStream(fd: number, mode: string, callback: AsyncCallback<Stream>): void;
/**
 * fdopenStreamSync.
 *
 * @param { number } fd - fd.
 * @param { string } mode - mode.
 * @returns { Stream } open stream from fd
 * @throws { TypedError | Error } open fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.fdopenStreamSync
 */
declare function fdopenStreamSync(fd: number, mode: string): Stream;
/**
 * hash.
 *
 * @param { string } path - path.
 * @param { string } algorithm - algorithm md5 sha1 sha256.
 * @returns { Promise<string> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.hash.hash
 */
declare function hash(path: string, algorithm: string): Promise<string>;

/**
 * hash.
 *
 * @param { string } path - path.
 * @param { string } algorithm - algorithm md5 sha1 sha256.
 * @param { AsyncCallback<string> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.hash.hash
 */
declare function hash(path: string, algorithm: string, callback: AsyncCallback<string>): void;
/**
 * lchown.
 *
 * @param { string } path - path.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function lchown(path: string, uid: number, gid: number): Promise<void>;

/**
 * lchown.
 *
 * @param { string } path - path.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function lchown(path: string, uid: number, gid: number, callback: AsyncCallback<void>): void;
/**
 * lchownSync.
 *
 * @param { string } path - path.
 * @param { number } uid - uid.
 * @param { number } gid - gid.
 * @throws { TypedError | Error } lchown fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 */
declare function lchownSync(path: string, uid: number, gid: number): void;
/**
 * lstat.
 *
 * @param { string } path - path.
 * @returns { Promise<Stat> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.lstat
 */
declare function lstat(path: string): Promise<Stat>;

/**
 * lstat.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<Stat> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.lstat
 */
declare function lstat(path: string, callback: AsyncCallback<Stat>): void;
/**
 * lstatSync.
 *
 * @param { string } path - path.
 * @returns { Stat } lstat success
 * @throws { TypedError | Error } lstat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.lstatSync
 */
declare function lstatSync(path: string): Stat;
/**
 * mkdir.
 *
 * @param { string } path - path.
 * @param { number } [mode = 0o770] - path.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.mkdir
 */
declare function mkdir(path: string, mode?: number): Promise<void>;

/**
 * mkdir.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.mkdir
 */
declare function mkdir(path: string, callback: AsyncCallback<void>): void;

/**
 * mkdir.
 *
 * @param { string } path - path.
 * @param { number } [mode = 0o770] - path.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.mkdir
 */
declare function mkdir(path: string, mode: number, callback: AsyncCallback<void>): void;
/**
 * mkdirSync.
 *
 * @param { string } path - path.
 * @param { number } [mode = 0o770] - path.
 * @throws { TypedError | Error } mkdir fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.mkdirSync
 */
declare function mkdirSync(path: string, mode?: number): void;
/**
 * mkdtemp.
 *
 * @param { string } prefix - dir prefix.
 * @returns { Promise<string> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.mkdtemp
 */
declare function mkdtemp(prefix: string): Promise<string>;

/**
 * mkdtemp.
 *
 * @param { string } prefix - dir prefix.
 * @param { AsyncCallback<string> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.mkdtemp
 */
declare function mkdtemp(prefix: string, callback: AsyncCallback<string>): void;
/**
 * mkdtempSync.
 *
 * @param { string } prefix - dir prefix.
 * @returns { string } directory name
 * @throws { TypedError | Error } mkdtemp fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.mkdtempSync
 */
declare function mkdtempSync(prefix: string): string;
/**
 * open.
 *
 * @param { string } path - path.
 * @param { number } [flags = 0] - flags.
 * @param { number } [mode = 0o666] - mode.
 * @returns { Promise<number> } Promise that returns the file descriptor of the file opened.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.open
 */
declare function open(path: string, flags?: number, mode?: number): Promise<number>;

/**
 * open.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<number> } [callback] - Callback invoked when the file is opened asynchronously.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.open
 */
declare function open(path: string, callback: AsyncCallback<number>): void;

/**
 * open.
 *
 * @param { string } path - path.
 * @param { number } [flags = 0] - flags.
 * @param { AsyncCallback<number> } [callback] - Callback invoked when the file is opened asynchronously.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.open
 */
declare function open(path: string, flags: number, callback: AsyncCallback<number>): void;

/**
 * open.
 *
 * @param { string } path - path.
 * @param { number } [flags = 0] - flags.
 * @param { number } [mode = 0o666] - mode.
 * @param { AsyncCallback<number> } [callback] - Callback invoked when the file is opened asynchronously.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.open
 */
declare function open(path: string, flags: number, mode: number, callback: AsyncCallback<number>): void;
/**
 * openSync.
 *
 * @param { string } path - path.
 * @param { number } [flags = 0] - flags.
 * @param { number } [mode = 0o666] - mode.
 * @returns { number } FD of the file opened.
 * @throws { TypedError | Error } open fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.openSync
 */
declare function openSync(path: string, flags?: number, mode?: number): number;
/**
 * opendir.
 *
 * @param { string } path - directory name.
 * @returns { Promise<Dir> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.listFile
 */
declare function opendir(path: string): Promise<Dir>;

/**
 * opendir.
 *
 * @param { string } path - directory name.
 * @param { AsyncCallback<Dir> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.listFile
 */
declare function opendir(path: string, callback: AsyncCallback<Dir>): void;
/**
 * opendirSync.
 *
 * @param { string } path - directory name.
 * @returns { Dir } opendir Dir Object
 * @throws { TypedError | Error } opendir fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.listFileSync
 */
declare function opendirSync(path: string): Dir;
/**
 * readText.
 *
 * @param { string } filePath - file path.
 * @param { object } [options] - options.
 * @returns { Promise<string> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.readText
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
 * readText.
 *
 * @param { string } filePath - file path.
 * @param { object } [options] - options.
 * @param { AsyncCallback<string> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.readText
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
 * readTextSync.
 *
 * @param { string } filePath - file path.
 * @param { object } [options] - options.
 * @returns { string } readout result
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.readTextSync
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
 * read.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer } buffer - file descriptor.
 * @param { object } [options] - options.
 * @returns { Promise<ReadOut> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.read
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
 * read.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer } buffer - file descriptor.
 * @param { AsyncCallback<ReadOut> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.read
 */
declare function read(fd: number, buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void;

/**
 * read.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer } buffer - file descriptor.
 * @param { object } [options] - options.
 * @param { AsyncCallback<ReadOut> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.read
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
 * readSync.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer } buffer - file descriptor.
 * @param { object } [options] - options.
 * @returns { number } number of bytesRead
 * @throws { TypedError | Error } read fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.readSync
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
 * rename.
 *
 * @param { string } oldPath - oldPath.
 * @param { string } newPath - newPath.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.rename
 */
declare function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * rename.
 *
 * @param { string } oldPath - oldPath.
 * @param { string } newPath - newPath.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.rename
 */
declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void;
/**
 * renameSync.
 *
 * @param { string } oldPath - oldPath.
 * @param { string } newPath - newPath.
 * @throws { TypedError | Error } rename fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.renameSync
 */
declare function renameSync(oldPath: string, newPath: string): void;
/**
 * rmdir.
 *
 * @param { string } path - path.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.rmdir
 */
declare function rmdir(path: string): Promise<void>;

/**
 * rmdir.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.rmdir
 */
declare function rmdir(path: string, callback: AsyncCallback<void>): void;
/**
 * rmdirSync.
 *
 * @param { string } path - path.
 * @throws { TypedError | Error } rmdir fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.rmdirSync
 */
declare function rmdirSync(path: string): void;
/**
 * stat.
 *
 * @param { string } path - path.
 * @returns { Promise<Stat> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.stat
 */
declare function stat(path: string): Promise<Stat>;

/**
 * stat.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<Stat> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.stat
 */
declare function stat(path: string, callback: AsyncCallback<Stat>): void;
/**
 * statSync.
 *
 * @param { string } path - path.
 * @returns { Stat } stat success
 * @throws { TypedError | Error } stat fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.statSync
 */
declare function statSync(path: string): Stat;
/**
 * symlink.
 *
 * @param { string } target - target.
 * @param { string } srcPath - srcPath.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.symlink
 */
declare function symlink(target: string, srcPath: string): Promise<void>;

/**
 * symlink.
 *
 * @param { string } target - target.
 * @param { string } srcPath - srcPath.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.symlink
 */
declare function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void;
/**
 * symlinkSync.
 *
 * @param { string } target - target.
 * @param { string } srcPath - srcPath.
 * @throws { TypedError | Error } symlink fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.symlinkSync
 */
declare function symlinkSync(target: string, srcPath: string): void;
/**
 * truncate.
 *
 * @param { string } path - path.
 * @param { number } [len = 0] - File length, in bytes, after truncation.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.truncate
 */
declare function truncate(path: string, len?: number): Promise<void>;

/**
 * truncate.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.truncate
 */
declare function truncate(path: string, callback: AsyncCallback<void>): void;

/**
 * truncate.
 *
 * @param { string } path - path.
 * @param { number } [len = 0] - File length, in bytes, after truncation.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.truncate
 */
declare function truncate(path: string, len: number, callback: AsyncCallback<void>): void;
/**
 * truncateSync.
 *
 * @param { string } path - path.
 * @param { number } [len = 0] - File length, in bytes, after truncation.
 * @throws { TypedError | Error } truncate fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.file.fs.truncateSync
 */
declare function truncateSync(path: string, len?: number): void;
/**
 * unlink.
 *
 * @param { string } path - path.
 * @returns { Promise<void> } return Promise
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.unlink
 */
declare function unlink(path: string): Promise<void>;

/**
 * unlink.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<void> } [callback] - callback.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.unlink
 */
declare function unlink(path: string, callback: AsyncCallback<void>): void;
/**
 * unlinkSync.
 *
 * @param { string } path - path.
 * @throws { TypedError | Error } unlink fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.unlinkSync
 */
declare function unlinkSync(path: string): void;
/**
 * write.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer or string.
 * @param { object } [options] - options.
 * @returns { Promise<number> } Promise that returns the length of the data written, in bytes.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.write
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
 * write.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer or string.
 * @param { AsyncCallback<number> } [callback] - Callback that returns the length of the data written, in bytes.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.write
 */
declare function write(fd: number, buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

/**
 * write.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer or string.
 * @param { object } [options] - options.
 * @param { AsyncCallback<number> } [callback] - Callback that returns the length of the data written, in bytes.
 * @throws { TypedError } Parameter check failed
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.write
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
 * writeSync.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer or string.
 * @param { object } [options] - options.
 * @returns { number } Length of the data written, in bytes.
 * @throws { TypedError | Error } write fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.writeSync
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
 * createWatcher.
 *
 * @param { string } filename - filename.
 * @param { number } events - events(depends on OS & filesystem) events = 1 rename events = 2 change.
 * @param { AsyncCallback<number> } [callback] - Called each time a change is detected.
 * @returns { Watcher } watch success
 * @throws { TypedError | Error } watch fail
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 10
 * @useinstead ohos.file.fs.createWatcher
 */
declare function createWatcher(filename: string, events: number, callback: AsyncCallback<number>): Watcher;
/**
 * Dir
 *
 * @interface Dir
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.listFile
 */
declare interface Dir {
  /**
   * read.
   *
   * @returns { Promise<Dirent> } return Promise
   * @throws { TypedError } Parameter check failed if read to end, Error.msg = "NoMore"
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  read(): Promise<Dirent>;

  /**
   * read.
   *
   * @param { AsyncCallback<Dirent> } [callback] - callback.
   * @throws { TypedError } Parameter check failed if read to end, Error.msg = "NoMore"
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  read(callback: AsyncCallback<Dirent>): void;
  /**
   * readSync.
   *
   * @returns { Dirent } Dirent Object
   * @throws { TypedError | Error } read fail if read to end, Error.msg = "NoMore"
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  readSync(): Dirent;
  /**
   * close.
   *
   * @returns { Promise<void> } return Promise
   * @throws { TypedError } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  close(): Promise<void>;

  /**
   * close.
   *
   * @param { AsyncCallback<void> } [callback] - callback.
   * @throws { TypedError } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  close(callback: AsyncCallback<void>): void;
  /**
   * closeSync.
   *
   * @throws { TypedError | Error } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  closeSync(): void;
}

/**
 * Dirent
 *
 * @interface Dirent
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.listFile
 */
declare interface Dirent {
  /**
   * @type { string }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  readonly name: string;
  /**
   * isBlockDevice.
   *
   * @returns { boolean } is or not
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  isBlockDevice(): boolean;
  /**
   * isCharacterDevice.
   *
   * @returns { boolean } is or not
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  isCharacterDevice(): boolean;
  /**
   * isDirectory.
   *
   * @returns { boolean } is or not
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  isDirectory(): boolean;
  /**
   * isFIFO.
   *
   * @returns { boolean } is or not
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  isFIFO(): boolean;
  /**
   * isFile.
   *
   * @returns { boolean } is or not
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  isFile(): boolean;
  /**
   * isSocket.
   *
   * @returns { boolean } is or not
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  isSocket(): boolean;
  /**
   * isSymbolicLink.
   *
   * @returns { boolean } is or not
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.listFile
   */
  isSymbolicLink(): boolean;
}

/**
 * Stat
 *
 * @interface Stat
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.Stat
 */
declare interface Stat {
  /**
   * Number of hard links in the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  readonly dev: number;
  /**
   * File identifier, which varies with files on the same device.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.ino
   */
  readonly ino: number;
  /**
   * File type and permissions. The first four bits indicate the file type, and the last 12 bits indicate the
   * permissions. The bit fields are described as follows:
   *
   * 0o170000: mask used to obtain the file type.
   * 0o140000: The file is a socket.
   * 0o120000: The file is a symbolic link.
   * 0o100000: The file is a regular file.
   * 0o060000: The file is a block device.
   * 0o040000: The file is a directory.
   * 0o020000: The file is a character device.
   * 0o010000: The file is a named pipe (FIFO).
   * 0o0700: mask used to obtain the owner permissions.
   * 0o0400: The owner has the permission to read a regular file or a directory entry.
   * 0o0200: The owner has the permission to write a regular file or create and delete a directory entry.
   * 0o0100: The owner has the permission to execute a regular file or search for the specified path in a directory.
   * 0o0070: mask used to obtain the user group permissions.
   * 0o0040: The user group has the permission to read a regular file or a directory entry.
   * 0o0020: The user group has the permission to write a regular file or create and delete a directory entry.
   * 0o0010: The user group has the permission to execute a regular file or search for the specified path in a directory.
   * 0o0007: mask used to obtain the permissions of other users.
   * 0o0004: Other users have the permission to read a regular file or a directory entry.
   * 0o0002: Other users have the permission to write a regular file or create and delete a directory entry.
   * 0o0001: Other users have the permission to execute a regular file or search for the specified path in a directory.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.mode
   */
  readonly mode: number;
  /**
   * Number of hard links in the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  readonly nlink: number;
  /**
   * ID of the file owner.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.uid
   */
  readonly uid: number;
  /**
   * ID of the user group of the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.gid
   */
  readonly gid: number;
  /**
   * Number of hard links in the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  readonly rdev: number;
  /**
   * File size, in bytes. This parameter is valid only for regular files.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.size
   */
  readonly size: number;
  /**
   * Number of hard links in the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  readonly blocks: number;
  /**
   * Time when the file was last accessed. The value is the number
   * of seconds elapsed since 00:00:00 on January 1, 1970.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.atime
   */
  readonly atime: number;
  /**
   * Time when the file content was last modified. The value is the number
   * of seconds elapsed since 00:00:00 on January 1, 1970.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.mtime
   */
  readonly mtime: number;
  /**
   * Time of the last status change of the file. The value is the number of seconds
   * elapsed since 00:00:00 on January 1, 1970.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.ctime
   */
  readonly ctime: number;
  /**
   * Checks whether this file is a block special file. A block special file supports access by block only,
   * and it is cached when accessed.
   *
   * @returns { boolean } Returns true if it is a block special file; returns false otherwise.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.isBlockDevice
   */
  isBlockDevice(): boolean;
  /**
   * Checks whether this file is a character special file. A character special file supports random access,
   * and it is not cached when accessed.
   *
   * @returns { boolean } Returns true if it is a character special file; returns false otherwise.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.isCharacterDevice
   */
  isCharacterDevice(): boolean;
  /**
   * Checks whether this file is a directory.
   *
   * @returns { boolean } Returns true if it is a directory; returns false otherwise.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.isDirectory
   */
  isDirectory(): boolean;
  /**
   * Checks whether this file is a named pipe (or FIFO). Named pipes are used for inter-process communication.
   *
   * @returns { boolean } Returns true if it is a named pipe; returns false otherwise.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.isFIFO
   */
  isFIFO(): boolean;
  /**
   * Checks whether this file is a regular file.
   *
   * @returns { boolean } Returns true if it is a regular file; returns false otherwise.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.isFile
   */
  isFile(): boolean;
  /**
   * Checks whether this file is a socket.
   *
   * @returns { boolean } Returns true if it is a socket; returns false otherwise.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.isSocket
   */
  isSocket(): boolean;
  /**
   * Checks whether this file is a symbolic link.
   *
   * @returns { boolean } Returns true if it is a symbolic link; returns false otherwise.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stat.isSymbolicLink
   */
  isSymbolicLink(): boolean;
}

/**
 * Stream
 *
 * @interface Stream
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 * @useinstead ohos.file.fs.Stream
 */
declare interface Stream {
  /**
   * close.
   *
   * @returns { Promise<void> } return Promise
   * @throws { TypedError } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.close
   */
  close(): Promise<void>;

  /**
   * close.
   *
   * @param { AsyncCallback<void> } [callback] - callback.
   * @throws { TypedError } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.close
   */
  close(callback: AsyncCallback<void>): void;
  /**
   * closeSync.
   *
   * @throws { TypedError | Error } close fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.closeSync
   */
  closeSync(): void;
  /**
   * flush.
   *
   * @returns { Promise<void> } return Promise
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.flush
   */
  flush(): Promise<void>;

  /**
   * flush.
   *
   * @param { AsyncCallback<void> } [callback] - callback.
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.flush
   */
  flush(callback: AsyncCallback<void>): void;
  /**
   * flushSync.
   *
   * @throws { TypedError | Error } flush fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.flushSync
   */
  flushSync(): void;
  /**
   * write.
   *
   * @param { ArrayBuffer | string } buffer - buffer or string.
   * @param { object } [options] - options.
   * @returns { Promise<number> } return Promise, in bytes.
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.write
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
   * write.
   *
   * @param { ArrayBuffer | string } buffer - buffer or string.
   * @param { AsyncCallback<number> } [callback] - Callback that returns the length of the data written, in bytes.
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.write
   */
  write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

  /**
   * write.
   *
   * @param { ArrayBuffer | string } buffer - buffer or string.
   * @param { object } [options] - options.
   * @param { AsyncCallback<number> } [callback] - Callback that returns the length of the data written, in bytes.
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.write
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
   * writeSync.
   *
   * @param { ArrayBuffer | string } buffer - buffer or string.
   * @param { object } [options] - options.
   * @returns { number } Length of the data written, in bytes.
   * @throws { TypedError | Error } write fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.writeSync
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
   * read.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { object } [options] - options.
   * @returns { Promise<ReadOut> } return Promise
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.read
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
   * @useinstead ohos.file.fs.Stream.read
   */
  read(buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void;

  /**
   * read.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { object } [options] - options.
   * @param { AsyncCallback<ReadOut> } [callback] - callback.
   * @throws { TypedError } Parameter check failed
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.read
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
   * readSync.
   *
   * @param { ArrayBuffer } buffer - buffer.
   * @param { object } [options] - options.
   * @returns { number } Length of the data read, in bytes.
   * @throws { TypedError | Error } read fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.file.fs.Stream.readSync
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
 * ReadOut
 *
 * @interface ReadOut
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 6
 * @deprecated since 9
 */
declare interface ReadOut {
  /**
   * Length of the data read, in bytes.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  bytesRead: number;
  /**
   * Position of the buffer to which the data will be read in reference to the start
   * address of the buffer, in bytes.
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  offset: number;
  /**
   * Number of hard links in the file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 6
   * @deprecated since 9
   */
  buffer: ArrayBuffer;
}

/**
 * Watcher
 *
 * @interface Watcher
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 7
 * @deprecated since 10
 * @useinstead ohos.file.fs.Watcher
 */
declare interface Watcher {
  /**
   * stop.
   *
   * @returns { Promise<void> } return Promise
   * @throws { TypedError | Error } stop fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 10
   * @useinstead ohos.file.fs.Watcher.stop
   */
  stop(): Promise<void>;

  /**
   * stop.
   *
   * @param { AsyncCallback<void> } [callback] - callback.
   * @throws { TypedError | Error } stop fail
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 7
   * @deprecated since 10
   * @useinstead ohos.file.fs.Watcher.stop
   */
  stop(callback: AsyncCallback<void>): void;
}
