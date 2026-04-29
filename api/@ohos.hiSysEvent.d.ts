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
 * The **hiSysEvent** module provides the system event logging functions, such as configuring trace points, subscribing
 * to system events, and querying system events written to the event file.
 *
 * @syscap SystemCapability.HiviewDFX.HiSysEvent
 * @systemapi hide for inner use
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace hiSysEvent {
  /**
   * Enumerate system event types.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  enum EventType {
    /**
     * Error event.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    FAULT = 1,

    /**
     * Statistic event.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    STATISTIC = 2,

    /**
     * Security event.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    SECURITY = 3,

    /**
     * User behavior event.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    BEHAVIOR = 4
  }

  /**
   * Defines a system event.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface SysEventInfo {
    /**
     * Event domain.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * Event name.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Event type.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    eventType: EventType;

    /**
     * Event parameters.
     *
     * @type { object } [since 9 - 11]
     * @type { ?object } [since 12]
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     */
    params?: object;

    /**
     * Event parameters.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    params?: Record<string, boolean | int | double | string | bigint | boolean[] | int[] | double[] | string[] | bigint[]> | null | undefined;
  }

  /**
   * Writes event information to the event file. This API uses a promise to return the result.
   *
   * @param {SysEventInfo} info - System event information.
   * @returns {Promise<void>} - Promise used to return the result. Depending on whether event writing is successful, you
   *     can use the **then()** or **catch()** method to process the callback.
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
   * Writes event information to the event file. This API uses an asynchronous callback to return the result.
   *
   * @param {SysEventInfo} info - System event information.
   * @param {AsyncCallback<void>} callback - Callback used to process the received return value.
   *     <br/>- Value **0**: The event verification is successful, and the event will be written to the event file asynchronously. 
   *     <br/>- A value greater than **0**: Invalid parameters are present in the event, and the event will be written to the event file asynchronously after the invalid parameters are ignored.
   *     <br/>- A value smaller than **0**: The event parameter verification fails, and the event will not be written to the event file.
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
   * Enumerates matching rule types.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  enum RuleType {
    /**
     * Whole word matching.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    WHOLE_WORD = 1,

    /**
     * Prefix matching.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    PREFIX = 2,

    /**
     * Regular expression matching.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    REGULAR = 3
  }

  /**
   * Defines event subscription rules.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface WatchRule {
    /**
     * Event domain.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * Event name.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Event tag.
     *
     * @type { string } [since 9 - 11]
     * @type { ?string } [since 12]
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     */
    tag?: string;

    /**
     * Event tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    tag?: string | null | undefined;

    /**
     * Matching rule type.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    ruleType: RuleType;
  }

  /**
   * Defines a watcher for event subscription.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface Watcher {
    /**
     * Array of matching event subscription rules.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    rules: WatchRule[];

    /**
    * Callback for event subscription: (info: [SysEventInfo]{@link SysEventInfo}) => void
    *
    * @syscap SystemCapability.HiviewDFX.HiSysEvent
    * @systemapi hide for inner use
    * @since 9 dynamic
    * @since 23 static
    */
    onEvent: (info: SysEventInfo) => void;

    /**
     * Callback for disabling of event subscription: () => void
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    onServiceDied: () => void;
  }

  /**
   * Defines arguments for an event query.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface QueryArg {
    /**
     * Start time of the system event to be queried. The value is a 13-digit timestamp, indicating the number of
     * milliseconds elapsed since 00:00:00:00 on January 1, 1970.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    beginTime: long;

    /**
     * End time of the system event to be queried. The value is a 13-digit timestamp, indicating the number of
     * milliseconds elapsed since 00:00:00:00 on January 1, 1970.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    endTime: long;

    /**
     * Maximum number of events that can be queried.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    maxEvents: long;

    /**
     * Start SN of the events to be queried. The default value is **-1**
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 10 dynamic
     */
    fromSeq?: long;

    /**
     * Start SN of the events to be queried. The default value is **-1**
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    fromSeq?: long | null | undefined;

    /**
     * End SN of the system events to be queried. The default value is **-1**.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 10 dynamic
     */
    toSeq?: long;

    /**
     * End SN of the system events to be queried. The default value is **-1**.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    toSeq?: long | null | undefined;
  }

  /**
   * Defines event query rules.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface QueryRule {
    /**
     * Event domain.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * Array of event names. A **QueryRule** object contains multiple system event names.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    names: string[];

    /**
     * Additional event conditions. The value of this parameter is in the format of
     * **{"version":"V1","condition":{"and":[{"param":"*Parameter*","op":"*Operator*","value":"*Comparison value*"}]}}**.
     *
     * Parameter: key value of the specified event parameter.
     *
     * Supported operators: **=**, **!=**, **<**, **<=**, **>** and **>=**.
     *
     * Multiple conditions can be configured in the **"and"** array, and the intersection of the query results is used.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 10 dynamic
     */
    condition?: string;

    /**
     * Additional event conditions. The value of this parameter is in the format of
     * **{"version":"V1","condition":{"and":[{"param":"*Parameter*","op":"*Operator*","value":"*Comparison value*"}]}}**.
     *
     * Parameter: key value of the specified event parameter.
     *
     * Supported operators: **=**, **!=**, **<**, **<=**, **>** and **>=**.
     * 
     * Multiple conditions can be configured in the **"and"** array, and the intersection of the query results is used.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 23 static
     */
    condition?: string | null | undefined;
  }

  /**
   * Defines an event query instance.
   *
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9 dynamic
   * @since 23 static
   */
  interface Querier {
    /**
     * Callback used to return the queried system events: (infos: [SysEventInfo]{@link SysEventInfo}[]) =>
     * void.
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    onQuery: (infos: SysEventInfo[]) => void;

    /**
     * Callback used to return the query result statistics: (reason: int, total: int) => void
     *
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9 dynamic
     * @since 23 static
     */
    onComplete: (reason: int, total: int) => void;
  }

  /**
   * Adds a watcher for event subscription.
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {Watcher} watcher - Watcher for event subscription.
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
   * Removes a watcher used for event subscription.
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {Watcher} watcher - Watcher for event subscription.
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
   * Queries system events.
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {QueryArg} queryArg - Arguments for event query.
   * @param {QueryRule[]} rules - Array of event query rules.
   * @param {Querier} querier - Event query instance.
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
   * Exports system events in batches and writes them as a file to the fixed directory of the application sandbox (that
   * is, /data/storage/el2/base/cache/hiview/event/).
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {QueryArg} queryArg - Event query parameters for the export.
   * @param {QueryRule[]} rules - Array of event query rules for the export.
   * @returns {long} API call timestamp.
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
   * Subscribes to real-time system events that occur occasionally or occur in a low frequency. These events are written
   * as a file to the fixed directory of the application sandbox (that is,
   * /data/storage/el2/base/cache/hiview/event/).
   *
   * @permission ohos.permission.READ_DFX_SYSEVENT
   * @param {QueryRule[]} rules - Array of event query rules for the subscription.
   * @returns {long} API call timestamp.
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
   * Unsubscribes from system events.
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
