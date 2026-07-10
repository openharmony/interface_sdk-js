'use static';
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
 * @stagemodelonly
 * @since 24 staticonly
 */
class Date {

    /**
     * Default constructor.Initializes Date instance with current time.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor();

    /**
     * `Date` constructor. NOTE: Dates before `1921-01-01T00:00:00 GMT`
     * can be represented as UTC milliseconds in different ways then TS do.
     *
     * @param { long | string | Date } value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: long | string | Date);

    /**
     * `Date` constructor. NOTE: Dates before `1921-01-01T00:00:00 GMT`
     * can be represented as UTC milliseconds in different ways then TS do.
     *
     * @param { int } year - Year
     *     <br>The value range is all integers.
     * @param { int } monthIndex - Month
     *     <br>The value range is all integers.
     * @param { int } [day] - day
     *     <br>The value range is all integers.
     * @param { int } [hours] - hours
     *     <br>The value range is all integers.
     * @param { int } [minutes] - minutes
     *     <br>The value range is all integers.
     * @param { int } [seconds] - seconds
     *     <br>The value range is all integers.
     * @param { int } [ms] - ms
     *     <br>The value range is all integers.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(year: int, monthIndex: int, day?: int, hours?: int, minutes?: int, seconds?: int, ms?: int);

    /**
     * The `now()` static method returns the number of milliseconds elapsed since the epoch,
     * which is defined as the midnight at the beginning of
     * January 1, 1970, UTC. which is defined as the midnight at the beginning of January 1, 1970, UTC.
     *
     * @returns { long } Returns the current time in milliseconds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
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
     * @stagemodelonly
     * @since 24 staticonly
     */
    static parse(dateStr: string): long;

