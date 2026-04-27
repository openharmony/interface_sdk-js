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
 * 本模块提供Shell命令执行结果的能力。
 * 
 * > **说明：**
 * >
 * > 本模块接口仅可在[单元测试框架](docroot://application-test/unittest-guidelines.md)中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export interface ShellCmdResult {

  /**
   * Shell命令的标准输出内容。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  stdResult: string;

  /**
   * Shell命令的结果码。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  exitCode: int;
}

export default ShellCmdResult;