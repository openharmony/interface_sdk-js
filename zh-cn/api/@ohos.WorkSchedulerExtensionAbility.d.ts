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
 * 本模块提供延迟任务回调能力。开发者可重写模块接口，在延迟任务触发时，系统可通过本模块接口回调应用，在回调里处理任务逻辑。
 *
 * @file
 * @kit BackgroundTasksKit
 */

import workScheduler from './@ohos.resourceschedule.workScheduler';
import _WorkSchedulerExtensionContext from './application/WorkSchedulerExtensionContext';

/**
 * WorkSchedulerExtensionContext是WorkSchedulerExtensionAbility的上下文环境，继承自
 * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export type WorkSchedulerExtensionContext = _WorkSchedulerExtensionContext;

/**
 * 延迟任务回调，当满足调度条件或调度结束时，系统会回调应用WorkSchedulerExtensionAbility中
 * [onWorkStart()]{@link WorkSchedulerExtensionAbility.onWorkStart}或
 * [onWorkStop()]{@link WorkSchedulerExtensionAbility.onWorkStop}的方法。
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class WorkSchedulerExtensionAbility {
  /**
   * WorkSchedulerExtension的上下文环境，继承自ExtensionContext。
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  context: WorkSchedulerExtensionContext;

  /**
   * 开始延迟任务调度回调。
   *
   * @param {workScheduler.WorkInfo} work  - 要添加到执行队列的任务。
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onWorkStart(work: workScheduler.WorkInfo): void;

  /**
   * 结束延迟任务调度回调。当延迟任务2分钟超时或应用调用[stopWork]{@link @ohos.resourceschedule.workScheduler:workScheduler.stopWork}
   * 接口取消任务时，触发该回调。
   *
   * @param {workScheduler.WorkInfo} work  - 执行队列中要结束回调的任务。
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onWorkStop(work: workScheduler.WorkInfo): void;
}

/**
 * 延迟任务回调，当满足调度条件或调度结束时，系统会回调应用WorkSchedulerExtensionAbility中
 * [onWorkStart()]{@link WorkSchedulerExtensionAbility.onWorkStart}或
 * [onWorkStop()]{@link WorkSchedulerExtensionAbility.onWorkStop}的方法。
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export default WorkSchedulerExtensionAbility;
