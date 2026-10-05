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
 * @file TriggerInfo
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
   * Common event code to pass. This field takes effect only when the
   * [OperationType]{@link @ohos.app.ability.wantAgent:wantAgent.OperationType} of the WantAgent instance is
   * 'SEND_COMMON_EVENT'. It has the same meaning as the code field in the
   * [CommonEventPublishData]{@link ../commonEvent/commonEventPublishData:CommonEventPublishData}
   * passed by the publisher when publishing a common event through
   * [commonEventManager.publish]{@link @ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}.
   * The value is determined by the common event type.
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
   * Permission of the common event subscriber. This field takes effect only when the
   * [OperationType]{@link @ohos.app.ability.wantAgent:wantAgent.OperationType} of the WantAgent instance is
   * 'SEND_COMMON_EVENT'. If the permission is null, the receiver does not need any permission.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  permission?: string;

  /**
   * Extra data used to pass custom extension information. The parameter is a key-value pair object, where the key
   * is a string and the value can be of any type. You are advised to use the type-safe extraInfos attribute
   * instead. If both extraInfo and extraInfos are set, extraInfos takes effect and extraInfo is ignored.
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
   * Extra data used to pass custom key-value pair information in a type-safe manner. You are advised to use this
   * attribute instead of extraInfo. When both are set, this attribute takes precedence. Pass this parameter when
   * you need to carry additional custom data when triggering the WantAgent. If it is not passed, the default
   * value is null and no extra data is carried.
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
   * Specifies the startup parameters when the wantAgent is triggered to start an Ability.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startOptions?: StartOptions;
}