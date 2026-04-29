/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

/**
 * 定义了首帧绘制完成事件回调上报的数据结构。通过
 * [on]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string)}
 * 注册监听Ability首帧绘制完成事件后，可使用
 * [AbilityFirstFrameStateObserver]{@link AbilityFirstFrameStateObserver:AbilityFirstFrameStateObserver}的
 * [onAbilityFirstFrameDrawn]{@link AbilityFirstFrameStateObserver:AbilityFirstFrameStateObserver.onAbilityFirstFrameDrawn}
 * 回调获取上报的数据结构。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 12 dynamic
 * @since 23 static
 */
export interface AbilityFirstFrameStateData {
  /**
   * 应用Bundle名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * 应用Module名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  moduleName: string;

  /**
   * Ability名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  abilityName: string;

  /**
   * DLP沙盒的索引。
   *
   * @default 0
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  appIndex: int;

  /**
   * 是否冷启动。true表示冷启动，false表示热启动。
   *
   * @default false
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  isColdStart: boolean;
}