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
 * The **bytrace** module implements performance tracing for processes.
 *
 * > **NOTE**
 * >
 * > - The APIs provided by this module are deprecated since API version 8. You are advised to use the new APIs
 * > [@ohos.hiTraceMeter]{@link @ohos.hiTraceMeter:hiTraceMeter} instead.
 *
 * @syscap SystemCapability.HiviewDFX.HiTrace
 * @since 7 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.hiTraceMeter
 */
declare namespace bytrace {
  /**
   * Marks the start of a timeslice trace task.
   *
   * > **NOTE**
   * >
   * > If multiple trace tasks with the same name need to be performed at the same time or a trace task needs to be
   * > performed multiple times concurrently, different task IDs must be specified in **startTrace**. If the trace tasks
   * > with the same name are not performed at the same time, the same task ID can be used. For details, see the
   * > bytrace.finishTrace example.
   *
   * @param { string } name - Name of a timeslice trace task.
   * @param { number } taskId - ID of a timeslice trace task.
   * @param { number } expectedTime - Expected duration of the trace, in ms. This parameter is optional and is left
   *     blank by default.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.hiTraceMeter.startTrace
   */
  function startTrace(name: string, taskId: number, expectedTime?: number): void;

  /**
   * Marks the end of a timeslice trace task.
   *
   * > **NOTE**
   * >
   * > To stop a trace task, the values of name and task ID in **finishTrace** must be the same as those in
   * > **startTrace**.
   *
   * @param { string } name - Name of a timeslice trace task.
   * @param { number } taskId - ID of a timeslice trace task.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.hiTraceMeter.finishTrace
   */
  function finishTrace(name: string, taskId: number): void;

  /**
   * Defines a numeric variable that indicates the number of timeslice trace tasks.
   *
   * @param { string } name - Name of the numeric variable.
   * @param { number } count - Value of the numeric variable.
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.hiTraceMeter.traceByValue
   */
  function traceByValue(name: string, count: number): void;
}
export default bytrace;