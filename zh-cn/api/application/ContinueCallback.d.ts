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
 * 表示跨设备迁移Mission完成后，返回迁移结果的回调函数，迁移Mission详见：
 * [continueMission接口]{@link @ohos.distributedMissionManager:distributedMissionManager.continueMission(parameter: ContinueDeviceInfo, options: ContinueCallback, callback: AsyncCallback<void>)}
 *
 * @file
 * @kit AbilityKit
 */

/**
 *
 * @typedef { function } OnContinueDoneCallback
 * @param { int } result - 迁移任务的结果，0表示迁移成功，非0值表示迁移失败。具体错误码及其含义、可能原因和解决措施请参见continueMission接口的错误码说明。
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
type OnContinueDoneCallback = (result: int) => void;

/**
 * 表示跨设备迁移Mission完成后，返回迁移结果的回调函数。
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
   * Mission迁移完成后调用，回调参数result返回迁移结果。当目标设备成功接收并启动Mission后，系统会触发此回调通知源设备迁移结果。开发者应根据result参数判断迁移是否成功，并执行相应操作，如提示用户或进行重试。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  onContinueDone: OnContinueDoneCallback;
}
