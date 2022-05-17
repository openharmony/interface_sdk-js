/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @since 9
 * @sysCap SystemCapability.HiviewDFX.HiSysEvent
 * @systemapi hide for inner use
 * @import import hiSysEvent from '@ohos.hiSysEvent'
 * @permission ohos.permission.READ_DFX_SYSEVENT
 */
declare namespace hiSysEvent {
  /**
   * Enumerate system event types.
   *
   * @since 9
   * @sysCap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   */
  enum EventType {
    /**
     * Fault event
     *
     * @since 9
     * @sysCap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     */
    FAULT = 1,

    /**
     * Statistic event
     *
     * @since 9
     * @sysCap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     */
    STATISTIC = 2,

    /**
     * Security event
     *
     * @since 9
     * @sysCap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     */
    SECURITY = 3,

    /**
     * System behavior event
     *
     * @since 9
     * @sysCap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     */
    BEHAVIOR = 4
  }

  /**
   * Definition of written system event information.
   *
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
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
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
   * @static
   * @param {SysEventInfo} info system event information to be written.
   * @param {AsyncCallback} [callback] callback function.
   * @return {void | Promise<void>} no callback return Promise otherwise return void.
   */
  function write(info: SysEventInfo): Promise<void>;
  function write(info: SysEventInfo, callback: AsyncCallback<void>): void;

  /**
   * Enumerate search system event rule type.
   *
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
   */
  enum RuleType {
    /**
     * whole word match
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.hiSysEvent
     * @systemapi hide for inner use
     */
    WHOLE_WORD = 1,

    /**
     * prefix match
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.hiSysEvent
     * @systemapi hide for inner use
     */
    PREFIX = 2,

    /**
     * regular match
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.hiSysEvent
     * @systemapi hide for inner use
     */
    REGULAR = 3
  }

  /**
   * Definition listener rule for system event information.
   *
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
   */
  interface ListenerRule {
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
   * Definition listener for system event information.
   *
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
   */
  interface Listener{
    /**
     * receive system event.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.hiSysEvent
     * @systemapi hide for inner use
     * @param {SysEventInfo} info system event information of receive.
     * @return {void} return void.
     */
    onEvent: (info: SysEventInfo) => void;

    /**
     * hisysevent service shutdown.
     *
     * @since 9
     * @syscap SystemCapability.HiviewDFX.hiSysEvent
     * @systemapi hide for inner use
     * @return {void} return void.
     */
    onServiceDied: () => void;
  }

  /**
   * Definition arguments for query system event information.
   *
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
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
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
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

  interface Querier {
    onQuery: (infos: SysEventInfo[], seqs: number[]) => void;
    onComplete: (reason: number, total: number) => void;
  }

  /**
   * add listener to watch system event
   *
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {ListenerRule[]} rules rule of filter system event
   * @param {Listener} listener listener of receive system event
   * @return {number} 0 success, 1 fail
   */
  function addListener(rules: ListenerRule[], listener: Listener): number;

  /**
   * remove listener
   *
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {Listener} listener listener of receive system event
   * @return {number} 0 success, 1 fail
   */
  function removeListener(listener: Listener): number;

  /**
   * query system event
   *
   * @since 9
   * @syscap SystemCapability.HiviewDFX.hiSysEvent
   * @systemapi hide for inner use
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {QueryArg} queryArg common arguments of query system event
   * @param {QueryRule[]} rules rule of query system event
   * @param {Querier} querier receive query result
   * @return {number} 0 success, 1 fail
   */
  function query(queryArg: QueryArg, rules: QueryRule[], querier: Querier): number;
}

export default hiSysEvent;