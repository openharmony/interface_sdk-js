/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';

/**
 * 本模块提供了系统事件打点能力，包括系统事件的埋点、落盘系统事件的订阅及已落盘的系统事件的查询能力。
 *
 * @syscap SystemCapability.HiviewDFX.HiSysEvent
 * @systemapi hide for inner use
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace hiSysEvent {
  /**
   * 系统事件类型枚举。
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  enum EventType {
    /**
     * 错误事件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    FAULT = 1,

    /**
     * 统计事件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    STATISTIC = 2,

    /**
     * 安全事件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    SECURITY = 3,

    /**
     * 用户行为事件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    BEHAVIOR = 4
  }

  /**
   * 系统事件信息对象接口。
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface SysEventInfo {
    /**
     * 事件领域。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * 事件名称。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 事件类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    eventType: EventType;

    /**
     * 事件参数。
     *
     * @type { object } [since 9 - 11]
     * @type { ?object } [since 12]
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     */
    params?: object;

    /**
     * 事件参数。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    params?: Record<string, boolean | int | double | string | bigint | boolean[] | int[] | double[] | string[] | bigint[]> | null | undefined;
  }

  /**
   * 系统事件打点方法，接收[SysEventInfo]{@link SysEventInfo}类型的对象作为事件参数，使用promise方式作为异步回调。
   *
   * @param {SysEventInfo} info - 系统事件。
   * @returns {Promise<void>} - Promise实例，可以在其then()、catch()方法中分别对系统事件写入成功、写入异常的回调进行处理。
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws {BusinessError} 11200001 - Invalid event domain.
   * @throws {BusinessError} 11200002 - Invalid event name.
   * @throws {BusinessError} 11200003 - Abnormal environment.
   * @throws {BusinessError} 11200004 - The event length exceeds the limit.
   * @throws {BusinessError} 11200051 - Invalid event parameter.
   * @throws {BusinessError} 11200052 - The size of the event parameter of the string type exceeds the limit.
   * @throws {BusinessError} 11200053 - The number of event parameters exceeds the limit.
   * @throws {BusinessError} 11200054 - The number of event parameters of the array type exceeds the limit.
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function write(info: SysEventInfo): Promise<void>;

  /**
   * 系统事件打点方法，接收[SysEventInfo]{@link SysEventInfo}类型的对象作为事件参数，使用callback方式作为异步回调。
   *
   * @param {SysEventInfo} info - 系统事件。
   * @param {AsyncCallback<void>} callback - 回调函数，可以在回调函数中处理接口返回值。
   *     <br/>- 0表示事件校验成功，事件正常异步写入事件文件；
   *     <br/>- 正值表示事件打点存在异常，但可以正常写入；
   *     <br/>- 负值表示事件打点失败。
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws {BusinessError} 11200001 - Invalid event domain.
   * @throws {BusinessError} 11200002 - Invalid event name.
   * @throws {BusinessError} 11200003 - Abnormal environment.
   * @throws {BusinessError} 11200004 - The event length exceeds the limit.
   * @throws {BusinessError} 11200051 - Invalid event parameter.
   * @throws {BusinessError} 11200052 - The size of the event parameter of the string type exceeds the limit.
   * @throws {BusinessError} 11200053 - The number of event parameters exceeds the limit.
   * @throws {BusinessError} 11200054 - The number of event parameters of the array type exceeds the limit.
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function write(info: SysEventInfo, callback: AsyncCallback<void>): void;

  /**
   * 匹配规则类型枚举。
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  enum RuleType {
    /**
     * 全词匹配类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    WHOLE_WORD = 1,

    /**
     * 前缀匹配类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    PREFIX = 2,

    /**
     * 正则匹配类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    REGULAR = 3
  }

  /**
   * 系统事件订阅规则对象接口。
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface WatchRule {
    /**
     * 事件领域。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * 事件名称。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     *  事件标签。
     *
     * @type { string } [since 9 - 11]
     * @type { ?string } [since 12]
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     */
    tag?: string;

    /**
     * 事件标签。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    tag?: string | null | undefined;

    /**
     * 匹配规则类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    ruleType: RuleType;
  }

  /**
   * 系统事件订阅者对象接口。
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface Watcher {
    /**
     * 订阅对象数组，每个订阅者对象包含多个订阅规则。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    rules: WatchRule[];

    /**
    * 订阅事件的回调方法(info: [SysEventInfo]{@link SysEventInfo}) => void。
    *
    * @syscap SystemCapability.HiviewDFX.HiSysEvent
    * @systemapi hide for inner use
    * @since 9 dynamic
    * @since 23 static
    */
    onEvent: (info: SysEventInfo) => void;

    /**
     * 系统事件服务关闭的回调方法() => void。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    onServiceDied: () => void;
  }

  /**
   * 系统事件查询参数对象接口。
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface QueryArg {
    /**
     * 查询的系统事件起始时间（13位时间戳），表示距1970年1月1日0时0分0秒0毫秒的毫秒数。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    beginTime: long;

    /**
     * 查询的系统事件结束时间（13位时间戳），表示距1970年1月1日0时0分0秒0毫秒的毫秒数。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    endTime: long;

    /**
     * 查询的系统事件最多条数。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    maxEvents: long;

    /**
     * 查询的系统事件起始序列号，默认值为-1。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 10 dynamic
     */
    fromSeq?: long;

    /**
     * 查询的系统事件起始序列号，默认值为-1。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    fromSeq?: long | null | undefined;

    /**
     * 查询的系统事件结束序列号，默认值为-1。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 10 dynamic
     */
    toSeq?: long;

    /**
     * 查询的系统事件结束序列号，默认值为-1。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    toSeq?: long | null | undefined;
  }

  /**
   * 系统事件查询规则对象接口。
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface QueryRule {
    /**
     * 查询包含的事件领域。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * 查询所包含的多个事件名称，每个查询规则对象包含多个系统事件名称。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    names: string[];

    /**
     * 事件的额外参数条件，格式：{"version":"V1","condition":{"and":[{"param":"参数","op":"操作符","value":"比较值"}]}}。
     *
     * 参数：指定事件参数的键值。
     *
     * 操作符支持：=、!=、<、<=、>和>=。
     *
     * 支持在“and”数组中配置多个条件，查询结果取交集。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 10 dynamic
     */
    condition?: string;

    /**
     * 事件的额外参数条件，格式：{"version":"V1","condition":{"and":[{"param":"参数","op":"操作符","value":"比较值"}]}}。
     *
     * 参数：指定事件参数的键值。
     *
     * 操作符支持：=、!=、<、<=、>和>=。
     *
     * 支持在“and”数组中配置多个条件，查询结果取交集。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    condition?: string | null | undefined;
  }

  /**
   * 系统事件查询者对象接口。
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface Querier {
    /**
     * 返回查询到的系统事件的回调方法(infos: [SysEventInfo]{@link SysEventInfo}[]) => void。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    onQuery: (infos: SysEventInfo[]) => void;

    /**
     * 查询结果统计的回调方法(reason: int, total: int) => void。
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    onComplete: (reason: int, total: int) => void;
  }

  /**
   * 订阅系统事件，接收[Watcher]{@link Watcher}类型的对象作为事件参数。
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {Watcher} watcher - 系统事件订阅者对象。
   * @throws {BusinessError} 201 - Permission denied. An attempt was made to read system event forbidden by permission:
   *     ohos.permission.READ_DFX_SYSEVENT.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws {BusinessError} 11200101 - The number of watchers exceeds the limit.
   * @throws {BusinessError} 11200102 - The number of watch rules exceeds the limit.
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function addWatcher(watcher: Watcher): void;

  /**
   * 取消订阅系统事件，接收[Watcher]{@link Watcher}类型的对象作为事件参数。
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {Watcher} watcher - 系统事件订阅者对象。
   * @throws {BusinessError} 201 - Permission denied. An attempt was made to read system event forbidden by permission:
   *     ohos.permission.READ_DFX_SYSEVENT.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws {BusinessError} 11200201 - The watcher does not exist.
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function removeWatcher(watcher: Watcher): void;

  /**
   * 查询系统事件。
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {QueryArg} queryArg - 查询需要配置的查询参数。
   * @param {QueryRule[]} rules - 查询规则数组，每次查询可配置多个查询规则。
   * @param {Querier} querier - 查询者对象，包含查询结果及结束的相关回调。
   * @throws {BusinessError} 201 - Permission denied. An attempt was made to read system event forbidden by permission:
   *     ohos.permission.READ_DFX_SYSEVENT.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws {BusinessError} 11200301 - The number of query rules exceeds the limit.
   * @throws {BusinessError} 11200302 - Invalid query rule.
   * @throws {BusinessError} 11200303 - The number of concurrent queriers exceeds the limit.
   * @throws {BusinessError} 11200304 - The query frequency exceeds the limit.
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  function query(queryArg: QueryArg, rules: QueryRule[], querier: Querier): void;

  /**
   * 批量导出系统事件，以文件格式写入应用沙箱固定目录(/data/storage/el2/base/cache/hiview/event/)。
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {QueryArg} queryArg - 导出需要配置的查询参数。     
   * @param {QueryRule[]} rules - 查询规则数组，每次导出可配置多个查询规则。
   * @returns {long} 接口调用时间戳。
   * @throws {BusinessError} 201 - Permission denied. An attempt was made to read system event forbidden by permission:
   *     ohos.permission.READ_DFX_SYSEVENT.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws {BusinessError} 11200301 - The number of query rules exceeds the limit.
   * @throws {BusinessError} 11200302 - Invalid query rule.
   * @throws {BusinessError} 11200304 – The query frequency exceeds the limit.
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function exportSysEvents(queryArg: QueryArg, rules: QueryRule[]): long;

  /**
   * 订阅实时系统事件(事件需满足低频率或偶发性的约束条件)，事件发生时立即以文件格式写入应用沙箱固定目录(/data/storage/el2/base/cache/hiview/event/)。
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {QueryRule[]} rules - 查询规则数组，每次订阅可配置多个查询规则。
   * @returns {long} 接口调用时间戳。
   * @throws {BusinessError} 201 - Permission denied. An attempt was made to read system event forbidden by permission:
   *     ohos.permission.READ_DFX_SYSEVENT.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws {BusinessError} 11200301 - The number of query rules exceeds the limit.
   * @throws {BusinessError} 11200302 - Invalid query rule.
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function subscribe(rules: QueryRule[]): long;

  /**
   * 取消订阅系统事件。
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @throws {BusinessError} 201 - Permission denied. An attempt was made to read system event forbidden by permission:
   *     ohos.permission.READ_DFX_SYSEVENT.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws {BusinessError} 11200305 – Unsubscription failed.
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function unsubscribe(): void;
}

export default hiSysEvent;
