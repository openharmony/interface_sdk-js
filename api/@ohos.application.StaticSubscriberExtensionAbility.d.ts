/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { CommonEventData } from './commonEvent/commonEventData';
import StaticSubscriberExtensionContext from './@ohos.application.StaticSubscriberExtensionContext';

/**
 * The **StaticSubscriberExtensionAbility** module provides Extension abilities for static subscribers.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 9 dynamic
 * @since 23 static
 */
declare class StaticSubscriberExtensionAbility {
  /**
   * Context of the ExtensionAbility.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  context: StaticSubscriberExtensionContext;

  /**
   * Represents a callback of the common event of a static subscriber.
   *
   * @param { CommonEventData } event - Common event of a static subscriber.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onReceiveEvent(event: CommonEventData): void;
}

export default StaticSubscriberExtensionAbility;