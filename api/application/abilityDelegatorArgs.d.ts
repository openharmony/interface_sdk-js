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
 *
 * @since 9
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import AbilityDelegatorArgs from 'application/abilityDelegatorArgs.d'
 * @permission N/A
 */
export interface AbilityDelegatorArgs {
    /**
     * the bundle name of the application being tested.
     */
    bundleName: string;

    /**
     * the parameters used for unit testing.
     */
    parameters: {[key: string]: string};

    /**
     * the class names of all test cases.
     */
    testCaseNames: string;

    /**
     * the class name of the test runner used to execute test cases.
     */
    testRunnerClassName: string;
}

export default AbilityDelegatorArgs;