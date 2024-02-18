/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Provides security event management and security model management.
 * Based on event information, you will be able to analyze the running status of devices.
 *
 * @namespace securityGuard
 * @syscap SystemCapability.Security.SecurityGuard
 * @systemapi Hide this for inner system use.
 * @since 11
 */
declare namespace securityGuard {

  /**
   * Provides the EventInfo type, including the event id, version info, report content.
   *
   * @typedef EventInfo
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  interface EventInfo {
    /**
     * The event id
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    eventId: number;

    /**
     * The version info
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    version: string;

    /**
     * The report content
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    content: string;
  }

  /**
   * Report security information to the security guard.
   *
   * @permission ohos.permission.securityguard.REPORT_SECURITY_INFO
   * @param { EventInfo } info - indicates the infomation to be reported.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function reportSecurityInfo(info: EventInfo): void;

  /**
   * Provides the SecurityModelResult type, including the device id, security model id, result of security model.
   *
   * @typedef SecurityModelResult
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  interface SecurityModelResult {
    /**
     * The security model name
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    modelName: string;

    /**
     * The result of security model, include 'risk'|'safe'|'unknown'
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    result: string;
  }

  /**
   * Request security model result from security guard.
   *
   * @permission ohos.permission.securityguard.REQUEST_SECURITY_MODEL_RESULT
   * @param { string } modelName -  indicates the security model id.
   * @param { string } extra - additional parameters required for model running.
   * @returns { Promise<SecurityModelResult> } the promise returned by the function.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function requestSecurityModelResult(modelName: string, extra?: string): Promise<SecurityModelResult>;

  /**
   * Provides the conditions of requestSecurityEventInfo, including the event id, the begin time and the end time.
   *
   * @interface Conditions
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  interface Conditions {
    /**
     * The security event ids.
     *
     * @type { Array<number> }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    eventIds: Array<number>;

    /**
     * The begin time.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    beginTime?: string;

    /**
     * The end time.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    endTime?: string;
  }

  /**
   * Definition the request data response.
   *
   * @interface Response
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  interface Response {
    /**
     * Triggered when data is returned.
     * @param { 'change' | 'end' | 'error' } type - The type of the received result.
     * @param { string } result - The received result.
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    on(type: 'change' | 'end' | 'error', result: string): void;
  }

  /**
   * Request security event information from security guard.
   *
   * @permission ohos.permission.securityguard.REQUEST_SECURITY_EVENT_INFO
   * @param { Conditions } conditions - conditions of request security event information.
   * @param { function } callback - callback of receiving the request data.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 401 - invalid parameters.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function requestSecurityEventInfo(conditions: Conditions, response: Response): void;

  /**
   * Definition the event information.
   *
   * @interface Event
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  interface Event {
    /**
     * The request event id.
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    eventId: number;

    /**
     * The event version.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    version?: string;

    /**
     * The event content.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    content?: string;

    /**
     * The event extra information.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    extra?: string;
  }

  /**
   * Notify the collector to collect data.
   *
   * @permission ohos.permission.securityguard.REPORT_SECURITY_INFO
   * @param { Event } event - Carried event information.
   * @param { ?number } duration - Duration of the collector.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 401 - invalid parameters.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 11
   */
  function notifyCollector(event: Event, duration?: number): void;
}

export default securityGuard;
