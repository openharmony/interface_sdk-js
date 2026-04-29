/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * The **process** module provides process management APIs, for example, APIs for obtaining process information.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
declare namespace process {
  /**
   * The childprocess object can be used to create a new process.
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  export interface ChildProcess {
    /**
     * Return pid is the pid of the current process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    readonly pid: number;

    /**
     * Return ppid is the pid of the current child process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    readonly ppid: number;

    /**
     * Return exitCode is the exit code of the current child process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    readonly exitCode: number;

    /**
     * Return boolean is whether the current process signal is sent successfully
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    readonly killed: boolean;

    /**
     * Return 'number' is the target process exit code
     *
     * @returns { Promise<number> } Return the target process exit code.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    wait(): Promise<number>;

    /**
     * Return it as 'Uint8Array' of the stdout until EOF
     *
     * @returns { Promise<Uint8Array> } Return subprocess standard output.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    getOutput(): Promise<Uint8Array>;

    /**
     * Return it as 'Uint8Array of the stderr until EOF
     *
     * @returns { Promise<Uint8Array> } Return subprocess standard error output.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    getErrorOutput(): Promise<Uint8Array>;

    /**
     * Close the target process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    close(): void;

    /**
     * Send a signal to process
     *
     * @param { number | string } signal - Number or string represents the signal sent.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    kill(signal: number | string): void;
    }

  /**
   * Provides APIs for throwing exceptions during the addition of a process.
   *
   * Construct a **ProcessManager** object.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @name ProcessManager
   */
  export class ProcessManager {
    /**
     * Checks whether a UID belongs to this application.
     *
     * @param { number } v - UID. which can be obtained by running **process.uid**.
     * @returns { boolean } Check result. The value **true** is returned if the UID belongs to the application;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    isAppUid(v: number): boolean;

    /**
     * Obtains the UID of a user from the user database of the system based on the specified user name.
     *
     * @param { string } v - User name.
     * @returns { number } UID of the user. If the user does not exist, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    getUidForName(v: string): number;

    /**
     * Obtains the thread priority based on the specified TID.
     *
     * @param { number } v - TID.
     * @returns { number } Priority of the thread. The priority depends on the operating system.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    getThreadPriority(v: number): number;

    /**
     * Obtains the system configuration.
     *
     * @param { number } name - System configuration parameter name.
     * @returns { number } System configuration obtained. If the configuration does not exist, **-1** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    getSystemConfig(name: number): number;

    /**
     * Obtains the value of an environment variable.
     *
     * > **NOTE**
     * >
     * > Obtains the value of an environment variable. If the environment variable does not exist, **undefined** is
     * > returned.
     *
     * @param { string } name - Environment variable name.
     * @returns { string } Value of the environment variable.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    getEnvironmentVar(name: string): string;

    /**
     * Terminates this process.
     *
     * Exercise caution when using this API. After this API is called, the application exits. If the input parameter
     * is not 0, data loss or exceptions may occur.
     *
     * @param { number } code - Exit code of the process.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    exit(code: number): void;

    /**
     * Sends a signal to the specified process to terminate it. Only the current process can be terminated.
     *
     * @param { number } signal - Signal to send. Value range: 1 <= signal <= 64.
     * @param { number } pid - PID of the process, to which the signal will be sent.
     * @returns { boolean } Signal sending result. The value **true** is returned if the signal is sent successfully;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    kill(signal: number, pid: number): boolean;
    }

  /**
   * Returns the numeric valid group ID of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const egid: number;

  /**
   * Return the numeric valid user identity of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const euid: number;

  /**
   * Returns the numeric group id of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const gid: number;

  /**
   * User identifier (UID) of the process.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  const uid: number;

  /**
   * Return an array with supplementary group id
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const groups: number[];

  /**
   * Process ID (PID) of the process.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  const pid: number;

  /**
   * Return ppid is The pid of the current child process
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const ppid: number;

  /**
   * Thread ID (TID) of the thread.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  const tid: number;

  /**
   * Checks whether this process is isolated.
   *
   * @returns { boolean } Check result. The value **true** is returned if the process is isolated; otherwise,
   *     **false** is returned.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  function isIsolatedProcess(): boolean;

  /**
   * Checks whether a UID belongs to this application.
   *
   * @param { number } v - UID.
   * @returns { boolean } Check result. The value **true** is returned if the UID belongs to the application;
   *     otherwise, **false** is returned.
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.isAppUid
   */
  function isAppUid(v: number): boolean;

