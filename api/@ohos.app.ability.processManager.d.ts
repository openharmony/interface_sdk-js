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

import { AsyncCallback } from './@ohos.base';

/**
 * This module provides the capability to start and manage child process.
 *
 * @namespace processManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 11
 */
declare namespace processManager {

  /**
   * Enum for the process start mode.
   * 
   * @enum { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  export const enum StartMode {

    /**
     * Fork child process by application self.
     * BINDER IPC CAN NOT BE USED in child process in this mode, may cause crash.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 11
     */
    SELF_FORK = 0,
  }

  /**
   * Start child process with the given src entry and start mode.
   *
   * @param { string } srcEntry - Child process source file entrance to be started.
   * @param { number } startMode - Child Process start mode.
   * @returns { AsyncCallback<number> } Returns the started child process pid.
   * @throws { BusinessError } 100 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 200 - If the start mode not supported.
   * @throws { BusinessError } 300 - If the child process fork failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  function startChildProcess(srcEntry: string, startMode: StartMode): Promise<number>;

  /**
   * Start child process with the given src entry and mode.
   *
   * @param { string } srcEntry - Child process source file entrance to be started.
   * @param { number } startMode - Child Process start mode.
   * @returns { Promise<number> } Returns the started child process pid.
   * @throws { BusinessError } 100 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 200 - If the start mode not supported.
   * @throws { BusinessError } 300 - If the child process fork failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  function startChildProcess(path: string, startMode: StartMode, callback: AsyncCallback<number>): void;

}

export default processManager;