/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * The **ShellCmdResult** module provides the shell command execution result.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in [JsUnit](docroot://application-test/unittest-guidelines.md).
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export interface ShellCmdResult {

  /**
   * Standard output of the shell command.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  stdResult: string;

  /**
   * Result code of the shell command.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  exitCode: int;
}

export default ShellCmdResult;