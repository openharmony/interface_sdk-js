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
 * @file 性能打点
 * @kit PerformanceAnalysisKit
 */

/**
 * 本模块提供了追踪进程轨迹的能力，用于应用性能分析场景。开发者可以通过性能打点来追踪关键代码段的执行时间，定位性能瓶颈，优化应用性能。适用于应用启
 * 动耗时分析、业务流程性能监控、帧率分析等场景。
 *
 * @syscap SystemCapability.HiviewDFX.HiTrace
 * @since 7 dynamiconly
 * @deprecated since 8
 * @useinstead ohos.hiTraceMeter
 */
declare namespace bytrace {
  /**
   * 标记一个时间片跟踪任务的开始。
   * 
   * 如果有多个相同name的任务需要追踪或者对同一个任务要追踪多次，并且这些跟踪任务会同时被执行，则每次调用startTrace的taskId必须不一致。如果
   * 具有相同name的跟踪任务是串行执行的，则taskId可以相同。在下面bytrace.finishTrace的示例中会举例说明。
   *
   * @param { string } name - 时间片跟踪任务名称。
   * @param { number } taskId - 时间片跟踪任务id。
   * @param { number } expectedTime - 期望的耗时时间（单位：ms）。设置该值后，系统会在实际执行时间超过期望值时产生性能警告。可选，默认为空
   * 表示不产生警告。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.hiTraceMeter.startTrace
   */
  function startTrace(name: string, taskId: number, expectedTime?: number): void;

  /**
   * 标记一个时间片跟踪事件的结束。
   * 
   * > **说明：**
   * >
   * > finishTrace的name和taskId必须与流程开始的startTrace对应参数值一致。
   *
   * @param { string } name - 时间片跟踪任务名称，必须与startTrace调用时的name参数值一致。
   * @param { number } taskId - 时间片跟踪任务id，必须与startTrace调用时的taskId参数值一致。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.hiTraceMeter.finishTrace
   */
  function finishTrace(name: string, taskId: number): void;

  /**
   * 标记预追踪耗时任务的数值变量，该变量的数值会不断变化。traceByValue可独立使用，用于记录某个数值变量的变化轨迹。
   *
   * @param { string } name - 数值变量的名称。
   * @param { number } count - 数值变量的值。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead ohos.hiTraceMeter.traceByValue
   */
  function traceByValue(name: string, count: number): void;
}
export default bytrace;