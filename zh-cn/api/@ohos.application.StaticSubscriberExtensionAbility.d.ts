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

/*** if arkts 1.1 */
import { CommonEventData } from './commonEvent/commonEventData';
/*** endif */
import StaticSubscriberExtensionContext from './@ohos.application.StaticSubscriberExtensionContext';

/**
 * StaticSubscriberExtensionAbility模块提供静态订阅者ExtensionAbility类别的能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 9 dynamic
 * @since 23 static
 */
declare class StaticSubscriberExtensionAbility {
  /**
   * 上下文。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  context: StaticSubscriberExtensionContext;

  /**
   * 静态订阅者通用事件回调。
   *
   * @param { CommonEventData } event - 静态订阅者通用事件回调。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onReceiveEvent(event: CommonEventData): void;
}

export default StaticSubscriberExtensionAbility;