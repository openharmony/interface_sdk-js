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
 * HiDebug provides multiple methods for debugging and profiling applications. With these methods, you can obtain
 * memory, CPU, GPU, and GC data, collect process trace and profiler data, and dump VM heap snapshots. Since most APIs
 * of this module are both performance-consuming and time-consuming, and are defined based on the HiDebug module, you
 * are advised to use these APIs only during the application debugging and profiling phases. If the APIs are required in
 * other scenarios, evaluate the impact of the APIs on application performance.
 *
 * @namespace hidebug
 * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
 * @atomicservice
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace hidebug {
  /**
   * Obtains the total number of bytes occupied by the total space (**uordblks** + **fordblks**, which are obtained from
   * **mallinfo**) held by a process, which is measured by the memory allocator.
   *
   * @returns { bigint } Size of the memory occupied by the total space held by the process, in bytes.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapSize() : bigint;

  /**
   * Obtains the total number of bytes occupied by the total allocated space (**uordblks**, which is obtained from
   * **mallinfo**) held by a process, which is measured by the memory allocator.
   *
   * @returns { bigint } Size of the memory occupied by the total allocated space held by the process, in bytes.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapAllocatedSize() : bigint;

  /**
   * Obtains the total number of bytes occupied by the total free space (**fordblks**, which is obtained from
   * **mallinfo**) held by a process, which is measured by the memory allocator.
   *
   * @returns { bigint } Size of the memory occupied by the total free space held by the process, in bytes.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapFreeSize() : bigint;

  /**
   * Obtains the virtual set size used by the application process. This API is implemented by multiplying the value of
   * **size** (number of memory pages) in the **\/proc/{pid}/statm** node by the page size (4 KB per page).
   *
   * @returns { bigint } Virtual set size used by the application process, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 11 dynamic
   * @since 23 static
   */
  function getVss(): bigint;

  /**
   * Obtains the size of the physical memory actually used by the application process. This API is implemented by
   * summing up the values of **Pss** and **SwapPss** in the **\/proc/{pid}/smaps_rollup** node.
   *
   * > **NOTE**
   * >
   * > Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API
   * > in the main thread. You can use this API in the asynchronous thread started by calling
   * > [@ohos.taskpool]{@link @ohos.taskpool:taskpool} or [@ohos.worker]{@link @ohos.worker} to avoid frame freezing.
   *
   * @returns { bigint } Size of the physical memory actually used by the application process, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getPss() : bigint;

  /**
   * Obtains the size of the shared dirty memory of a process. This API is implemented by reading the value of
   * **Shared_Dirty** in the **\/proc/{pid}/smaps_rollup** node.
   *
   * > **NOTE**
   * >
   * > Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API
   * > in the main thread. You can use this API in the asynchronous thread started by calling
   * > [@ohos.taskpool]{@link @ohos.taskpool:taskpool} or [@ohos.worker]{@link @ohos.worker} to avoid frame freezing.
   *
   * @returns { bigint } Size of the shared dirty memory of the process, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getSharedDirty() : bigint;

  /**
   * Obtains the size of the private dirty memory of a process. This API is implemented by reading the value of
   * **Private_Dirty** in the **\/proc/{pid}/smaps_rollup** node.
   *
   * > **NOTE**
   * >
   * > Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API
   * > in the main thread. You can use this API in the asynchronous thread started by calling
   * > [@ohos.taskpool]{@link @ohos.taskpool:taskpool} or [@ohos.worker]{@link @ohos.worker} to avoid frame freezing.
   *
   * @returns { bigint } Size of the private dirty memory of the process, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function getPrivateDirty() : bigint;

  /**
   * Obtains the CPU usage of a process.
   *
   * > **NOTE**
   * >
   * > This API involves cross-process communication and takes a long time. To avoid performance problems, you are
   * > advised not to call this API in the main thread.
   *
   * @returns { double } CPU usage of a process. For example, if the CPU usage is **50%**, **0.5** is returned.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function getCpuUsage() : double;

  /**
   * Starts the VM profiling method. **startProfiling(filename: string)** and **stopProfiling()** are called in pairs.
   * **startProfiling(filename: string)** always occurs before **stopProfiling()**. You are advised not to call either
   * of these methods repeatedly. Otherwise, an exception may occur.
   *
   * @param { string } filename - Custom file name of the sampling data. The .json file is generated in the **files**
   *     directory of the application based on the specified file name. The maximum length of a string is 128.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hidebug.startJsCpuProfiling
   */
  function startProfiling(filename: string): void;

  /**
   * Stops the VM profiling method. **stopProfiling()** and **startProfiling(filename: string)** are called in pairs.
   * **startProfiling(filename: string)** always occurs before **stopProfiling()**. You are advised not to call either
   * of these methods repeatedly. Otherwise, an exception may occur.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hidebug.stopJsCpuProfiling
   */
  function stopProfiling(): void;

  /**
   * Dumps the VM heap data and generates the **filename.heapsnapshot** file.
   *
   * @param { string } filename - User-defined heap file name. The .heapsnapshot file is generated in the **files**
   *     directory of the application based on the specified file name. The maximum length of a string is 128.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hidebug.dumpJsHeapData
   */
  function dumpHeapData(filename: string): void;

  /**
   * Starts the VM profiling method. **startJsCpuProfiling(filename: string)** and **stopJsCpuProfiling()** are called
   * in pairs. **startJsCpuProfiling(filename: string)** always occurs before **stopJsCpuProfiling()**. You are advised
   * not to call either of these methods repeatedly. Otherwise, an exception may occur.
   *
   * @param { string } filename - Custom file name of the sampling data. The .json file is generated in the **files**
   *     directory of the application based on the specified file name. The maximum length of a string is 128.
   * @throws {BusinessError} 401 - the parameter check failed, Parameter type error
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function startJsCpuProfiling(filename : string) : void;

  /**
   * Stops the VM profiling method. **stopJsCpuProfiling()** and **startJsCpuProfiling(filename: string)** are called in
   * pairs. **startJsCpuProfiling()** always occurs before **stopJsCpuProfiling()**. You are advised not to call either
   * of these methods repeatedly. Otherwise, an exception may occur.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function stopJsCpuProfiling() : void;

  /**
   * Dumps VM heap data.
   *
   * > **NOTE**
   * >
   * > Exporting the VM heap is time-consuming, and this API is a synchronous API. Therefore, you are advised not to
   * > call this API in the release version. Otherwise, the application screen may freeze, affecting user experience.
   *
   * @param { string } filename - User-defined name of the VM heap data output file. The .heapsnapshot file is generated
   *     in the **files** directory of the application based on the specified file name. The maximum length of a string
   *     is 128 bytes.
   * @throws {BusinessError} 401 - the parameter check failed, Parameter type error
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 26.1.0 static
   */
  function dumpJsHeapData(filename : string) : void;

  /**
   * Dumps VM heap data and clears the nodeId cache.
   *
   * > **NOTE**
   * >
   * > Exporting the VM heap is time-consuming, and this API is a synchronous API. Therefore, you are advised not to
   * > call this API in the release version. Otherwise, the application screen may freeze, affecting user experience.
   *
   * @param { string } filename - Custom name of the heap dump file. A **fileName.heapsnapshot** file will be generated
   *     in the **files** directory of the application. The maximum length of a string is 128 bytes.
   * @param { boolean } needClean - Whether to clear the node ID cache before dumping heap snapshots. **true**: yes;
   *     **false**: no.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  function dumpJsHeapData(filename : string, needClean : boolean) : void;

  /**
   * Obtains system service information.
   *
   * @permission ohos.permission.DUMP
   * @param { int } serviceid - Service ID used to obtain system service information.
   * @param { int } fd - File descriptor to which data is written by the API.
   * @param { Array<string> } args - Parameter list of the **Dump** API of the system service. The maximum length of a
   *     string is 254 characters. The excess part will be truncated.
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
   * Obtains the CPU usage of the system.
   *
   * > **NOTE**
   * >
   * > This API involves cross-process communication and takes a long time. To avoid performance problems, you are
   * > advised not to call this API in the main thread.
   *
   * @returns { double } CPU usage of the system. For example, if the CPU usage is **50%**, **0.5** is returned.
   * @throws { BusinessError } 11400104 - The status of the system CPU usage is abnormal.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getSystemCpuUsage(): double;

  /**
   * Describes the CPU usage of a thread.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface ThreadCpuUsage {
    /**
     * Thread ID.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    threadId: long;
    /**
     * CPU usage of the thread.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    cpuUsage: double;
  }

  /**
   * Obtains the CPU usage of application threads.
   *
   * > **NOTE**
   * >
   * > This API involves cross-process communication and takes a long time. To avoid performance problems, you are
   * > advised not to call this API in the main thread.
   *
   * @returns { ThreadCpuUsage[] } CPU usage of all threads of the current application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppThreadCpuUsage(): ThreadCpuUsage[];

  /**
   * Describes the system memory information, including the total memory, free memory, and available memory.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface SystemMemInfo {
    /**
     * Total memory of the system, in KB. The value of this parameter is obtained by reading the value of **MemTotal**
     * in the **\/proc/meminfo** node.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    totalMem: bigint;
    /**
     * Free memory of the system, in KB. The value of this parameter is obtained by reading the value of **MemFree** in
     * the **\/proc/meminfo** node.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    freeMem: bigint;
    /**
     * Available memory of the system, in KB. The value of this parameter is obtained by reading the value of
     * **MemAvailable** in the **\/proc/meminfo** node.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    availableMem: bigint;
  }

  /**
   * Obtains system memory information. This API is implemented by reading data from the **\/proc/meminfo** node.
   *
   * @returns { SystemMemInfo } System memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getSystemMemInfo(): SystemMemInfo;

  /**
   * Describes memory information of the application process.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface NativeMemInfo {
    /**
     * Process proportional set size memory, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    pss: bigint;
    /**
     * Virtual set size memory, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vss: bigint;
    /**
     * Resident set size, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    rss: bigint;
    /**
     * The size of the shared dirty memory, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    sharedDirty: bigint;
    /**
     * The size of the private dirty memory, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    privateDirty: bigint;
    /**
     * The size of the shared clean memory, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    sharedClean: bigint;
    /**
     * The size of the private clean memory, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    privateClean: bigint;
  }

  /**
   * Obtains the memory information of the application process. This API is implemented by reading data from the
   * **\/proc/{pid}/smaps_rollup and /proc/{pid}/statm** node.
   *
   * > **NOTE**
   * >
   * > Reading the **\/proc/{pid}/smaps_rollup** node takes a long time. You are advised to use the asynchronous API
   * > [hidebug.getAppNativeMemInfoAsync]{@link hidebug.getAppNativeMemInfoAsync} to avoid frame loss or frame freezing.
   * >
   * > You are advised to use the [hidebug.getRssInfo]{@link hidebug.getRssInfo} API to obtain the RSS information of an
   * > application.
   *
   * @returns { NativeMemInfo } Memory information of the application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfo(): NativeMemInfo;

  /**
   * Defines the memory limit of the application process.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface MemoryLimit {
    /**
     * The limit of the application process's resident set, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    rssLimit: bigint;
    /**
     * The limit of the application process's virtual memory, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vssLimit: bigint;
    /**
     * The limit of the js vm heap size of current virtual machine, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vmHeapLimit: bigint;
    /**
     * The limit of the total js vm heap size of process, in kilobyte
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vmTotalHeapSize: bigint;
  }

  /**
   * Obtains the memory limit of an application process.
   *
   * @returns { MemoryLimit } Memory limit of the application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppMemoryLimit(): MemoryLimit;

  /**
   * Describes the VM memory information.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface VMMemoryInfo {
    /**
     * Total heap size of the current VM, in KB.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    totalHeap: bigint;
    /**
     * Heap size used by the current VM, in KB.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    heapUsed: bigint;
    /**
     * Size of all array objects of the current VM, in KB.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    allArraySize: bigint;
  }

  /**
   * Obtains VM memory information.
   *
   * @returns { VMMemoryInfo } VM memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppVMMemoryInfo(): VMMemoryInfo;

  /**
   * Obtains the VM memory size occupied by ArkTS objects.
   *
   * @returns { bigint } VM memory size occupied by ArkTS objects, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 21 dynamic
   * @since 23 static
   */
  function getAppVMObjectUsedSize(): bigint;

  /**
   * Obtains the memory information of application processes by reading the data of the **\/proc/{pid}/smaps_rollup** and
   * **\/proc/{pid}/statm** nodes. This API uses a promise to return the result.
   *
   * @returns { Promise<NativeMemInfo> } Promise used to return the application process memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfoAsync(): Promise<NativeMemInfo>;

  /**
   * Obtains the memory information of the application process. This API uses the cache mechanism and has higher
   * performance than the **getAppNativeMemInfo** API. The cache is valid for 5 minutes.
   *
   * > **NOTE**
   * >
   * > Reading **\/proc/{pid}/smaps_rollup** is time-consuming. Therefore, you are advised not to use this API in the
   * > main thread. You can use [@ohos.taskpool]{@link @ohos.taskpool:taskpool} or [@ohos.worker]{@link @ohos.worker} to
   * > enable asynchronous threads to avoid application frame freezing.
   *
   * @param { boolean } [forceRefresh] - Whether to ignore the cache validity and forcibly update the cache value. The
   *     default value is **false**.
   *     <br>The value **true** means to directly obtain the current memory data and update the cache value.
   *     <br>The value **false** means to directly return the cache value if the cache is valid and obtain the current
   *     memory data and update the cache value if the cache is invalid.
   * @returns { NativeMemInfo } Memory information of the application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfoWithCache(forceRefresh?: boolean): NativeMemInfo;

  /**
   * Describes types of trace collection threads, including the main thread and all threads.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  enum TraceFlag {
    /**
     * The main thread of the application.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    MAIN_THREAD = 1,
    /**
     * All threads of the application.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_THREADS = 2
  }

  /**
   * Provide trace tags
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  namespace tags {
    /**
     * Capability management. The corresponding HiTrace command is **tagName:ability**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ABILITY_MANAGER: long;
    /**
     * ArkUI development framework. The corresponding HiTrace command is **tagName:ace**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ARKUI: long;
    /**
     * JSVM VM. The corresponding HiTrace command is **tagName:ark**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ARK: long;
    /**
     * Bluetooth. The corresponding HiTrace command is **tagName:bluetooth**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const BLUETOOTH: long;
    /**
     * Common library subsystem. The corresponding HiTrace command is **tagName:commonlibrary**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const COMMON_LIBRARY: long;
    /**
     * Distributed hardware device management. The corresponding HiTrace command is **tagName:devicemanager**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_HARDWARE_DEVICE_MANAGER: long;
    /**
     * Distributed audio. The corresponding HiTrace command is **tagName:daudio**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_AUDIO: long;
    /**
     * Distributed camera. The corresponding HiTrace command is **tagName:dcamera**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_CAMERA: long;
    /**
     * Distributed data management. The corresponding HiTrace command is **tagName:distributeddatamgr**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_DATA: long;
    /**
     * Distributed hardware framework. The corresponding HiTrace command is **tagName:dhfwk**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_HARDWARE_FRAMEWORK: long;
    /**
     * Distributed input. The corresponding HiTrace command is **tagName:dinput**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_INPUT: long;
    /**
     * Distributed screen. The corresponding HiTrace command is **tagName:dscreen**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SCREEN: long;
    /**
     * Distributed scheduler. The corresponding HiTrace command is **tagName:dsched**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SCHEDULER: long;
    /**
     * FFRT task. The corresponding HiTrace command is **tagName:ffrt**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const FFRT: long;
    /**
     * File management system. The corresponding HiTrace command is **tagName:filemanagement**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const FILE_MANAGEMENT: long;
    /**
     * Global resource management. The corresponding HiTrace command is **tagName:gresource**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const GLOBAL_RESOURCE_MANAGER: long;
    /**
     * Graphics module. The corresponding HiTrace command is **tagName:graphic**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const GRAPHICS: long;
    /**
     * HDF subsystem. The corresponding HiTrace command is **tagName:hdf**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const HDF: long;
    /**
     * MISC module. The corresponding HiTrace command is **tagName:misc**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MISC: long;
    /**
     * Multi-modal input module. The corresponding HiTrace command is **tagName:multimodalinput**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MULTIMODAL_INPUT: long;
    /**
     * Network. The corresponding HiTrace command is **tagName:net**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NET: long;
    /**
     * Notification module. The corresponding HiTrace command is **tagName:notification**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NOTIFICATION: long;
    /**
     * Nweb. The corresponding HiTrace command is **tagName:nweb**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NWEB: long;
    /**
     * OHOS. The corresponding HiTrace command is **tagName:ohos**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const OHOS: long;
    /**
     * Power management. The corresponding HiTrace command is **tagName:power**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const POWER_MANAGER: long;
    /**
     * RPC. The corresponding HiTrace command is **tagName:rpc**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const RPC: long;
    /**
     * System capability management. The corresponding HiTrace command is **tagName:samgr**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const SAMGR: long;
    /**
     * Window management. The corresponding HiTrace command is **tagName:window**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const WINDOW_MANAGER: long;
    /**
     * Audio module. The corresponding HiTrace command is **tagName:zaudio**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const AUDIO: long;
    /**
     * Camera module. The corresponding HiTrace command is **tagName:zcamera**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const CAMERA: long;
    /**
     * Image module. The corresponding HiTrace command is **tagName:zimage**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const IMAGE: long;
    /**
     * Media module. The corresponding HiTrace command is **tagName:zmedia**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MEDIA: long;
  }

  /**
   * Starts automatic trace collection in a specified scope. This API is a supplement to the
   * HiTrace module. The performance consumption during trace collection increases with the
   * collection scope. Therefore, before using this API, you are advised to run the **hitrace** command to capture trace
   * logs and select the key scope of trace collection to improve the API performance.
   *
   * **startAppTraceCapture()** and [stopAppTraceCapture()]{@link hidebug.stopAppTraceCapture} must be called in pairs.
   * Repeat calling of **startAppTraceCapture()** will cause exceptions. Trace collection consumes a lot of performance
   * resources. Therefore, call **stopAppTraceCapture()** immediately after trace collection is complete.
   *
   * When an application calls **startAppTraceCapture()** to collect trace data and the size of the data exceeds the
   * value of **limitSize**, the system automatically calls **stopAppTraceCapture()** to stop trace collection.
   * Therefore, if **limitSize** is set improperly, the generated trace data is insufficient for fault analysis.
   * Therefore, you need to evaluate the value of **limitSize** as required.
   *
   * Evaluation method: limitSize = Expected trace collection duration x Unit trace traffic.
   *
   * Expected trace collection duration: You can determine the duration based on the fault scenario. The unit is second.
   *
   * Unit trace traffic: Size of trace data generated by an application per second, in KB/s. The recommended value is 30
   * 0 KB/s. You are advised to use the actual value of your application.
   *
   * To obtain the unit trace traffic of an application, you can call **startAppTraceCapture()** with **limitSize** set
   * to the maximum value 500 MB. After **N** seconds, call **stopAppTraceCapture()** to stop the collection and check
   * the size **S** (KB) of the trace data. The unit trace traffic is **S**\/**N** (KB/s).
   *
   * @param { long[] } tags - Scope for trace collection. For details, see [tags]{@link hidebug.tags}.
   * @param { TraceFlag } flag - For details, see [TraceFlag]{@link hidebug.TraceFlag}.
   * @param { int } limitSize - Limit on the trace file size, in bytes. The maximum size of a single file is 500 MB.
   * @returns { string } Trace file path. (The API returns the actual physical path. If the path needs to be accessed in
   *     the application, convert the path by referring to
   *     Mappings Between Application Sandbox Paths and Physical Paths.
   *     )
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
   * Stops application trace collection. Use [startAppTraceCapture()]{@link hidebug.startAppTraceCapture} to start
   * collection before calling this API. If this API is called before trace collection or it is repeatedly called, an
   * exception will occur.
   *
   * If **startAppTraceCapture ()** is called without a properly specified **limitSize**, the size of the generated
   * trace may exceed the **limitSize** value, causing the system to automatically call **stopAppTraceCapture()**. In
   * this case, if **stopAppTraceCapture()** is called again, an error code 11400105 will be displayed.
   *
   * @throws { BusinessError } 11400104 - The status of the trace is abnormal
   * @throws { BusinessError } 11400105 - No capture trace running
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function stopAppTraceCapture(): void;

  /**
   * Provides options of trace collection.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface RequestTraceConfig {
    /**
     * Prefix of the name of the file generated by trace collection. Only the first 20 characters of the string are used
     * as the prefix. They can contain only uppercase letters, lowercase letters, and underscores (_). If the value does
     * not meet the requirements, it defaults to an empty string.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    identifier: string;
    /**
     * Cache size of the trace file, in KB. The value is a 32-bit unsigned integer. If the value is out of the valid
     * range, an overflow occurs. The value range is [1024, 15360]. If the input parameter is out of the valid range,
     * the parameter will be set to the nearest boundary value.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    bufferSizeKb: int;

    /**
     * Trace collection duration, in milliseconds. The value is a 32-bit unsigned integer. If the value is out of the
     * valid range, an overflow occurs. The value range is [1000, 15000]. If the input parameter is out of the valid
     * range, the parameter will be set to the nearest boundary value.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    durationMs: int;

    /**
     * Reserved field. The value can be set to **0**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    reserved: int;
  }

  /**
   * Obtains the trace information of the current process, including the application tag, image window tag, CPU
   * scheduling, and binder kernel information. This API uses a promise to return the result.
   *
   * A maximum of three .sys files returned by trace collection can be stored in the directory. If the number of .sys
   * files is greater than or equal to three, error code 11400120 is reported when the API is called again.
   *
   * This API cannot be used in the input method applications.
   *
   * @param { RequestTraceConfig } config - Trace collection configuration information.
   * @returns { Promise<string> } Promise used to return the application sandbox path of the .sys trace file.
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
   * Describes the key-value pair used to store GC statistics. This type does not support multi-thread operations. If
   * this type is operated by multiple threads at the same time in an application, use a lock for it.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  type GcStats = Record<string, long>;

  /**
   * Obtains the system GC statistics.
   *
   * @returns { GcStats } System GC statistics.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getVMRuntimeStats(): GcStats;

  /**
   * Obtains the specified system GC statistics based on parameters.
   *
   * @param { string } item - Type of the statistics to obtain. The following statistics can be obtained:
   *     <br>**"ark.gc.gc-count"**: number of GC times of the current thread.
   *     <br>**"ark.gc.gc-time"**: total GC duration triggered by the current thread, in milliseconds.
   *     <br>**"ark.gc.gc-bytes-allocated"**: size of the Ark VM memory allocated to the current thread, in bytes.
   *     <br>**"ark.gc.gc-bytes-freed"**: memory freed by GC of the current thread, in bytes.
   *     <br> **"ark.gc.fullgc-longtime-count"**: number of longtime full GC times triggered by the current thread.
   * @returns { long } System GC statistics returned based on the input parameters.
   * @throws { BusinessError } 401 - Possible causes:
   *     1. Invalid parameter, a string parameter required.
   *     2. Invalid parameter, unknown property.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getVMRuntimeStat(item: string): long;

  /**
   * Sets the number of FDs, number of threads, JS memory, or native memory limit of the application.
   *
   * This API is used to construct a memory leak. For details, see
   * Subscribing to Resource Leak Events (ArkTS) and
   * Subscribing to Resource Leak Events (C/C++).
   *
   * > **NOTE**
   * >
   * > Enable **System resource leak log** in **Developer options** and restart the device for the API to take effect.
   *
   * @param { string } type - Types of leak resources:
   *     <br>- pss_memory (native memory)
   *     <br>- js_heap (JavaScript heap memory)
   *     <br>- fd (file descriptor)
   *     <br>- thread (thread)
   * @param { int } value - Value range of the maximum values of the leak resource types:
   *     <br>- pss_memory: **[1024, 4 × 1024 × 1024]** (Unit: KB)
   *     <br>- js_heap: **[85, 95]** (85% to 95% of the upper size limit of the JS heap memory)
   *     <br>- fd: **[10, 10000]**
   *     <br>- thread: **[1, 1000]**. If the value is out of range, the feature becomes invalid.
   * @param { boolean } enableDebugLog - Whether to enable external debugging logs. Enable external debugging logs only
   *     in the grayscale version (test version released to a small number of users before the official version is
   *     released). Collecting debugging logs occupies a large number of CPU and memory resources, which may cause
   *     application smoothness problems.
   *     <br>The value **true** means to enable external debugging logs, and false means the opposite.
   *     <br>
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
   * Obtains the debugging state of an application process.
   *
   * @returns { boolean } Whether the Ark or native layer of the application process is in the debugging state. The
   *     value **true** indicates that the layer is in the debugging state, and **false** indicates the opposite.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function isDebugState(): boolean;

  /**
   * Obtains the total GPU memory size (**gl** + **graph**) of the application. This API uses a promise to return the
   * result.
   *
   * @returns { Promise<int> } Promise used to return the total GPU memory size of the application, in KB.
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getGraphicsMemory(): Promise<int>;

  /**
   * Obtains the total GPU memory size (GL + graph) of an application in synchronous mode.
   *
   * > **NOTE**
   * >
   * > This API involves multiple cross-process communications, which may take seconds. To avoid performance problems,
   * > you are advised to use the asynchronous API **getGraphicsMemory** instead of this API in the main thread.
   *
   * @returns { int } Total size of the application's GPU memory, in KB.
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getGraphicsMemorySync(): int;

  /**
   * Describes the GPU memory data of an application, including the GL and Graph parts.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface GraphicsMemorySummary {
    /**
     * GL memory size (memory occupied by RenderService for loading required resources, such as images and textures), in
     * KB.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    gl: int;

    /**
     * Graph memory size (DMA memory usage of the process), in KB, including the DMA buffers obtained directly through
     * the API and those obtained through **allocator_host**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    graph: int;
  }

  /**
   * Obtains the GPU memory data of an application. This API uses a promise to return the result.
   *
   * @param { int } [interval] - Validity period of the cached GPU memory data, in seconds. Default value: **300** The
   *     value ranges from 2 to 3600. If the input value is out of the value range, the default value will be used.
   *     <br>If the cached GPU memory data exists for a period longer than the value of this parameter, the latest GPU
   *     memory data is obtained and the cache value is updated. Otherwise, the cache value is directly obtained.
   * @returns { Promise<GraphicsMemorySummary> } Promise used to return the GPU memory data of the application.
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function getGraphicsMemorySummary(interval?: int): Promise<GraphicsMemorySummary>;

  /**
   * Enumerates the trimming levels of the heap snapshot.
   *
   * **TRIM_LEVEL_2** takes a longer time than **TRIM_LEVEL_1**. The threshold for screen freezing is 6 seconds. With
   * **TRIM_LEVEL_1**, the trim duration stays below this threshold. Upon switching to **TRIM_LEVEL_2**, the duration
   * may exceed 6s, triggering an **APP_FREEZE** (screen freeze event) and causing the system to kill the application;
   * the trim level then reverts to **TRIM_LEVEL_1**.
   *
   * You are advised to use **TRIM_LEVEL_1** to ensure application stability and use **TRIM_LEVEL_2 **only when more
   * complete trimming is required.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  enum JsRawHeapTrimLevel {
    /**
     * Level 1 trimming, mainly used for strings.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    TRIM_LEVEL_1 = 0,
    /**
     * Level 2 trimming, which reduces the size of the object address identifier from 8 bytes to 4 bytes based on
     * **TRIM_LEVEL_1**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    TRIM_LEVEL_2 = 1
  }

  /**
   * Sets the trimming level of the original heap snapshot stored by the current process. Using **TRIM_LEVEL_2** for
   * this API can effectively reduce the size of the heap snapshot file.
   *
   * > **NOTE**
   * >
   * > The default trimming level is **TRIM_LEVEL_1**. If **TRIM_LEVEL_2** is set, you need to use
   * > rawheap-translator since API version 20 to convert the .rawheap file to
   * > the .heapsnapshot file. Otherwise, the conversion may fail.
   * >
   * > This API affects the result of [dumpJsRawHeapData]{@link hidebug.dumpJsRawHeapData}.
   *
   * @param { JsRawHeapTrimLevel } level - Trimming level for storing heap snapshots. The default value is
   *     **TRIM_LEVEL_1**.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function setJsRawHeapTrimLevel(level: JsRawHeapTrimLevel): void;

  /**
   * Dumps the original heap snapshot of the VM for the current thread and generates a .rawheap file. This API uses a
   * promise to return the result. The file can be converted into a heapsnapshot file using
   * rawheap-translator for parsing.
   *
   * > **NOTE**
   * >
   * > This API is resource-consuming. Therefore, the calling frequency and times are strictly limited. You need to
   * > delete the files immediately after processing them.
   * >
   * > You are advised to enable **Developer options** before calling this API, so that the calling quota is not
   * > limited. The setting takes effect after the device is restarted.
   *
   * @param { boolean } needGC - Whether GC is required before storing heap snapshots. The value **true** indicates that
   *     GC is required, and **false** indicates the opposite. The default value is **true**.
   * @returns { Promise<string> } Path of the generated snapshot file. (
   *     Application Sandbox
   *     )
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
   * Dumps the original heap snapshot of the VM for the current thread and clears the **nodeId** cache. The generated
   * file is in the rawheap format. This API uses a promise to return the result. The file can be converted into a
   * heapsnapshot file using rawheap-translator for parsing.
   *
   * > **NOTE**
   * >
   * > This API is resource-consuming. Therefore, the calling frequency and times are strictly limited. You need to
   * > delete the files immediately after processing them.
   * >
   * > You are advised to enable **Developer options** before calling this API, so that the calling quota is not
   * > limited. The setting takes effect after the device is restarted.
   *
   * @param { boolean } needGC - Whether GC is required before storing heap snapshots. **true**: yes; **false**: no.
   * @param { boolean } needClean - Whether to clear the node ID before dumping heap snapshots. **true**: yes;
   *     **false**: no.
   * @returns { Promise<string> } Path of the generated snapshot file. (
   *     Application Sandbox
   *     )
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
   * Dumps the original heap snapshot of the VM for the current thread or the process to which the current thread
   * belongs, clears the nodeId cache, and generates a .rawheap file. This API uses a promise to return the result. The
   * file can be converted into a heapsnapshot file using rawheap-translator
   * for parsing.
   *
   * > **NOTE**
   * >
   * > This API is resource-consuming. Therefore, the calling frequency and times are strictly limited. You need to
   * > delete the files immediately after processing them.
   * >
   * > You are advised to enable **Developer options** before calling this API, so that the calling quota is not
   * > limited. The setting takes effect after the device is restarted.
   *
   * @param { boolean } needGC - Whether GC is required before storing heap snapshots. **true**: yes; **false**: no.
   * @param { boolean } needClean - Whether to clear the node ID before dumping heap snapshots. **true**: yes;
   *     **false**: no.
   * @param { boolean } processDump - Whether to dump the original heap snapshot of the process to which the current
   *     thread belongs. **true**: yes.
   * @returns { Promise<Array<string>> } Array of paths of the generated snapshot files. (
   *     Application Sandbox
   *     )
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
   * @since 26.0.0 dynamic
   * @since 26.1.0 static
   */
  function dumpJsRawHeapData(needGC: boolean, needClean: boolean, processDump: boolean): Promise<Array<string>>;

  /**
   * Enumerates the GWP-ASan configuration items. You can configure whether to enable GWP-Asan, the sampling frequency,
   * and the maximum number of allocated slots.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  interface GwpAsanOptions {
    /**
     * The value **true** means to enable GWP-ASan 100%.
     *
     * The value **false** means to enable GWP-ASan at a probability of 1/128.
     *
     * The default value is **false**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    alwaysEnabled?: boolean;
    /**
     * Sampling rate of GWP-ASan. The default value is **2500**. The value must be a positive integer greater than 0. If
     * the value is a decimal, it is rounded up.
     *
     * GWP-Asan performs sampling on the allocated memory at a probability of 1/**sampleRate**.
     *
     * You are advised to set this parameter to a value greater than or equal to 1000. If the value is too small, the
     * performance is affected.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    sampleRate?: int;
    /**
     * Maximum number of allocated slots. The default value is **1000**. The value must be a positive integer greater
     * than 0. If the value is a decimal, it is rounded up.
     *
     * When the slots are used up, the newly allocated memory is no longer monitored.
     *
     * After the used memory is released, the slots occupied by the memory are automatically reused to facilitate
     * subsequent memory monitoring.
     *
     * You are advised to set this parameter to a value less than or equal to 20000. If the value is too large, the VMA
     * may break down.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    maxSimutaneousAllocations?: int;
    /**
     * Used to control whether applications run in recoverable mode when the probability of enabling GWP-ASan is 100%.
     *
     * **true**: When GWP-ASan is enabled with a 100% probability, applications run in recoverable mode. In this mode,
     * after the system detects an out-of-bounds address fault, the process will not crash due to the detection
     * mechanism. However, for errors that have caused invalid memory access, the application may still crash.
     *
     * **false**: When GWP-ASan is enabled with a 100% probability, applications run in unrecoverable mode.
     *
     * The default value is **false**.
     *
     * **Note**: This parameter takes effect only when GWP-ASan is enabled with a 100% probability. When GWP-ASan is
     * enabled with a 1/128 probability, the recoverable mode is used by default and is not controlled by **isRecover**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isRecover?: boolean;
  }

  /**
   * Enables GWP-ASan to detect illegal behaviors in heap memory usage.
   *
   * This API is used to dynamically configure and enable GWP-ASan to adapt to the custom GWP-ASan detection policy. The
   * configuration takes effect after the application is restarted.
   *
   * > **NOTE**
   * >
   * > 1. If the number of GWP-ASan applications configured using this API exceeds the quota during device running, this
   * > API fails to be called and an error code is thrown. Use **try-catch** to capture exceptions to prevent the
   * > application from exiting abnormally.
   * >
   * > 2. After the device restarts, the GWP-ASan parameters set by this API are invalid.
   * >
   * > 3. This API involves cross-process communication and takes a long time. To avoid performance problems, you are
   * > advised not to call this API in the main thread. You can use [@ohos.taskpool]{@link @ohos.taskpool:taskpool} or
   * > [@ohos.worker]{@link @ohos.worker} to enable asynchronous threads to avoid application frame freezing.
   *
   * @param { GwpAsanOptions } [options] - GWP-ASan configuration items. If this parameter is not set, the default
   *     parameter is used.
   * @param { int } [duration] - GWP-ASan duration, in days. The default value is 7. The value must be a positive
   *     integer greater than 0.
   * @throws { BusinessError } 11400114 - The number of GWP-ASAN applications of this device overflowed after last boot.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function enableGwpAsanGrayscale(options?: GwpAsanOptions, duration?: int): void;

  /**
   * Disables GWP-ASan. This API is used to cancel the custom configuration and restore the default parameter
   * [GwpAsanOptions]{@link hidebug.GwpAsanOptions}.
   *
   * > **NOTE**
   * >
   * > This API involves cross-process communication and takes a long time. To avoid performance problems, you are
   * > advised not to call this API in the main thread. You can use [@ohos.taskpool]{@link @ohos.taskpool:taskpool} or
   * > [@ohos.worker]{@link @ohos.worker} to enable asynchronous threads to avoid application frame freezing.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function disableGwpAsanGrayscale(): void;

  /**
   * Obtains the number of remaining days for enabling GWP-ASan.
   *
   * > **NOTE**
   * >
   * > This API involves cross-process communication and takes a long time. To avoid performance problems, you are
   * > advised not to call this API in the main thread. You can use [@ohos.taskpool]{@link @ohos.taskpool:taskpool} or
   * > [@ohos.worker]{@link @ohos.worker} to enable asynchronous threads to avoid application frame freezing.
   *
   * @returns { int } Number of remaining days for enabling GWP-ASan. If GWP-Asan is disabled, **0** is returned.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getGwpAsanGrayscaleState(): int;

  /**
   * Changes the dump heap snapshot from the thread-level to the process-level.
   *
   * > **NOTE**
   * >
   * > To dump a process-level heap snapshot, you must call this API and pass **true**. In addition, SharedHeap OOM must
   * > occur.
   * >
   * > This API does not affect the heap snapshot dumped in other scenarios. For example, it does not affect the result
   * > of [dumpJsRawHeapData]{@link hidebug.dumpJsRawHeapData}.
   * >
   * > This API can be called multiple times in the application lifecycle, but only the last call takes effect.
   *
   * @param { boolean } enable - When SharedHeap OOM occurs in a process, the system dumps the heap snapshot of the
   *     corresponding level based on the information recorded when the process calls the API for the last time in its
   *     lifecycle.
   *     <br>**true**: process level.
   *     <br>**false**: thread level.
   *     <br> The default value is **false**.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamiconly
   */
  function setProcDumpInSharedOOM(enable: boolean): void;

  /**
   * Describes the physical memory information about an application process.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface RssInfo {

    /**
     * Resident set size (RSS), in KB. It includes anonymous pages, file mapping pages, and shared memory pages. The
     * calculation formula is **\/proc/{pid}/status: VmRss**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    rss: bigint;

    /**
     * Total size of anonymous private pages swapped out to the swap partition, in KB. The calculation formula is
     * **\/proc/{pid}/status: VmSwap**.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    swapRss: bigint;
  }

  /**
   * Obtains the physical memory usage of the application process. Reads data from the **\/proc/{pid}/status** node.
   *
   * > **NOTE**
   * >
   * > Reading the /proc/{pid}/status node takes a short time. The value obtained by this API is slightly different from
   * > the **rss** value obtained by the [hidebug.getAppNativeMemInfo]{@link hidebug.getAppNativeMemInfo} API. However,
   * > this API is more lightweight. To avoid frame loss or frame freezing, you are advised to use this API.
   *
   * @returns { RssInfo } Physical memory information about the application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  function getRssInfo(): RssInfo;
}
export default hidebug;