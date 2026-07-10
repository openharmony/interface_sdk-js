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
  * PerfTest提供白盒性能测试能力，供开发者在测试场景使用。支持对指定代码段或指定场景自动化执行测试，并采集耗时、CPU、内存、时延、帧率等性能数据。
  * 
  * > **说明：**
  * >
  * > - 本模块接口在<!--RP1-->[单元测试框架](docroot://application-test/unittest-guidelines.md)<!--RP1End-->中使用。
  * >
  * > - 本模块接口不支持并发调用。
  * >
  * > - 本模块接口适用于手机、平板、PC/2in1、智慧屏、车机。
  * 
  * @file
  * @kit TestKit
  * 
 */

import { Callback } from './@ohos.base';

/**
 * 框架支持采集的性能指标。
 * 
 * > **说明**
 * >
 * >
 * > - 测试过程中，代码段执行开始前和代码段执行结束后，会分别采集指定应用进程的CPU和内存数据，因此测试过程中需要保证被测应用进程一直存在。
 * >
 * >
 * > - 应用启动时延数据受系统打点上报限制，开始时间为点击事件上报时间点，响应时延结束时间为点击后系统响应首帧的上屏时间点（首帧显示在屏幕上的时间点），完成时延结束时间为应用启动后的首帧上屏时间点，与端到端用户感知时延存在差异。
 * >
 * > - 应用启动时延数据采集支持的场景：桌面点击应用图标启动、Dock栏点击应用图标启动、应用中心点击应用图标启动。
 * >
 * > - 单次测试期间，仅第一次指定应用启动的时延数据会被采集。
 * >
 * >
 * > - 页面切换时延计算受系统打点上报限制，开始时间为点击事件上报时间点，完成时延结束时间为页面切换后的首帧上屏时间点，与端到端用户感知时延存在差异。
 * >
 * > - 页面切换时延数据采集支持的场景：Router、Navigation控件内的页面切换。
 * >
 * > - 单次测试期间，仅指定应用内第一次页面切换的时延数据会被采集。
 * >
 * >
 * > - 列表滑动帧率：指的是在列表滑动时，屏幕每秒钟渲染更新帧的次数。
 * >
 * > - 列表滑动帧率数据采集支持的场景：ArkUI子系统List、Grid、scroll、waterflow滚动控件列表的滑动。
 * >
 * > - 单次测试期间，仅指定应用内第一次列表滑动的帧率数据会被采集。
 *
 * @enum { int }
 * @syscap SystemCapability.Test.PerfTest
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 * @test
 */
declare enum PerfMetric {
  /**
   * 代码段执行耗时，单位：ms。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  DURATION = 0,

  /**
   * 应用进程CPU负载，取值为百分比。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  CPU_LOAD = 1,

  /**
   * 应用进程CPU使用率，取值为百分比。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  CPU_USAGE = 2,

  /**
   * 代码段单次执行结束时，应用进程占用物理内存（含共享库），单位：KB。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  MEMORY_RSS = 3,

  /**
   * 代码段单次执行结束时，应用进程占用物理内存（不含共享库），单位：KB。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  MEMORY_PSS = 4,

  /**
   * 应用启动的响应时延，单位：ms。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  APP_START_RESPONSE_TIME = 5,

  /**
   * 应用启动的完成时延，单位：ms。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  APP_START_COMPLETE_TIME = 6,

  /**
   * 应用内页面切换的完成时延，单位：ms。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  PAGE_SWITCH_COMPLETE_TIME = 7,

  /**
   * 应用内列表滑动的帧率，单位：fps。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  LIST_SWIPE_FPS = 8
 }

/**
 * 性能测试执行策略。
 * 
 * > **说明**
 * >
 * > 属性actionCode和resetCode的入参类型为回调函数"Callback\<boolean>"。在代码段中需要主动调用此回调函数，通知框架代码段执行完成，否则会导致代码段执行超时。
 * > > 其中，回调函数的参数为boolean类型，true代表代码段执行符合预期，false代表代码段执行不符合预期。[代码示例]{@link PerfTest.create}。
 *
 * @syscap SystemCapability.Test.PerfTest
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 * @test
 */
declare interface PerfTestStrategy {
  /**
   * 被测性能指标列表。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  metrics: Array<PerfMetric>;

  /**
   * 测试代码段。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  actionCode: Callback<Callback<boolean>>;

  /**
   * 测试结束环境重置代码段。默认为空，框架运行时不执行此代码段。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  resetCode?: Callback<Callback<boolean>>;

  /**
   * 被测应用包名。默认为""，框架运行时测试当前测试应用的性能数据。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  bundleName?: string;

  /**
   * 测试迭代执行次数，默认值为5。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  iterations?: int;

  /**
   * 单次代码段（actionCode/resetCode）执行的超时时间，默认值为10000ms。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  timeout?: int;
 }

/**
 * 性能指标对应测量结果数据。
 *
 * @syscap SystemCapability.Test.PerfTest
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 * @test
 */
declare interface PerfMeasureResult {
  /**
   * 被测性能指标。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  readonly metric: PerfMetric;

  /**
   * 被测性能指标的各轮测量数据值。当数据采集失败时返回-1。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  readonly roundValues: Array<double>;

  /**
   * 各轮测量数据最大值（剔除为-1的数据后计算）。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  readonly maximum: double;

  /**
   * 各轮测量数据最小值（剔除为-1的数据后计算）。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  readonly minimum: double;

  /**
   * 各轮测量数据平均值（剔除为-1的数据后计算）。
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  readonly average: double;
 }

/**
 * PerfTest类为白盒性能测试框架的总入口，提供测试任务创建、测试代码段执行和数据采集、测量结果获取等能力。
 *
 * @syscap SystemCapability.Test.PerfTest
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 * @test
 */
declare class PerfTest {
  /**
   * 静态方法，构造一个PerfTest对象，并返回该对象。
   *
   * @param { PerfTestStrategy } strategy - 性能测试执行策略。
   * @returns { PerfTest }  返回构造的PerfTest对象。
   * @throws { BusinessError } 32400001 - Initialization failed.
   * @throws { BusinessError } 32400002 - Internal error. Possible causes: 1. IPC connection failed. 2. The object does not exist.
   * @throws { BusinessError } 32400003 - Parameter verification failed.
   * @throws { BusinessError } 32400007 - The API does not support concurrent calls.
   * @static
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  static create(strategy: PerfTestStrategy): PerfTest;

  /**
   * 运行性能测试，迭代执行测试代码段并采集性能数据，使用Promise回调。
   *
   * @returns { Promise<void> }
   Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 32400004 - Failed to execute the callback. Possible causes: 1. An exception is thrown in the callback. 2. Callback execution timed out.
   * @throws { BusinessError } 32400005 - Failed to collect metric data.
   * @throws { BusinessError } 32400007 - The API does not support concurrent calls.
   *
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  run(): Promise<void>;

  /**
   * 获取指定性能指标的测量数据。
   *
   * @param { PerfMetric } metric - 性能指标。
   * @returns { PerfMeasureResult } - 性能指标对应测量结果数据。
   * @throws { BusinessError } 32400002 - Internal error. Possible causes: 1. IPC connection failed. 2. The object does not exist.
   * @throws { BusinessError } 32400003 - Parameter verification failed.
   * @throws { BusinessError } 32400006 - Failed to obtain the measurement result.
   * @throws { BusinessError } 32400007 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  getMeasureResult(metric: PerfMetric): PerfMeasureResult;

  /**
   * 销毁PerfTest对象。
   *
   * @throws { BusinessError } 32400002 - Internal error. Possible causes: 1. IPC connection failed. 2. The object does not exist.
   * @throws { BusinessError } 32400007 - The API does not support concurrent calls.
   * @syscap SystemCapability.Test.PerfTest
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @test
   */
  destroy(): void;
 }

export {
   PerfMetric,
   PerfTestStrategy,
   PerfMeasureResult,
   PerfTest
 };