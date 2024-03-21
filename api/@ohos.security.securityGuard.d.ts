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
 * @since 12
 */
declare namespace securityGuard {

  /**
   * Provides the SecurityEvent type, including the event id, version info, report content.
   *
   * @typedef SecurityEvent
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface SecurityEvent {
    /**
     * The event id
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;

    /**
     * The version of a security event. Different versions indicate different data formats.
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    version: string;

    /**
     * The report content
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    content: string;
  }

  /**
   * Report security information to the security guard.
   *
   * @permission ohos.permission.securityguard.REPORT_SECURITY_INFO
   * @param { SecurityEvent } securityEvent - indicates the information to be reported.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function reportSecurityEvent(securityEvent: SecurityEvent): void;

  /**
   * Provides the conditions of querySecurityEvent.
   *
   * @interface SecurityEventRuler
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface SecurityEventRuler {
    /**
     * The security event ids.
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;
    
    /**
     * The begin time, format is YYYYMMDDHHMMSS.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    beginTime?: string;

    /**
     * The end time, format is YYYYMMDDHHMMSS.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    endTime?: string;

    /**
     * The query condition.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string
  }

  /**
   * Definition callback of receiving the query data.
   *
   * @interface Querier
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface Querier {
    /**
     * Triggered when data is returned.
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onQuery: (events: Array<SecurityEvent>) => void;
    /**
     * Triggered when data is complete.
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onComplete: () => void;
    /**
     * Triggered when error.
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onError: (message: string) => void;
  }

  /**
   * Query security event information from security guard.
   *
   * @permission ohos.permission.securityguard.REQUEST_SECURITY_EVENT_INFO
   * @param { Array<SecurityEventRuler> } rules - rule of get security event information.
   * @param { Querier } querier - callback of receiving the query data.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function querySecurityEvent(rules: Array<SecurityEventRuler>, querier: Querier): void;

  /**
   * Provides the conditions of Collector.
   *
   * @typedef CollectorRuler
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface CollectorRuler {
    /**
     * The event id
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;

    /**
     * The query condition.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string;
  }

  /**
   * start the collector to collect data
   *
   * @permission ohos.permission.securityguard.REQUEST_SECURITY_EVENT_INFO
   * @param { CollectorRuler } ruler - rule of collect security event information..
   * @param { number } duration -  duration of the collector.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function startSecurityEventCollector(ruler: CollectorRuler, duration?: number): void;

  /**
   * stop the collector.
   *
   * @permission ohos.permission.securityguard.REQUEST_SECURITY_EVENT_INFO
   * @param { CollectorRuler } ruler - rule of collect security event information.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function stopSecurityEventCollector(ruler: CollectorRuler): void;

  /**
   * Provides the ModelRuler type.
   *
   * @typedef ModelRuler
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface ModelRuler {
    /**
     * The security model ruler
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    modelName: string;

    /**
     * The model param.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string
  }

  /**
   * Provides the ModelResult type.
   *
   * @typedef ModelResult
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface ModelResult {
    /**
     * The result of security model, include 'risk'|'safe'|'unknown'
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    result: string;
  }

  /**
   * Request security model result from security guard.
   *
   * @permission ohos.permission.securityguard.REQUEST_SECURITY_MODEL_RESULT
   * @param { ModelRuler } ruler -  indicates the security model ruler.
   * @returns { Promise<ModelResult> } model Results with Promises.
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function getModelResult(ruler: ModelRuler): Promise<ModelResult>;
}

export default securityGuard;
