/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * The module provides the mission continuation information to be returned when the listener for listening for the
 * mission continuation state is registered. For details about the registration, see
 * [on('continueStateChange')]{@link @ohos.distributedMissionManager:distributedMissionManager.on(type: 'continueStateChange', callback: Callback<ContinueCallbackInfo>)}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi Hide this for inner system use.
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
export interface ContinuableInfo {
  /**
   * ID of the source device.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  srcDeviceId: string;
  /**
   * Bundle name of the target application to which the mission belongs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  bundleName: string;
  /**
   * Bundle name of the source application to which the mission belongs. The value is the same as that of **bundleName**
   *  by default.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  srcBundleName?: string;
  /**
   * Continuation type of the application to which the mission belongs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  continueType?: string;
  /**
   * Target AppId list of the application to which the mission belongs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for internal system users.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  targetAppIds?: Array<string>;
}