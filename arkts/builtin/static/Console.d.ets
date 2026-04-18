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
 * A Console class that provides access to standard output and error streams.
 * Supports printing various data types, timing operations, and indentation management.
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
class Console {
    /**
     * Implementations for log primitive types to stdout
     *
     * @param { boolean } i - The value to print to stdout
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: boolean): void;

    /**
     * log
     *
     * @param { byte } i - The value to print
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: byte): void;

    /**
     * log
     *
     * @param { short } i - The value to print
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: short): void;

    /**
     * log
     *
     * @param { char } i - The value to print
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: char): void;

    /**
     * log
     *
     * @param { int } i - The value to print
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: int): void;

    /**
     * log
     *
     * @param { long } i - The value to print
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: long): void;

    /**
     * log
     *
     * @param { float } i - The value to print
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: float): void;

    /**
     * log
     *
     * @param { double } i - The value to print
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: double): void;

    /**
     * log
     *
     * @param { string } i - The value to print
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(i: string): void;

    /**
     * log
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(): void;

    /**
     * Prints log-level messages If first argument is a string it is treated as a format string
     *
     * @param { Any[] } vals - Variable number of values to be logged
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    log(...vals: Any[]): void;

    /**
     * Prints debug-level messages If first argument is a string it is treated as a format string
     *
     * @param { Any[] } vals - Variable number of values to be logged
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    debug(...vals: Any[]): void;

    /**
     * Prints info-level messages If first argument is a string it is treated as a format string
     *
     * @param { Any[] } vals - Variable number of values to be logged
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    info(...vals: Any[]): void;

    /**
     * Prints warn-level messages If first argument is a string it is treated as a format string
     *
     * @param { Any[] } vals - Variable number of values to be logged
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    warn(...vals: Any[]): void;

    /**
     * Prints error-level messages If first argument is a string it is treated as a format string
     *
     * @param { Any[] } vals - Variable number of values to be logged
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    error(...vals: Any[]): void;

    /**
     * Conditionally prints an error message if the assertion condition is false Condition is
     * the first value in vals (if exist)
     *
     * @param { Any[] } vals - Values to be logged if condition is false.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    assert(...vals: Any[]): void;

    /**
     * Counts the number of times this method has been called with a specific label Prints
     * the current count to stdout
     *
     * @param { string } [label] - The value to count
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    count(label?: string): void;

    /**
     * Resets the counter for a specific label
     *
     * @param { string } [label] - The value to resets the counter
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    countReset(label?: string): void;

    /**
     * Prints a formatted representation of an object to stdout Filters out properties containing 'field#' in their keys
     *
     * @param { Any } [obj] - The object to inspect
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    dir(obj?: Any): void;

    /**
     * Prints an XML representation of an object to stdout Currently outputs the object as-is
     *
     * @param { Any } obj - The object to display as XML
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    dirxml(obj: Any): void;

    /**
     * Starts a new logging group with optional label Increases indentation level for subsequent log messages
     *
     * @param { Any[] } objs - The object to starts a new logging group
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    group(...objs: Any[]): void;

    /**
     * Ends the current logging group Decreases indentation level for subsequent log messages
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    groupEnd(): void;

    /**
     * Alias for group() method Creates a collapsed group in environments that support it
     *
     * @param { Any[] } objs - The object to creates a collapsed group
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    groupCollapsed(...objs: Any[]): void;

    /**
     * Displays an array of objects in tabular format Converts the data to a DataFrame and renders it
     *
     * @param { Any[] } data - Array of objects to display as a table
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    table(...data: Any[]): void;

    /**
     * Starts a timer with an optional label Used to track execution time between time() and timeEnd() calls
     *
     * @param { string } [label] - The key of timer
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    time(label?: string): void;

    /**
     * Logs the current duration of a running timer without stopping it Prints a warning if the specified timer doesn't exist
     *
     * @param { string } [label] - The key of timer
     * @param { Object[] } arguments - Additional debugging information
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    timeLog(label?: string, ...arguments: Object[]): void;

    /**
     * Stops a timer and logs its duration Removes the timer and prints a warning if it doesn't exist
     *
     * @param { string } [label] - The key of timer
     * @throws { Error } - - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    timeEnd(label?: string): void;

    /**
     * Prints the current stack trace with an optional label Skips the first stack frame (the trace call itself)
     *
     * @param { Any[] } data - Additional debugging information
     * @throws { Error } - - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    trace(...data: Any[]): void;

    /**
     * Prints hybrid stack information for the current code location.
     *
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    traceHybridStack(): void;
}
