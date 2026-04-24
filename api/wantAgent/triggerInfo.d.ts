/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit AbilityKit
 */

import Want from '../@ohos.app.ability.Want';
import StartOptions from '../@ohos.app.ability.StartOptions';
/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * The module defines the information required for triggering the WantAgent. The information is used as an input 
 * parameter of [trigger](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#wantagenttrigger).
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface TriggerInfo {
  /**
   * Common event code. This field is valid only when 
   * [OperationType](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#operationtype) of the 
   * WantAgent instance is **'SEND_COMMON_EVENT'**. The meaning of this field is the same as that of the **code** field 
   * set in 
   * [CommonEventPublishData](docroot://reference/apis-basic-services-kit/js-apis-inner-commonEvent-commonEventPublishData.md#properties)
   *  when the publisher uses 
   * [commonEventManager.publish]{@link @ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   *  to publish common events.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  code: int;

  /**
   * Carrier for information transfer between objects (application components).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  want?: Want;

  /**
   * Permission required for a subscriber to receive the common event. This field is valid only when 
   * [OperationType](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#operationtype) of the 
   * WantAgent instance is **'SEND_COMMON_EVENT'**.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  permission?: string;

  /**
   * Extra information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * Extra information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;

  /**
   * Extra information. You are advised to use this property to replace **extraInfo**. When this property is set, 
   * **extraInfo** does not take effect.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  extraInfos?: Record<string, Object>;

  /**
   * Extra information. You are advised to use this property to replace extraInfo. 
   * When this property is set, extraInfo does not take effect.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  extraInfos?: Record<string, RecordData>;

  /**
   * Start options in wantAgent used to start an ability.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startOptions?: StartOptions;
}