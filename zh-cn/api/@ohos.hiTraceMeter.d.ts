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
 * 本模块提供了跟踪进程轨迹，度量程序执行性能的打点能力，支持异步耗时任务跟踪、同步耗时任务跟踪、整数变量跟踪等多种性能分析场景。本模块打点的数据供
 * HiTraceMeter工具分析使用，能够帮助开发者快速定位性能瓶颈，优化应用性能。
 *
 * 详细开发流程请参考：[使用HiTraceMeter跟踪性能（ArkTS）](docroot://dfx/hitracemeter-guidelines-arkts.md)。
 *
 *
 *
 * 建议使用API version 19的性能打点接口，后续性能打点接口[startTrace()]{@link hiTraceMeter.startTrace}、
 * [finishTrace()]{@link hiTraceMeter.finishTrace}、[traceByValue()]{@link hiTraceMeter.traceByValue}将逐步废弃。
 *
 * 性能打点接口[startTrace()]{@link hiTraceMeter.startTrace}、[finishTrace()]{@link hiTraceMeter.finishTrace}、
 * [traceByValue()]{@link hiTraceMeter.traceByValue}固定使用COMMERCIAL级别。
 *
 * [用户态trace格式](docroot://dfx/hitracemeter-view.md#用户态trace格式说明)使用竖线 `|` 作为分隔符，所以通过性能打点接口传递的字符串
 * 类型参数应避免包含该字符，防止trace解析异常。
 *
 * [用户态trace](docroot://dfx/hitracemeter-view.md#用户态trace格式说明)总长度限制512字符，超过的部分将会被截断。
 *
 * @syscap SystemCapability.HiviewDFX.HiTrace
 * @crossplatform [since 20]
 * @atomicservice [since 19]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace hiTraceMeter {

  /**
   * 枚举，跟踪输出级别。
   *
   * 低于系统跟踪输出级别阈值的打点将不会生效。log版本阈值为INFO；nolog版本阈值为COMMERCIAL。
   *
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum HiTraceOutputLevel {
    /**
     * 仅用于调试的输出级别，优先级最低。低于系统跟踪输出级别阈值时打点不会生效。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    DEBUG = 0,

    /**
     * 用于log版本的输出级别，log版本阈值为INFO。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    INFO = 1,

    /**
     * 用于log版本的输出级别，优先级高于INFO，用于需要重点关注的trace事件。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    CRITICAL = 2,

    /**
     * 用于nolog版本的输出级别，优先级最高。nolog版本阈值为COMMERCIAL。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @crossplatform [since 20]
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    COMMERCIAL = 3,

    /**
     * 输出级别范围限制，MAX = COMMERCIAL。
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
   * 标记一个异步跟踪耗时任务的开始。调用成功后，创建一条异步跟踪记录。
   *
   * 如果有多个相同name的任务需要跟踪或者对同一个任务要跟踪多次，并且任务同时被执行，则开发者每次调用startTrace传入的taskId需不同。
   *
   * 如果具有相同name的任务是串行执行的，则taskId可以相同。具体示例可参考[finishTrace()]{@link hiTraceMeter.finishTrace}中的示例。
   *
   * 从API version 19开始，建议使用[startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}接口（需与
   * [finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}接口配套使用），以便分级控制跟踪输出与跟踪聚类。
   *
   * @param { string } name - 要跟踪的任务名称。
   *     由于单条trace记录的总长度限制为512Byte，超过的部分将会被截断，建议该参数的长度不要超过420Byte。
   * @param { int } taskId - 任务id。
   *     用来区分具有相同名称的多个不同的任务，需确保并发执行的同名任务之间的任务id具有唯一性。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice [since 19]
   * @since 8 dynamic
   * @since 23 static
   */
  function startTrace(name: string, taskId: int): void;

  /**
   * 标记一个异步跟踪耗时任务的结束。调用成功后，完成该任务的跟踪。
   *
   * finishTrace的name和taskId必须与流程开始的[startTrace()]{@link hiTraceMeter.startTrace}对应参数值一致。
   *
   * 从API version 19开始，建议使用[finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}接口（需与
   * [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}接口配套使用）。
   *
   * @param { string } name - 要跟踪的任务名称，必须与流程开始的[startTrace()]{@link hiTraceMeter.startTrace}对应参数值一致。
   * @param { int } taskId - 任务id，必须与流程开始的[startTrace()]{@link hiTraceMeter.startTrace}对应参数值一致。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice [since 19]
   * @since 8 dynamic
   * @since 23 static
   */
  function finishTrace(name: string, taskId: int): void;

  /**
   * 用来标记一个跟踪的整数变量，该变量的数值会不断变化。适用于需要实时监控数值变化（如网络请求次数、缓存命中率、内存占用等）的场景，能够帮助开发者
   * 快速发现异常波动，分析数据趋势。
   *
   * 从API version 19开始，建议使用[traceByValue<sup>19+</sup>()]{@link hiTraceMeter.traceByValue}接口，以便分级控制跟踪输出。
   *
   * @param { string } name - 要跟踪的整数变量名称。
   *     由于单条trace记录的总长度限制为512Byte，超过的部分将会被截断，建议该参数的长度不要超过420Byte。
   * @param { long } count - 整数变量的值。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice [since 19]
   * @since 8 dynamic
   * @since 23 static
   */
  function traceByValue(name: string, count: long): void;

  /**
   * 标记一个同步跟踪耗时任务的开始，分级控制跟踪输出。适用于需要跟踪同步代码块执行耗时的场景，能够帮助开发者定位同步操作的耗时问题，优化应用响应
   * 速度。具体示例可参考[finishSyncTrace()]{@link hiTraceMeter.finishSyncTrace}中的示例。
   *
   * @param { HiTraceOutputLevel } level - 跟踪输出级别。
   * @param { string } name - 要跟踪的任务名称。由于单条trace记录的总长度限制为512Byte，超过的部分将会被截断，建议name和customArgs的总
   * 长度不要超过420Byte。
   * @param { string } [customArgs] - 键值对，格式key=value，多个键值对用逗号分隔，用于记录额外的业务信息或调试信息（如记录函数参数、
   * 返回值等）。当需要附加自定义数据用于同步跟踪的trace分析时传入此参数，不需要附加数据时不传入即可。默认值为空字符串。由于单条trace记录的
   * 总长度限制为512Byte，超过的部分将会被截断，建议name和customArgs的总长度不要超过420Byte。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function startSyncTrace(level: HiTraceOutputLevel, name: string, customArgs?: string): void;

  /**
   * 标记一个同步跟踪耗时任务的结束，分级控制跟踪输出。
   *
   * finishSyncTrace的level必须与流程开始的[startSyncTrace()]{@link hiTraceMeter.startSyncTrace}对应参数值一致。
   *
   * @param { HiTraceOutputLevel } level - 跟踪输出级别。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function finishSyncTrace(level: HiTraceOutputLevel): void;

  /**
   * 标记一个异步跟踪耗时任务的开始，分级控制跟踪输出。
   *
   * 如果有多个相同name的任务需要跟踪或者对同一个任务要跟踪多次，并且任务同时被执行，则开发者每次调用startAsyncTrace传入的taskId需不同。
   *
   * 如果具有相同name的任务是串行执行的，则taskId可以相同。具体示例可参考[finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}
   * 中的示例。
   *
   * @param { HiTraceOutputLevel } level - 跟踪输出级别，必须与流程开始的
   * [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}的level参数值一致。
   * @param { string } name - 要跟踪的任务名称。由于单条trace记录的总长度限制为512Byte，超过的部分将会被截断，建议name、
   * customCategory、customArgs的长度之和不要超过420Byte。
   * @param { int } taskId - 任务id。用来区分具有相同名称的多个不同的任务，需确保并发执行的同名任务之间的任务id具有唯一性。
   * @param { string } customCategory - 自定义聚类名称，用于聚合同一类异步跟踪打点。由于单条trace记录的总长度限制为512Byte，超过的部分
   * 将会被截断，建议name、customCategory、customArgs的长度之和不要超过420Byte。
   * @param { string } [customArgs] - 自定义键值对，格式key=value，多个键值对用逗号分隔，用于记录额外的业务信息或调试信息
   * （如记录用户ID、操作类型等）。当需要附加自定义数据用于trace分析时传入此参数，不需要附加数据时不传入即可。默认值为空字符串。
   * 由于单条trace记录的总长度限制为512Byte，超过的部分将会被截断，建议name、customCategory、customArgs的长度之和不要超过420Byte。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function startAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: int, customCategory: string,
      customArgs?: string): void;

  /**
   * 标记一个异步跟踪耗时任务的结束，分级控制跟踪输出。
   *
   * finishAsyncTrace的level、name和taskId必须与流程开始的[startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}对应参数值一致。
   *
   * @param { HiTraceOutputLevel } level - 跟踪输出级别，必须与流程开始的
   * [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}的level参数值一致。
   * @param { string } name - 要跟踪的任务名称，必须与流程开始的[startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}的name
   * 参数值一致。
   * @param { int } taskId - 任务id，必须与流程开始的[startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}的taskId参数值一致。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function finishAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: int): void;

  /**
   * 整数跟踪事件，分级控制跟踪输出。用来标记一个预先定义需要跟踪的整数变量名及整数值。
   *
   * @param { HiTraceOutputLevel } level - 跟踪输出级别。
   * @param { string } name - 要跟踪的整数变量名称。
   *     由于单条trace记录的总长度限制为512Byte，超出部分将被截断，建议该参数的长度不要超过420Byte。
   * @param { long } count - 整数变量的值。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function traceByValue(level: HiTraceOutputLevel, name: string, count: long): void;

  /**
   * 判断当前是否开启应用trace捕获。
   *
   * @returns { boolean } 使用[hitrace](docroot://dfx/hitrace.md)命令行工具等方式开启采集时返回true。未开启采集或停止采集后返回
   * false，此时调用HiTraceMeter性能跟踪打点接口无效。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform [since 20]
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  function isTraceEnabled(): boolean;

  /**
   * 定义应用trace捕获开关状态切换时的回调函数类型。
   *
   * @param { boolean } traceStatus - 当前应用trace捕获开关状态。
   *     true：开启；false：关闭。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  type TraceEventListener = (traceStatus: boolean) => void;

  /**
   * 注册应用trace捕获开关通知回调，使用callback异步回调。
   *
   * 注册成功后，立即执行一次回调函数，后续回调函数由应用trace捕获开关状态变化触发执行。
   *
   * 回调函数保存在应用进程内，一个进程最多可以注册10个回调函数。若注册的回调包含耗时操作，当回调被执行时，注册或注销行为会被阻塞
   * （等待回调执行完成）。因此，建议不要在应用主线程中注册或注销包含耗时操作的回调，避免发生应用冻屏。
   *
   * @param { TraceEventListener } callback - 注册的回调函数，用于监听应用trace捕获开关状态变化。当trace捕获开关状态发生变化时
   * （从开启变为关闭或从关闭变为开启），会触发此回调并传入当前的trace状态。注册成功后会立即执行一次回调，后续每次trace捕获开关状态变化
   * 都会触发回调。
   * @returns { int } 回调注册状态。
   *     >= 0：注册成功，返回用于注销的回调索引，索引范围[0, 9]；
   *      -1：已达到最大回调函数注册数量；
   *      -2：无效参数，参数非TraceEventListener类型。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function registerTraceListener(callback: TraceEventListener): int;

  /**
   * 注销通过registerTraceListener()注册的trace捕获开关通知回调函数。
   *
   * @param { int } index - 已注册回调函数索引，取值范围[0, 9]，即
   * [registerTraceListener()]{@link hiTraceMeter.registerTraceListener}调用成功时的返回值。
   * @returns { int } 回调注销状态。
   *     0：注销成功；
   *     -1：目标索引的回调函数未注册；
   *     -2：无效索引，参数index值不在[0, 9]范围内。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function unregisterTraceListener(index: int): int;
}

export default hiTraceMeter;