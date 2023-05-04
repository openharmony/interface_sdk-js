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

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';

/**
 * class of static subscriber extension context.
 *
 * @since 10
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi hide for inner use.
 * @StageModelOnly
 */
export default class StaticSubscriberExtensionContext {
  /**
   * Starts a new ability.
   * @permission ohos.permission.START_ABILITIES_FROM_BACKGROUND
   * @param want { Want } - Indicates the ability to start.
   * @param { AsyncCallback<void> } callback - The callback of startAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts a new ability.
   * @permission ohos.permission.START_ABILITIES_FROM_BACKGROUND
   * @param { Want } want - Indicates the ability to start.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  startAbility(want: Want): Promise<void>;
}