/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * The **WorkSchedulerExtensionAbility** module provides callbacks for deferred task scheduling. You can override the 
 * APIs provided by this module. When a deferred task is triggered, the system calls back the application through the 
 * APIs and processes the task logic in the callback.
 *
 * @file
 * @kit BackgroundTasksKit
 */

import workScheduler from './@ohos.resourceschedule.workScheduler';
import _WorkSchedulerExtensionContext from './application/WorkSchedulerExtensionContext';

/**
 * WorkSchedulerExtensionContext represents the context of WorkSchedulerExtensionAbility and is inherited from 
 * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}.
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export type WorkSchedulerExtensionContext = _WorkSchedulerExtensionContext;

/**
 * Provides callbacks to be invoked when the scheduling conditions are met or the scheduling ends, for example, 
 * [onWorkStart()]{@link WorkSchedulerExtensionAbility.onWorkStart} or 
 * [onWorkStop()]{@link WorkSchedulerExtensionAbility.onWorkStop} in WorkSchedulerExtensionAbility.
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class WorkSchedulerExtensionAbility {
  /**
   * Context of the WorkSchedulerExtensionAbility. This context inherits from ExtensionContext.
   *
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  context: WorkSchedulerExtensionContext;

  /**
   * Called when the system starts scheduling the deferred task.
   *
   * @param {workScheduler.WorkInfo} work - Deferred task that starts.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onWorkStart(work: workScheduler.WorkInfo): void;

  /**
   * Called when the system stops scheduling the deferred task. This callback is triggered when the deferred task times 
   * out for 2 minutes or the [stopWork]{@link @ohos.resourceschedule.workScheduler:workScheduler.stopWork} API is 
   * called to cancel the task.
   *
   * @param {workScheduler.WorkInfo} work - Deferred task that stops.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onWorkStop(work: workScheduler.WorkInfo): void;
}

/**
 * Provides callbacks to be invoked when the scheduling conditions are met or the scheduling ends, for example, 
 * [onWorkStart()]{@link WorkSchedulerExtensionAbility.onWorkStart} or 
 * [onWorkStop()]{@link WorkSchedulerExtensionAbility.onWorkStop} in WorkSchedulerExtensionAbility.
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export default WorkSchedulerExtensionAbility;
