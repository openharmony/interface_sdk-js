/*
 * Copyright (c) 2022-2026 Huawei Device Co., Ltd.
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
 * The ContinueCallback module defines the callback function that indicates the result of mission continuation. For 
 * details about mission continuation, see 
 * [continueMission]{@link @ohos.distributedMissionManager:distributedMissionManager.continueMission(parameter: ContinueDeviceInfo, options: ContinueCallback, callback: AsyncCallback<void>)}
 *
 * @file
 * @kit AbilityKit
 */

/**
 * Callback function on continue mission done.
 *
 * @typedef { function } OnContinueDoneCallback
 * @param { int } result - The result code of continue mission.
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type OnContinueDoneCallback = (result: int) => void;

/**
 * ContinueCallback registered for notify continue result.
 *
 * @interface ContinueCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export interface ContinueCallback {
  /**
   * Called by system when continue mission done.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onContinueDone: OnContinueDoneCallback;
}