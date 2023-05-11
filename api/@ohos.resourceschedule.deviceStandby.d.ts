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

import { AsyncCallback } from './@ohos.base';

/**
 * Provides methods for managing device standby,
 * including the methods for querying standby status and exemption list.
 *
 * @namespace deviceStandby
 * @since 10
 */
declare namespace deviceStandby {
  /**
   * Returns true if the device is currently in idle mode.
   *
   * @param { AsyncCallback<boolean> } callback - the callback of isDeviceInStandby.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Inner transact failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Idle
   * @since 10
   */
  function isDeviceInStandby(callback: AsyncCallback<boolean>): void;

  /**
   * Returns true if the device is currently in idle mode.
   *
   * @returns { Promise<boolean> } the promise returned by isDeviceInStandby.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Inner transact failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Idle
   * @since 10
   */
  function isDeviceInStandby(): Promise<boolean>;

  /**
   * Returns the information about the specified exemption application.
   *
   * @permission ohos.permission.DEVICE_STANDBY_EXEMPTION
   * @param { number } resourceTypes - the combination of {@link ResourceType} values.
   * @param { AsyncCallback<Array<ExemptionAppInfo>> } callback - the callback of getExemptionListApps.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Inner transact failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getExemptionListApps(resourceTypes: number, callback: AsyncCallback<Array<ExemptionAppInfo>>): void;

  /**
   * Returns the information about the specified exemption application.
   *
   * @permission ohos.permission.DEVICE_STANDBY_EXEMPTION
   * @param { number } resourceTypes - the combination of {@link ResourceType} values.
   * @returns { Promise<Array<ExemptionAppInfo>> } the promise returned by getExemptionListApps.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Inner transact failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getExemptionListApps(resourceTypes: number): Promise<Array<ExemptionAppInfo>>;

  /**
   * Application apply for Resource Exemption.
   *
   * @permission ohos.permission.DEVICE_STANDBY_EXEMPTION
   * @param { ResourceRequest } request - the request of apply or unapply resources.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Inner transact failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function applyExemptionAppResource(request: ResourceRequest): void;

  /**
   * Application unapply for Resource Exemption.
   *
   * @permission ohos.permission.DEVICE_STANDBY_EXEMPTION
   * @param { ResourceRequest } request - the request of apply or unapply resources.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 9800001 - Memory operation failed.
   * @throws { BusinessError } 9800002 - Parcel operation failed.
   * @throws { BusinessError } 9800003 - Inner transact failed.
   * @throws { BusinessError } 9800004 - System service operation failed.
   * @throws { BusinessError } 18700001 - Caller information verification failed.
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function unapplyExemptionAppResource(request: ResourceRequest): void;

  /**
   * The resource type of exemption application.
   *
   * @enum { number }
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export enum ResourceType {
    /**
     * The resource for non-standby network access.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    NETWORK = 1,

    /**
     * The resource for non-standby cpu-runninglock.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    RUNNING_LOCK = 1 << 1,

    /**
     * The resource for non-standby timer.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    TIMER = 1 << 2,

    /**
     * The resource for non-standby workscheduler.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    WORK_SCHEDULER = 1 << 3,

    /**
     * The resource for non-standby Automatic synchronization.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    AUTO_SYNC = 1 << 4,

    /**
     * The resource for non-standby pushkit.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    PUSH = 1 << 5,

    /**
     * The resource for non-standby freezing application.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    FREEZE = 1 << 6
  }

  /**
   * The information of exemption application.
   *
   * @interface ExemptionAppInfo
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface ExemptionAppInfo {
    /**
     * The set of resource types that app wants to apply.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    resourceTypes: number;

    /**
     *  The app name.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    name: string;

    /**
     *  The exemption duration.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    duration: number;
  }

  /**
   * The request of standby resources.
   *
   * @interface ResourceRequest
   * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface ResourceRequest {
    /**
     * The set of resource types that app wants to apply.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    resourceTypes: number;

    /**
     *  The app uid.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    uid: number;

    /**
     *  The app name.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    name: string;

    /**
     *  The exemption duration.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    duration: number;

    /**
     *  The apply reason.
     *
     * @syscap SystemCapability.ResourceSchedule.DeviceStandby.Exemption
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    reason: string;
  }
}

export default deviceStandby;