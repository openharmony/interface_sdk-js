/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import AbilityFirstFrameStateData from './AbilityFirstFrameStateData';
/*** endif */
/*** if arkts static */
import { AbilityFirstFrameStateData } from './AbilityFirstFrameStateData';
/*** endif */

/**
 * The module defines the observer used to listen for the first frame rendering completion event of a given ability. It
 * is used as an input parameter of
 * [on]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string)}
 * to listen for the completion event.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface AbilityFirstFrameStateObserver {

  /**
   * Called when the first frame of the ability is rendered.
   *
   * @param { AbilityFirstFrameStateData } data - Data returned after the first frame is rendered.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  onAbilityFirstFrameDrawn(data: AbilityFirstFrameStateData): void;
}