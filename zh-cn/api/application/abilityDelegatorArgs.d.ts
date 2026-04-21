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
 * AbilityDelegatorArgs模块提供在应用程序执行测试用例期间，获取测试用例参数AbilityDelegatorArgs对象的能力。
 * 
 * > **说明：**
 * >
 * > 本模块接口仅可在[单元测试框架](docroot://application-test/unittest-guidelines.md)中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export interface AbilityDelegatorArgs {
  /**
   * 当前被测试应用的包名。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * 当前启动单元测试的参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  parameters: Record<string, string>;

  /**
   * 测试用例名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  testCaseNames: string;

  /**
   * 执行测试用例的测试执行器名称。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  testRunnerClassName: string;
}

export default AbilityDelegatorArgs;