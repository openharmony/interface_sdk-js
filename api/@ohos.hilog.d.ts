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
 * @kit PerformanceAnalysisKit
 */

/*** if arkts 1.2 */
import { RecordData } from '@ohos.base';
/*** endif */

/**
 * # Parameter Format
 *
 * Parameters in the log are printed in the following format:
 *
 * %{[private flag]}specifier
 *
 * |  Private Flag| Description|
 * | ------------ | ---- |
 * |      Unspecified     | The default value is **private**, indicating that parameters in plaintext are not printed.|
 * |  private     | Prints private parameters.|
 * |  public      | Prints parameters in plaintext.|
 *
 * | Specifier| Description| Example|
 * | ------------ | ---- | ---- |
 * |      d/i      | Prints logs of the **number** and **bigint** types.| 123 |
 * |   s     | Prints logs of the **string undefined bool** and **null** types.| "123" |
 * | o/O | Prints logs of the **object**, **undefined**, and **null** types.<br>This specifier is supported since API
 * version 20.| { 'name': "Jack", 'age': 22 } |
 *
 */
/**
 * The HiLog subsystem allows your applications or services to output logs based on the specified type, level, and
 * format string. Such logs help you learn the running status of applications and better debug programs.
 *
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace hilog {

  /**
   * Prints DEBUG logs.
   *
   * DEBUG logs are not recorded in official versions by default. They are available in debug versions or in official
   * versions with the debug function enabled.
   *
   * @param { number } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and type of
   *     parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function debug(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints DEBUG logs.
   *
   * @param { int } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and
   *     type of parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function debug(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Prints INFO logs.
   *
   * @param { number } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and type of
   *     parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function info(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints INFO logs.
   *
   * @param { int } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and
   *     type of parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function info(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Prints WARN logs.
   *
   * @param { number } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and type of
   *     parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function warn(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints WARN logs.
   *
   * @param { int } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and
   *     type of parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function warn(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Prints ERROR logs.
   *
   * @param { number } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and type of
   *     parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function error(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints ERROR logs.
   *
   * @param { int } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and
   *     type of parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function error(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Prints FATAL logs.
   *
   * @param { number } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { any[] } args - Variable-length parameter list corresponding to the format string. The number and type of
   *     parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function fatal(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * Prints FATAL logs.
   *
   * @param { int } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value
   *     exceeds the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { string } format - Format string used to output logs in a specified format. It can contain several elements
   *     , where the parameter type and privacy identifier are mandatory.<br>Parameters labeled **{public}** are public
   *     data and are displayed in plaintext; parameters labeled **{private}** (default value) are private data and are
   *     filtered by **<private>**.
   * @param { RecordData[] } args - Variable-length parameter list corresponding to the format string. The number and
   *     type of parameters must map to the identifier in the format string.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function fatal(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * Checks whether logs are printable based on the specified service domain, log tag, and log level.
   *
   * @param { int } domain - Service domain of logs. The value ranges from **0x0** to **0xFFFF**. If the value exceeds
   *     the range, logs cannot be printed.<br>You can define the value as required.
   * @param { string } tag - Log tag in the string format. You are advised to use this parameter to identify a
   *     particular service behavior or the class holding the ongoing method. A tag can contain a maximum of 31 bytes.
   *     If a tag exceeds this limit, it will be truncated. Chinese characters are not recommended because garbled
   *     characters or alignment problems may occur.
   * @param { LogLevel } level - Log level.
   * @returns { boolean } Returns **true** logs are printable based on the specified service domain, log tag, and log
   *     level; returns **false** otherwise.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function isLoggable(domain: int, tag: string, level: LogLevel): boolean;

  /**
   * Sets the minimum log level.
   *
   * > **NOTE**
   * >
   * > If the set log level is lower than the
   * > [global log level](docroot://dfx/hilog.md#displaying-and-setting-log-levels), the setting does not take effect.
   * >
   * > This function does not take effect for debug applications.
   *
   * @param { LogLevel } level - Log level.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function setMinLogLevel(level: LogLevel): void;

  /**
   * Sets the minimum log level of the current application process.
   *
   * You can configure different preference strategies using the **prefer** parameter. The **PREFER_CLOSE_LOG** strategy
   * has the same effect as the **setMinLogLevel()** function.
   *
   * > **NOTE**
   * >
   * > This function does not take effect for debug applications.
   *
   * @param { LogLevel } level - Log level.
   * @param { PreferStrategy } prefer - Preference strategy.
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function setLogLevel(level: LogLevel, prefer: PreferStrategy): void;

  /**
   * Enumerates the log levels.
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  enum LogLevel {
    /**
     * Log level used to record more detailed process information than INFO logs to help developers analyze service
     * processes and locate faults.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    DEBUG = 3,
    /**
     * Log level used to record key service process nodes and exceptions that occur during service running,
     *
     * for example, no network signal or login failure.
     *
     * These logs should be recorded by the dominant module in the service to avoid repeated logging conducted by
     * multiple invoked modules or low-level functions.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    INFO = 4,
    /**
     * Log level used to record severe, unexpected faults that have little impact on users and can be rectified by the
     * programs themselves or through simple operations.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    WARN = 5,
    /**
     * Log level used to record program or functional errors that affect the normal running or use of the functionality
     * and can be fixed at a high cost, for example, by resetting data.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    ERROR = 6,
    /**
     * Log level used to record program or functionality crashes that cannot be rectified.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    FATAL = 7
  }

  /**
   * Enumerates the preference strategies.
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum PreferStrategy {
    /**
     * The setting is cleared. The system-controlled minimum log level takes effect.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    UNSET_LOGLEVEL = 0,
    /**
     * The larger value of the new log level and the system-controlled minimum log level takes effect.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PREFER_CLOSE_LOG = 1,
    /**
     * The smaller value of the new log level and the system-controlled minimum log level takes effect.
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PREFER_OPEN_LOG = 2
  }
}

export default hilog;