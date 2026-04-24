/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import ExtensionContext from './application/ExtensionContext';

/**
 * The **StaticSubscriberExtensionContext** module, inherited from **StaticSubscriberExtensionAbility**, provides
 * context for StaticSubscriberExtensionAbilities.
 *
 * You can use the APIs of this module to start StaticSubscriberExtensionAbilities.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 10 dynamic
 * @since 23 static
 */
declare class StaticSubscriberExtensionContext extends ExtensionContext {
  /**
   * Starts an ability that belongs to the same application as this StaticSubscriberExtensionAbility. This API uses an
   * asynchronous callback to return the result.
   *
   * Observe the following when using this API:
   *
   * - If an application running in the background needs to call this API to start an ability, it must have the
   * **ohos.permission.START_ABILITIES_FROM_BACKGROUND** permission.
   * - If **visible** of the target ability is **false** in cross-application scenarios, the caller must have the
   * **ohos.permission.START_INVISIBLE_ABILITY** permission.
   *
   * @permission ohos.permission.START_ABILITIES_FROM_BACKGROUND
   * @param { Want } want - Want information about the target ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Params error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16300003 - The target application is not the current application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts an ability that belongs to the same application as this StaticSubscriberExtensionAbility. This API uses a
   * promise to return the result.
   *
   * Observe the following when using this API:
   *
   * - If an application running in the background needs to call this API to start an ability, it must have the
   * **ohos.permission.START_ABILITIES_FROM_BACKGROUND** permission.
   * - If **visible** of the target ability is **false** in cross-application scenarios, the caller must have the
   * **ohos.permission.START_INVISIBLE_ABILITY** permission.
   *
   * @permission ohos.permission.START_ABILITIES_FROM_BACKGROUND
   * @param { Want } want - Want information about the target ability.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Params error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16300003 - The target application is not the current application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;
}
export default StaticSubscriberExtensionContext;