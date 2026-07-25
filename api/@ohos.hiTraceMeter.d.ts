/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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
 * @file Performance Tracing
 * @kit PerformanceAnalysisKit
 */

/**
 * The **HiTraceMeter** module provides the functions of tracing service processes and monitoring the system
 * performance. It provides the data needed for HiTraceMeter to carry out performance analysis.
 *
 * For details about the development process, see
 * [Using HiTraceMeter (ArkTS)](docroot://dfx/hitracemeter-guidelines-arkts.md).
 *
 * > **NOTE**
 * >
 * > You are advised to use the performance tracing APIs of API version 19. The
 * > [startTrace()]{@link hiTraceMeter.startTrace}, [finishTrace()]{@link hiTraceMeter.finishTrace}, and
 * > [traceByValue()]{@link hiTraceMeter.traceByValue} APIs will be deprecated.
 * >
 * > The trace output level cannot be specified in the [startTrace()]{@link hiTraceMeter.startTrace},
 * > [finishTrace()]{@link hiTraceMeter.finishTrace} and [traceByValue()]{@link hiTraceMeter.traceByValue} APIs. By
 * > default, the trace output level is **COMMERCIAL**.
 * >
 * > The vertical bar (|) is used as the separator in
 * > [user-mode trace format](docroot://dfx/hitracemeter-view.md#user-mode-trace-format). Therefore, the string
 * > parameters passed by the performance tracing APIs must exclude this character to avoid trace parsing exceptions.
 * >
 * > The maximum length of a [user-mode trace](docroot://dfx/hitracemeter-view.md#user-mode-trace-format) is 512
 * > characters. Excess characters will be truncated.
 *
 * @syscap SystemCapability.HiviewDFX.HiTrace
 * @crossplatform [since 20]
 * @atomicservice [since 19]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace hiTraceMeter {

  /**
   * Enumerates trace output levels.
   *
   * The trace output level lower than the threshold does not take effect. The log version threshold is **INFO**, and
   * the nolog version threshold is **COMMERCIAL**.
   *
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum HiTraceOutputLevel {
    /**
     * Level used only for debugging, which has the lowest priority.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    DEBUG = 0,

    /**
     * Level for the log version.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    INFO = 1,

    /**
     * Level for the log version, which has a higher priority than **INFO**.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    CRITICAL = 2,

    /**
     * Level for the nolog version, which has the highest priority.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    COMMERCIAL = 3,

    /**
     * Maximum trace output level: **COMMERCIAL**.
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MAX = COMMERCIAL
  }

  /**
   * Starts an asynchronous trace.
   *
   * If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performed
   * multiple times concurrently, different task IDs must be specified in **startTrace**.
   *
   * If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For a
   * specific example, see [finishTrace()]{@link hiTraceMeter.finishTrace}.
   *
   * Since API version 19, you are advised to use [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}, which must be
   * used together with [finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}. In this way, you can specify the
   * trace output level and category.
   *
   * @param { string } name - Name of the trace to start.
   *     The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is recommended
   *     that the length of this parameter be less than or equal to 420 bytes.
   * @param { int } taskId - Task ID.
   *     It is used to distinguish multiple tasks with the same name. Ensure that the task IDs of concurrently
   *     executed tasks with the same name are unique.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice [since 19]
   * @since 8 dynamic
   * @since 23 static
   */
  function startTrace(name: string, taskId: int): void;

  /**
   * Stops an asynchronous trace.
   *
   * To stop a trace, the values of name and task ID in **finishTrace** must be the same as those in
   * [startTrace()]{@link hiTraceMeter.startTrace}.
   *
   * Since API version 19, you are advised to use [finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}, which must
   * be used together with [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}.
   *
   * @param { string } name - Name of the trace to start.
   * @param { int } taskId - Task ID.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice [since 19]
   * @since 8 dynamic
   * @since 23 static
   */
  function finishTrace(name: string, taskId: int): void;

  /**
   * Traces the value changes of an integer variable.
   *
   * Since API version 19, you are advised to use the [traceByValue<sup>19+</sup>()]{@link hiTraceMeter.traceByValue}
   * API to specify the trace output level
   *
   * @param { string } name - Name of the integer variable to trace.
   *     The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is recommended
   *     that the length of this parameter be less than or equal to 420 bytes.
   * @param { long } count - Value of an integer variable.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice [since 19]
   * @since 8 dynamic
   * @since 23 static
   */
  function traceByValue(name: string, count: long): void;

  /**
   * Starts a synchronous trace with the trace output level specified. For details, see
   * [finishSyncTrace()]{@link hiTraceMeter.finishSyncTrace}.
   *
   * @param { HiTraceOutputLevel } level - Trace output level.
   * @param { string } name - Name of the trace to start.
   *     The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is recommended
   *     that the total length of **name** and **customArgs** be less than or equal to 420 bytes.
   * @param { string } [customArgs] - Key-value pair. The format is key=value. Multiple key-value pairs are separated by
   *     commas (,). The default value is an empty string.
   *     The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is recommended
   *     that the total length of **name** and **customArgs** be less than or equal to 420 bytes.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function startSyncTrace(level: HiTraceOutputLevel, name: string, customArgs?: string): void;

  /**
   * Stops a synchronous trace with the trace output level specified.
   *
   * The **level** used in **finishSyncTrace** must be the same as that of
   * [startSyncTrace()]{@link hiTraceMeter.startSyncTrace}.
   *
   * @param { HiTraceOutputLevel } level - Trace output level.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function finishSyncTrace(level: HiTraceOutputLevel): void;

  /**
   * Starts an asynchronous trace with the trace output level specified.
   *
   * If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performed
   * multiple times concurrently, different task IDs must be specified in **startAsyncTrace**.
   *
   * If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For details,
   * see [finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}.
   *
   * @param { HiTraceOutputLevel } level - Trace output level.
   * @param { string } name - Name of the trace to start.
   *     The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is recommended
   *     that the total length of **name**, **customCategory**, and **customArgs** be less than or equal to 420 bytes.
   * @param { int } taskId - Task ID.
   *     It is used to distinguish multiple tasks with the same name. Ensure that the task IDs of concurrently
   *     executed tasks with the same name are unique.
   * @param { string } customCategory - Custom category name, which is used to collect asynchronous trace data of the
   *     same type.
   *     The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is recommended
   *     that the total length of **name**, **customCategory**, and **customArgs** be less than or equal to 420 bytes.
   * @param { string } [customArgs] - Custom key-value pair. The format is key=value. Multiple key-value pairs are
   *     separated by commas (,). The default value is an empty string.
   *     The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is recommended
   *     that the total length of **name**, **customCategory**, and **customArgs** be less than or equal to 420 bytes.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function startAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: int, customCategory: string,
      customArgs?: string): void;

  /**
   * Stops an asynchronous trace with the trace output level specified.
   *
   * The **level**, **name**, and **taskId** used in **finishAsyncTrace()** must be the same as those of
   * [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}.
   *
   * @param { HiTraceOutputLevel } level - Trace output level.
   * @param { string } name - Name of the trace to start.
   * @param { int } taskId - Task ID.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function finishAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: int): void;

  /**
   * Traces an integer with the trace output level specified. It is used to mark the name and value of a predefined
   * integer variable to be traced.
   *
   * @param { HiTraceOutputLevel } level - Trace output level.
   * @param { string } name - Name of the integer variable to trace.
   *     The maximum length of a trace record is 512 bytes. The excess part will be truncated. It is recommended
   *     that the length of this parameter be less than or equal to 420 bytes.
   * @param { long } count - Value of an integer variable.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function traceByValue(level: HiTraceOutputLevel, name: string, count: long): void;

  /**
   * Checks whether application trace capture is enabled.
   *
   * @returns { boolean } **true** is returned when the trace capture is enabled using
   *     [hitrace](docroot://dfx/hitrace.md). **false** is returned when it is disabled or stopped. In this case,
   *     calling the HiTraceMeter API does not take effect.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function isTraceEnabled(): boolean;

  /**
   * Defines a callback to listen for whether the trace capture is enabled.
   *
   * @param { boolean } traceStatus - Whether the trace capture is enabled for the current application.
   *     The value **true** indicates that the trace capture is enabled, and **false** indicates the opposite.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  type TraceEventListener = (traceStatus: boolean) => void;

  /**
   * Registers a callback to notify whether the application trace capture is enabled. This API uses a synchronous
   * callback to return the result.
   *
   * After the registration is successful, the callback is executed immediately. Subsequent callbacks are executed when
   * the application trace capture status changes.
   *
   * Callbacks are stored in the application process. A maximum of 10 callbacks can be registered in a process.
   *
   * > **NOTE**
   * >
   * > If the callback contains time-consuming operations, the registration or deregistration will be blocked (waiting
   * > for the callback execution to complete) when the callback is executed.
   * >
   * > Therefore, you are advised not to register or deregister callbacks containing time-consuming operations in the
   * > main thread of the application to avoid application freeze.
   *
   * @param { TraceEventListener } callback - Registered callback.
   * @returns { int } Callback registration status.
   *     >= 0: The registration is successful. The callback index for deregistration is returned. The index ranges
   *     from 0 to 9.
   *      **-1**: The maximum number of callbacks has been reached.
   *      **-2**: Invalid parameter. The parameter is not of the **TraceEventListener** type.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function registerTraceListener(callback: TraceEventListener): int;

  /**
   * Unregisters the callback function used to notify whether the trace capture is enabled, which is registered using
   * **registerTraceListener()**.
   *
   * @param { int } index - Index of the registered callback function, that is, the return value when
   *     [registerTraceListener()]{@link hiTraceMeter.registerTraceListener} is successfully called.
   * @returns { int } Callback deregistration status.
   *     **0**: Deregistration succeeded.
   *     **-1**: The callback corresponding to the index is not registered.
   *     **-2**: Invalid index. The index value is not within the range of 0 to 9.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function unregisterTraceListener(index: int): int;
}

export default hiTraceMeter;