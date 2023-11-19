/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to manage dilog session.
 *
 * @namespace dialogSession
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 11
 */
declare namespace dialogSession {

  /**
   * Dialog Ability Info
   *
   * @typedef DialogAbilityInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @systemapi
   * @since 11
   */
  export interface DialogAbilityInfo {

    /**
     * bundle name
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    bundleName: string;

    /**
     * module name
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    moduleName: string;

    /**
     * ability name
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    abilityName: string;

    /**
     * The icon id of ability
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    abilityIconId: number;

    /**
     * The label id of ability
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    abilityLabelId: number;

    /**
     * The icon id of bundle
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    bundleIconId: number;

    /**
     * The label id of bundle
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    bundleLabelId: number;
  }

  /**
   * Dialog Session Info
   *
   * @typedef DialogSessionInfo
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @systemapi
   * @since 11
   */
  export interface DialogSessionInfo {

    /**
     * the dialog info of caller ability
     *
     * @type { DialogAbilityInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    callerAbilityInfo: DialogAbilityInfo;

    /**
     * the dialog infos of target ability to select
     *
     * @type { Array<DialogAbilityInfo> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
    targetAbilityInfos: Array<DialogAbilityInfo>;

    /**
     * The description of the Params object in dilog session info
     *
     * @type { ?object }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @systemapi
     * @since 11
     */
  parameters?: { [key: string]: any };
  }

  /**
   * Query the session info of dialog.
   *
   * @param { string } dialogSessionId - Query information by dialog session id.
   * @returns { DialogSessionInfo } Returns the session info.
   * @throws { BusinessError } 401 - Invalid input parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child process exceeds upper bound.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @systemapi
   * @since 11
   */
  function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo;

  /**
   * Send the selection result of dialog.
   *
   * @param { string } dialogSessionId - Send Result by dialog session id.
   * @param { Want } targetWant - The selection target ability to start.
   * @param { number } resultCode - allowed or disallowed to start target ability.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Invalid input parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child process exceeds upper bound.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  function sendDialogResult(dialogSessionId: string, targetWant: Want, resultCode: number): Promise<void>;

}

export default dialogSession;