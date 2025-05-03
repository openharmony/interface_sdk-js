/*
* Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * Provide interfaces related to debugger access and obtaining CPU,
 * memory and other virtual machine information during runtime for JS programs
 *
 * @namespace hidebug
 * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
 * @since 20
 */

/**
 * Provide interfaces related to debugger access and obtaining CPU,
 * memory and other virtual machine information during runtime for JS programs
 *
 * @namespace hidebug
 * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
 * @atomicservice
 * @since 20
 */

declare namespace hidebug {
  /**
   * Get total native heap memory size
   *
   * @returns { bigint } Returns total native heap memory size.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getNativeHeapSize(): bigint;

  /**
   * Get Native heap memory allocation size.
   * @returns { bigint } Returns native heap memory allocation size.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getNativeHeapAllocatedSize(): bigint;

  /**
   * Get Native heap memory free size
   *
   * @returns { bigint } Returns native heap memory free size.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getNativeHeapFreeSize(): bigint;

  /**
   * Get the virtual set size memory of the application process
   *
   * @returns { bigint } Returns application process virtual set size memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getVss(): bigint;

  /**
   * Get application process proportional set size memory information
   *
   * @returns { bigint } Returns application process proportional set size memory information.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getPss(): bigint;

  /**
   * Obtains the size of the shared dirty memory of a process.
   *
   * @returns { bigint } Returns the size of the shared dirty memory.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getSharedDirty(): bigint;

  /**
   * Obtains the size of the private dirty memory of a process.
   * @returns { bigint } Returns the size of the private dirty memory.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getPrivateDirty(): bigint;

  /**
   * Obtains the cpu usage percent of a process.
   *
   * @returns { number } Returns the cpu usage of a process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getCpuUsage(): number;

  /**
   * Get a debugging dump of a system service by service id.
   * It need dump permission.
   * This API can be called only by system application.
   *
   * @permission ohos.permission.DUMP
   * @param { number } serviceid - Indicates the id of the service ability.
   * @param { number } fd - The file descriptor.
   * @param { Array<string> } args - The args list of the system ability dump interface.
   * @throws {BusinessError} 401 - the parameter check failed, Possible causes:
   *                               1.the parameter type error
   *                               2.the args parameter is not string array
   * @throws {BusinessError} 11400101 - ServiceId invalid. The system ability does not exist.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getServiceDump(serviceid: number, fd: number, args: Array<string>): void;

  /**
   * Obtains the cpu usage of system.
   *
   * @returns { number } Returns the cpu usage of system.
   * @throws { BusinessError } 11400104 - The status of the system CPU usage is abnormal.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getSystemCpuUsage(): number;

  /**
   * Application CPU usage of thread.
   *
   * @interface ThreadCpuUsage
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export interface ThreadCpuUsage {
    /**
     * Thread id
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    threadId: number;
    /**
     * Cpu usage of thread
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 12
     */
    cpuUsage: number;
  }

  /**
   * Get the CPU usage of all threads in the application.
   *
   * @returns { ThreadCpuUsage[] } Returns the CPU usage of all threads in the application.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getAppThreadCpuUsage(): ThreadCpuUsage[];

  /**
   * System memory information
   *
   * @interface SystemMemInfo
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export interface SystemMemInfo {
    /**
     * Total system memory size, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    totalMem: bigint;
    /**
     * System free memory size, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    freeMem: bigint;
    /**
     * System available memory size, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    availableMem: bigint;
  }

  /**
   * Obtains the system memory size.
   *
   * @returns { SystemMemInfo } Returns system memory size.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getSystemMemInfo(): SystemMemInfo;

  /**
   * Application process native memory information.
   *
   * @interface NativeMemInfo
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export interface NativeMemInfo {
    /**
     * Process proportional set size memory, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    pss: bigint;
    /**
     * Virtual set size memory, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    vss: bigint;
    /**
     * Resident set size, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    rss: bigint;
    /**
     * The size of the shared dirty memory, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    sharedDirty: bigint;
    /**
     * The size of the private dirty memory, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    privateDirty: bigint;
    /**
     * The size of the shared clean memory, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    sharedClean: bigint;
    /**
     * The size of the private clean memory, in kilobyte
     *
     * @type { bigint }
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    privateClean: bigint;
  }

  /**
   * Obtains the memory information of application process.
   *
   * @returns { NativeMemInfo } Returns the native memory of a process.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function getAppNativeMemInfo(): NativeMemInfo;

  /**
   * Enum for trace flag
   *
   * @enum { number }
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export enum TraceFlag {
    /**
     * Only capture main thread trace
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    MAIN_THREAD = 1,
    /**
     * Capture all thread trace
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    ALL_THREADS = 2
  }

  /**
   * Provide trace tags
   *
   * @namespace tags
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export namespace tags {
    /**
     * Ability Manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const ABILITY_MANAGER: number;
    /**
     * ARKUI development framework tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const ARKUI: number;
    /**
     * ARK tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const ARK: number;
    /**
     * Bluetooth tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const BLUETOOTH: number;
    /**
     * Common library subsystem tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const COMMON_LIBRARY: number;
    /**
     * Distributed hardware device manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const DISTRIBUTED_HARDWARE_DEVICE_MANAGER: number;
    /**
     * Distributed audio tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const DISTRIBUTED_AUDIO: number;
    /**
     * Distributed camera tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const DISTRIBUTED_CAMERA: number;
    /**
     * Distributed data manager module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const DISTRIBUTED_DATA: number;
    /**
     * Distributed hardware framework tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const DISTRIBUTED_HARDWARE_FRAMEWORK: number;
    /**
     * Distributed input tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const DISTRIBUTED_INPUT: number;
    /**
     * Distributed screen tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const DISTRIBUTED_SCREEN: number;
    /**
     * Distributed scheduler tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const DISTRIBUTED_SCHEDULER: number;
    /**
     * FFRT tasks.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const FFRT: number;
    /**
     * File management tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const FILE_MANAGEMENT: number;
    /**
     * Global resource manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const GLOBAL_RESOURCE_MANAGER: number;
    /**
     * Graphics module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const GRAPHICS: number;
    /**
     * HDF subsystem tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const HDF: number;
    /**
     * MISC module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const MISC: number;
    /**
     * Multimodal input module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const MULTIMODAL_INPUT: number;
    /**
     * Net tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const NET: number;
    /**
     * Notification module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const NOTIFICATION: number;
    /**
     * NWeb tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const NWEB: number;
    /**
     * OHOS generic tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const OHOS: number;
    /**
     * Power manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const POWER_MANAGER: number;
    /**
     * RPC tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const RPC: number;
    /**
     * SA tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const SAMGR: number;
    /**
     * Window manager tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const WINDOW_MANAGER: number;
    /**
     * Audio module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const AUDIO: number;
    /**
     * Camera module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const CAMERA: number;
    /**
     * Image module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const IMAGE: number;
    /**
     * Media module tag.
     *
     * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
     * @since 20
     */
    const MEDIA: number;
  }

  /**
   * Start capture application trace.
   *
   * @param { number[] } tags - Tag of trace.
   * @param { TraceFlag } flag - Trace flag.
   * @param { number } limitSize - Max size of trace file, in bytes, the max is 500MB.
   * @returns { string } Returns absolute path of the trace file.
   * @throws { BusinessError } 401 - Invalid argument, Possible causes:
   *                           1.The limit parameter is too small
   *                           2.The parameter is not within the enumeration type
   *                           3.The parameter type error or parameter order error
   * @throws { BusinessError } 11400102 - Capture trace already enabled.
   * @throws { BusinessError } 11400103 - No write permission on the file.
   * @throws { BusinessError } 11400104 - Abnormal trace status.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function startAppTraceCapture(tags: number[], flag: TraceFlag, limitSize: number): string;

  /**
   * Stop capture application trace.
   *
   * @throws { BusinessError } 11400104 - The status of the trace is abnormal
   * @throws { BusinessError } 11400105 - No capture trace running
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @since 20
   */
  export function stopAppTraceCapture(): void;

  /**
   * Get the graphics memory of application
   *
   * @returns { Promise<number> } Returns the graphics memory of application, in kilobyte.
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 20
   */
  export function getGraphicsMemory(): Promise<number>;

  /**
   * Get the graphics memory of application
   *
   * @returns { number } Returns the graphics memory of application, in kilobyte.
   * @throws { BusinessError } 11400104 - Failed to get the application memory due to a remote exception.
   * @syscap SystemCapability.HiviewDFX.HiProfiler.HiDebug
   * @atomicservice
   * @since 20
   */
  export function getGraphicsMemorySync(): number;
}
export default hidebug;
