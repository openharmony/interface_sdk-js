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

import { AsyncCallback } from './basic';

/**
 * Provides the system event logging function for applications to log the fault, statistical, security,
 * and user behavior events reported during running. Based on event information,
 * you will be able to analyze the running status of applications.
 *
 * @syscap SystemCapability.HiviewDFX.HiSysEvent
 * @systemapi hide for inner use
 * @import import hiSysEvent from '@ohos.hiSysEvent'
 * @since 9
 */
declare namespace hiSysEvent {
  /**
   * Enumerate system event types.
   *
   * @enum {number}
   * @readonly
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  enum EventType {
    /**
     * Fault event
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    FAULT = 1,

    /**
     * Statistic event
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    STATISTIC = 2,

    /**
     * Security event
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    SECURITY = 3,

    /**
     * System behavior event
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    BEHAVIOR = 4
  }

  /**
   * Definition of written system event information.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  interface SysEventInfo {
    /**
     * The domain of the event.
     */
    domain: string;

    /**
     * The name of the event.
     */
    name: string;

    /**
     * The type of the event.
     */
    eventType: EventType;

    /**
     * The params of the event.
     */
    params: object;
  }

  /**
   * Write system event.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @static
   * @param {SysEventInfo} info system event information to be written.
   * @param {AsyncCallback} [callback] callback function.
   * @return {void | Promise<void>} no callback return Promise otherwise return void.
   * @since 9
   */
  function write(info: SysEventInfo): Promise<void>;
  function write(info: SysEventInfo, callback: AsyncCallback<void>): void;

  /**
   * Enumerate search system event rule type.
   *
   * @enum {number}
   * @readonly
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  enum RuleType {
    /**
     * whole word match
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    WHOLE_WORD = 1,

    /**
     * prefix match
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    PREFIX = 2,

    /**
     * regular match
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    REGULAR = 3
  }

  /**
   * Definition listener rule for system event information.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  interface WatchRule {
    /**
     * The domain of the event.
     */
    domain: string;

    /**
     * The name of the event.
     */
    name: string;

    /**
     * The name of the event.
     */
    tag: string;

    /**
     * the rule of match system event
     */
    ruleType: RuleType;
  }

  /**
   * Definition wathcer for system event information.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  interface Watcher{
    /**
     * rule of filter system event
     */
     rules: WatchRule[];

     /**
     * receive system event.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @param {SysEventInfo} info system event information of receive.
     * @return {void} return void.
     * @since 9
     */
    onEvent: (info: SysEventInfo) => void;

    /**
     * hisysevent service shutdown.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @return {void} return void.
     * @since 9
     */
    onServiceDied: () => void;
  }

  /**
   * Definition arguments for query system event information.
   *
   * @enum {number}
   * @readonly
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  interface QueryArg {
    /**
     * begin time
     */
    beginTime: number;

    /**
     * end time
     */
    endTime: number;

    /**
     * max number of receive system event
     */
    maxEvents: number;
  }

  /**
   * Definition event for query system event information
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  interface QueryRule {
    /**
     * The domain of the event
     */
    domain: string;

    /**
     * lists of event name
     */
    names: string[];
  }

  /**
   * Definition query result handler
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  interface Querier {
    /**
     * handle query result, the query result will be send in serval times.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @param {SysEventInfo[]} infos system event information of query result.
     * @param {number[]} seqs sequeue of infos.
     * @return {void} return void.
     * @since 9
     */
    onQuery: (infos: SysEventInfo[], seqs: number[]) => void;

    /**
     * notify Querier execute query has finished.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @param {number} reason 0 success, 1 fail.
     * @param {number} total the total number of query result.
     * @return {void} return void.
     * @since 9
     */
    onComplete: (reason: number, total: number) => void;
  }

  /**
   * add watcher to watch system event
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {Watcher} watcher watch system event
   * @return {number} 0 success, 1 fail
   * @since 9
   */
  function addWatcher(watcher: Watcher): number;

  /**
   * remove watcher
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {Watcher} wathcer watch system event
   * @return {number} 0 success, 1 fail
   * @since 9
   */
  function removeWatcher(wathcer: Watcher): number;

  /**
   * query system event
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {QueryArg} queryArg common arguments of query system event
   * @param {QueryRule[]} rules rule of query system event
   * @param {Querier} querier receive query result
   * @return {number} 0 success, 1 fail
   * @since 9
   */
  function query(queryArg: QueryArg, rules: QueryRule[], querier: Querier): number;
}

export default hiSysEvent;