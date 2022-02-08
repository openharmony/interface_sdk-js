/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * Store unit testing-related parameters, including test case names, and test runner name.
 * 存储单元测试相关的参数，包括测试用例名称，测试用例执行器名称
 *
 * @since 8
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import AbilityDelegatorArgs from 'application/abilityDelegatorArgs.d'
 * @permission N/A
 */
export interface AbilityDelegatorArgs {
    /**
     * the bundle name of the application being tested.
     * 表示当前被测试应用的包名
     */
    bundleName: string;

    /**
     * the parameters used for unit testing.
     * 表示当前启动单元测试的参数
     */
    parameters​: {[key: string]: string};

    /**
     * the class names of all test cases.
     * 测试用例名称
     */
    testCaseNames: string;

    /**
     * the class name of the test runner used to execute test cases.
     * 执行测试用例的测试执行器的名称
     */
    testRunnerClassName: string;​
}

export default AbilityDelegatorArgs;