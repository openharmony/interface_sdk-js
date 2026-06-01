/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import ExtensionContext from './ExtensionContext';
import type Want from '../@ohos.app.ability.Want';

/**
 * WorkSchedulerExtensionContext是WorkSchedulerExtensionAbility的上下文环境，继承自
 * [ExtensionContext]{@link ExtensionContext:ExtensionContext}。
 *
 * WorkSchedulerExtensionContext可直接作为WorkSchedulerExtension的上下文环境，提供允许访问特定于WorkSchedulerExtensionAbility的资源的能力。
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
declare class WorkSchedulerExtensionContext extends ExtensionContext {
  /**
   * 启动ServiceExtensionAbility，使用Promise异步回调。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  startServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * 停止ServiceExtensionAbility，使用Promise异步回调。
   *
   * @param { Want } want - 停止Ability的want信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.ResourceSchedule.WorkScheduler
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  stopServiceExtensionAbility(want: Want): Promise<void>;
}
/**
 * Define a WorkSchedulerExtensionContext.
 *
 * @syscap SystemCapability.ResourceSchedule.WorkScheduler
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export default WorkSchedulerExtensionContext;
