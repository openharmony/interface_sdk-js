/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit TestKit
 */

import { Callback } from './@ohos.base';

/**
 * Enumerates the metric type of performance test.
 *
 * @enum { number }
 * @syscap SystemCapability.Test.PerfTest
 * @atomicservice
 * @since arkts {'1.1':'20', '1.2':'20'}
 * @test
 * @arkts 1.1&1.2
 */
declare enum PerfMetric {
  /**
   * Duration of the single execution, the unit is ms.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  DURATION = 0,

  /**
   * Process CPU load during a single execution, the unit is %.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  CPU_LOAD = 1,

  /**
   * Process CPU usage during a single execution, the unit is %.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @arkts 1.1&1.2
   * @test
   */
  CPU_USAGE = 2,

  /**
   * Memory change before and after a single execution, including the shared library, the unit is KB.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  MEMORY_RSS = 3,

  /**
   * Memory change before and after a single execution, excluding shared libraries, the unit is KB.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  MEMORY_PSS = 4,

  /**
   * Application start response delay, the unit is ms.
   * Marks:
   * 1) Delay calculation is restricted by system dotting reporting. The start time is the time when the click event is reported,
   * and the end time of the response delay is the time when the system responds to the first frame after the click.
   * It is different from the end-to-end user-perceived delay.
   * 2) Application start delay can be collected in the following scenarios: clicking the application icon on the desktop;
   * clicking the application on the Multi-Task Center; clicking the application icon on the Dock;
   * clicking the application icon on the application center.
   * 3) This metric does not support the test of current application.
   * 4) During the test, only the data of the first startup of the specified application can be collected.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  APP_START_RESPONSE_TIME = 5,

  /**
   * Application start completion delay, the unit is ms.
   * Marks:
   * 1) Delay calculation is restricted by system dotting reporting. The start time is the time when the click event is reported,
   * and the end time of the completion delay is the time when the first frame is displayed after the application is started.
   * It is different from the end-to-end user-perceived delay.
   * 2) Application start delay can be collected in the following scenarios: clicking the application icon on the desktop;
   * clicking the application on the Multi-Task Center; clicking the application icon on the Dock;
   * clicking the application icon on the application center.
   * 3) This metric does not support the test of current application.
   * 4) During the test, only the data of the first start of specified application can be collected.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  APP_START_COMPLETE_TIME = 6,

  /**
   * Page switching completion delay, the unit is ms.
   * Marks:
   * 1) Delay calculation is restricted by system dotting and reporting. The start time is the time when the click event is reported,
   * and the end time of the completion delay is the time when the first frame is displayed after page is switched.
   * It is different from the end-to-end user-perceived delay.
   * 2) Page switching delay can be collected in the page switchover scenario of the Router or Navigation component.
   * 3) During the test, only the data of the first page switching in specified application can be collected.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  PAGE_SWITCH_COMPLETE_TIME = 7,

  /**
   * List sliding frame rate, the unit is fps.
   * Mark:
   * 1) List sliding frame rate: refers to the frequency at which the screen can be refreshed when the list is sliding.
   * Only the sliding frame rate of the List, grid, scroll, and waterflow scroll components of ArKUI subsystems can be collected.
   * 2) During the test, only the data of the first sliding of the component in specified application can be collected.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  LIST_SWIPE_FPS = 8,
}

/**
 * Test task execution strategy, which is used to initialize the PerfTest object in {@link PerfTest.create}.
 *
 * @typedef PerfTestStrategy
 * @syscap SystemCapability.Test.PerfTest
 * @atomicservice
 * @since arkts {'1.1':'20', '1.2':'20'}
 * @test
 * @arkts 1.1&1.2
 */
declare interface PerfTestStrategy {
  /**
   * List of performance metrics to be collected.
   *
   * @type { Array<PerfMetric> }
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  metrics: Array<PerfMetric>;

  /**
   * Code segment for performance testing.
   * The input parameter type of actionCode is {@link Callback<boolean>}. As actionCode can be defined as asynchronous function,
   * developers need to invoke this callback function when the execution of actionCode is complete,
   * to help PerfTest identify the time when the execution of the actionCode is complete. 
   * For example, the input parameter callback function of actionCode is defined as "(finish: Callback<boolean>)".
   * When actionCode is executed completly, "finish(true)" should be invoked, the value true indicates actionCode is successfully executed.
   * When an exception occurs, "finish(false)" should be invoked, the value false indicates actionCode is unsuccessfully executed.
   *
   * @type { Callback<Callback<boolean>> }
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  actionCode: Callback<Callback<boolean>>;

  /**
   * Reset code segment after each test. It is executed after {@link actionCode}. Data collection is not performed during this execution.
   * The input parameter type of resetCode is {@link Callback<boolean>}. As resetCode can be defined as asynchronous function,
   * developers need to invoke this callback function when the execution of resetCode is complete,
   * to help PerfTest identify the time when the execution of the resetCode is complete. 
   * For example, the input parameter callback function of resetCode is defined as "(finish: Callback<boolean>)".
   * When resetCode is executed completly, "finish(true)" should be invoked, the value true indicates resetCode is successfully executed.
   * When an exception occurs, "finish(false)" should be invoked, the value false indicates resetCode is unsuccessfully executed.
   *d
   * @type { ?Callback<Callback<boolean>> }
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  resetCode?: Callback<Callback<boolean>>;

  /**
   * The package name of the application to be tested. The default value is the package name of current application.
   *
   * @type { ?string }
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  bundleName?: string;

  /**
   * Iterations of the test, default is 5.
   *
   * @type { ?number }
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  iterations?: number;

  /**
   * Timeout in millisecond for executing a single-time {@link actionCode} or {@link resetCode}, default is 10000.
   *
   * @type { ?number }
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  timeout?: number;
}

/**
 * Test results of specified performance metric.
 *
 * @typedef PerfMeasureResult 
 * @syscap SystemCapability.Test.PerfTest
 * @atomicservice
 * @since arkts {'1.1':'20', '1.2':'20'}
 * @test
 * @arkts 1.1&1.2
 */
declare interface PerfMeasureResult {
  /**
   * The metric this result belongs to.
   *
   * @type { PerfMetric }
   * @readonly
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */ 
  readonly metric: PerfMetric;

