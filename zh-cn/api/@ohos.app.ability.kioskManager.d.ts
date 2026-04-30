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
 * @kit AbilityKit
 */

import UIAbilityContext from './application/UIAbilityContext';
import { KioskStatus as _KioskStatus } from './application/KioskStatus';

/**
 * KioskManager模块提供Kiosk模式管理能力，包括系统进入/退出Kiosk模式操作。
 * Kiosk模式是一种特殊的设备锁定模式，可以确保设备界面只服务于特定的交互场景。在这种模式下，用户只能使用特定的应用。例如，在银行ATM机上，用户只能通过ATM软件进行操作，而不能退出该软件或切换到其他应用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace kioskManager {
  /**
   * 进入Kiosk模式。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1和Tablet设备中可正常调用，在其他设备中返回801错误码。
   *
   * @param { UIAbilityContext } context - 需要进入kiosk模式的UIAbility的上下文。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @throws { BusinessError } 16000110 - The current application is not in Kiosk app list and cannot enter Kiosk mode.
   * @throws { BusinessError } 16000111 - The system is already in Kiosk mode and cannot enter Kiosk mode again.
   * @throws { BusinessError } 16000113 - Current ability is not in foreground.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function enterKioskMode(context: UIAbilityContext): Promise<void>;

  /**
   * 退出Kiosk模式。使用Promise异步回调。
   * 该接口仅对已进入Kiosk模式的应用生效。
   * 该接口仅在Phone、PC/2in1和Tablet设备中可正常调用，在其他设备中返回801错误码。
   *
   * @param { UIAbilityContext } context - 需要退出kiosk模式的UIAbility的上下文。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @throws { BusinessError } 16000110 - The current application is not in Kiosk app list and cannot enter Kiosk mode.
   * @throws { BusinessError } 16000112 - The current application is not in Kiosk mode and cannot exit Kiosk mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function exitKioskMode(context: UIAbilityContext): Promise<void>;

  /**
   * 获取系统Kiosk模式的状态信息（包括当前系统是否处于Kiosk模式、进入Kiosk模式应用的名称和UID）。使用Promise异步回调。
   * 该接口仅在Phone、PC/2in1和Tablet设备中可正常调用，在其他设备中返回801错误码。
   *
   * @returns { Promise<KioskStatus> } Promise对象，返回当前Kiosk状态信息。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function getKioskStatus(): Promise<KioskStatus>;

  /**
   * Kiosk状态信息，包括系统是否处于Kiosk模式以及该模式下的应用信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export type KioskStatus = _KioskStatus;
}

export default kioskManager;