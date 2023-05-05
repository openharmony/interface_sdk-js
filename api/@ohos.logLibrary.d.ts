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

/**
 * @namespace logLibrary
 * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
 * @systemapi
 * @since 10
 */
declare namespace logLibrary {
    /**
     * log file entry
     *
     * @typedef LogEntry
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10
     */
    interface LogEntry {
        /**
         * log file name
         *
         * @type { string }
         * @since 10
         */
        name: string;

        /**
         * modify time, second from 1970-01-01
         *
         * @type { number }
         * @since 10
         */
        mtime: number;

        /**
         * log file size, byte
         *
         * @type { number }
         * @since 10
         */
        size: number;
    }

    /**
     * List all log names of log type
     *
     * @permission ohos.permission.READ_HIVIEW_SYSTEM
     * @param  { string } logType - log type
     * @returns { LogEntry[] } return LogEntry[]
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid argument
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10
     */
    function listSync(logType: string): LogEntry[];

    /**
     * Copy log to dest path
     *
     * @permission ohos.permission.READ_HIVIEW_SYSTEM
     * @param { string } logType - log type
     * @param { string } logName - log name
     * @param { string } dest - log path under hiview sandbox of HAP
     * @returns { void } return void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid argument
     * @throws { BusinessError } 21300001 - source file does not exists
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10
     */
    function copy(logType: string, logName: string, dest: string): Promise<void>;

    /**
     * Copy log to dest path
     *
     * @permission ohos.permission.READ_HIVIEW_SYSTEM
     * @param { string } logType - log type
     * @param { string } logName - log name
     * @param { string } dest - log path under hiview sandbox of HAP
     * @param { AsyncCallback} callback - after finish copy log will callback
     * @returns { void } return void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid argument
     * @throws { BusinessError } 21300001 - source file does not exists
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10
     */
    function copy(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void;

    /**
     * Move log to dest path
     *
     * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
     * @param { string } logType - log type
     * @param { string } logName - log name
     * @param { string } dest - log path under hiview sandbox of HAP
     * @returns { void } return void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid argument
     * @throws { BusinessError } 21300001 - source file does not exists
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10
     */
    function move(logType: string, logName: string, dest: string): Promise<void>;

    /**
     * Move log to dest path
     *
     * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
     * @param { string } logType - log type
     * @param { string } logName - log name
     * @param { string } dest - log path under hiview sandbox of HAP
     * @param {AsyncCallback} callback - after finish move log will callback
     * @returns { void } return void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid argument
     * @throws { BusinessError } 21300001 - source file does not exists
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10
     */
    function move(logType: string, logName: string, dest: string, callback: AsyncCallback<void>): void;

    /**
     * Remove the log
     *
     * @permission ohos.permission.WRITE_HIVIEW_SYSTEM
     * @param { string } logType - log type
     * @param { string } logName - log name
     * @returns { void } return void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Invalid argument
     * @throws { BusinessError } 21300001 - source file does not exists
     * @syscap SystemCapability.HiviewDFX.Hiview.LogLibrary
     * @systemapi
     * @since 10
     */
    function removeSync(logType: string, logName: string): void;
}

export default logLibrary;