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
 * The **AbilityDelegatorArgs** module provides APIs to obtain an **AbilityDelegatorArgs** object during the execution 
 * of test cases.
 * 
 * > **NOTE**
 * 
 * > The APIs of this module can be used only in 
 * >
 * >
 * > [JsUnit](docroot://application-test/unittest-guidelines.md)
 * >
 * >
 * > .
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export interface AbilityDelegatorArgs {
  /**
   * Bundle name of the application to test.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Parameters of the unit test that is started currently.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  parameters: Record<string, string>;

  /**
   * Test case name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  testCaseNames: string;

  /**
   * Names of the test case executors.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  testRunnerClassName: string;
}

/*** if arkts dynamic */
export default AbilityDelegatorArgs;
/*** endif */