    /**
     * The `valueOf()` method returns the primitive value of a `Date` object.
     *
     * @returns { long } return the primitive value of a `Date` object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): long;

    /**
     * The `getDate()` method returns the day of the month for the specified date according to local time.
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getDate(): int;

    /**
     * Changes the day of the month of a given Date instance, based on local time.
     *
     * @param { int } value - new day
     *     <br>The value range is all integers.
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setDate(value: int): long;

    /**
     * Returns the day of the month (from 1 to 31) in the specified date according to universal time.
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCDate(): int;

    /**
     * Changes the day of the month of a given Date instance, based on UTC time.
     *
     * @param { int } value - new day
     *     <br>The value range is all integers.
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCDate(value: int): long;

    /**
     * Changes the day of the month of a given Date instance, based on UTC time.
     *
     * @param { int } value - new day
     *     <br>The value range is all integers.
     * @returns { long } set UTCDay
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCDay(value: int): long;

    /**
     * Returns the day of the week for the specified date according to local time,
     * where 0 represents Sunday. For the day of the month, see @link{getDayOfMonth}.
     *
     * @returns { int } get day
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getDay(): int;

    /**
     * Returns the day of the week in the specified date according to universal time, where 0 represents Sunday.
     *
     * @returns { int } get UTCday
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCDay(): int;

    /**
     * Returns the day of the week in the specified date according to universal time, where 0 represents Sunday.
     *
     * @returns { int } get Year
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getYear(): int;

    /**
     * Returns the year of the specified date according to local time.
     * For dates between the years 1000 and 9999, `getUTCFullYear()` returns a four-digit number,
     * for example, 1995. Use this function to make sure a year is compliant with years after 2000.
     *
     * @returns { int } get the UTCYear
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCFullYear(): int;

    /**
     * Returns the year of the specified date according to local time.
     * For dates between the years 1000 and 9999, `getFullYear()` returns a four-digit number,
     * for example, 1995. Use this function to make sure a year is compliant with years after 2000.
     * ets const today = new Date(); const year = today.getYearFull();
     *
     * @returns { int } get fullyear
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFullYear(): int;

    /**
     * Sets the full year for a specified date according to universal time.
     *
     * @param { int } value - new year
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCFullYear(value: int): long;

    /**
     * Sets the full year for a specified date according to universal time.
     *
     * @param { int } value - new year
     *     <br>The value range is all integers.
     * @param { int } month - new month
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCFullYear(value: int, month: int): long;

    /**
     * Sets the full year for a specified date according to universal time.
     *
     * @param { int } value - new year
     *     <br>The value range is all integers.
     * @param { int } month - new month
     *     <br>The value range is all integers.
     * @param { int } date - new date
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCFullYear(value: int, month: int, date: int): long;

    /**
     * Sets the full year for a specified date according to local time.
     *
     * @param { int } value - new year
     *     <br>The value range is all integers.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setYear(value: int): void;

    /**
     * Sets the full year for a specified date according to local time.
     *
     * @param { int } value - new year
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFullYear(value: int): long;

    /**
     * Sets the full year for a specified date according to local time.
     *
     * @param { int } value - new year
     *     <br>The value range is all integers.
     * @param { int } month - new month
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFullYear(value: int, month: int): long;

    /**
     * Sets the full year for a specified date according to local time.
     *
     * @param { int } value - new year
     *     <br>The value range is all integers.
     * @param { int } month - new month
     *     <br>The value range is all integers.
     * @param { int } date - new date
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFullYear(value: int, month: int, date: int): long;

    /**
     * Returns the hour for the specified date, according to local time. 
     * const today = new Date(); 
     * const hours = today.getHour(); 
     *
     * @returns { int } get new date hour value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getHours(): int;

    /**
     * Returns the hours in the specified date according to universal time.
     *
     * @returns { int } get new date hour value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCHours(): int;

    /**
     * Sets the hours for a specified date according to local time.
     *
     * @param { int } value - new hours
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setHours(value: int): long;

    /**
     * Sets the hours for a specified date according to local time.
     *
     * @param { int } value - new hours
     *     <br>The value range is all integers.
     * @param { int } min - minutes
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setHours(value: int, min: int): long;

    /**
     * Sets the hours for a specified date according to local time.
     *
     * @param { int } value - new hours
     *     <br>The value range is all integers.
     * @param { int } min - minutes
     *     <br>The value range is all integers.
     * @param { int } sec - seconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setHours(value: int, min: int, sec: int): long;

    /**
     * Sets the hours for a specified date according to local time.
     *
     * @param { int } value - new hours
     *     <br>The value range is all integers.
     * @param { int } min - minutes
     *     <br>The value range is all integers.
     * @param { int } sec - seconds
     *     <br>The value range is all integers.
     * @param { int } ms - millisecond
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setHours(value: int, min: int, sec: int, ms: int): long;

    /**
     * Sets the hour for a specified date according to universal time.
     *
     * @param { int } value - new hours
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCHours(value: int): long;

    /**
     * Sets the hour for a specified date according to universal time.
     *
     * @param { int } value - new hours
     *     <br>The value range is all integers.
     * @param { int } min - minutes
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCHours(value: int, min: int): long;

    /**
     * Sets the hour for a specified date according to universal time.
     *
     * @param { int } value - new hours
     *     <br>The value range is all integers.
     * @param { int } min - minutes
     *     <br>The value range is all integers.
     * @param { int } sec - seconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCHours(value: int, min: int, sec: int): long;

    /**
     * Sets the hour for a specified date according to universal time.
     *
     * @param { int } value - new hours
     *     <br>The value range is all integers.
     * @param { int } min - minutes
     *     <br>The value range is all integers.
     * @param { int } sec - seconds
     *     <br>The value range is all integers.
     * @param { int } ms - millisecond
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCHours(value: int, min: int, sec: int, ms: int): long;

    /**
     * Returns the milliseconds in the specified date according to local time.
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getMilliseconds(): int;

    /**
     * Returns the number of milliseconds elapsed since the epoch,
     * which is defined as the midnight at the beginning of January 1, 1970, UTC.
     *
     * @param { Date } d - to be converted to milliseconds.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static UTC(d: Date): long;

    /**
     * Returns the number of milliseconds elapsed since the epoch,
     * which is defined as the midnight at the beginning of January 1, 1970, UTC.
     *
     * @param { int } year - to be converted to milliseconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static UTC(year: int): long;

    /**
     * Returns the number of milliseconds elapsed since the epoch,
     * which is defined as the midnight at the beginning of January 1, 1970, UTC.
     *
     * @param { int } year - to be converted to milliseconds
     *     <br>The value range is all integers.
     * @param { int } month - to be converted to milliseconds
     *     <br>The value range is all integers.
     * @param { int } [day] - to be converted to milliseconds
     *     <br>The value range is all integers.
     * @param { int } [hours] - to be converted to milliseconds
     *     <br>The value range is all integers.
     * @param { int } [minutes] - to be converted to milliseconds
     *     <br>The value range is all integers.
     * @param { int } [seconds] - to be converted to milliseconds
     *     <br>The value range is all integers.
     * @param { int } [ms] - to be converted to milliseconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static UTC(year: int, month: int, day?: int, hours?: int, minutes?: int, seconds?: int, ms?: int): long;

    /**
     * Returns the milliseconds portion of the time object's value according to universal time.
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCMilliseconds(): int;

    /**
     * Sets the milliseconds for a specified date according to local time.
     *
     * @param { int } value - new ms
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMilliseconds(value: int): long;

    /**
     * Sets the milliseconds for a specified date according to universal time.
     *
     * @param { int } value - new ms
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMilliseconds(value: int): long;

    /**
     * Returns the seconds in the specified date according to local time.
     * @returns { int } An integer number, between 0 and 59
     *     representing the seconds in the given date according to local time.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getSeconds(): int;

    /**
     * Returns the seconds in the specified date according to universal time.
     *
     * @returns { int } the seconds in the specified date according to universal time.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCSeconds(): int;

    /**
     * Sets the seconds for a specified date according to local time.
     *
     * @param { int } value - new seconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setSeconds(value: int): long;

    /**
     * Sets the seconds for a specified date according to local time.
     *
     * @param { int } value - new seconds
     *     <br>The value range is all integers.
     * @param { int } ms - milliseconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setSeconds(value: int, ms: int): long;

    /**
     * Sets the seconds for a specified date according to universal time.
     *
     * @param { int } value - new seconds
     *     <br>The value range is all integers.
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCSeconds(value: int): long;

    /**
     * Sets the seconds for a specified date according to universal time.
     *
     * @param { int } value - new seconds
     *     <br>The value range is all integers.
     * @param { int } ms - milliseconds
     *     <br>The value range is all integers.
     * @returns { long }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCSeconds(value: int, ms: int): long;

    /**
     * Returns the minutes in the specified date according to local time.
     *
     * @returns { int } An integer number, between 0 and 59
     *     representing the minutes in the given date according to local time.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getMinutes(): int;

    /**
     * Sets the minutes for a specified date according to universal time.
     *
     * @param { int } value - new minutes
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMinutes(value: int): long;

    /**
     * Sets the minutes for a specified date according to universal time.
     *
     * @param { int } value - new minutes
     *     <br>The value range is all integers.
     * @param { int } sec - seconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMinutes(value: int, sec: int): long;

    /**
     * Sets the minutes for a specified date according to universal time.
     *
     * @param { int } value - new minutes
     *     <br>The value range is all integers.
     * @param { int } sec - seconds
     *     <br>The value range is all integers.
     * @param { int } ms - milliseconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMinutes(value: int, sec: int, ms: int): long;

    /**
     * Returns the minutes in the specified date according to universal time.
     *
     * @returns { int } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCMinutes(): int;

    /**
     * Sets the minutes for a specified date according to local time.
     *
     * @param { int } value - new minutes
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMinutes(value: int): long;

    /**
     * Sets the minutes for a specified date according to local time.
     *
     * @param { int } value - new minutes
     *     <br>The value range is all integers.
     * @param { int } sec - seconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMinutes(value: int, sec: int): long;

    /**
     * Sets the minutes for a specified date according to local time.
     *
     * @param { int } value - new minutes
     *     <br>The value range is all integers.
     * @param { int } sec - seconds
     *     <br>The value range is all integers.
     * @param { int } ms - milliseconds
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMinutes(value: int, sec: int, ms: int): long;

    /**
     * Returns the month in the specified date according to local time,
     * as a zero-based value (where zero indicates the first month of the year).
     *
     * @returns { int } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getMonth(): int;

    /**
     * Returns the month of the specified date according to universal time
     *     as a zero-based value (where zero indicates the first month of the year).
     *
     * @returns { int } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUTCMonth(): int;

    /**
     * Sets the month for a specified date according to the currently set year.
     *
     * @param { int } month - new month
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMonth(month: int): long;

    /**
     * Sets the month for a specified date according to the currently set year.
     *
     * @param { int } month - new month
     *     <br>The value range is all integers.
     * @param { int } date - Dated
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setMonth(month: int, date: int): long;

    /**
     * Sets the month for a specified date according to universal time.
     *
     * @param { int } month - new month
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMonth(month: int): long;

    /**
     * Sets the month for a specified date according to universal time.
     *
     * @param { int } month - new month
     *     <br>The value range is all integers.
     * @param { int } date - Dated
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUTCMonth(month: int, date: int): long;

    /**
     * Returns the number of milliseconds since the epoch,
     * which is defined as the midnight at the beginning of January 1, 1970, UTC.
     *
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getTime(): long;

    /**
     * Sets the number of milliseconds since the epoch,
     * which is defined as the midnight at the beginning of January 1, 1970, UTC.
     *
     * @param { long } value - new ms
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setTime(value: long): long;

    /**
     * Returns the difference, in minutes, between a date as
     * evaluated in the UTC time zone, and the same date as evaluated in the local time zone.
     *
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getTimezoneOffset(): long;

    /**
     * Sets the difference, in minutes, between a date as
     * evaluated in the UTC time zone, and the same date as evaluated in the local time zone.
     *
     * @param { int } value - new timezone offset
     *     <br>The value range is all integers.
     * @returns { long } get new date value
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setTimezoneOffset(value: int): long;
}
