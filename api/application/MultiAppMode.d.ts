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
 * @file Multi App Mode
 * @kit AbilityKit
 */
/**
 * # How to Use
 *
 * The **MultiAppMode** property is obtained from
 * [getRunningMultiAppInfo]{@link ./../@ohos.app.ability.appManager:appManager.getRunningMultiAppInfo} of
 * **appManager**.
 */
/**
 * The module defines whether an application supports the multi-app mode.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export enum MultiAppMode {
  /**
   * The application does not support the multi-app mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  NOT_SUPPORTED = 0,

  /**
   * The application supports the multi-instance mode. When an application is set to this mode, users can open
   * multiple application instances simultaneously on the same device. Each instance runs independently with its own
   * running environment and resources.
   *
   * > **NOTE**
   * >
   * > Only PC and 2-in-1 devices are supported.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  MULTI_INSTANCE = 1,

  /**
   * The application supports the app-clone mode. The app-clone mode allows creating independent copy instances for
   * the application, with each instance having its own data space, suitable for scenarios that require isolated user
   * data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  APP_CLONE = 2
}