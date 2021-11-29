/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './basic'

export default fileIO;

/**
 * fileio
 * @sysCap N/A
 * @since 6
 * @devices phone, tablet, tv, wearable, car
 * @import import fileio from '@ohos.fileio';
 * @permission N/A
 */
declare namespace fileIO {
    export { accessSync };
    export { chmodSync };
    export { chownSync };
    export { closeSync };
    export { copyFileSync };
    export { createStreamSync };
    export { fchmodSync };
    export { fchownSync };
    export { fdopenStreamSync };
    export { fstatSync };
    export { fsyncSync };
    export { ftruncateSync };
    export { mkdirSync };
    export { openSync };
    export { opendirSync };
    export { readSync };
    export { renameSync };
    export { rmdirSync };
    export { statSync };
    export { truncateSync };
    export { unlinkSync };
    export { writeSync };
    export { Dir };
    export { Dirent };
    export { Stat };
    export { Stream };
}


/**
 * accessSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function accessSync
 * @param {string} path - path.
 * @param {number} [mode = 0] - mode.
 * @returns {void} access success
 * @throws {TypedError | Error} access fail
 */
declare function accessSync(path: string, mode?: number): void;
/**
 * closeSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function closeSync
 * @param {number} fd - fd.
 * @returns {void} close success
 * @throws {TypedError | Error} close fail
 */
declare function closeSync(fd: number): void;
/**
 * copyFileSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function copyFileSync
 * @param {string} src - src.
 * @param {string} dest - dest.
 * @param {number} [mode = 0] - mode.
 * @returns {void} copyFile success
 * @throws {TypedError | Error} copyFile fail
 */
declare function copyFileSync(src: string, dest: string, mode?: number): void;
/**
 * createStreamSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function createStreamSync
 * @param {string} path - path.
 * @param {string} mode - mode.
 * @returns {Stream} createStream
 * @throws {TypedError} Parameter check failed
 */
declare function createStreamSync(path: string, mode: string): Stream;
/**
 * chownSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function appendFile
 * @param {string} path - path.
 * @param {number} uid - mode.
 * @param {number} gid - mode.
 * @returns {void} chown success
 * @throws {TypedError | Error} chown fail
 */
declare function chownSync(path: string, uid: number, gid: number): void;
/**
 * chmodSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function chmodSync
 * @param {string} path - path.
 * @param {number} mode - mode.
 * @returns {void} chmod success
 * @throws {TypedError | Error} chmod fail
 */
declare function chmodSync(path: string, mode: number): void;
/**
 * ftruncateSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function ftruncateSync
 * @param {number} fd - fd.
 * @param {number} [len = 0] - len.
 * @returns {void} ftruncate success
 * @throws {TypedError | Error} ftruncate fail
 */
declare function ftruncateSync(fd: number, len?: number): void;
/**
 * fsyncSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function fsyncSync
 * @param {number} fd - fd.
 * @returns {void} fsync success
 * @throws {TypedError | Error} fsync fail
 */
declare function fsyncSync(fd: number): void;
/**
 * fstatSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function fstatSync
 * @param {number} fd - fd.
 * @returns {Stat}
 * @throws {TypedError | Error} fstat fail
 */
declare function fstatSync(fd: number): Stat;
/**
 * fchownSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function fchownSync
 * @param {number} fd - fd.
 * @param {number} uid - uid.
 * @param {number} gid - gid.
 * @returns {void} fchown success
 * @throws {TypedError | Error} fchown fail
 */
declare function fchownSync(fd: number, uid: number, gid: number): void;
/**
 * fchmodSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function fchmodSync
 * @param {number} fd - fd.
 * @param {number} mode - mode.
 * @returns {void} fchmod success
 * @throws {TypedError | Error} fchmod fail
 */
declare function fchmodSync(fd: number, mode: number): void;
/**
 * fdopenStreamSync.
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function fdopenStreamSync
 * @param {number} fd - fd.
 * @param {string} mode - mode.
 * @returns {Stream} open stream from fd
 * @throws {TypedError | Error} open fail
 */
declare function fdopenStreamSync(fd: number, mode: string): Stream;
/**
 * mkdirSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function mkdirSync
 * @param {string} path - path.
 * @param {number} [mode = 0o775] - path.
 * @returns {void} mkdir success
 * @throws {TypedError | Error} mkdir fail
 */
declare function mkdirSync(path: string, mode?: number): void;

/**
 * openSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function openSync
 * @param {string} path - path.
 * @param {number} [flags = 0] - flags.
 * @param {number} [mode = 0o666] - mode.
 * @returns {number} open fd
 * @throws {TypedError | Error} open fail
 */
declare function openSync(path: string, flags?: number, mode?: number): number;

/**
 * opendirSync.
 *
 * @param {string} path - directory name.
 * @returns {Dir} opendir Dir Object
 * @throws {TypedError | Error} opendir fail
 */
declare function opendirSync(path: string): Dir;
/**
 * readSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function readSync
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset.
 * @param {number} [options.length = -1] - length.
 * @param {number} [options.position = -1] - position.
 * @returns {number} number of bytesRead
 * @throws {TypedError | Error} read fail
 */
declare function readSync(fd: number, buffer: ArrayBuffer, options?: {
    offset?: number;
    length?: number;
    position?: number;
}): number;
/**
 * renameSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function renameSync
 * @param {string} oldPath - oldPath.
 * @param {string} newPath - newPath.
 * @returns {void} rename success
 * @throws {TypedError | Error} rename fail
 */
declare function renameSync(oldPath: string, newPath: string): void;

/**
 * rmdirSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function rmdirSync
 * @param {string} path - path.
 * @returns {void} rmdir success
 * @throws {TypedError | Error} rmdir fail
 */
