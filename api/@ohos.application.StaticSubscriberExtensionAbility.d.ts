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
 * This module provides extension abilities of Basic Services Kit for static subscribers,
 * which can be used to subscribe to common events in static mode. Static subscription
 * enables receiving common events without keeping the app running in the background. This
 * ability is applicable to scenarios where system services or system apps need to perform
 * background processing when specific common events occur.
 *
 * **StaticSubscriberExtensionAbility** provides the **onReceiveEvent** method and the
 * **context** attribute. The **context** attribute is of the
 * **StaticSubscriberExtensionContext** type, which is the running context of the extension
 * ability. It is inherited from **ExtensionContext** and provides **startAbility** to start
 * other abilities in the same app during event processing.
 *
 * **APIs used in combination**
 *
 * The typical process of this module is as follows: Inherit the base class, override
 * **onReceiveEvent**, start a callback, read the event data, and start the target ability. Note
 * that **context.startAbility** can start only the abilities that belong to the same app as the
 * current **StaticSubscriberExtensionAbility**.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 9 dynamic
 * @since 23 static
 */
declare class StaticSubscriberExtensionAbility {
  /**
   * Context of the extension ability subscribed to in static mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  context: StaticSubscriberExtensionContext;

  /**
   * Defines a callback to be invoked when a common event is triggered in static mode.
   *
   * @param { CommonEventData } event - Common event data received through static subscription.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onReceiveEvent(event: CommonEventData): void;
}

export default StaticSubscriberExtensionAbility;