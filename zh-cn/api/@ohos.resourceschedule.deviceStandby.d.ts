/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 设备待机模块
 * @kit BackgroundTasksKit
 */
 
import { AsyncCallback } from './@ohos.base';
 
/**
 * 当设备长时间未被使用，或通过按键操作时，可以使设备进入待机模式。待机模式不影响应用使用，还可以延长电池续航时间。通过本模块接口，可查询设备或应用是否为待机模式，以及为应用申请或取消待机资源管控。
 * 
 * > **说明**:
 * >
 * > 本模块接口为系统接口。
 *
 * @syscap SystemCapability.ResourceSchedule.DeviceStandby
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace deviceStandby {
 
  /**
   * 获取进入待机模式的应用名单，使用Callback异步回调。
   *
   * @permission ohos.permission.DEVICE_STANDBY_EXEMPTION
   * @param { int } resourceTypes - 资源类型，类型具体说明请参考[ResourceType]{@link deviceStandby.ResourceType}。
   * @param { AsyncCallback<Array<ExemptedAppInfo>> } callback - 豁免应用信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters.
   * @throws { BusinessError } 9800003 - Failed to complete inner transaction.
   * @throws { BusinessError } 9800004 - Failed to get device standby service. Possible cause: A necessary system
   *     service is not ready.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getExemptedApps(resourceTypes: int, callback: AsyncCallback<Array<ExemptedAppInfo>>): void;
 
  /**
   * 获取进入待机模式的应用名单，使用Promise异步回调。
   *
   * @permission ohos.permission.DEVICE_STANDBY_EXEMPTION
   * @param { int } resourceTypes - 资源类型，类型具体说明请参考[ResourceType]{@link deviceStandby.ResourceType}。
   * @returns { Promise<Array<ExemptedAppInfo>> } 豁免应用信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters.
   * @throws { BusinessError } 9800003 - Failed to complete inner transaction.
   * @throws { BusinessError } 9800004 - Failed to get device standby service. Possible cause: A necessary system
   *     service is not ready.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getExemptedApps(resourceTypes: int): Promise<Array<ExemptedAppInfo>>;
 
  /**
   * 应用订阅申请豁免，使应用临时不进入待机管控。
   *
   * @permission ohos.permission.DEVICE_STANDBY_EXEMPTION
   * @param { ResourceRequest } request - 资源请求。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters.
   * @throws { BusinessError } 9800003 - Failed to complete inner transaction.
   * @throws { BusinessError } 9800004 - Failed to get device standby service. Possible cause: A necessary system
   *     service is not ready.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function requestExemptionResource(request: ResourceRequest): void;
 
  /**
   * 取消应用订阅申请豁免。
   *
   * @permission ohos.permission.DEVICE_STANDBY_EXEMPTION
   * @param { ResourceRequest } request - 资源请求 。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters.
   * @throws { BusinessError } 9800003 - Failed to complete inner transaction.
   * @throws { BusinessError } 9800004 - Failed to get device standby service. Possible cause: A necessary system
   *     service is not ready.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function releaseExemptionResource(request: ResourceRequest): void;
 
  /**
   * 非待机应用资源枚举。
   *
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ResourceType {
    /**
     * 网络访问资源。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK = 1,
 
    /**
     * cpu-runninglock资源。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    RUNNING_LOCK = 1 << 1,
 
    /**
     * timer任务资源。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    TIMER = 1 << 2,
 
    /**
     * work任务资源。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    WORK_SCHEDULER = 1 << 3,
 
    /**
     * 自动同步的资源。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    AUTO_SYNC = 1 << 4,
 
    /**
     * pushkit资源。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    PUSH = 1 << 5,
 
    /**
     * 冻结应用资源。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FREEZE = 1 << 6
  }
 
  /**
   * 豁免应用信息，未进入待机管控的应用信息。
   *
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface ExemptedAppInfo {
    /**
     * 资源类型，类型具体说明请参考[ResourceType]{@link deviceStandby.ResourceType}。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    resourceTypes: int;
 
    /**
     * 应用名。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;
 
    /**
     * 豁免时长。
	   * 单位：s
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    duration: int;
  }
 
  /**
   * 待机资源请求体。
   *
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  export interface ResourceRequest {
    /**
     * 资源类型，类型具体说明请参考[ResourceType]{@link deviceStandby.ResourceType}。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    resourceTypes: int;
 
    /**
     * 应用uid。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    uid: int;
 
    /**
     * 应用名。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;
 
    /**
     * 豁免时长。
	   * 单位：s
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    duration: int;
 
    /**
     * 申请原因。
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    reason: string;
  }
}
 
export default deviceStandby;