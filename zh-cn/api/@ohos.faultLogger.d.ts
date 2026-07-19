/*
* Copyright (C) 2021-2026 Huawei Device Co., Ltd.
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
 * @file 故障日志获取
 * @kit PerformanceAnalysisKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 应用可以使用faultLogger接口查询系统侧缓存的当前应用的故障日志。接口以应用包名和系统分配的UID作为唯一键值。
 * 
 * 系统侧保存的应用故障日志数量受系统日志的压力限制，
 * 推荐使用[@ohos.hiviewdfx.hiAppEvent]{@link @ohos.hiviewdfx.hiAppEvent:hiAppEvent}订阅APP_CRASH及APP_FREEZE等故障事件。
 * 
 * > **说明：**
 * >
 * > 本模块接口从API version 18开始废弃使用, 该接口不再维护。后续版本推荐使用
 * > [@ohos.hiviewdfx.hiAppEvent]{@link @ohos.hiviewdfx.hiAppEvent:hiAppEvent}订阅APP_CRASH，APP_FREEZE事件。
 * >
 * > 查阅[从Faultlogger接口迁移崩溃事件](docroot://dfx/hiappevent-watcher-crash-events-arkts.md#从faultlogger接口迁移崩溃事件)，
 * > 了解使用hiAppEvent订阅APP_CRASH的具体信息。
 * >
 * > 查阅[从Faultlogger接口迁移应用冻屏事件](docroot://dfx/hiappevent-watcher-freeze-events-arkts.md#从faultlogger接口迁移应用冻屏事件)，
 * > 了解使用hiAppEvent订阅APP_FREEZE的具体信息。
 *
 * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
 * @since 8 dynamiconly
 * @deprecated since 18
 * @useinstead ohos.hiviewdfx.hiAppEvent
 */
declare namespace FaultLogger {
  /**
   * 故障类型枚举。
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.hiviewdfx.hiAppEvent/hiAppEvent.event
   */
  enum FaultType {
    /**
     * 不区分故障类型。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    NO_SPECIFIC = 0,
    /**
     * Native运行时异常。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    CPP_CRASH = 2,
    /**
     * JS程序故障类型。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    JS_CRASH = 3,
    /**
     * 应用程序冻屏故障类型。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    APP_FREEZE = 4
  }

  /**
   * 获取当前应用故障信息，该方法通过回调方式获取故障信息数组，故障信息数组内最多上报10份故障信息。
   *
   * @param { FaultType } faultType - 输入要查询的故障类型。
   * @param { AsyncCallback<Array<FaultLogInfo>> } callback - 回调函数，在回调函数中获取故障信息数组。
   *    <br>value拿到故障信息数组；value为undefined表示获取过程中出现异常，error返回错误提示字符串。
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.faultlogger/FaultLogger#query
   */
  function querySelfFaultLog(faultType: FaultType, callback: AsyncCallback<Array<FaultLogInfo>>): void;

  /**
   * 获取当前应用故障信息，该方法通过Promise方式返回故障信息数组，故障信息数组内最多上报10份故障信息。
   *
   * @param { FaultType } faultType - 输入要查询的故障类型。
   * @returns { Promise<Array<FaultLogInfo>> } Promise实例，可以在其then()方法中获取故障信息实例，也可以使用await。
   *    <br>value拿到故障信息数组；value为undefined表示获取过程中出现异常。
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.faultlogger/FaultLogger#query
   */
  function querySelfFaultLog(faultType: FaultType): Promise<Array<FaultLogInfo>>;

  /**
   * 获取当前应用故障信息，该方法通过回调方式获取故障信息数组，故障信息数组内最多上报10份故障信息。
   *
   * @param { FaultType } faultType - 输入要查询的故障类型。
   * @param { AsyncCallback<Array<FaultLogInfo>> } callback - 回调函数，在回调函数中获取故障信息数组。
   *    <br>value拿到故障信息数组；value为undefined表示获取过程中出现异常，error返回错误提示字符串。
   * @throws { BusinessError } 401 - The parameter check failed, Parameter type error
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found
   * @throws { BusinessError } 10600001 - The service is not started or is faulty
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.hiviewdfx.hiAppEvent/hiAppEvent#addWatcher
   */
  function query(faultType: FaultType, callback: AsyncCallback<Array<FaultLogInfo>>): void;

  /**
   * 获取当前应用故障信息，该方法通过Promise方式返回故障信息数组，故障信息数组内最多上报10份故障信息。
   *
   * @param { FaultType } faultType - 输入要查询的故障类型。
   * @returns { Promise<Array<FaultLogInfo>> } Promise实例，可以在其then()方法中获取故障信息实例，也可以使用await。
   *    <br>value拿到故障信息数组；value为undefined表示获取过程中出现异常。
   * @throws { BusinessError } 401 - The parameter check failed, Parameter type error
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found
   * @throws { BusinessError } 10600001 - The service is not started or is faulty
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.hiviewdfx.hiAppEvent/hiAppEvent#addWatcher
   */
  function query(faultType: FaultType): Promise<Array<FaultLogInfo>>;

  /**
   * 故障信息数据结构，获取到的故障信息的数据结构。
   *
   * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
   * @since 8 dynamiconly
   * @deprecated since 18
   */
  interface FaultLogInfo {
    /**
     * 故障进程的进程id。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    pid: number;

    /**
     * 故障进程的用户id。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    uid: number;

    /**
     * 故障类型。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    type: FaultType;

    /**
     * 日志生成时的毫秒级时间戳。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    timestamp: number;

    /**
     * 发生故障的原因。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    reason: string;

    /**
     * 发生故障的模块。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    module: string;

    /**
     * 故障的概要。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    summary: string;

    /**
     * 故障日志全文。
     *
     * @syscap SystemCapability.HiviewDFX.Hiview.FaultLogger
     * @since 8 dynamiconly
     * @deprecated since 18
     */
    fullLog: string;
  }
}

export default FaultLogger;