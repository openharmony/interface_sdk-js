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
 * @file
 * @kit BackgroundTasksKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * 本模块提供延迟任务注册、取消、查询的能力。在开发过程中，对于实时性要求不高的任务，可以调用本模块接口注册延迟任务，在系统空闲时根据性能、功耗、热等情况进行调度执行。开发指导请参考
 * [延迟任务开发指南](docroot://task-management/work-scheduler.md)。
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace workScheduler {
  /**
   * 延迟任务的具体信息, 用于设置延迟任务的触发条件等。
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  export interface WorkInfo {
    /**
     * 延迟任务ID。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    workId: int;
    /**
     * 延迟任务所在应用的包名。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName: string;
    /**
     * 包内ability名称。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    abilityName: string;
    /**
     * 注册的延迟任务是否可保存在系统中，默认为false。
     *
     * - true表示可保存，即系统重启后，任务可恢复。
     * - false表示不可保存。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    isPersisted?: boolean;
    /**
     * 网络类型。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    networkType?: NetworkType;
    /**
     * 是否充电，默认为false。
     *
     * - true表示充电触发延迟任务回调。
     * - false表示不充电触发延迟任务回调。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    isCharging?: boolean;
    /**
     * 充电类型。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    chargerType?: ChargingType;
    /**
     * 电量。
     * 
     * 取值范围：[0, 100]
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    batteryLevel?: int;
    /**
     * 电池状态。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    batteryStatus?: BatteryStatus;
    /**
     * 存储状态。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    storageRequest?: StorageRequest;
    /**
     * 循环间隔，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    repeatCycleTime?: int;
    /**
     * 是否循环任务，默认为false。
     * 
     * - true表示循环任务。
     * - false表示非循环任务。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    isRepeat?: boolean;
    /**
     * 循环次数。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    repeatCount?: int;
    /**
     * 是否要求设备进入空闲状态，默认为false。
     * 
     * - true表示需要。
     * - false表示不需要。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    isDeepIdle?: boolean;
    /**
     * 空闲等待时间，单位：ms。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    idleWaitTime?: int;
    /**
     * 携带参数信息。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    parameters?: Record<string, int | double | string | boolean>;
    /**
     * 任务首次执行时间距离任务申请时间的间隔，单位：ms，默认为0，范围大于等于0。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    earliestStartTime?: int;
  }

  /**
   * 当前任务触发时满足的最后一个条件。
   * 
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const WORK_SCHEDULER_CONDITION = 'WORK_SCHEDULER_CONDITION';

  /**
   * 请求的任务是否立即执行。
   * 
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const EXECUTE_IMMEDIATE = 'executeImmediate';

  /**
   * 申请延迟任务，成功后会把任务添加到执行队列，满足触发条件后由系统调度执行。
   *
   * @param { WorkInfo } work - The info of work.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on workInfo failed.
   * @throws { BusinessError } 9700005 - Calling startWork failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function startWork(work: WorkInfo): void;

  /**
   * 取消延迟任务。
   *
   * @param { WorkInfo } work  - 要停止或移除的延迟任务。
   * @param { boolean } needCancel  - 是否需要移除任务。<br>true表示停止并移除，false表示只停止不移除。默认为false。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types; 3. Parameter verification failed.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on workInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function stopWork(work: WorkInfo, needCancel?: boolean): void;

  /**
   * 通过workId获取延迟任务，使用Callback异步回调。
   *
   * @param { int } workId  - 延迟任务Id。
   * @param { AsyncCallback<WorkInfo> } callback  - 回调函数。如果workId有效，则返回从WorkSchedulerService获取的任务，否则抛出异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Parameter verification failed.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on workInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function getWorkStatus(workId: int, callback: AsyncCallback<WorkInfo>): void;

  /**
   * 通过workId获取延迟任务，使用Promise异步回调。
   *
   * @param { int } workId  - 延迟任务Id。
   * @returns { Promise<WorkInfo> } Promise对象，如果workId有效，则返回从WorkSchedulerService获取的任务，否则抛出异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Parameter verification failed.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on workInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function getWorkStatus(workId: int): Promise<WorkInfo>;

  /**
   * 获取当前应用所有的延迟任务，使用Callback异步回调。
   *
   * @param { AsyncCallback<void> } callback  - 回调函数，获取成功时，err为undefined，否则为错误对象。
   * @returns { Array<WorkInfo> } 延迟任务列表，如果已添加延迟任务到执行队列，则返回当前应用所有的延迟任务列表；否则返回空列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead workScheduler.obtainAllWorks(callback: AsyncCallback<Array<WorkInfo>>)
   */
  function obtainAllWorks(callback: AsyncCallback<void>): Array<WorkInfo>;

  /**
   * 获取当前应用所有的延迟任务，使用Callback异步回调。
   *
   * @param { AsyncCallback<Array<WorkInfo>> } callback  - 回调函数，获取成功时，返回当前应用所有的延迟任务列表，否则抛出异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function obtainAllWorks(callback: AsyncCallback<Array<WorkInfo>>): void;

  /**
   * 获取当前应用所有的延迟任务，使用Promise异步回调。
   *
   * @returns { Promise<Array<WorkInfo>> } Promise对象，返回当前应用所有的延迟任务。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function obtainAllWorks(): Promise<Array<WorkInfo>>;

  /**
   * 停止和取消当前应用所有的延迟任务。
   *
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function stopAndClearWorks(): void;

  /**
   * 检查延迟任务的最后一次执行是否超时，使用Callback异步回调。
   *
   * @param { number } workId  - 指定延迟任务的Id。
   * @param { AsyncCallback<void> } callback  - 回调函数。
   * @returns { boolean } 检查延迟任务最后一次执行是否超时，如果workId有效，则返回从WorkSchedulerService获取的任务最后一次执行是否超时；否则，抛出异常。true，对应workId延迟任务最
   *     后一次执行超时，false，对应workId延迟任务最后一次执行未超时。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Parameter verification failed.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on workInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead workScheduler.isLastWorkTimeOut(workId: int, callback: AsyncCallback<boolean>)
   */
  function isLastWorkTimeOut(workId: number, callback: AsyncCallback<void>): boolean;

  /**
   * 检查延迟任务的最后一次执行是否超时，使用Callback异步回调。
   *
   * @param { int } workId  - 指定延迟任务的Id。
   * @param { AsyncCallback<boolean> } callback  - 回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Parameter verification failed.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on workInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function isLastWorkTimeOut(workId: int, callback: AsyncCallback<boolean>): void;

  /**
   * 检查延迟任务的最后一次执行是否超时，使用Promise异步回调。
   *
   * @param { int } workId  - 指定延迟任务的Id。
   * @returns { Promise<boolean> } Promise对象。返回true表示指定任务的最后一次执行超时，false表示未超时。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Parameter verification failed.
   * @throws { BusinessError } 9700001 - Memory operation failed.
   * @throws { BusinessError } 9700002 - Failed to write data into parcel. Possible reasons: 1. Invalid parameters;
   *     2. Failed to apply for memory.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on workInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function isLastWorkTimeOut(workId: int): Promise<boolean>;

  /**
   * 触发延迟任务回调的网络类型。
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   * @name NetworkType
   */
  export enum NetworkType {
    /**
     * 表示这个触发条件是任何类型的网络连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_ANY = 0,
    /**
     * 表示这个触发条件是Mobile网络连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_MOBILE = 1,
    /**
     * 表示这个触发条件是Wifi类型的网络连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_WIFI = 2,
    /**
     * 表示这个触发条件是Bluetooth网络连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_BLUETOOTH = 3,
    /**
     * 表示这个触发条件是Wifi P2P网络连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_WIFI_P2P = 4,
    /**
     * 表示这个触发条件是有线网络连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    NETWORK_TYPE_ETHERNET = 5
  }

  /**
   * 触发延迟任务回调的充电类型。
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   * @name ChargingType
   */
  export enum ChargingType {
    /**
     * 表示这个触发条件是任何类型的充电器连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    CHARGING_PLUGGED_ANY = 0,
    /**
     * 表示这个触发条件是直流充电器连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    CHARGING_PLUGGED_AC = 1,
    /**
     * 表示这个触发条件是USB充电连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    CHARGING_PLUGGED_USB = 2,
    /**
     * 表示这个触发条件是无线充电器连接。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    CHARGING_PLUGGED_WIRELESS = 3
  }

  /**
   * 触发延迟任务回调的电池状态。
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   * @name BatteryStatus
   */
  export enum BatteryStatus {
    /**
     * 表示这个触发条件是低电告警。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    BATTERY_STATUS_LOW = 0,
    /**
     * 表示这个触发条件是从低电恢复到正常电量。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    BATTERY_STATUS_OKAY = 1,
    /**
     * 表示这个触发条件是从低电恢复到正常电量或者低电告警。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    BATTERY_STATUS_LOW_OR_OKAY = 2
  }

  /**
   * 触发延迟任务回调的存储状态。
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   * @name StorageRequest
   */
  export enum StorageRequest {
    /**
     * 表示这个触发条件是存储空间不足。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    STORAGE_LEVEL_LOW = 0,
    /**
     * 表示这个触发条件是从存储空间不足恢复到正常。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    STORAGE_LEVEL_OKAY = 1,
    /**
     * 表示这个触发条件是存储空间不足或者从存储空间不足恢复到正常。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    STORAGE_LEVEL_LOW_OR_OKAY = 2
  }
}
export default workScheduler;
