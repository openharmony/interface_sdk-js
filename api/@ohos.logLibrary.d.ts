/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { Callback } from './basic';

/**
 * @since 10
 * @systemapi hide for inner use
 * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
 * @import import loglibrary from '@ohos.logLibrary'
 */
declare namespace logLibrary {
    /**
     * log file entry
     */
    interface LogEntry {
        /**
         * log file name
         */
        name: string;
        /**
         * modify time, second from 1970-01-01
         */
        mtime: number;
        /**
         * log file size, byte
         */
        size: number;
    }

    /**
     * List all log names of log type
     * 
     * @since 10
     * @systemapi hide for inner use
     * @permission ohos.permission.READ_HIVIEW_SYSTEM
     * @param logType log type
     * @throws {BusinessError} 201 - Permission denied
     * @throws {BusinessError} 401 - Invalid argument
     * @return {string[]} return string[]
     */
    function listSync(logType: string): LogEntry[];

    /**
     * Copy log to dest path
     * 
     * @since 10
     * @systemapi hide for inner use
     * @permission ohos.permission.READ_HIVIEW_SYSTEM
     * @param logType log type
     * @param logName log name
     * @param dest    log path under hiview sandbox of HAP
     * @throws {BusinessError} 201 - Permission denied
     * @throws {BusinessError} 401 - Invalid argument
     * @throws {BusinessError} 21300001 - source file does not exists
     * @throws {BusinessError} 21300002 - no permission to write dest file
     * @return {string[]} return string[]
     */
    function copy(logType: string, logName: string, dest: string): Promise<void>;

    /**
     * Copy log to dest path
     * 
     * @since 10
     * @systemapi hide for inner use
     * @permission ohos.permission.READ_HIVIEW_SYSTEM
     * @param logType log type
     * @param logName log name
     * @param dest    log path under hiview sandbox of HAP
     * @param callback after finish copy log will callback
     * @throws {BusinessError} 201 - Permission denied
     * @throws {BusinessError} 401 - Invalid argument
     * @throws {BusinessError} 21300001 - source file does not exists
     * @throws {BusinessError} 21300002 - no permission to write dest file
     * @return {string[]} return string[]
     */
    function copy(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void;

    /**
     * Move log to dest path
     * 
     * @since 10
     * @systemapi hide for inner use
     * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
     * @param logType log type
     * @param logName log name
     * @param dest    log path under hiview sandbox of HAP
     * @throws {BusinessError} 201 - Permission denied
     * @throws {BusinessError} 401 - Invalid argument
     * @throws {BusinessError} 21300001 - source file does not exists
     * @throws {BusinessError} 21300002 - no permission to write dest file
     * @return {string[]} return string[]
     */
    function move(logType: string, logName: string, dest: string): Promise<void>;

    /**
     * Move log to dest path
     * 
     * @since 10
     * @systemapi hide for inner use
     * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
     * @param logType log type
     * @param logName log name
     * @param dest    log path under hiview sandbox of HAP
     * @param callback after finish move log will callback
     * @throws {BusinessError} 201 - Permission denied
     * @throws {BusinessError} 401 - Invalid argument
     * @throws {BusinessError} 21300001 - source file does not exists
     * @throws {BusinessError} 21300002 - no permission to write dest file
     * @return {string[]} return string[]
     */
    function move(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void;

    /**
     * Remove the log
     * 
     * @since 10
     * @systemapi hide for inner use
     * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
     * @param logType log type
     * @param logName log name
     * @throws {BusinessError} 201 - Permission denied
     * @throws {BusinessError} 401 - Invalid argument
     * @throws {BusinessError} 21300001 - source file does not exists
     * @throws {BusinessError} 21300002 - no permission to write dest file
    * @return {void} return void
     */
    function removeSync(logType: string, logName: string): void;
}
