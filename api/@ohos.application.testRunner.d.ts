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
 * Base class for the test framework.
 * If you want to implement your own unit test framework, you must inherit this class and overrides all its methods.
 *
 * @since 9
 * @SysCap SystemCapability.Appexecfwk
 * @devices phone, tablet, tv, wearable, car
 * @import import TestRunner from '@ohos.application.testRunner'
 * @permission N/A
 */
export interface TestRunner {
    /**
     * Prepare the unit testing environment for running test cases.
     */
    onPrepare(): void;

    /**
     * Run all test cases.
     */
    onRun(): void;
}

export default TestRunner;