  /**
   * Checks whether this process is running in a 64-bit environment.
   *
   * @returns { boolean } Check result. The value **true** is returned if the process is running in a 64-bit
   *     environment; otherwise, **false** is returned.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  function is64Bit(): boolean;

  /**
   * Obtains the UID of a user from the user database of the system based on the specified user name.
   *
   * @param { string } v - User name.
   * @returns { number } UID of the user.
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.getUidForName
   */
  function getUidForName(v: string): number;

  /**
   * Obtains the thread priority based on the specified TID.
   *
   * @param { number } v - TID.
   * @returns { number } Priority of the thread. The priority depends on the operating system.
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.getThreadPriority
   */
  function getThreadPriority(v: number): number;

  /**
   * Obtains the duration (excluding the system sleep time), in milliseconds, from the time the system starts to the
   * time the process starts.
   *
   * @returns { number } Duration obtained, in milliseconds.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  function getStartRealtime(): number;

  /**
   * Obtains the CPU time (in milliseconds) from the time the process starts to the current time.
   *
   * @returns { number } CPU time obtained, in milliseconds.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  function getPastCpuTime(): number;

  /**
   * Obtains the system configuration.
   *
   * @param { number } name - System configuration parameter name.
   * @returns { number } System configuration obtained.
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.getSystemConfig
   */
  function getSystemConfig(name: number): number;

  /**
   * Obtains the value of an environment variable.
   *
   * @param { string } name - Environment variable name.
   * @returns { string } Value of the environment variable.
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.getEnvironmentVar
   */
  function getEnvironmentVar(name: string): string;

  /**
   * Event to store.
   *
   * @param { Object } evt - Event. [since 12]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  type EventListener = (evt: Object) => void;

  /**
   * Provides the ConditionType type,including timeout, killSignal, maxBuffer.
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 10 dynamiconly
   * @test
   */
  interface ConditionType {

    /**
     * Maximum running time (in ms) of the child process.
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10 dynamiconly
     * @test
     */
    timeout?: number;

    /**
     * Signal sent to the child process when the running time of a child process exceeds the timeout period.
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10 dynamiconly
     * @test
     */
    killSignal?: number | string;

    /**
     * Maximum buffer size for the standard input and output of the child process.
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10 dynamiconly
     * @test
     */
    maxBuffer?: number;
    }
  /**
   * Returns a child process object and spawns a new ChildProcess to run the command.
   *
   * @param { string } command - String of the shell commands executed by the child process.
   * @param { ConditionType } options - This is an object. The object contains three parameters. Timeout is the running time of the child
   * process, killSignal is the signal sent when the child process reaches timeout, and maxBuffer is the size of the
   * maximum buffer area for standard input and output.
   * @returns { ChildProcess } Returns a child process object.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function runCmd(
    command: string,
    options?: ConditionType
  ): ChildProcess;

  /**
   * Aborts a process and generates a core file. This method will cause a process to exit immediately. Exercise
   * caution when using this method.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  function abort(): void;

  /**
   * Register for an event
   *
   * @param { string } type - Indicates the type of event registered.
   * @param { EventListener } listener - Represents the registered event function
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function on(type: string, listener: EventListener): void;

  /**
   * Remove registered event
   *
   * @param { string } type - Remove the type of registered event.
   * @returns { boolean } Return removed result.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function off(type: string): boolean;

  /**
   * Terminates this process.
   *
   * Exercise caution when using this API. After this API is called, the application exits. If the input parameter is
   * not 0, data loss or exceptions may occur.
   *
   * @param { number } code - Exit code of the process.
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.exit
   */
  function exit(code: number): void;

  /**
   * Return the current work directory;
   *
   * @returns { string } Return the current work directory.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function cwd(): string;

  /**
   * Change current directory
   *
   * @param { string } dir - The path you want to change.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function chdir(dir: string): void;

  /**
   * Obtains the running time of the current system, in seconds.
   *
   * @returns { number } Running time of the system, in seconds.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  function uptime(): number;

  /**
   * Sends a signal to a specified process to terminate it.
   *
   * @param { number } signal - Signal to send.
   * @param { number } pid - PID of the process, to which the signal will be sent.
   * @returns { boolean } If the signal is sent successfully, **true** is returned. Other, **false** is returned.
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.kill
   */
  function kill(signal: number, pid: number): boolean;
  }

export default process;