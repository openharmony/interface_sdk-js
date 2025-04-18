/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import { AsyncCallback } from '@ohos.base';

/**
 * Provides the event logging function for applications to log the fault, statistical, security,
 * and user behavior events reported during running. Based on event information,
 * you will be able to analyze the running status of applications.
 *
 * @namespace hiAppEvent
 * @syscap SystemCapability.HiviewDFX.HiAppEvent
 * @since 9
 */
/**
 * Provides the event logging function for applications to log the fault, statistical, security,
 * and user behavior events reported during running. Based on event information,
 * you will be able to analyze the running status of applications.
 *
 * @namespace hiAppEvent
 * @syscap SystemCapability.HiviewDFX.HiAppEvent
 * @atomicservice
 * @since 11
 */
declare namespace hiAppEvent {
  /**
   * Enumerate application event types.
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @since 9
   */
  /**
   * Enumerate application event types.
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11
   */
  export enum EventType {
    /**
     * Fault event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    /**
     * Fault event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    FAULT = 1,

    /**
     * Statistic event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    /**
     * Statistic event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    STATISTIC = 2,

    /**
     * Security event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    /**
     * Security event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    SECURITY = 3,

    /**
     * User behavior event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    /**
     * User behavior event.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    BEHAVIOR = 4
  }

  /**
   * Preset domain.
   *
   * @namespace domain
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11
   */
  export namespace domain {
    /**
     * the domain of operating system.
     *
     * @constant
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    const OS: string;
  }

  /**
   * Definition of written application event information.
   *
   * @interface AppEventInfo
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @since 9
   */
  /**
   * Definition of written application event information.
   *
   * @interface AppEventInfo
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11
   */
  export interface AppEventInfo {
    /**
     * The domain of the event.
     *
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    /**
     * The domain of the event.
     *
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    domain: string;

    /**
     * The name of the event.
     *
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    /**
     * The name of the event.
     *
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    name: string;

    /**
     * The type of the event.
     *
     * @type { EventType }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    /**
     * The type of the event.
     *
     * @type { EventType }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    eventType: EventType;

    /**
     * The params of the event.
     *
     * @type { object }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    /**
     * The params of the event.
     *
     * @type { object }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    params: Record<string, number | string | boolean | (number | string | boolean)[]>;
  }

  /**
   * Write application event.
   *
   * @param { AppEventInfo } info Application event information to be written.
   * @returns { Promise<void> } Return Promise.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 11100001 - Function disabled.
   * @throws { BusinessError } 11101001 - Invalid event domain.
   * @throws { BusinessError } 11101002 - Invalid event name.
   * @throws { BusinessError } 11101003 - Invalid number of event parameters.
   * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
   * @throws { BusinessError } 11101005 - Invalid event parameter name.
   * @throws { BusinessError } 11101006 - Invalid array length of the event parameter.
   * @static
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @since 9
   */
  /**
   * Write application event.
   *
   * @param { AppEventInfo } info Application event information to be written.
   * @returns { Promise<void> } Return Promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11100001 - Function disabled.
   * @throws { BusinessError } 11101001 - Invalid event domain.
   * @throws { BusinessError } 11101002 - Invalid event name.
   * @throws { BusinessError } 11101003 - Invalid number of event parameters.
   * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
   * @throws { BusinessError } 11101005 - Invalid event parameter name.
   * @throws { BusinessError } 11101006 - Invalid array length of the event parameter.
   * @static
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11
   */
  export function write(info: AppEventInfo): Promise<void>;

  /**
   * Write application event.
   *
   * @param { AppEventInfo } info Application event information to be written.
   * @param { AsyncCallback<void> } callback Callback function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 11100001 - Function disabled.
   * @throws { BusinessError } 11101001 - Invalid event domain.
   * @throws { BusinessError } 11101002 - Invalid event name.
   * @throws { BusinessError } 11101003 - Invalid number of event parameters.
   * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
   * @throws { BusinessError } 11101005 - Invalid event parameter name.
   * @throws { BusinessError } 11101006 - Invalid array length of the event parameter.
   * @static
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @since 9
   */
  /**
   * Write application event.
   *
   * @param { AppEventInfo } info Application event information to be written.
   * @param { AsyncCallback<void> } callback Callback function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 11100001 - Function disabled.
   * @throws { BusinessError } 11101001 - Invalid event domain.
   * @throws { BusinessError } 11101002 - Invalid event name.
   * @throws { BusinessError } 11101003 - Invalid number of event parameters.
   * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
   * @throws { BusinessError } 11101005 - Invalid event parameter name.
   * @throws { BusinessError } 11101006 - Invalid array length of the event parameter.
   * @static
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11
   */
  export function write(info: AppEventInfo, callback: AsyncCallback<void>): void;

  /**
   * Describe the event config to be reported by processor.
   *
   * @interface AppEventReportConfig
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11
   */
  export interface AppEventReportConfig {
    /**
     * The domain of the event.
     *
     * @type { ?string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    domain?: string;

    /**
     * The name of the event.
     *
     * @type { ?string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    name?: string;

    /**
     * The realtime report event.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    isRealTime?: boolean;
  }

  /**
   * Definition of the processor.
   *
   * @interface Processor
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11
   */
  export interface Processor {
    /**
     * The name of the processor.
     *
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    name: string;

    /**
     * The processor enable the developer to debug.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    debugMode?: boolean;

    /**
     * The server location which used for the processor to receive the data, defined by the processor.
     *
     * @type { ?string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    routeInfo?: string;

    /**
     * The app ID is provided by the processor.
     *
     * @type { ?string }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    appId?: string;

    /**
     * The processor report the event when start.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    onStartReport?: boolean;

    /**
     * The processor report the event when the application onBackground.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    onBackgroundReport?: boolean;

    /**
     * The processor report the event according to the period.
     *
     * @type { ?number }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    periodReport?: int;

    /**
     * The processor report the event according to the batch size.
     *
     * @type { ?number }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    batchReport?: int;

    /**
     * The user ID names which the processor can report.
     *
     * @type { ?string[] }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    userIds?: string[];

    /**
     * The user property names which the processor can report.
     *
     * @type { ?string[] }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    userProperties?: string[];

    /**
     * The events which the processor can report.
     *
     * @type { ?AppEventReportConfig[] }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 11
     */
    eventConfigs?: AppEventReportConfig[];

    /**
     * The processor config id.
     *
     * @type { ?number }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12
     */
    configId?: int;

    /**
     * The processor set custom config data.
     *
     * @type { ?Record<string, string> }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @atomicservice
     * @since 12
     */
    customConfigs?: Record<string, string>;
  }

  /**
   * Add the processor, who can report the event.
   *
   * @param { Processor } processor The instance which report the event
   * @returns { number }  The processor unique ID.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @static
   * @syscap SystemCapability.HiviewDFX.HiAppEvent
   * @atomicservice
   * @since 11
   */
  export function addProcessor(processor: Processor): number;
}

export default hiAppEvent;
