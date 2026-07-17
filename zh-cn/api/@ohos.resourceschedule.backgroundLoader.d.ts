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


/**
 * 后台预取接口
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace backgroundLoader {
  /**
   * 枚举停止代码， 用于ON_STOP函数。
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum StopCode {
    /**
     * 执行成功码。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SUCCESS = 0,
    /**
     * 任务执行中发生系统错误。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SYSTEM_ERROR = 1,
    /**
     * 任务执行中发生可感知任务错误
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PERCEPTIBLE_ERROR = 2,
    /**
     * 任务执行超时。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TIMEOUT_ERROR = 3,
    /**
     * 执行任务异常。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXECUTE_ERROR = 4
  }

  /**
   * 任务信息
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface TaskInfo {
    /**
     * 组件名称
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    abilityName: string;

    /**
     * 任务id
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    taskId: int;
  }

  /**
   * 停止任务的信息。
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface TaskStopInfo {
    /**
     * 任务id。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    taskId: int;

    /**
     * 组件名称
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    abilityName: string;

    /**
     * 停止码
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopCode: StopCode;

    /**
     * 停止信息。
     *
     * @syscap SystemCapability.ResourceSchedule.WorkScheduler
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopMessage: string;
  }

  /**
   * 注册后台加载任务。
   * 使用 callee.on(ON_START)来接受系统测触发的任务
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Taskinfo } taskinfo - 任务信息
   * @throws { BusinessError } 201 - No permission.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on taskInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function registerTask(taskInfo: TaskInfo): void;

  /**
   * 取消注册后台加载任务。
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
   * 结束后台加载任务。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { Taskinfo } taskinfo - The info of background load task.
   * @throws { BusinessError } 201 - 后台加载任务信息。
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on taskInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function finishTask(taskInfo: TaskInfo): void;

  /**
   * 获取后台预取任务信息。
   *
   * @permission ohos.permission.KEEP_BACKGROUND_RUNNING
   * @param { int } taskId - 后台加载任务id。
   *     <br>取值范围为全体整数。
   * @returns { Promise<TaskInfo> } Promise对象， 返回任务信息。
   * @throws { BusinessError } 201 - No permission.
   * @throws { BusinessError } 9700003 - System service operation failed.
   * @throws { BusinessError } 9700004 - Check on taskInfo failed.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getTaskInfo(taskId: int): Promise<TaskInfo>;

  /**
   * 监听任务启动的方法
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const ON_START: string;

  /**
   * 监听任务结束的方法
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const ON_STOP: string;
}
export default backgroundLoader;
