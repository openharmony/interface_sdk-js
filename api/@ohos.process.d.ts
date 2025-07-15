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
 * The process is mainly used to obtain the relevant ID of the process, obtain and modify
 * the working directory of the process, exit and close the process.
 *
 * @namespace process
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * The process is mainly used to obtain the relevant ID of the process, obtain and modify
 * the working directory of the process, exit and close the process.
 *
 * @namespace process
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * The process is mainly used to obtain the relevant ID of the process, obtain and modify
 * the working directory of the process, exit and close the process.
 *
 * @namespace process
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare namespace process {
  /**
   * The childprocess object can be used to create a new process.
   *
   * @typedef ChildProcess
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  export interface ChildProcess {
    /**
     * Return pid is the pid of the current process
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    readonly pid: int;

    /**
     * Return ppid is the pid of the current child process
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    readonly ppid: int;

    /**
     * Return exitCode is the exit code of the current child process
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    readonly exitCode: int;

    /**
     * Return boolean is whether the current process signal is sent successfully
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    readonly killed: boolean;

    /**
     * Return 'int' is the target process exit code
     *
     * @returns { Promise<int> } Return the target process exit code.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    wait(): Promise<int>;

    /**
     * Return it as 'Uint8Array' of the stdout until EOF
     *
     * @returns { Promise<Uint8Array> } Return subprocess standard output.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    getOutput(): Promise<Uint8Array>;

    /**
     * Return it as 'Uint8Array of the stderr until EOF
     *
     * @returns { Promise<Uint8Array> } Return subprocess standard error output.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    getErrorOutput(): Promise<Uint8Array>;

    /**
     * Close the target process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    close(): void;

    /**
     * Send a signal to process
     *
     * @param { int | string } signal - Int or string represents the signal sent.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    kill(signal: int | string): void;
  }

  /**
   * Process is mainly used to obtain the relevant ID of the process, obtain and modify the
   * working directory of the process, exit and close the process.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   * @name ProcessManager
   */
  /**
   * Process is mainly used to obtain the relevant ID of the process, obtain and modify the
   * working directory of the process, exit and close the process.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   * @name ProcessManager
   */
  /**
   * Process is mainly used to obtain the relevant ID of the process, obtain and modify the
   * working directory of the process, exit and close the process.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   * @name ProcessManager
   */
  export class ProcessManager {
    /**
     * Returns a boolean whether the specified uid belongs to a particular application.
     *
     * @param { int } v - An id.
     * @returns { boolean } Return a boolean whether the specified uid belongs to a particular application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns a boolean whether the specified uid belongs to a particular application.
     *
     * @param { int } v - An id.
     * @returns { boolean } Return a boolean whether the specified uid belongs to a particular application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether a UID belongs to this application.
     *
     * @param { int } v - UID. which can be obtained by running process.uid.
     * @returns { boolean } Return a boolean whether the specified uid belongs to a particular application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isAppUid(v: int): boolean;

    /**
     * Returns the uid based on the specified user name.
     *
     * @param { string } v - Process name.
     * @returns { int } Return the uid based on the specified user name.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the uid based on the specified user name.
     *
     * @param { string } v - Process name.
     * @returns { int } Return the uid based on the specified user name.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the UID of a user from the user database of the system based on the specified user name.
     *
     * @param { string } v - User name.
     * @returns { int } Return the uid based on the specified user name.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getUidForName(v: string): int;

    /**
     * Returns the thread priority based on the specified tid.
     *
     * @param { int } v - The tid of the process.
     * @returns { int } Return the thread priority based on the specified tid.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the thread priority based on the specified tid.
     *
     * @param { int } v - The tid of the process.
     * @returns { int } Return the thread priority based on the specified tid.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the thread priority based on the specified TID.
     *
     * @param { int } v - TID.
     * @returns { int } Return the thread priority based on the specified tid.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getThreadPriority(v: int): int;

    /**
     * Returns the system configuration at runtime.
     *
     * @param { int } name - Parameters defined by the system configuration.
     * @returns { long } Return the system configuration at runtime.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the system configuration at runtime.
     *
     * @param { int } name - Parameters defined by the system configuration.
     * @returns { long } Return the system configuration at runtime.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the system configuration.
     *
     * @param { int } name - System configuration parameter name.
     * @returns { long } Return the system configuration at runtime.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getSystemConfig(name: int): long;

    /**
     * Returns the system value for environment variables.
     *
     * @param { string } name - Parameters defined by the system environment variables.
     * @returns { string } Return the system value for environment variables.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the system value for environment variables.
     *
     * @param { string } name - Parameters defined by the system environment variables.
     * @returns { string } Return the system value for environment variables.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the value of an environment variable.
     *
     * @param { string } name - Environment variable name.
     * @returns { string } Return the system value for environment variables.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getEnvironmentVar(name: string): string;

    /**
     * Process exit
     *
     * @param { int } code - Process exit code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Process exit
     *
     * @param { int } code - Process exit code.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Terminates this process.
     *
     * @param { int } code - Exit code of the process.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    exit(code: int): void;

    /**
     * Return whether the signal was sent successfully
     *
     * @param { int } signal - Signal sent.
     * @param { int } pid - Send signal to target pid.
     * @returns { boolean } Return the result of the signal.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Return whether the signal was sent successfully
     *
     * @param { int } signal - Signal sent.
     * @param { int } pid - Send signal to target pid.
     * @returns { boolean } Return the result of the signal.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sends a signal to the specified process to terminate it.
     *
     * @param { int } signal - Signal to send.
     * @param { int } pid - PID of the process, to which the signal will be sent.
     * @returns { boolean } Return the result of the signal.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    kill(signal: int, pid: int): boolean;
  }

  /**
   * Returns the numeric valid group ID of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  const egid: int;

  /**
   * Return the numeric valid user identity of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  const euid: int;

  /**
   * Returns the numeric group id of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  const gid: int;

  /**
   * Returns the digital user id of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * Returns the digital user id of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the digital user id of the process
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  const uid: int;

  /**
   * Return an array with supplementary group id
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  const groups: int[];

  /**
   * Return pid is The pid of the current process
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * Return pid is The pid of the current process
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Return pid is The pid of the current process
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  const pid: int;

  /**
   * Return ppid is The pid of the current child process
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  const ppid: int;

  /**
   * Returns the tid of the current thread.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the tid of the current thread.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Returns the tid of the current thread.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  const tid: int;

  /**
   * Returns a boolean whether the process is isolated.
   *
   * @returns { boolean } Return boolean whether the process is isolated.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Checks whether this process is isolated.
   *
   * @returns { boolean } Return boolean whether the process is isolated.
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 11
   */
  function isIsolatedProcess(): boolean;

  /**
   * Returns a boolean whether the specified uid belongs to a particular application.
   *
   * @param { int } v - An id.
   * @returns { boolean } Return a boolean whether the specified uid belongs to a particular application.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.isAppUid
   */
  function isAppUid(v: int): boolean;

  /**
   * Returns a boolean whether the process is running in a 64-bit environment.
   *
   * @returns { boolean } Return a boolean whether the process is running in a 64-bit environment.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns a boolean whether the process is running in a 64-bit environment.
   *
   * @returns { boolean } Return a boolean whether the process is running in a 64-bit environment.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Checks whether this process is running in a 64-bit environment.
   *
   * @returns { boolean } Return a boolean whether the process is running in a 64-bit environment.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function is64Bit(): boolean;

  /**
   * Returns the uid based on the specified user name.
   *
   * @param { string } v - Process name.
   * @returns { int } Return the uid based on the specified user name.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.getUidForName
   */
  function getUidForName(v: string): int;

  /**
   * Returns the thread priority based on the specified tid.
   *
   * @param { int } v - The tid of the process.
   * @returns { int } Return the thread priority based on the specified tid.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.getThreadPriority
   */
  function getThreadPriority(v: int): int;

  /**
   * Returns the elapsed real time (in milliseconds) taken from the start of the system to the start of the process.
   *
   * @returns { long } Return the start of the system to the start of the process.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the elapsed real time (in milliseconds) taken from the start of the system to the start of the process.
   *
   * @returns { long } Return the start of the system to the start of the process.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the duration, in milliseconds, from the time the system starts to the time the process starts.
   *
   * @returns { long } Return the start of the system to the start of the process.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function getStartRealtime(): long;

  /**
   * Returns the cpu time (in milliseconds) from the time when the process starts to the current time.
   *
   * @returns { long } Return the cpu time (in milliseconds) from the time when the process starts to the current time.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the cpu time (in milliseconds) from the time when the process starts to the current time.
   *
   * @returns { long } Return the cpu time (in milliseconds) from the time when the process starts to the current time.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the CPU time (in milliseconds) from the time the process starts to the current time.
   *
   * @returns { long } Return the cpu time (in milliseconds) from the time when the process starts to the current time.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function getPastCpuTime(): long;

  /**
   * Returns the system configuration at runtime.
   *
   * @param { int } name - Parameters defined by the system configuration.
   * @returns { long } Return the system configuration at runtime.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.getSystemConfig
   */
  function getSystemConfig(name: int): long;

  /**
   * Returns the system value for environment variables.
   *
   * @param { string } name - Parameters defined by the system environment variables.
   * @returns { string } Return the system value for environment variables.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.getEnvironmentVar
   */
  function getEnvironmentVar(name: string): string;
  
  /**
   * User Stored Events
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * User Stored Events
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * User Stored Events
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * User Stored Events
   *
   * @typedef { function } EventListener
   * @param { Object } evt - User events
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  type EventListener = (evt: Object) => void;
  
  /**
   * Provides the ConditionType type,including timeout, killSignal, maxBuffer.
   *
   * @typedef ConditionType
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 10
   * @test
   */
  interface ConditionType {
	  
    /**
     * Maximum running time (in ms) of the child process.
     *
     * @type { ?int }
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10
     * @test
     */
    timeout?: int;
	  
    /**
     * Signal sent to the child process when the running time of a child process exceeds the timeout period.
     *
     * @type { ?(int | string) }
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10
     * @test
     */
    killSignal?: int | string;
	  
    /**
     * Maximum buffer size for the standard input and output of the child process.
     *
     * @type { ?int }
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10
     * @test
     */
    maxBuffer?: int;
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
   * @since 7
   * @test
   */
  function runCmd(
    command: string,
    options?: ConditionType
  ): ChildProcess;

  /**
   * Abort current process
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * Abort current process
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Aborts a process and generates a core file. This method will cause a process to exit immediately. Exercise caution
   * when using this method.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function abort(): void;

  /**
   * Register for an event
   *
   * @param { string } type - Indicates the type of event registered.
   * @param { EventListener } listener - Represents the registered event function
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
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
   * @since 7
   * @test
   */
  function off(type: string): boolean;

  /**
   * Process exit
   *
   * @param { int } code - Process exit code.
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.exit
   */
  function exit(code: int): void;

  /**
   * Return the current work directory;
   *
   * @returns { string } Return the current work directory.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  function cwd(): string;

  /**
   * Change current directory
   *
   * @param { string } dir - The path you want to change.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  function chdir(dir: string): void;

  /**
   * Returns the running time of the system
   *
   * @returns { long } Return the running time of the system.
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * Returns the running time of the system
   *
   * @returns { long } Return the running time of the system.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the running time of this process.
   *
   * @returns { long } Return the running time of the system.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function uptime(): long;

  /**
   * Return whether the signal was sent successfully
   *
   * @param { int } signal - Signal sent.
   * @param { int } pid - Send signal to target pid.
   * @returns { boolean } Return the result of the signal.
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.kill
   */
  function kill(signal: int, pid: int): boolean;
}
export default process;
