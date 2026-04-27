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
 * TestRunner模块提供了框架测试的能力。包括准备单元测试环境、运行测试用例。
 * 如果您想实现自己的单元测试框架，您必须继承这个类并覆盖它的所有方法。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在[单元测试框架](docroot://application-test/unittest-guidelines.md)中使用。
 *
 * @file
 * @kit TestKit
 */

/**
 * 为运行测试用例准备单元测试环境。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice
 * @since 23 static
 */
type OnPrepareFn = () => void;

/**
 * 运行测试用例。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice
 * @since 23 static
 */
type OnRunFn = () => void;

/**
 * 当测试完成时，系统会在测试环境退出前触发该回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
type OnStopFn = () => void;

/**
 * TestRunner模块提供了框架测试的能力。包括准备单元测试环境、运行测试用例。
 * 如果您想实现自己的单元测试框架，您必须继承这个类并覆盖它的所有方法。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
interface TestRunner {
  /**
   * 为运行测试用例准备单元测试环境。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPrepare(): void;

  /**
   * 为运行测试用例准备单元测试环境。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 23 static
   */
  onPrepare: OnPrepareFn;

  /**
   * 运行测试用例。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onRun(): void;

  /**
   * 运行测试用例。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice
   * @since 23 static
   */
  onRun: OnRunFn;

  /**
   * 当测试完成时，系统会在测试环境退出前触发该回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  onStop?: OnStopFn;
}

/*** if arkts 1.1 */
export { TestRunner };
/*** endif */
export default TestRunner;