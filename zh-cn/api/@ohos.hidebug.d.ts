/*
* Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * @kit PerformanceAnalysisKit
 */

/**
 * 为应用提供多种调试、调优的方法，帮助开发者定位性能瓶颈、优化应用性能。主要功能包括：内存数据分析、CPU使用率监控、trace采集、profiler采集、VM堆快照转储。由于该模块的接口大多比较耗费性能，接口调用较为耗时，且基于HiDebug模块定义，该模块内的接口仅建议在应用调试、调优阶段使用。若需要在其他场景使用时，请认真评估所需调用的接口对应用性能的影响。
 *
 * @namespace hidebug
 * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
 * @since 8
 */
/**
 * 为应用提供多种调试、调优的方法，帮助开发者定位性能瓶颈、优化应用性能。主要功能包括：内存数据分析、CPU使用率监控、trace采集、profiler采集、VM堆快照转储。由于该模块的接口大多比较耗费性能，接口调用较为耗时，且基于HiDebug模块定义，该模块内的接口仅建议在应用调试、调优阶段使用。若需要在其他场景使用时，请认真评估所需调用的接口对应用性能的影响。
 *
 * @namespace hidebug
 * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace hidebug {
  /**
   * 获取内存分配器统计的进程持有的普通块所占用的总字节数。
   *
   * @returns { bigint } 内存分配器统计的进程持有的普通块所占用内存的大小（含分配器元数据），单位为Byte。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapSize() : bigint;

  /**
   * 获取内存分配器统计的进程持有的已使用的普通块所占用的总字节数。
   *
   * @returns { bigint } 返回内存分配器统计的进程持有的已使用的普通块所占用内存大小，单位为Byte。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapAllocatedSize() : bigint;

  /**
   * 获取内存分配器统计的进程持有的空闲的普通块所占用的总字节数。
   *
   * @returns { bigint } 返回内存分配器统计的进程持有的空闲的普通块所占用内存大小，单位为Byte。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapFreeSize() : bigint;

  /**
   * 获取应用进程占用的虚拟内存大小。接口实现方式：读取/proc/{pid}/statm节点中的size值（内存页数），vss = size * 页大小（4KB/页）。
   *
   * @returns { bigint } 返回应用进程占用的虚拟内存大小，单位为KB。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 11 dynamic
   * @since 23 static
   */
  function getVss(): bigint;

  /**
   * 获取应用进程实际使用的物理内存大小。接口实现方式：读取/proc/{pid}/smaps_rollup节点中的Pss与SwapPss值并求和。
   *
   * > **注意**
   * >
   * > 由于/proc/{pid}/smaps_rollup的读取耗时较长，建议不要在主线程中使用该接口，可通过@ohos.taskpool或@ohos.worker开启异步线程以避免应用出现卡顿。
   *
   * @returns { bigint } 返回应用进程实际使用的物理内存大小，单位为KB。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getPss() : bigint;

  /**
   * 获取进程的共享脏内存大小。接口实现方式：读取/proc/{pid}/smaps_rollup节点中的Shared_Dirty值。
   *
   * > **注意**
   * >
   * > 由于/proc/{pid}/smaps_rollup的读取耗时较长，建议不要在主线程中使用该接口，可通过@ohos.taskpool或@ohos.worker开启异步线程以避免应用出现卡顿。
   *
   * @returns { bigint } 返回进程的共享脏内存大小，单位为KB。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getSharedDirty() : bigint;

  /**
   * 获取进程的私有脏内存大小。读取/proc/{pid}/smaps_rollup中的Private_Dirty值。
   *
   * > **注意**
   * >
   * > 由于/proc/{pid}/smaps_rollup的读取耗时较长，建议不要在主线程中使用该接口，可通过@ohos.taskpool或@ohos.worker开启异步线程以避免应用出现卡顿。
   *
   * @returns { bigint } 返回进程的私有脏内存大小，单位为KB。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function getPrivateDirty() : bigint;

  /**
   * 获取进程的CPU使用率。
   *
   * > **注意**
   * >
   * > 由于该接口涉及跨进程通信，耗时较长，为了避免引入性能问题，建议不要在主线程中直接调用该接口。
   *
   * @returns { double } 获取进程的CPU使用率。如占用率为50%，则返回0.5。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function getCpuUsage() : double;

  /**
   * 启动虚拟机Profiling方法跟踪，`startProfiling(filename: string)`方法的调用需要与`stopProfiling()`方法的调用一一对应，先开启后关闭，请避免重复开启或重复关闭的调用方式，否则会接口调用异常。
   *
   * @param { string } filename - 用户自定义的采样结果输出的文件名，将在应用的`files`目录下生成以该参数命名的json文件。string长度的最大值为128。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hidebug.startJsCpuProfiling
   */
  function startProfiling(filename: string): void;

  /**
   * 停止虚拟机Profiling方法跟踪，`stopProfiling()`方法的调用需要与`startProfiling(filename: string)`方法的调用一一对应，先开启后关闭，请避免重复开启或重复关闭的调用方式，否则会接口调用异常。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hidebug.stopJsCpuProfiling
   */
  function stopProfiling(): void;

  /**
   * 虚拟机堆数据转储，生成`filename.heapsnapshot`文件。
   *
   * @param { string } filename - 用户自定义的虚拟机堆转储文件名，将在应用的`files`目录下生成以该参数命名的heapsnapshot文件。string长度的最大值为128。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hidebug.dumpJsHeapData(filename : string)
   */
  function dumpHeapData(filename: string): void;

  /**
   * 启动虚拟机Profiling方法跟踪，`startJsCpuProfiling(filename: string)`方法的调用需要与`stopJsCpuProfiling()`方法的调用一一对应，先开启后关闭，请避免重复开启或重复关闭的调用方式，否则会接口调用异常。
   *
   * @param { string } filename - 用户自定义的采样结果输出的文件名，将在应用的`files`目录下生成以该参数命名的json文件。string长度的最大值为128。
   * @throws {BusinessError} 401 - the parameter check failed, Parameter type error
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function startJsCpuProfiling(filename : string) : void;

  /**
   * 停止虚拟机Profiling方法跟踪，`stopJsCpuProfiling()`方法的调用需要与`startJsCpuProfiling(filename: string)`方法的调用一一对应，先开启后关闭，请避免重复开启或重复关闭的调用方式，否则会接口调用异常。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function stopJsCpuProfiling() : void;

  /**
   * 虚拟机堆数据转储。
   *
   * > **注意**
   * >
   * > 由于虚拟机堆导出极其耗时，且该接口为同步接口，建议不要在上架版本中调用该接口，以避免应用冻屏，影响用户体验。
   *
   * @param { string } filename - 用户自定义的虚拟机堆数据转储输出的文件名，将在应用的`files`目录下生成以该参数命名的heapsnapshot文件。string长度的最大值为128字节。
   * @throws {BusinessError} 401 - the parameter check failed, Parameter type error
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function dumpJsHeapData(filename : string) : void;

  /**
   * 虚拟机堆数据转储，支持清除nodeId缓存。
   *
   * > **注意**
   * >
   * > 由于虚拟机堆导出极其耗时，且该接口为同步接口，建议不要在上架版本中调用该接口，以避免应用冻屏，影响用户体验。
   *
   * @param { string } filename - 用户自定义的虚拟机堆转储文件名，将在应用的files目录下生成fileName.heapsnapshot格式文件。string长度的最大值为128字节。
   * @param { boolean } [needClean] - 转储堆快照前是否需要清除nodeId缓存。true：需要清除；false：不需要清除。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  function dumpJsHeapData(filename: string, needClean: boolean): void;

  /**
   * 获取系统服务信息。
   *
   * @permission ohos.permission.DUMP
   * @param { int } serviceid - 系统服务ID，用于标识要获取信息的系统服务。取值由系统定义，取值范围[0, 255]。传入无效值时返回错误码401。
   * @param { int } fd - 文件描述符，接口会向该fd写入数据。传入无效文件描述符时返回错误码401。
   * @param { Array<string> } args - 系统服务的dump接口参数列表。string长度的最大值为254，超出部分将会被截断。
   * @throws {BusinessError} 401 - the parameter check failed, Possible causes:
   *     1.the parameter type error
   *     2.the args parameter is not string array
   * @throws {BusinessError} 11400101 - ServiceId invalid. The system ability does not exist.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function getServiceDump(serviceid : int, fd : int, args : Array<string>) : void;

  /**
   * 获取系统的CPU资源占用情况。
   *
   * > **注意**
   * >
   * > 由于该接口涉及跨进程通信，耗时较长，为了避免引入性能问题，建议不要在主线程中直接调用该接口。
   *
   * @returns { double } 系统CPU资源占用情况。如占用率为50%，则返回0.5。
   * @throws { BusinessError } 11400104 - The status of the system CPU usage is abnormal.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getSystemCpuUsage(): double;

  /**
   * 线程的CPU使用情况。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface ThreadCpuUsage {
    /**
     * 线程号。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    threadId: long;
    /**
     * 线程CPU使用率。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    cpuUsage: double;
  }

  /**
   * 获取应用线程CPU使用情况。
   *
   * > **注意**
   * >
   * > 由于该接口涉及跨进程通信，耗时较长，为了避免引入性能问题，建议不要在主线程中直接调用该接口。
   *
   * @returns { ThreadCpuUsage[] } 返回当前应用进程下所有ThreadCpuUsage数组。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppThreadCpuUsage(): ThreadCpuUsage[];

  /**
   * 描述系统内存信息，包括总内存、空闲内存和可用内存。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface SystemMemInfo {
    /**
     * 系统总的内存，以KB为单位，计算方式：/proc/meminfo: MemTotal。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    totalMem: bigint;
    /**
     * 系统空闲的内存，以KB为单位，计算方式：/proc/meminfo: MemFree。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    freeMem: bigint;
    /**
     * 系统可用的内存，以KB为单位，计算方式：/proc/meminfo: MemAvailable。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
    availableMem: bigint;
  }

  /**
   * 获取系统内存信息。读取/proc/meminfo节点的数据。
   *
   * @returns { SystemMemInfo } 系统内存信息。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getSystemMemInfo(): SystemMemInfo;

  /**
   * 描述应用进程的内存信息。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface NativeMemInfo {
    /**
     * 实际占用的物理内存大小(比例分配共享库占用的内存)，以KB为单位，计算方式：/proc/{pid}/smaps_rollup: Pss + SwapPss。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    pss: bigint;
    /**
     * 占用的虚拟内存大小(包括共享库所占用的内存)，以KB为单位，计算方式：/proc/{pid}/statm: size * 4。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vss: bigint;
    /**
     * 实际占用的物理内存大小(包括共享库占用)，以KB为单位，计算方式：/proc/{pid}/smaps_rollup: Rss。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    rss: bigint;
    /**
     * 共享脏内存大小，以KB为单位，计算方式：/proc/{pid}/smaps_rollup: Shared_Dirty。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    sharedDirty: bigint;
    /**
     * 私有脏内存大小，以KB为单位，计算方式：/proc/{pid}/smaps_rollup: Private_Dirty。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
   * @since 23 static
   */
    privateDirty: bigint;
    /**
     * 共享净内存大小，以KB为单位，计算方式：/proc/{pid}/smaps_rollup: Shared_Clean。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
    sharedClean: bigint;
    /**
     * 私有干净内存大小，以KB为单位，计算方式：/proc/{pid}/smaps_rollup: Private_Clean。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
    privateClean: bigint;
  }

  /**
   * 获取应用进程内存信息。读取/proc/{pid}/smaps_rollup和/proc/{pid}/statm节点的数据。
   *
   * > **注意**
   * >
   * > 由于读取/proc/{pid}/smaps_rollup耗时较长，推荐使用异步接口hidebug.getAppNativeMemInfoAsync，以避免应用丢帧或卡顿。
   * >
   * > 推荐使用hidebug.getRssInfo接口获取应用的rss使用信息。
   *
   * @returns { NativeMemInfo } 应用进程内存信息。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfo(): NativeMemInfo;

  /**
   * 应用进程内存限制。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface MemoryLimit {
    /**
     * 应用程序进程可用的物理内存限制，以KB为单位。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    rssLimit: bigint;
    /**
     * 进程的虚拟内存限制，以KB为单位。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vssLimit: bigint;
    /**
     * 当前线程的 JS VM 堆大小限制，以KB为单位。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vmHeapLimit: bigint;
    /**
     * 当前进程的 JS 堆内存大小限制，以KB为单位。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
    vmTotalHeapSize: bigint;
  }

  /**
   * 获取应用程序进程的内存限制。
   *
   * @returns { MemoryLimit } 应用程序进程内存限制。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppMemoryLimit(): MemoryLimit;

  /**
   * VM内存信息。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface VMMemoryInfo {
    /**
     * 表示当前虚拟机的堆总大小，以KB为单位。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    totalHeap: bigint;
    /**
     * 表示当前虚拟机使用的堆大小，以KB为单位。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    heapUsed: bigint;
    /**
     * 表示当前虚拟机的所有数组对象大小，以KB为单位。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    allArraySize: bigint;
  }

  /**
   * 获取VM内存相关信息。
   *
   * @returns { VMMemoryInfo } 返回VM内存信息。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppVMMemoryInfo(): VMMemoryInfo;

  /**
   * 获取当前虚拟机中ArkTS对象所占用的内存大小。
   *
   * @returns { bigint } 当前虚拟机中ArkTS对象所占用的内存大小，单位为KB。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 21 dynamic
   * @since 23 static
   */
  function getAppVMObjectUsedSize(): bigint;

  /**
   * 读取/proc/{pid}/smaps_rollup和/proc/{pid}/statm节点的数据以获取应用进程内存信息，使用Promise异步回调。
   *
   * @returns { Promise<NativeMemInfo> } promise对象，返回应用进程内存信息。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfoAsync(): Promise<NativeMemInfo>;

  /**
   * 获取应用进程内存信息。与`getAppNativeMemInfo`接口相比，该接口使用了缓存机制，以提高性能。缓存的有效期为5分钟。
   *
   * > **注意**
   * >
   * > 由于读取 /proc/{pid}/smaps_rollup 比较耗时，建议不在主线程中使用该接口。可以通过@ohos.taskpool或@ohos.worker开启异步线程，以避免应用卡顿。
   *
   * @param { boolean } [forceRefresh] - 是否需要无视缓存有效性，强制更新缓存值。默认值：false。
   *     true：直接获取当前内存数据并更新缓存值。
   *     false：缓存有效时，直接返回缓存值，缓存失效时获取当前内存数据并更新缓存值。
   * @returns { NativeMemInfo } 应用进程内存信息。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfoWithCache(forceRefresh?: boolean): NativeMemInfo;

  /**
   * 描述采集trace线程的类型，包括主线程和所有线程。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  enum TraceFlag {
    /**
     * 只采集当前应用主线程。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    MAIN_THREAD = 1,
    /**
     * 采集当前应用下所有线程。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_THREADS = 2
  }

  /**
   * 支持trace使用场景的标签，用户可通过hitrace抓取指定标签的trace内容。
   *
   * > **注意**
   * >
   * > 以下标签实际值由系统定义，可能随版本升级而发生改变，为避免升级后出现兼容性问题，在生产中应直接使用标签名称而非标签数值。
   *
   * @namespace tags
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  namespace tags {
    /**
     * 能力管理标签，hitrace命令行工具对应tagName:ability。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ABILITY_MANAGER: long;
    /**
     * ArkUI开发框架标签，hitrace命令行工具对应tagName:ace。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ARKUI: long;
    /**
     * JSVM虚拟机标签，hitrace命令行工具对应tagName:ark。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ARK: long;
    /**
     * 蓝牙标签，hitrace命令行工具对应tagName:bluetooth。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const BLUETOOTH: long;
    /**
     * 公共库子系统标签，hitrace命令行工具对应tagName:commonlibrary。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const COMMON_LIBRARY: long;
    /**
     * 分布式硬件设备管理标签，hitrace命令行工具对应tagName:devicemanager。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_HARDWARE_DEVICE_MANAGER: long;
    /**
     * 分布式音频标签，hitrace命令行工具对应tagName:daudio。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_AUDIO: long;
    /**
     * 分布式相机标签，hitrace命令行工具对应tagName:dcamera。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_CAMERA: long;
    /**
     * 分布式数据管理模块标签，hitrace命令行工具对应tagName:distributeddatamgr。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_DATA: long;
    /**
     * 分布式硬件框架标签，hitrace命令行工具对应tagName:dhfwk。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_HARDWARE_FRAMEWORK: long;
    /**
     * 分布式输入标签，hitrace命令行工具对应tagName:dinput。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_INPUT: long;
    /**
     * 分布式屏幕标签，hitrace命令行工具对应tagName:dscreen。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SCREEN: long;
    /**
     * 分布式调度器标签，hitrace命令行工具对应tagName:dsched。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SCHEDULER: long;
    /**
     * FFRT任务标签，hitrace命令行工具对应tagName:ffrt。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const FFRT: long;
    /**
     * 文件管理系统标签，hitrace命令行工具对应tagName:filemanagement。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const FILE_MANAGEMENT: long;
    /**
     * 全局资源管理标签，hitrace命令行工具对应tagName:gresource。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const GLOBAL_RESOURCE_MANAGER: long;
    /**
     * 图形模块标签，hitrace命令行工具对应tagName:graphic。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const GRAPHICS: long;
    /**
     * HDF子系统标签，hitrace命令行工具对应tagName:hdf。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const HDF: long;
    /**
     * MISC模块标签，hitrace命令行工具对应tagName:misc。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MISC: long;
    /**
     * 多模态输入模块标签，hitrace命令行工具对应tagName:multimodalinput。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MULTIMODAL_INPUT: long;
    /**
     * 网络标签，hitrace命令行工具对应tagName:net。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NET: long;
    /**
     * 通知模块标签，hitrace命令行工具对应tagName:notification。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NOTIFICATION: long;
    /**
     * Nweb标签，hitrace命令行工具对应tagName:nweb。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NWEB: long;
    /**
     * OHOS通用标签，hitrace命令行工具对应tagName:ohos。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const OHOS: long;
    /**
     * 电源管理标签，hitrace命令行工具对应tagName:power。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const POWER_MANAGER: long;
    /**
     * RPC标签，hitrace命令行工具对应tagName:rpc。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const RPC: long;
    /**
     * 系统能力管理标签，hitrace命令行工具对应tagName:samgr。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const SAMGR: long;
    /**
     * 窗口管理标签，hitrace命令行工具对应tagName:window。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const WINDOW_MANAGER: long;
    /**
     * 音频模块标签，hitrace命令行工具对应tagName:zaudio。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const AUDIO: long;
    /**
     * 相机模块标签，hitrace命令行工具对应tagName:zcamera。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const CAMERA: long;
    /**
     * 图片模块标签，hitrace命令行工具对应tagName:zimage。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const IMAGE: long;
    /**
     * 媒体模块标签，hitrace命令行工具对应tagName:zmedia。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MEDIA: long;
  }

  /**
   * 该接口补充了hitrace功能，开发者可通过该接口完成指定范围的trace自动化采集。由于该接口中trace采集过程中消耗的性能与需要采集的范围成正相关，建议开发者在使用该接口前，通过hitrace命令抓取应用的trace日志，从中筛选出所需trace采集的关键范围，以提高该接口性能。
   * `startAppTraceCapture()`方法的调用需要与`stopAppTraceCapture()`方法的调用一一对应，重复开启trace采集将导致接口调用异常，由于trace采集过程中会消耗较多性能，开发者应在完成采集后及时关闭。
   * 应用调用startAppTraceCapture接口启动采集trace，当采集的trace大小超过了limitSize，系统将自动调用stopAppTraceCapture接口停止采集。因此limitSize大小设置不当，将导致生成trace数据不足，无法满足故障分析。所以要求开发者根据实际情况，评估limitSize大小。
   * 评估方法：limitSize = 预期trace采集时长 * trace单位流量。
   * 预期trace采集时长：开发者根据分析的故障场景自行决定，单位秒。
   * trace单位流量：应用每秒产生的trace大小，系统推荐值为300KB/s，建议开发者采用自身应用的实测值，单位KB/s。
   * trace单位流量实测方法：limitSize设置为最大值500M，调用startAppTraceCapture接口，在应用上操作N秒后，调用stopAppTraceCapture停止采集，然后查看trace大小S（KB）。那么trace单位流量 = S/N（KB/s）。
   *
   * @param { long[] } tags - trace范围，详情请见tags。
   * @param { TraceFlag } flag - 详情请见TraceFlag。
   * @param { int } limitSize - 开启trace文件大小限制，单位为Byte，取值范围（0, 500MB]。超出范围时返回错误码401。
   * @returns { string } 返回trace文件名路径（接口返回真实物理路径，若应用内需要访问，请参考应用沙箱路径和真实物理路径的对应关系进行路径转换）。
   * @throws { BusinessError } 401 - Invalid argument, Possible causes:
   *     1.The limit parameter is too small
   *     2.The parameter is not within the enumeration type
   *     3.The parameter type error or parameter order error
   * @throws { BusinessError } 11400102 - Capture trace already enabled.
   * @throws { BusinessError } 11400103 - No write permission on the file.
   * @throws { BusinessError } 11400104 - Abnormal trace status.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function startAppTraceCapture(tags: long[], flag: TraceFlag, limitSize: int): string;

  /**
   * 停止应用trace采集。调用前，需先调用`startAppTraceCapture()`方法开始采集。关闭前未开启或重复关闭会导致接口异常。
   * 调用startAppTraceCapture接口，如果没有合理传入limitSize参数，生成trace的大小大于传入的limitSize大小，系统内部会自动调用stopAppTraceCapture，再次手动调用stopAppTraceCapture就会抛出错误码11400105。
   *
   * @throws { BusinessError } 11400104 - The status of the trace is abnormal
   * @throws { BusinessError } 11400105 - No capture trace running
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function stopAppTraceCapture(): void;

  /**
   * 提供trace采集的参数选项。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface RequestTraceConfig {
    /**
     * 采集trace输出的文件名前缀。文件名前缀只取字符串前20个字符，超过部分将抛弃。前20个字符只包含大小写字母和下划线，若不符合则默认为空字符串。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    identifier: string;
    /**
     * trace文件的缓存大小，以KB为单位。数值为32位无符号整型数字，超出有效范围将导致数值溢出。取值范围为[1024, 15360]，传入参数超过取值范围，参数将被设置为最近的边界值。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    bufferSizeKb: int;

    /**
     * trace采集时长，以ms为单位。数值为32位无符号整型数字，超出有效范围将导致数值溢出。取值范围为[1000, 15000]，传入参数超过取值范围，参数将被设置为最近的边界值。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    durationMs: int;

    /**
     * 预留字段，可以设置为0。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    reserved: int;
  }

  /**
   * 获取当前GWP-ASan剩余使能天数。
   *
   * @returns { number } 获取当前GWP-ASan剩余使能天数。若当前未使能，返回值0。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 22 static
   */
  function getGwpAsanGrayscaleState(): number;

  /**
   * 获取当前进程的trace信息，包含应用tag、图像窗口tag、cpu调度和binder内核信息。使用Promise异步回调。
   * 采集trace返回的.sys文件在目录下最多存储3份，数量大于等于3份时再次调用接口会抛出错误码11400120。
   *
   * @param { RequestTraceConfig } config - trace采集配置信息。
   * @returns { Promise<string> } Promise对象，返回以.sys作为后缀的trace文件的应用沙箱路径。
   * @throws { BusinessError } 11400104 - Remote service exception.
   * @throws { BusinessError } 11400120 - Trace storage limit reached.
   * @throws { BusinessError } 11400302 - Resource unavailable.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  function requestTrace(config: RequestTraceConfig): Promise<string>;

  /**
   * 描述用于存储GC统计信息的键值对。该类型不支持多线程操作，如果应用中存在多线程同时访问，需加锁保护。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  type GcStats = Record<string, long>;

  /**
   * 获取系统GC统计信息。
   *
   * @returns { GcStats } 系统GC统计信息。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getVMRuntimeStats(): GcStats;

  /**
   * 根据参数获取指定的系统GC统计信息。
   *
   * @param { string } item - 所需统计信息的类型。可获取的统计信息类型如下：
   *     "ark.gc.gc-count"：当前线程的GC次数。
   *     "ark.gc.gc-time"：当前线程触发的GC总耗时，以ms为单位。
   *     "ark.gc.gc-bytes-allocated"：当前线程Ark虚拟机已分配的内存大小，以B为单位。
   *     "ark.gc.gc-bytes-freed"：当前线程GC成功回收的内存，以B为单位。
   *     "ark.gc.fullgc-longtime-count"：当前线程超长fullGC次数。
   * @returns { long } 系统GC统计信息，根据传入的参数，返回相应的信息。
   * @throws { BusinessError } 401 - Possible causes:
   *     1. Invalid parameter, a string parameter required.
   *     2. Invalid parameter, unknown property.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getVMRuntimeStat(item: string): long;

  /**
   * 设置应用的文件描述符数量、线程数量、JS内存或Native内存资源限制。
   * 主要应用场景在于构造内存泄漏故障。
   *
   * > **注意**
   * >
   * > 打开设置中的开发者选项后，在开发者选项列表中找到"系统资源泄漏日志"并启用，重启设备后接口生效。
   *
   * @param { string } type - 泄漏资源类型，共四种：
   *     - pss_memory（native内存）
   *     - js_heap（js堆内存）
   *     - fd（文件描述符）
   *     - thread（线程）
   * @param { int } value - 对应泄漏资源类型的最大值，范围：
   *     - pss_memory类型：[1024, 4 * 1024 * 1024]（单位：KB）
   *     - js_heap类型：[85, 95]（分配给JS堆内存上限的85%~95%）
   *     - fd类型：[10, 10000]
   *     - thread类型：[1, 1000]。超出范围会导致功能失效。
   * @param { boolean } enableDebugLog - 是否启用外部调试日志。外部调试日志请仅在灰度版本（正式版本发布之前，先向一小部分用户推出的测试版本）中启用，因为收集调试日志会占用大量的cpu资源和内存资源，可能会引起应用流畅性问题。
   *     true：启用外部调试日志。
   *     false：禁用外部调试日志。
   * @throws { BusinessError } 401 - Invalid argument, Possible causes:
   *     1.The limit parameter is too small
   *     2.The parameter is not in the specified type
   *     3.The parameter type error or parameter order error
   * @throws { BusinessError } 11400104 - Set limit failed due to remote exception
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 12 dynamiconly
   */
  function setAppResourceLimit(type: string, value: int, enableDebugLog: boolean): void;

  /**
   * 获取应用进程的调试状态。
   *
   * @returns { boolean } 应用进程的Ark层或Native层是否处于调试状态。true：处于调试状态。false：未处于调试状态。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function isDebugState(): boolean;

  /**
   * 获取应用显存总大小（gl + graph），使用Promise异步回调。
   *
   * @returns { Promise<int> } promise对象，返回应用显存总大小，单位为KB。
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getGraphicsMemory(): Promise<int>;

  /**
   * 使用同步方式获取应用显存总大小（gl + graph）。
   *
   * > **注意**
   * >
   * > 由于该接口涉及多次跨进程通信，其耗时可能达到秒级。为了避免引入性能问题，建议不要在主线程调用该接口，推荐使用异步接口`getGraphicsMemory`。
   *
   * @returns { int } 应用显存总大小，单位为KB。
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getGraphicsMemorySync(): int;

  /**
   * 描述应用显存数据，包括gl和graph部分。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface GraphicsMemorySummary {
    /**
     * gl显存大小，RenderService渲染进程加载所需资源占用的内存，例如图片、纹理等，以KB为单位。
     *
     * @type { int }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    gl: int;

    /**
     * graph显存大小，进程统计的DMA内存占用，包括直接通过接口申请的DMA buffer和通过allocator_host申请的DMA buffer，以KB为单位。
     *
     * @type { int }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    graph: int;
  }

  /**
   * 获取应用显存数据，使用Promise进行异步回调。
   *
   * @param { int } [interval] 显存数据缓存值有效时间，单位为秒。默认值：300。取值范围为[2-3600]。若传入值超出取值范围时，将使用默认值。
   *     当显存数据缓存值存在时间超过该值时，获取最新显存数据并更新缓存值；否则，直接获取缓存值。
   *     取值范围为全体整数。
   * @returns { Promise<GraphicsMemorySummary> } promise对象，返回应用显存数据。
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function getGraphicsMemorySummary(interval?: int): Promise<GraphicsMemorySummary>;

  /**
   * 转储堆快照的裁剪级别的枚举。
   * TRIM_LEVEL_2相比TRIM_LEVEL_1，裁剪时间更长。冻屏的阈值为6秒。使用TRIM_LEVEL_1时，不会达到该阈值；切换至TRIM_LEVEL_2时，裁剪时间可能会超过6秒，触发APP_FREEZE（冻屏事件），导致应用被系统终止，此时回退至TRIM_LEVEL_1级别进行裁剪。
   * 推荐优先使用TRIM_LEVEL_1确保应用稳定，仅在需要更彻底裁剪时尝试TRIM_LEVEL_2。
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  enum JsRawHeapTrimLevel {
    /**
     * LEVEL 1级别裁剪，主要裁剪字符串。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    TRIM_LEVEL_1 = 0,
    /**
     * LEVEL 2级别裁剪，在TRIM_LEVEL_1的基础上，精简了对象地址标识的大小，从8个字节减少到4个字节。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    TRIM_LEVEL_2 = 1
  }

  /**
   * 设置当前进程转储虚拟机原始堆快照的裁剪级别。使用该接口并传入参数TRIM_LEVEL_2，可以有效减少堆快照的文件大小。
   *
   * > **注意**
   * >
   * > 默认裁剪级别是TRIM_LEVEL_1。如果设置了TRIM_LEVEL_2裁剪，需使用API version 20之后的rawheap-translator工具才能将.rawheap文件转换为.heapsnapshot文件，否则可能导致转换失败。
   * >
   * > 该接口影响dumpJsRawHeapData的结果。
   *
   * @param { JsRawHeapTrimLevel } level - 转储堆快照的裁剪级别，默认为TRIM_LEVEL_1。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function setJsRawHeapTrimLevel(level: JsRawHeapTrimLevel): void;

  /**
   * 为当前线程转储虚拟机的原始堆快照，并生成的rawheap格式文件，使用Promise异步回调完成。该文件可通过rawheap-translator工具转化为heapsnapshot格式文件进行解析。
   *
   * > **注意**
   * >
   * > 系统通过该接口转存快照会消耗大量资源，因此严格限制了调用频率和次数。处理完生成的文件后，请立即删除。
   * >
   * > 建议在开发者模式下调用该接口，可免除调用配额限制，当设置的开发者选项开关打开并重启设备后即可生效。
   *
   * @param { boolean } needGC - 转储堆快照前是否需要GC。true：需要GC。false：不需GC。默认值：true。
   * @returns { Promise<string> } Promise对象，返回生成的快照文件路径。
   * @throws { BusinessError } 11400106 - Quota exceeded.
   * @throws { BusinessError } 11400107 - Fork operation failed.
   * @throws { BusinessError } 11400108 - Failed to wait for the child process to finish.
   * @throws { BusinessError } 11400109 - Timeout while waiting for the child process to finish.
   * @throws { BusinessError } 11400110 - Disk remaining space too low.
   * @throws { BusinessError } 11400111 - Napi interface call exception.
   * @throws { BusinessError } 11400112 - Repeated data dump.
   * @throws { BusinessError } 11400113 - Failed to create dump file.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 18 dynamic
   * @since 26.1.0 static
   */
  function dumpJsRawHeapData(needGC?: boolean): Promise<string>;

  /**
   * 为当前线程转储虚拟机的原始堆快照，并支持清除nodeId缓存。生成的文件为rawheap格式，使用Promise异步回调完成。该文件可通过rawheap-translator工具转化为heapsnapshot格式文件进行解析。
   *
   * > **注意**
   * >
   * > 系统通过该接口转存快照会消耗大量资源，因此严格限制了调用频率和次数。处理完生成的文件后，请立即删除。
   * >
   * > 建议在开发者模式下调用该接口，可免除调用配额限制，当设置的开发者选项开关打开并重启设备后即可生效。
   *
   * @param { boolean } needGC - 转储堆快照前是否需要GC。true：需要GC；false：不需要GC。
   * @param { boolean } [needClean] - 转储堆快照前是否需要清除nodeId。true：需要清除；false：不需要清除。
   * @returns { Promise<string> } Promise对象，返回生成的快照文件路径。
   * @throws { BusinessError } 11400106 - Quota exceeded.
   * @throws { BusinessError } 11400107 - Fork operation failed.
   * @throws { BusinessError } 11400108 - Failed to wait for the child process to finish.
   * @throws { BusinessError } 11400109 - Timeout while waiting for the child process to finish.
   * @throws { BusinessError } 11400110 - Disk remaining space too low.
   * @throws { BusinessError } 11400111 - Napi interface call exception.
   * @throws { BusinessError } 11400112 - Repeated data dump.
   * @throws { BusinessError } 11400113 - Failed to create dump file.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  function dumpJsRawHeapData(needGC: boolean, needClean: boolean): Promise<string>;

  /**
   * 为当前线程或其所属进程生成虚拟机的原始堆快照，并支持清除nodeId缓存，生成的文件为rawheap格式。使用Promise异步回调。文件可通过rawheap-translator工具转换为heapsnapshot格式文件进行解析。
   *
   * > **注意**
   * >
   * > 系统通过该接口转储快照会消耗大量资源，因此严格限制了调用频率和次数。处理完生成的文件后，请立即删除。
   * >
   * > 建议在开发者模式下调用该接口，可免除调用配额限制，当设置的开发者选项开关打开并重启设备后即可生效。
   *
   * @param { boolean } needGC - 转储堆快照前是否需要GC。true：需要GC；false：不需要GC。
   * @param { boolean } needClean - 转储堆快照前是否需要清除nodeId。true：需要清除；false：不需要清除。
   * @param { boolean } processDump - 是否转储当前线程所属进程的原始堆快照。true：转储当前线程所属进程的原始堆快照。
   * @returns { Promise<Array<string>> } Promise对象，返回生成的快照文件路径数组。
   * @throws { BusinessError } 11400106 - Quota exceeded.
   * @throws { BusinessError } 11400107 - Fork operation failed.
   * @throws { BusinessError } 11400108 - Failed to wait for the child process to finish.
   * @throws { BusinessError } 11400109 - Timeout while waiting for the child process to finish.
   * @throws { BusinessError } 11400110 - Disk remaining space too low.
   * @throws { BusinessError } 11400111 - Napi interface call exception.
   * @throws { BusinessError } 11400112 - Repeated data dump.
   * @throws { BusinessError } 11400113 - Failed to create dump file.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function dumpJsRawHeapData(needGC: boolean, needClean: boolean, processDump: boolean): Promise<Array<string>>;

  /**
   * GWP-ASan配置项。可用于配置是否使能、采样频率，以及最大分配的插槽数。
   *
   * @interface GwpAsanOptions
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  interface GwpAsanOptions {
    /**
     * 控制是否每次启动都使能GWP-ASan。true：100%使能GWP-ASan。false：1/128概率使能GWP-ASan。默认值：false。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    alwaysEnabled?: boolean;
    /**
     * GWP-ASan采样频率，默认值为2500，需要传入大于0的正整数，若传入小数则向上取整。1/sampleRate的概率对分配的内存进行采样。建议值：>=1000，过小会显著影响性能。
     *
     * @type { ?int }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    sampleRate?: int;
    /**
     * 最大分配的插槽数，默认值为1000，需要传入大于0的正整数，若传入小数则向上取整。当插槽用尽时，新分配的内存将不再受监控。释放已使用的内存后，其占用的插槽将自动复用。建议值：<=20000，过大会可能导致VMA超限崩溃。
     *
     * @type { ?int }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    maxSimutaneousAllocations?: int;
    /**
     * 用于控制应用以100%概率开启GWP-ASan时，是否以可恢复模式运行。true：当GWP-ASan以100%概率开启时，应用以可恢复模式运行。false：当GWP-ASan以100%概率开启时，应用以不可恢复模式运行。默认值：false。注意：该参数只在"以100%概率开启GWP-ASan"场景下生效；1/128概率开启场景下默认为可恢复，不受isRecover控制。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isRecover?: boolean;
  }

  /**
   * 使能GWP-ASan，用于检测堆内存使用中的非法行为。
   * 该接口主要用于动态配置并启用GWP-ASan，以适配应用自定义的GWP-ASan检测策略。配置在应用重新启动后生效。
   *
   * @param { GwpAsanOptions } [options] - GWP-ASan配置项。未设置时，使用默认参数。
   * @param { int } [duration] - GWP-ASan持续时间，单位为天，默认值为7。需传入大于0的正整数。
   * @throws { BusinessError } 11400114 - The number of GWP-ASAN applications of this device overflowed after last boot.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function enableGwpAsanGrayscale(options?: GwpAsanOptions, duration?: int): void;

  /**
   * 停止使能GWP-ASan。调用该接口将取消自定义配置，恢复默认参数GwpAsanOptions。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function disableGwpAsanGrayscale(): void;

  /**
   * 获取当前GWP-ASan剩余使能天数。
   *
   * @returns { int } 获取当前GWP-ASan剩余使能天数。若当前未使能，返回值0。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getGwpAsanGrayscaleState(): int;

  /**
   * 将转储的堆快照由线程级改为进程级。
   *
   * > **注意**
   * >
   * > 要想转储进程级的堆快照，调用该接口并传参true、进程OOM时发生的是SharedHeap OOM，两个条件缺一不可。
   * >
   * > 该接口不影响其他场景下转储的堆快照内容。如：不会影响dumpJsRawHeapData的结果。
   * >
   * > 该接口在应用的生命周期内可被多次调用，但仅最后一次调用的执行结果会生效。
   *
   * @param { boolean } enable - 当进程发生SharedHeap OOM时，系统将依据该进程在其生命周期中最后一次调用该接口所记录的信息，转储相应级别的堆快照。
   *     true：进程级。
   *     false：线程级。
   *     默认值：false。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamiconly
   */
  function setProcDumpInSharedOOM(enable: boolean): void;

  /**
   * 描述应用进程的物理内存信息。
   *
   * @interface RssInfo
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface RssInfo {

    /**
     * 实际占用的物理内存大小（Resident Set Size），包含匿名页、文件映射页和共享内存页，以KB为单位，计算方式：/proc/{pid}/status: VmRss。
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    rss: bigint;

    /**
     * 换出到交换分区的匿名私有页总大小，以KB为单位，计算方式：/proc/{pid}/status: VmSwap。
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    swapRss: bigint;
  }

  /**
   * 获取应用程序进程的物理内存使用信息。读取/proc/{pid}/status节点的数据。
   *
   * > **注意**
   * >
   * > 读取/proc/{pid}/status耗时很短，与hidebug.getAppNativeMemInfo接口中获取的`rss`值相比存在一点误差，但该接口更加轻量，为避免应用丢帧或卡顿推荐使用该接口。
   *
   * @returns { RssInfo } 应用进程的物理内存信息。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  function getRssInfo(): RssInfo;

  /**
   * 使能GWP-ASan，用于检测堆内存使用中的非法行为。
   * @param { GwpAsanOptions } [options] - GWP-ASan配置项。未设置时，使用默认参数。
   * @param { number } [duration] - GWP-ASan持续时间，单位为天，默认值为7。需传入大于0的正整数。
   * @throws { BusinessError } 11400114 - The number of GWP-ASAN applications of this device overflowed after last boot.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 22 static
   */
  function enableGwpAsanGrayscale(options?: GwpAsanOptions, duration?: number): void;
}

export default hidebug;