declare function rmdirSync(path: string): void;
/**
 * statSync.
 * @static
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @param {string} path - path.
 * @returns {Stat} stat success
 * @throws {TypedError | Error} stat fail
 */
declare function statSync(path: string): Stat;
/**
 * truncateSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 7
 * @permission N/A
 * @function truncateSync
 * @param {string} path - path.
 * @param {number} [len = 0] - len.
 * @returns {void} truncate success
 * @throws {TypedError | Error} truncate fail
 */
declare function truncateSync(path: string, len?: number): void;
/**
 * unlinkSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function unlinkSync
 * @param {string} path - path.
 * @returns {void} unlink success
 * @throws {TypedError | Error} unlink fail
 */
declare function unlinkSync(path: string): void;
/**
 * writeSync.
 *
 * @note N/A
 * @sysCap N/A
 * @since 6
 * @permission N/A
 * @function writeSync
 * @param {number} fd - file descriptor.
 * @param {ArrayBuffer | string} buffer - file descriptor.
 * @param {Object} [options] - options.
 * @param {number} [options.offset = 0] - offset(bytes) ignored when buffer is string.
 * @param {number} [options.length = -1] - length(bytes) ignored when buffer is string.
 * @param {number} [options.position = -1] - position(bytes) where start to write < 0 use read, else use pread.
 * @param {string} [options.encoding = 'utf-8'] -  encoding.
 * @returns {number} on success number of bytesRead
 * @throws {TypedError | RangeError | Error} write fail
 */
declare function writeSync(fd: number, buffer: ArrayBuffer | string, options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
}): number;

/**
 * Dir
 * @devices phone, tablet, tv, wearable, car
 * @sysCap N/A
 * @since 6
 * @permission N/A
 */
declare interface Dir {
    /**
     * readSync.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @function readSync
     * @returns {Dirent} Dirent Object
     * @throws {TypedError | Error} read fail if read to end, Error.msg = "NoMore"
     */
    readSync(): Dirent;
    /**
     * closeSync.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @function closeSync
     * @returns {void} close success
     * @throws {TypedError | Error} close fail
     */
    closeSync(): void;
}

/**
 * Dirent
 * @devices phone, tablet, tv, wearable, car
 * @sysCap N/A
 * @since 6
 * @permission N/A
 */
declare interface Dirent {
    /**
     * @type {string}
     * @readonly
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     */
    readonly name: string;
    /**
     * isBlockDevice.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isBlockDevice(): boolean;
    /**
     * isCharacterDevice.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isCharacterDevice(): boolean;
    /**
     * isDirectory.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isDirectory(): boolean;
    /**
     * isFIFO.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isFIFO(): boolean;
    /**
     * isFile.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isFile(): boolean;
    /**
     * isSocket.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isSocket(): boolean;
    /**
     * isSymbolicLink.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isSymbolicLink(): boolean;
}

/**
 * Stat
 * @devices phone, tablet, tv, wearable, car
 * @sysCap N/A
 * @since 6
 * @permission N/A
 */
declare interface Stat {
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly dev: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly ino: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly mode: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly nlink: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly uid: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly gid: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly rdev: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly size: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly blocks: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly atime: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly mtime: number;
    /**
     * @type {number}
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @readonly
     */
    readonly ctime: number;
    /**
     * isBlockDevice.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isBlockDevice(): boolean;
    /**
     * isCharacterDevice.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isCharacterDevice(): boolean;
    /**
     * isDirectory.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isDirectory(): boolean;
    /**
     * isFIFO.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isFIFO(): boolean;
    /**
     * isFile.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isFile(): boolean;
    /**
     * isSocket.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isSocket(): boolean;
    /**
     * isSymbolicLink.
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {boolean} is or not
     */
    isSymbolicLink(): boolean;
}

/**
 * Stream
 * @devices phone, tablet, tv, wearable, car
 * @sysCap N/A
 * @since 6
 * @permission N/A
 */
declare interface Stream {
    /**
     * closeSync.
     *
     * @note N/A
     * @sysCap N/A
     * @since 6
     * @permission N/A
     * @returns {void} close success
     * @throws {TypedError | Error} close fail
     */
    closeSync(): void;
    /**
     * flushSync.
     *
     * @note N/A
     * @sysCap N/A
     * @since 7
     * @permission N/A
     * @returns {void} flush success
     * @throws {Error} flush fail
     */
    flushSync(): void;
    /**
     * writeSync.
     *
     * @note N/A
     * @sysCap N/A
     * @since 7
     * @permission N/A
     * @param {ArrayBuffer | string} buffer - file description.
     * @param {Object} [options] - options.
     * @param {number} [options.offset = 0] - offset(bytes) ignored when buffer is string.
     * @param {number} [options.length = -1] - length(bytes) ignored when buffer is string.
     * @param {number} [options.position = -1] - position(bytes) where start to write < 0 use read, else use pread.
     * @param {string} [options.encoding = 'utf-8'] -  encoding.
     * @returns {number} on success number of bytes written
     * @throws {TypedError | Error} write fail
     */
    writeSync(buffer: ArrayBuffer | string, options?: {
        offset?: number;
        length?: number;
        position?: number;
        encoding?: string;
    }): number;
    /**
     * readSync.
     *
     * @note N/A
     * @sysCap N/A
     * @since 7
     * @permission N/A
     * @param {ArrayBuffer} buffer - file description.
     * @param {Object} [options] - options.
     * @param {number} [options.offset = 0] - offset.
     * @param {number} [options.length = -1] - length.
     * @returns {number} number of bytesRead
     * @throws {TypedError | Error} read fail
     */
    readSync(buffer: ArrayBuffer, options?: {
        position?: number;
        offset?: number;
        length?: number;
    }): number;
}