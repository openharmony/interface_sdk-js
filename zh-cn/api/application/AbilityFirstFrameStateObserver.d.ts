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
 * 定义了Ability首帧绘制完成事件监听对象，可以作为
 * [on]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string)}
 * 的入参，用于监听Ability首帧绘制完成事件。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface AbilityFirstFrameStateObserver {

  /**
   * Ability首帧绘制完成时触发的回调函数。
   *
   * @param { AbilityFirstFrameStateData } data - 表示首帧绘制完成时返回的数据。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  onAbilityFirstFrameDrawn(data: AbilityFirstFrameStateData): void;
}