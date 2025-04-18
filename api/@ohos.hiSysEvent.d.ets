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
 * Provides the system event logging function for applications to log the fault, statistical, security,
 * and user behavior events reported during running. Based on event information,
 * you will be able to analyze the running status of applications.
 *
 * @namespace hiSysEvent
 * @syscap SystemCapability.HiviewDFX.HiSysEvent
 * @systemapi hide for inner use
 * @since 9
 */
declare namespace hiSysEvent {
  /**
   * Enumerate system event types.
   *
   * @enum {number}
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  export enum EventType {
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
   * @interface SysEventInfo
   * @syscap SystemCapability.HiviewDFX.HiSysEvent
   * @systemapi hide for inner use
   * @since 9
   */
  export interface SysEventInfo {
    /**
     * The domain of the event.
     *
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    domain: string;

    /**
     * The name of the event.
     *
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    name: string;

    /**
     * The type of the event.
     *
     * @type { EventType }
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    eventType: EventType;

    /**
     * The params of the event.
     *
     * @type { object }
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 9
     */
    /**
     * The params of the event.
     *
     * @type { ?object }
     * @syscap SystemCapability.HiviewDFX.HiSysEvent
     * @systemapi hide for inner use
     * @since 12
     */
    params?: Record<string, (number | string | boolean | bigint | (number | string | boolean | bigint)[])>;
  }

  /**
   * Write system event.
   *
   * @param {SysEventInfo} info - system event information to be written.
   * @returns {Promise<void>} - Return Promise
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *                         1. Mandatory parameters are left unspecified.
   *                         2. Incorrect parameter types.
   *                         3. Parameter verification failed.
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
   * @since 9
   */
  export function write(info: SysEventInfo): Promise<void>;

  /**
   * Write system event.
   *
   * @param {SysEventInfo} info - system event information to be written.
   * @param {AsyncCallback<void>} callback - callback function.
   * @throws {BusinessError} 401 - Parameter error. Possible causes:
   *                         1. Mandatory parameters are left unspecified.
   *                         2. Incorrect parameter types.
   *                         3. Parameter verification failed.
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
   * @since 9
   */
  export function write(info: SysEventInfo, callback: AsyncCallback<void>): void;
}

export default hiSysEvent;
