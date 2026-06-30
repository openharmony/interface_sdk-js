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
 * PerfTest 提供白盒性能测试能力。
 * 可以测试指定代码段或场景的性能数据，自动执行测试代码段，
 * 并采集耗时、CPU、内存、时延、帧率等性能数据。
 * 
 * > **说明：**
 * > - 本模块的初始接口自 API version 20 开始支持。后续新增的接口会以角标的形式标明其最低 API 版本号。
 * > - 本模块的接口仅能在 <!--RP1-->[JsUnit](../../application-test/unittest-guidelines.md)<!--RP1End--> 中使用。
 * > - 本模块的接口不支持并发调用。
 * > - 本模块的接口适用于手机、平板、PC/2in1、智慧屏和车机。
 * 
 * @file
 * @kit TestKit
 * 
 */

import { Callback } from './@ohos.base';

/**
 * 表示框架可采集的性能指标。
 *
 * > **说明：**
 * >
 * > 1. 本枚举中各指标采集的是指定应用进程的性能数据，而非系统级性能数据。
 * > 2. CPU 数据（**CPU_LOAD** / **CPU_USAGE**）和内存数据（**MEMORY_RSS** / **MEMORY_PSS**）采集说明：
 * > - 测试过程中会在代码段执行前后分别采集指定应用进程的 CPU 和内存数据，因此需要确保被测应用进程在测试期间存在。
 * > 3. 应用启动时延数据（**APP_START_RESPONSE_TIME** / **APP_START_COMPLETE_TIME**）采集说明：
 * > - 应用启动时延数据受系统日志打点上报的影响。起始时间为点击事件上报的时刻，
 * >   响应时延的结束时间为点击后首帧上屏的时刻，
 * >   完成时延的结束时间为应用启动后首帧上屏的时刻。
 * >   该时延与用户实际感知的时延存在差异。
 * > - 应用启动时延数据可在以下场景采集：点击桌面应用图标、点击任务栏应用图标、点击应用中心应用图标。
 * > - 一次测试中仅采集指定应用的首次启动时延。
 * > 4. 页面切换时延数据（**PAGE_SWITCH_COMPLETE_TIME**）采集说明：
 * > - 页面切换时延的计算受系统日志打点上报的影响。起始时间为点击事件上报的时刻，
 * >   结束时间为页面切换后首帧上屏的时刻，
 * >   与用户实际感知的时延存在差异。
 * > - 页面切换时延数据可在 **Router** 和 **Navigation** 组件中采集。
 * > - 一次测试中仅采集指定应用的首次页面切换时延。
 * > 5. 列表滑动帧率（**LIST_SWIPE_FPS**）采集说明：
 * > - **LIST_SWIPE_FPS**：列表滑动时每秒在屏幕上渲染和更新的帧数。
 * > - 支持的场景：ArkUI 子系统中 **List**、**Grid**、**Scroll** 和 **WaterFlow** 组件的列表滚动。
 * > - 一次测试中仅采集指定应用的首次列表滑动帧率。
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
    * 代码段的执行时长，单位为毫秒。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   DURATION = 0,
 
   /**
    * 应用进程的 CPU 负载，单位为百分比。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   CPU_LOAD = 1,
 
   /**
    * 应用进程的 CPU 使用率，单位为百分比。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   CPU_USAGE = 2,
 
   /**
    * 代码段执行时应用进程占用的物理内存（包含共享库），单位为 KB。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   MEMORY_RSS = 3,
 
   /**
    * 代码段执行时应用进程占用的物理内存（不包含共享库），单位为 KB。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   MEMORY_PSS = 4,
 
   /**
    * 应用启动的响应时延，单位为毫秒。
    * 
    * 说明：
    * 1) 时延计算受系统打点上报的限制。起始时间为点击事件上报的时刻，
    *    响应时延的结束时间为系统响应点击后首帧上屏的时刻。
    *    与端到端用户感知的时延存在差异。
    * 2) 应用启动时延可在以下场景采集：点击桌面应用图标；
    *    点击多任务中心应用；点击 Dock 栏应用图标；
    *    点击应用中心应用图标。
    * 3) 该指标不支持对当前应用的测试。
    * 4) 测试过程中仅能采集指定应用首次启动的数据。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   APP_START_RESPONSE_TIME = 5,
 
   /**
    * 应用启动的完成时延，单位为毫秒。
    * 
    * 说明：
    * 1) 时延计算受系统打点上报的限制。起始时间为点击事件上报的时刻，
    *    完成时延的结束时间为应用启动后首帧上屏的时刻。
    *    与端到端用户感知的时延存在差异。
    * 2) 应用启动时延可在以下场景采集：点击桌面应用图标；
    *    点击多任务中心应用；点击 Dock 栏应用图标；
    *    点击应用中心应用图标。
    * 3) 该指标不支持对当前应用的测试。
    * 4) 测试过程中仅能采集指定应用首次启动的数据。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   APP_START_COMPLETE_TIME = 6,
 
   /**
    * 应用内页面切换的完成时延，单位为毫秒。
    * 
    * 说明：
    * 1) 时延计算受系统打点上报的限制。起始时间为点击事件上报的时刻，
    *    完成时延的结束时间为页面切换后首帧上屏的时刻。
    *    与端到端用户感知的时延存在差异。
    * 2) 页面切换时延可在 Router 或 Navigation 组件的页面切换场景中采集。
    * 3) 测试过程中仅能采集指定应用首次页面切换的数据。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   PAGE_SWITCH_COMPLETE_TIME = 7,
 
   /**
    * 应用内列表滑动帧率，单位为帧每秒（fps）。
    * 
    * 说明：
    * 1) 列表滑动帧率：指列表滑动时每秒实际渲染的帧数。
    *    仅可采集 ArkUI 子系统中 List、Grid、Scroll 和 WaterFlow 滚动组件的滑动帧率。
    * 2) 测试过程中仅能采集指定应用中组件首次滑动的数据。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   LIST_SWIPE_FPS = 8,
 }
 
 /**
  * 表示性能测试策略。
  *
  * > **说明：**
  * >
  * > **actionCode** 和 **resetCode** 属性的入参类型为 **Callback\<boolean>**。
  *   需要在代码段中调用该回调以通知框架代码段执行完成，
  *   否则代码段执行将超时。
  * > 回调参数为 **Boolean** 类型。
  *   值 **true** 表示代码段执行符合预期，**false** 表示不符合预期。
  * 
  * @syscap SystemCapability.Test.PerfTest
  * @atomicservice
  * @since 20 dynamic
  * @since 23 static
  * @test
  */
 declare interface PerfTestStrategy {
   /**
    * 待采集的性能指标列表。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   metrics: Array<PerfMetric>;
 
   /**
    * 用于性能测试的代码段。
    * actionCode 的入参类型为 {@link Callback<boolean>}。由于 actionCode 可定义为异步函数，
    * 开发者需要在 actionCode 执行完成时调用该回调函数，
    * 以帮助 PerfTest 识别 actionCode 执行完成的时机。
    * 例如，actionCode 的入参回调函数定义为 "(finish: Callback<boolean>)"。
    * 当 actionCode 执行完成时，应调用 "finish(true)"，值 true 表示 actionCode 执行成功。
    * 当发生异常时，应调用 "finish(false)"，值 false 表示 actionCode 执行失败。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   actionCode: Callback<Callback<boolean>>;
 
   /**
    * {@link actionCode} 完成后用于重置环境的代码段。默认值为空。
    * 该执行期间不进行数据采集。
    * resetCode 的入参类型为 {@link Callback<boolean>}。由于 resetCode 可定义为异步函数，
    * 开发者需要在 resetCode 执行完成时调用该回调函数，
    * 以帮助 PerfTest 识别 resetCode 执行完成的时机。
    * 例如，resetCode 的入参回调函数定义为 "(finish: Callback<boolean>)"。
    * 当 resetCode 执行完成时，应调用 "finish(true)"，值 true 表示 resetCode 执行成功。
    * 当发生异常时，应调用 "finish(false)"，值 false 表示 resetCode 执行失败。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   resetCode?: Callback<Callback<boolean>>;
 
   /**
    * 待测试应用的包名。
    * 默认值为 ""。框架将测试当前应用的性能数据。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   bundleName?: string;
 
   /**
    * 测试迭代次数。默认值为 5。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   iterations?: int;
 
   /**
    * 单次执行代码段（{@link actionCode} 或 {@link resetCode}）的超时时间。
    * 默认值为 10000 毫秒。
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
  * 表示性能指标对应的测量结果数据。
  * 
  * @syscap SystemCapability.Test.PerfTest
  * @atomicservice
  * @since 20 dynamic
  * @since 23 static
  * @test
  */
 declare interface PerfMeasureResult {
   /**
    * 待测试的性能指标。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */ 
   readonly metric: PerfMetric;
 
   /**
    * 被测性能指标每轮的测量数据值。如果数据采集失败，则返回 **-1**。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */ 
   readonly roundValues: Array<double>;
 
   /**
    * 每轮测量数据的最大值（不包含值 **-1**）。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */ 
   readonly maximum: double;
 
   /**
    * 每轮测量数据的最小值（不包含值 **-1**）。
    *
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */ 
   readonly minimum: double;
 
   /**
    * 每轮测量数据的平均值（不包含值 **-1**）。
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
  * 表示白盒性能测试框架的通用入口。
  * 提供测试任务创建、测试代码段执行、数据采集和测量结果获取等能力。
  *
  * @syscap SystemCapability.Test.PerfTest
  * @atomicservice
  * @since 20 dynamic
  * @since 23 static
  * @test
  */
 declare class PerfTest {
   /**
    * 创建 {@link PerfTest} 对象并返回创建的对象。该 API 为静态 API。
    *
    * @param { PerfTestStrategy } strategy - 性能测试策略。
    * @returns { PerfTest }  创建的 {@link PerfTest} 对象。
    * @throws { BusinessError } 32400001 - 初始化失败。
    * @throws { BusinessError } 32400002 - 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。
    * @throws { BusinessError } 32400003 - 参数校验失败。
    * @throws { BusinessError } 32400007 - 该接口不支持并发调用。
    * @static
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   static create(strategy: PerfTestStrategy): PerfTest;
 
   /**
    * 运行性能测试，迭代执行测试代码段并采集性能数据。
    * 该 API 使用 Promise 返回结果。
    *
    * @returns { Promise<void> }
    * @throws { BusinessError } 32400002 - 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。
    * @throws { BusinessError } 32400004 - 执行回调失败。可能原因：1. 回调中抛出异常。2. 回调执行超时。
    * @throws { BusinessError } 32400005 - 采集指标数据失败。
    * @throws { BusinessError } 32400007 - 该接口不支持并发调用。
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
    * @returns { PerfMeasureResult } - 性能指标对应的测量结果数据。
    * @throws { BusinessError } 32400002 - 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。
    * @throws { BusinessError } 32400003 - 参数校验失败。
    * @throws { BusinessError } 32400006 - 获取测量结果失败。
    * @throws { BusinessError } 32400007 - 该接口不支持并发调用。
    * @syscap SystemCapability.Test.PerfTest
    * @atomicservice
    * @since 20 dynamic
    * @since 23 static
    * @test
    */
   getMeasureResult(metric: PerfMetric): PerfMeasureResult;
 
   /**
    * 销毁 {@link PerfTest} 对象。
    * @throws { BusinessError } 32400002 - 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。
    * @throws { BusinessError } 32400007 - 该接口不支持并发调用。
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
 
