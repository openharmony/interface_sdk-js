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
 *
 *
 * @namespace hidebug
 * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
 * @since 8
 */
/**
 *
 *
 * @namespace hidebug
 * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace hidebug {
  /**
   *
   * @returns { bigint } Size of the memory occupied by the total space held by the process, in bytes.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapSize() : bigint;

  /**
   *
   * @returns { bigint } Size of the memory occupied by the total allocated space held by the process, in bytes.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapAllocatedSize() : bigint;

  /**
   *
   * @returns { bigint } Size of the memory occupied by the total free space held by the process, in bytes.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getNativeHeapFreeSize() : bigint;

  /**
   *
   * @returns { bigint } Virtual set size used by the application process, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 11 dynamic
   * @since 23 static
   */
  function getVss(): bigint;

  /**
   *
   * @returns { bigint } Size of the physical memory actually used by the application process, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getPss() : bigint;

  /**
   *
   * @returns { bigint } Size of the shared dirty memory of the process, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamic
   * @since 23 static
   */
  function getSharedDirty() : bigint;

  /**
   *
   * @returns { bigint } Size of the private dirty memory of the process, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function getPrivateDirty() : bigint;

  /**
   * Obtains the cpu usage percent of a process.
   *
   * @returns { double } CPU usage of a process. For example, if the CPU usage is **50%**, **0.5** is returned.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function getCpuUsage() : double;

  /**
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
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hidebug.stopJsCpuProfiling
   */
  function stopProfiling(): void;

  /**
   *
   * @param { string } filename - User-defined heap file name. The .heapsnapshot file is generated in the **files**
   *     directory of the application based on the specified file name. The maximum length of a string is 128.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead hidebug.dumpJsHeapData(filename : string)
   */
  function dumpHeapData(filename: string): void;

  /**
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
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 9 dynamic
   * @since 23 static
   */
  function stopJsCpuProfiling() : void;

  /**
   * Dump JS Virtual Machine Heap Snapshot.
   * The input parameter is a user-defined file name, excluding the file suffix.
   * The generated file is in the files folder under the application directory.
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
   * 转储JS虚拟机堆快照。
   * 输入参数为自定义文件名，不包含文件后缀。
   * 生成的文件在应用程序目录下的files文件夹中。
   *
   * @param { string } filename - 用户自定义文件名，不包含文件后缀。
   * @param { boolean } [needClean] - Whether to release the snapshot cache before dumping the heap snapshot.
   * The default value is false.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   * @since 26.1.0 static
   */
  function dumpJsHeapData(filename: string, needClean: boolean): void;

  /**
   * Get a debugging dump of a system service by service id.
   * It need dump permission.
   * This API can be called only by system application.
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
   * Obtains the cpu usage of system.
   *
   * @returns { double } CPU usage of the system. For example, if the CPU usage is **50%**, **0.5** is returned.
   * @throws { BusinessError } 11400104 - The status of the system CPU usage is abnormal.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getSystemCpuUsage(): double;

  /**
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface ThreadCpuUsage {
    /**
     * Thread id
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    threadId: long;
    /**
     * Cpu usage of thread
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    cpuUsage: double;
  }

  /**
   *
   * @returns { ThreadCpuUsage[] } CPU usage of all threads of the current application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppThreadCpuUsage(): ThreadCpuUsage[];

  /**
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface SystemMemInfo {
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    totalMem: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    freeMem: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    availableMem: bigint;
  }

  /**
   *
   * @returns { SystemMemInfo } System memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getSystemMemInfo(): SystemMemInfo;

  /**
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface NativeMemInfo {
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    pss: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vss: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    rss: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    sharedDirty: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    privateDirty: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    sharedClean: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    privateClean: bigint;
  }

  /**
   *
   * @returns { NativeMemInfo } Memory information of the application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfo(): NativeMemInfo;

  /**
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface MemoryLimit {
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    rssLimit: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vssLimit: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vmHeapLimit: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    vmTotalHeapSize: bigint;
  }

  /**
   *
   * @returns { MemoryLimit } Memory limit of the application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppMemoryLimit(): MemoryLimit;

  /**
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  interface VMMemoryInfo {
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    totalHeap: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    heapUsed: bigint;
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    allArraySize: bigint;
  }

  /**
   *
   * @returns { VMMemoryInfo } VM memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getAppVMMemoryInfo(): VMMemoryInfo;

  /**
   * Obtains the memory usage of ArkTS objects in the virtual machine.
   *
   * @returns { bigint } VM memory size occupied by ArkTS objects, in KB.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 21 dynamic
   * @since 23 static
   */
  function getAppVMObjectUsedSize(): bigint;

  /**
   * Obtains the memory information of the application process asynchronous. This API is implemented
   *     by reading data from the /proc/{pid}/smaps_rollup and /proc/{pid}/statm node.
   *
   * @returns { Promise<NativeMemInfo> } Promise used to return the application process memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfoAsync(): Promise<NativeMemInfo>;

  /**
   * Obtains the memory information of the application process. This API is implemented by reading data from the
   *     /proc/{pid}/smaps_rollup and /proc/{pid}/statm node. The application memory cache is refresh every 5 minute.
   *     It will be force to refresh when input true of forceRefresh parameter.
   *
   * @param { boolean } [forceRefresh] - Whether to ignore the cache validity and forcibly update the cache value. The
   *     default value is **false**.<br>The value **true** means to directly obtain the current memory data and update
   *     the cache value.<br>The value **false** means to directly return the cache value if the cache is valid and
   *     obtain the current memory data and update the cache value if the cache is invalid.
   * @returns { NativeMemInfo } Memory information of the application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getAppNativeMemInfoWithCache(forceRefresh?: boolean): NativeMemInfo;

  /**
   * Enum for trace flag
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  enum TraceFlag {
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    MAIN_THREAD = 1,
    /**
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_THREADS = 2
  }

  /**
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  namespace tags {
    /**
     * Ability Manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ABILITY_MANAGER: long;
    /**
     * ARKUI development framework tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ARKUI: long;
    /**
     * ARK tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const ARK: long;
    /**
     * Bluetooth tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const BLUETOOTH: long;
    /**
     * Common library subsystem tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const COMMON_LIBRARY: long;
    /**
     * Distributed hardware device manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_HARDWARE_DEVICE_MANAGER: long;
    /**
     * Distributed audio tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_AUDIO: long;
    /**
     * Distributed camera tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_CAMERA: long;
    /**
     * Distributed data manager module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_DATA: long;
    /**
     * Distributed hardware framework tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_HARDWARE_FRAMEWORK: long;
    /**
     * Distributed input tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_INPUT: long;
    /**
     * Distributed screen tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SCREEN: long;
    /**
     * Distributed scheduler tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const DISTRIBUTED_SCHEDULER: long;
    /**
     * FFRT tasks.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const FFRT: long;
    /**
     * File management tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const FILE_MANAGEMENT: long;
    /**
     * Global resource manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const GLOBAL_RESOURCE_MANAGER: long;
    /**
     * Graphics module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const GRAPHICS: long;
    /**
     * HDF subsystem tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const HDF: long;
    /**
     * MISC module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MISC: long;
    /**
     * Multimodal input module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MULTIMODAL_INPUT: long;
    /**
     * Net tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NET: long;
    /**
     * Notification module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NOTIFICATION: long;
    /**
     * NWeb tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const NWEB: long;
    /**
     * OHOS generic tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const OHOS: long;
    /**
     * Power manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const POWER_MANAGER: long;
    /**
     * RPC tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const RPC: long;
    /**
     * SA tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const SAMGR: long;
    /**
     * Window manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const WINDOW_MANAGER: long;
    /**
     * Audio module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const AUDIO: long;
    /**
     * Camera module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const CAMERA: long;
    /**
     * Image module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const IMAGE: long;
    /**
     * Media module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12 dynamic
     * @since 23 static
     */
    const MEDIA: long;
  }

  /**
   * Start capture application trace.
   *
   * @param { long[] } tags - Scope for trace collection. For details, see [tags]{@link hidebug.tags}.
   * @param { TraceFlag } flag - For details, see [TraceFlag]{@link hidebug.TraceFlag}.
   * @param { int } limitSize - Limit on the trace file size, in bytes. The maximum size of a single file is 500 MB.
   * @returns { string } Trace file path. (The API returns the actual physical path. If the path needs to be accessed in
   *     the application, convert the path by referring to
   *     [Mappings Between Application Sandbox Paths and Physical Paths](docroot://file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths)
   *     .)
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
   *
   * @throws { BusinessError } 11400104 - The status of the trace is abnormal
   * @throws { BusinessError } 11400105 - No capture trace running
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function stopAppTraceCapture(): void;

  /**
   * 介绍trace请求配置。
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface RequestTraceConfig {
    /**
     * 作为输出trace文件名前缀的标识符。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    identifier: string;
    /**
     * trace文件的缓冲区大小，单位为kb。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    bufferSizeKb: int;

    /**
     * trace的持续时间，单位为毫秒。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    durationMs: int;

    /**
     * 预留字段，供将来使用。设置为0。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    reserved: int;
  }

  /**
   * Obtain the remaining days of GWP-ASan grayscale for your application.
   *
   * @returns { number } The remaining days of GWP-ASan grayscale.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 22 static
   */
  function getGwpAsanGrayscaleState(): number;

  /**
   * 使用指定的配置请求trace收集。
   *
   * @param { RequestTraceConfig } config - trace请求配置。
   * @returns { Promise<string> } 返回trace文件的路径。
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
   * Collection statistics.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  type GcStats = Record<string, long>;

  /**
   *
   * @returns { GcStats } System GC statistics.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function getVMRuntimeStats(): GcStats;

  /**
   * Get the garbage collection statistics by statistical item.
   *
   * @param { string } item - Type of the statistics to obtain. The following statistics can be obtained:<br>
   *     **"ark.gc.gc-count"**: number of GC times of the current thread.<br>**"ark.gc.gc-time"**: total GC duration
   *     triggered by the current thread, in milliseconds.<br>**"ark.gc.gc-bytes-allocated"**: size of the Ark VM memory
   *     allocated to the current thread, in bytes.<br>**"ark.gc.gc-bytes-freed"**: memory freed by GC of the current
   *     thread, in bytes.<br> **"ark.gc.fullgc-longtime-count"**: number of longtime full GC times triggered by the
   *     current thread.
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
   * Set the resource limitation of application.Please note that this function is only valid
   * when the developer options switch of setting is turned on.
   *
   * @param { string } type - Types of leak resources:<br>- pss_memory (native memory)<br>- js_heap (JavaScript heap
   *     memory)<br>- fd (file descriptor)<br>- thread (thread)
   * @param { int } value - Value range of the maximum values of the leak resource types:<br>- pss_memory:
   *     **[1024, 4 × 1024 × 1024]** (Unit: KB)<br>- js_heap: **[85, 95]** (85% to 95% of the upper size limit of the JS
   *     heap memory)<br>- fd: **[10, 10000]**<br>- thread: **[1, 1000]**. If the value is out of range, the feature
   *     becomes invalid.
   * @param { boolean } enableDebugLog - Whether to enable external debugging logs. Enable external debugging logs only
   *     in the grayscale version (test version released to a small number of users before the official version is
   *     released). Collecting debugging logs occupies a large number of CPU and memory resources, which may cause
   *     application smoothness problems.<br>The value **true** means to enable external debugging logs, and false means
   *     the opposite.<br>
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
   *
   * @returns { boolean } Whether the Ark or native layer of the application process is in the debugging state. The
   *     value **true** indicates that the layer is in the debugging state, and **false** indicates the opposite.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 12 dynamic
   * @since 23 static
   */
  function isDebugState(): boolean;

  /**
   * Get the graphics memory of application
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
   * Get the graphics memory of application
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
   * Graphics memory summary.
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  interface GraphicsMemorySummary {
    /**
     * GL memory
     * 取值范围为全体整数。
     *
     * @type { int }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    gl: int;

    /**
     * Graph memory
     * 取值范围为全体整数。
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
   * Obtains the size of the GPU memory summary. This API uses a promise to return the result.
   *
   * @param { int } [interval] If the cache of graphics memory is older than interval (unit: second), than the latest
   *     graphics memory data will be obtained. The interval value range is 2 seconds to
   *     3600 seconds, If interval is an invalid value, the default value is 300 seconds.
   *     <br>取值范围为全体整数。
   * @returns { Promise<GraphicsMemorySummary> } Promise used to return the GPU memory data of the application.
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function getGraphicsMemorySummary(interval?: int): Promise<GraphicsMemorySummary>;

  /**
   * rawheap堆快照裁剪级别
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  enum JsRawHeapTrimLevel {
    /**
     * 裁剪级别0
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    TRIM_LEVEL_1 = 0,
    /**
     * On top of level 1 trimming, object address size has been additionally trimmed.
     * Please use latest version of rawheap-translator tool for parsing and converting
     * .rawheap into .heapsnapshot file. Conversion process may fail when legacy tool is utilized.
     *
     * A higher trimming level means a longer time needed to generate the .rawheap file.
     * Ensure that this duration falls below the app freeze threshold.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 26.1.0 static
     */
    TRIM_LEVEL_2 = 1
  }

  /**
   *
   * @param { JsRawHeapTrimLevel } level - 裁剪级别
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 26.1.0 static
   */
  function setJsRawHeapTrimLevel(level: JsRawHeapTrimLevel): void;

  /**
   * Dump the raw heap snapshot of the JavaScript Virtual Machine for the current thread.
   *
   * The generated file will be stored in a folder within the application directory. However, since this file is usually
   * large, the system imposes restrictions on the frequency and number of calls to this function. Consequently, you
   * might fail to obtain the dump file due to quota limitations. These failures will persist until the quota is
   * regularly refreshed by the system. Therefore, it is advisable to delete the file immediately after you have
   * finished processing it. Moreover, it is recommended that you use this function in the gray - release version.
   *
   * @param { boolean } needGC - Whether GC is required before storing heap snapshots. The value **true** indicates that
   *     GC is required, and **false** indicates the opposite. The default value is **true**.
   * @returns { Promise<string> } Path of the generated snapshot file. (
   *     [Application Sandbox](docroot://file-management/app-sandbox-directory.md#application-file-directory-and-application-file-path)
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
   * 转储当前线程的ArkTS虚拟机的原始堆快照。
   *
   * @param { boolean } needGC - 是否在dump前进行GC，默认为true。
   * @param { boolean } [needClean] - Whether to release the snapshot cache before dumping the heap snapshot.
   * The default value is false.
   * @returns { Promise<string> } 返回原始堆快照文件的完整路径。
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
   * 转储当前线程的arkts虚拟机的原始堆快照。
   *
   * @param { boolean } needGC - 是否在dump前进行GC，默认为true。
   * @param { boolean } needClean - 转储堆快照前是否释放快照缓存。
   *     默认值为false。
   * @param { boolean } processDump - 是否转储整个进程的堆。
   *     默认值为false。
   * @returns { Promise<Array<string>> } 返回原始堆快照文件的完整路径的列表。
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
   * GWP-ASAN参数选项
   *
   * @interface GwpAsanOptions
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  interface GwpAsanOptions {
    /**
     * sample rate of GWP-ASAN
     *
     * @type { ?number }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 22 static
     */
    sampleRate?: number;
    /**
     * the max simutaneous allocations of GWP-ASAN
     *
     * @type { ?number }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 22 static
     */
    maxSimutaneousAllocations?: number;
    /**
     * 控制是否每次启动都使能gwp-asan
     *
     * @type { ?boolean }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    alwaysEnabled?: boolean;
    /**
     * GWP-ASAN采样频率
     *
     *
     *
     * @type { ?int }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    sampleRate?: int;
    /**
     * 最大同时分配的slot数量
     *
     *
     * @type { ?int }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20 dynamic
     * @since 23 static
     */
    maxSimutaneousAllocations?: int;
    /**
     * GWP-ASAN的可恢复模式。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isRecover?: boolean;
  }

  /**
   * GWP参数
   *
   * @param { GwpAsanOptions } [options] - GWP参数
   * @param { int } [duration] - GWP参数
   * @throws { BusinessError } 11400114 - The number of GWP-ASAN applications of this device overflowed after last boot.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function enableGwpAsanGrayscale(options?: GwpAsanOptions, duration?: int): void;

  /**
   * 取消当前应用的gwp-asan灰度使能
   *
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function disableGwpAsanGrayscale(): void;

  /**
   * 获取当前应用gwp-asan灰度的剩余天数
   *
   *
   * @returns { int } Number of remaining days for enabling GWP-ASan. If GWP-Asan is disabled, **0** is returned.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 23 static
   */
  function getGwpAsanGrayscaleState(): int;

  /**
   * 当发生共享内存OOM时，将线程级别的堆快照转换为进程级别。
   *
   * @param { boolean } enable - 是否转储进程级别原始堆快照。
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamiconly
   */
  function setProcDumpInSharedOOM(enable: boolean): void;

  /**
   * 描述应用进程的物理内存信息
   *
   * @interface RssInfo
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface RssInfo {

    /**
     * 已占用物理内存大小（包含共享库占用的内存），单位为千字节(KB)。
     * 该参数的值通过读取 /proc/{pid}/status 节点中的 VmRSS 值获得。
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @FaAndStageModel
     * @atomicservice
     * @since 24 dynamic&static
     */
    rss: bigint;

    /**
     * 进程在交换分区（swap）中占用的内存大小，单位为千字节(KB)。
     * 该参数的值通过读取 /proc/{pid}/status 节点中的 VmSwap 值获得。
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
   * 获取应用进程的物理内存信息。此API的实现方式为从 /proc/{pid}/status 文件中读取数据。
   *
   * @returns { RssInfo } Physical memory information about the application process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @FaAndStageModel
   * @atomicservice
   * @since 24 dynamic&static
   */
  function getRssInfo(): RssInfo;

  /**
   * Enable the GWP-ASAN grayscale of your application.
   * @param { GwpAsanOptions } [options] - The options of GWP-ASAN grayscale.
   * @param { number } [duration] - The duration days of GWP-ASAN grayscale.
   * @throws { BusinessError } 11400114 - The number of GWP-ASAN applications of this device overflowed after last boot.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20 dynamic
   * @since 22 static
   */
  function enableGwpAsanGrayscale(options?: GwpAsanOptions, duration?: number): void;
}

export default hidebug;
