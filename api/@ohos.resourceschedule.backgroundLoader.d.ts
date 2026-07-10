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
 * The **BackgroundLoader** module provides the APIs for registering, canceling, and querying tasks.
 *  You can use the APIs to register tasks that need to be loaded in the background. The system 
 * schedules and executes these deferred tasks at an appropriate time, subject to the storage space, power consumption, 
 * and more. For details, see [Deferred Task Scheduling](docroot://task-management/work-scheduler.md).
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 26 dynamic & static
 */
declare namespace backgroundLoader {
  /**
   * Enumerates the stop code, which is used to ON_STOP function.
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26 dynamic & static
   */
  export enum StopCode {
    /**
     * Success code.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26 dynamic & static
     */
    SUCCESS = 0,
    /**
     * System error during task execution
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26 dynamic & static
     */
    SYSTEM_ERROR = 1,
    /**
     * Perceptible anomalies during task execution.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26 dynamic & static
     */
    PERCEPTIBLE_ERROR = 2,
    /**
     * Timeout during task execution
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26 dynamic & static
     */
    TIMEOUT_ERROR = 3,
    /**
     * Anomalies during task execution.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26 dynamic & static
     */
    EXECUTE_ERROR = 4
  }

  /**
   * Represents the background load task information, which is used to register task.
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface TaskInfo {
    /**
     * Ability name in the bundle.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    abilityName: string;

    /**
     * Id of the background load task.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    taskId: int;
  }

  /**
   * Enumerates the background load task stop information, which is used to ON_STOP function.
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface TaskStopInfo {
    /**
     * Id of the background load task.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    taskId: int;

    /**
     * Ability name in the bundle.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    abilityName: string;

    /**
     * Stop code.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopCode: StopCode;

    /**
     * Stop message.
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopMessage: string;
  }

  /**
   * Register background load task.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Taskinfo } taskinfo - The info of background load task.
   * @throws { BusinessError } 201 - No permission.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on taskInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function registerTask(taskInfo: TaskInfo): void;

  /**
   * Unregister background load task.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Taskinfo } taskinfo - The info of background load task.
   * @throws { BusinessError } 201 - No permission.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on taskInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function unregisterTask(taskInfo: TaskInfo): void;

  /**
   * Finish background load task.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Taskinfo } taskinfo - The info of background load task.
   * @throws { BusinessError } 201 - No permission.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on taskInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function finishTask(taskInfo: TaskInfo): void;

  /**
   * Obtains th information of a background load task. This API returns the result via a promise.
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { int } taskId - Id of background load task.
   *     <br>The value range is all integers.
   * @returns { Promise<TaskInfo> } Promise used to return the TaskInfo.
   * @throws { BusinessError } 201 - No permission.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on taskInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getTaskInfo(taskId: int): Promise<TaskInfo>;

  /**
   * Start task method.
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26 dynamic & static
   */
  const ON_START: string;

  /**
   * Stop task method.
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26 dynamic & static
   */
  const ON_STOP: string;
}
export default backgroundLoader;
