/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkTS
 */

/**
 * Date JS API-compatible class
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class Date {

    /**
     * Default constructor.Initializes Date instance with current time.
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor();

    /**
     * `Date` constructor. NOTE: Dates before `1921-01-01T00:00:00 GMT`
     * can be represented as UTC milliseconds in different ways then TS do.
     *
     * @param { long | string | Date } value
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(value: long | string | Date);

    /**
     * `Date` constructor. NOTE: Dates before `1921-01-01T00:00:00 GMT`
     * can be represented as UTC milliseconds in different ways then TS do.
     *
     * @param { int } year
     * @param { int } monthIndex
     * @param { int } [day] - day
     * @param { int } [hours] - hours
     * @param { int } [minutes] - minutes
     * @param { int } [seconds] - seconds
     * @param { int } [ms] - ms
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    constructor(year: int, monthIndex: int, day?: int, hours?: int, minutes?: int, seconds?: int, ms?: int);

    /**
     * The `now()` static method returns the number of milliseconds elapsed since the epoch,
     * which is defined as the midnight at the beginning of
     * January 1, 1970, UTC. which is defined as the midnight at the beginning of January 1, 1970, UTC.
     *
     * @returns { long } Returns the current time in milliseconds.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static now(): long;

    /**
     * Parses a string representation of a date,
     * and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
     * or throws `RangeError` if the string is unrecognized or, in some cases,
     * contains illegal date values (e.g. 2015-02-31).
     *
     * Only the @link{https://tc39.es/ecma262/#sec-date-time-string-format|ISO 8601 format}
     * (YYYY-MM-DDTHH:mm:ss.sssZ) is explicitly specified to be supported.
     * Other formats are implementation-defined and may not work across all browsers (targets).
     * A library can help if many different formats are to be accommodated.
     *
     * @param { string } dateStr - to be parsed
     * @returns { long } get new date value
     * @throws { RangeError } if - the argument doesn't represent a valid date.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    static parse(dateStr: string): long;
}
