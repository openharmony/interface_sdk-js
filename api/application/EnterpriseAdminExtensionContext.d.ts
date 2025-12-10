/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import ExtensionContext from './ExtensionContext';
import type Want from '@ohos.app.ability.Want';

/**
 * The context of an ability. It allows access to ability-specific resources.
 *
 * @extends Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23
 */
declare class EnterpriseAdminExtensionContext extends ExtensionContext {
  /**
   * Starts a new ability. If the caller application is in foreground, you can use this method to start ability;
   * If the caller application is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { StartOptions } [options] - Indicates the start options.
   * @param { Want } want - Indicates the ability to start.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16300003 - The target application is not the current application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23
   */
  startAbility(admin: Want, want: Want): Promise<void>;
}

export default EnterpriseAdminExtensionContext;