  /**
   * The round values of the specified metric in the test.
   *
   * @type { Array<number> }
   * @readonly
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */ 
  readonly roundValues: Array<number>;

  /**
   * The maximum of the specified metric in the test.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */ 
  readonly maximum: number;

  /**
   * The minimum of the specified metric in the test.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */ 
  readonly minimum: number;

  /**
   * The average of the specified metric in the test.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */ 
  readonly average: number;
}

/**
 * The unified facade of PerformanceTest framework, can be used to executing the performance test task.
 *
 * @syscap SystemCapability.Test.PerfTest
 * @atomicservice
 * @since arkts {'1.1':'20', '1.2':'20'}
 * @test
 * @arkts 1.1&1.2
 */
declare class PerfTest {
  /**
   * Create an {@link PerfTest} object.
   *
   * @param { PerfTestStrategy } strategy - test task execution strategy.
   * @returns { PerfTest } the {@link PerfTest} object.
   * @throws { BusinessError } 32400001 - Initialization failed.
   * @throws { BusinessError } 32400002 - Internal error. Possible causes: 1. IPC connection failed. 2. Execute callback function failed.
   * @throws { BusinessError } 32400003 - Parameter verification failed.
   * @static
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  static create(strategy: PerfTestStrategy): PerfTest;

  /**
   * Start the performance test.
   *
   * @returns { Promise<void> }
   * @throws { BusinessError } 32400002 - Internal error. Possible causes: 1. IPC connection failed. 2. Execute callback function failed.
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  run(): Promise<void>;

  /**
   * Get the test result of a specified performance metric. If no test result exist, -1 is returned for all results.
   *
   * @param { PerfMetric } metric - performance metric for which the result will be get.
   * @returns { PerfMeasureResult } test results of specified performance metric.
   * @throws { BusinessError } 32400002 - Internal error. Possible causes: 1. IPC connection failed. 2. Execute callback function failed.
   * @throws { BusinessError } 32400003 - Parameter verification failed.
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  getMeasureResult(metric: PerfMetric): PerfMeasureResult;

  /**
   * Destory the {@link PerfTest} object.
   * @throws { BusinessError } 32400002 - Internal error. Possible causes: 1. IPC connection failed. 2. Execute callback function failed.
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since arkts {'1.1':'20', '1.2':'20'}
   * @test
   * @arkts 1.1&1.2
   */
  destory(): void;
}

export {
  PerfMetric,
  PerfTestStrategy,
  PerfMeasureResult,
  PerfTest
};
