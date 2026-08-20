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
 * @file 本模块提供设备风险管理平台能力。
 * @kit SecurityGuardKit
 */

import type { Callback } from '@ohos.base';

/**
 * 提供安全事件存取、风险分析等功能。
 * 基于事件信息，您将能够分析设备的运行状态。
 *
 * @namespace securityGuard
 * @syscap SystemCapability.Security.SecurityGuard
 * @systemapi Hide this for inner system use.
 * @since 12
 */
declare namespace securityGuard {

  /**
   * 提供SecurityEvent类型，包括事件ID、版本信息和上报内容。
   *
   * @typedef SecurityEvent
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface SecurityEvent {
    /**
     * 安全事件类型。
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;

    /**
     * 安全事件版本号。
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    version: string;

    /**
     * 安全事件内容，json格式。
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    content: string;

    /**
     * 事件时间戳，格式为YYYYMMDDHHMMSS。
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    timestamp?: string;
  }

  /**
   * 安全事件上报接口。
   *
   * @permission ohos.permission.REPORT_SECURITY_EVENT
   * @param { SecurityEvent } securityEvent - 表示要上报的事件信息。
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters. 
   * Possible causes: 
   *   1. Mandatory parameters are left unspecified. 
   *   2. Incorrect parameter types. 
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function reportSecurityEvent(securityEvent: SecurityEvent): void;

  /**
   * 用户获取安全数据的规则。
   *
   * @interface SecurityEventRule
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface SecurityEventRule {
    /**
     * 需要获取的安全事件ID。
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;
    
    /**
     * 需要获取数据的起始时间，格式为YYYYMMDDHHMMSS。
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    beginTime?: string;

    /**
     * 需要获取数据的终止时间，格式为YYYYMMDDHHMMSS。
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    endTime?: string;

    /**
     * 额外查询参数。
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string;
  }

  /**
   * 用于接收安全数据的回调函数。
   *
   * @interface Querier
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface Querier {
    /**
     * 返回数据时触发。
     *
     * @type { function }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onQuery: (events: Array<SecurityEvent>) => void;

    /**
     * 获取数据结束时触发。
     *
     * @type { function }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onComplete: () => void;

    /**
     * 查询存在失败时触发。
     *
     * @type { function }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    onError: (message: string) => void;
  }

  /**
   * 用于获取安全事件信息。
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param { Array<SecurityEventRule> } rules - 获取数据的规则。
   * @param { Querier } querier - 用于接收数据的回调函数。
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters. 
   * Possible causes: 
   *   1. Mandatory parameters are left unspecified. 
   *   2. Incorrect parameter types. 
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function querySecurityEvent(rules: Array<SecurityEventRule>, querier: Querier): void;

  /**
   * 安全事件采集规则。
   *
   * @typedef CollectorRule
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface CollectorRule {
    /**
     * 安全事件ID。
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;

    /**
     * 额外查询条件。
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string;
  }

  /**
   * 开始采集事件。
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param { CollectorRule } rule - 采集规则。
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters. 
   * Possible causes: 
   *   1. Mandatory parameters are left unspecified. 
   *   2. Incorrect parameter types. 
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function startSecurityEventCollector(rule: CollectorRule): void;

  /**
   * 停止采集事件。
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param { CollectorRule } rule - 采集规则。
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters. 
   * Possible causes: 
   *   1. Mandatory parameters are left unspecified. 
   *   2. Incorrect parameter types. 
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function stopSecurityEventCollector(rule: CollectorRule): void;

  /**
   * 安全模型规则。
   *
   * @typedef ModelRule
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface ModelRule {
    /**
     * 安全模型名称。
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    modelName: string;

    /**
     * 额外模型参数。
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    param?: string
  }

  /**
   * 安全模型结果。
   *
   * @typedef ModelResult
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface ModelResult {
    /**
     * 安全模型结果。
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    result: string;
  }

  /**
   * 请求安全模型检测结果。
   *
   * @permission ohos.permission.QUERY_SECURITY_MODEL_RESULT
   * @param { ModelRule } rule -  安全模型规则，指定模型名称与参数。
   * @returns { Promise<ModelResult> } 以Promise形式返回模型结果。
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters. 
   * Possible causes: 
   *   1. Mandatory parameters are left unspecified. 
   *   2. Incorrect parameter types. 
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function getModelResult(rule: ModelRule): Promise<ModelResult>;

  /**
   * 调用订阅接口使用的事件信息。
   *
   * @interface SecurityEventInfo
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface SecurityEventInfo {
    /**
     * 安全事件ID。
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    eventId: number;
  }

  /**
   * 订阅安全事件。
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param {'securityEventOccur'} type - 订阅类型。
   * @param { SecurityEventInfo } securityEventInfo - 订阅的安全事件信息。
   * @param { Callback<SecurityEvent> } callback - 安全事件发生时的监听回调函数。
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters. 
   * Possible causes: 
   *   1. Mandatory parameters are left unspecified. 
   *   2. Incorrect parameter types. 
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function on(type: 'securityEventOccur', securityEventInfo: SecurityEventInfo, callback: Callback<SecurityEvent>): void;

  /**
   * 解订阅安全事件。
   *
   * @permission ohos.permission.QUERY_SECURITY_EVENT
   * @param {'securityEventOccur'} type - 订阅类型。
   * @param { SecurityEventInfo } securityEventInfo - 订阅的安全事件信息。
   * @param { Callback<SecurityEvent> } callback - 安全事件发生时的监听回调函数。
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters. 
   * Possible causes: 
   *   1. Mandatory parameters are left unspecified. 
   *   2. Incorrect parameter types. 
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function off(type: 'securityEventOccur', securityEventInfo: SecurityEventInfo, callback?: Callback<SecurityEvent>): void;

  /**
   * 配置文件信息。
   *
   * @interface PolicyFile
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  interface PolicyFile {
    /**
     * 配置文件名称。
     *
     * @type { string }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    name: string;

    /**
     * 配置文件的文件描述符。
     *
     * @type { number }
     * @syscap SystemCapability.Security.SecurityGuard
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    fd: number;
  }

  /**
   * 更新配置文件。
   *
   * @permission ohos.permission.MANAGE_SECURITY_GUARD_CONFIG
   * @param { PolicyFile } policyFile - 配置文件信息。
   * @returns { Promise<void> } 以Promise形式返回结果。
   * @throws { BusinessError } 201 - check permission fail.
   * @throws { BusinessError } 202 - non-system application uses the system API.
   * @throws { BusinessError } 401 - invalid parameters. 
   * Possible causes: 
   *   1. Mandatory parameters are left unspecified. 
   *   2. Incorrect parameter types. 
   *   3. Parameter verification failed.
   * @syscap SystemCapability.Security.SecurityGuard
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function updatePolicyFile(policyFile: PolicyFile): Promise<void>;
}

export default securityGuard;
