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
  /**
   * The childprocess object can be used to create a new process.
   *
   * @typedef ChildProcess
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
   * @test
   */
  export interface ChildProcess {
    /**
     * Return pid is the pid of the current process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    /**
     * Return pid is the pid of the current process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
     * @test
     */
    readonly pid: number;

    /**
     * Return ppid is the pid of the current child process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    /**
     * Return ppid is the pid of the current child process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
     * @test
     */
    readonly ppid: number;

    /**
     * Return exitCode is the exit code of the current child process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    /**
     * Return exitCode is the exit code of the current child process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
     * @test
     */
    readonly exitCode: number;

    /**
     * Return boolean is whether the current process signal is sent successfully
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    /**
     * Return boolean is whether the current process signal is sent successfully
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
     * @test
     */
    readonly killed: boolean;

    /**
     * Return 'number' is the target process exit code
     *
     * @returns { Promise<number> } Return the target process exit code.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    /**
     * Return 'number' is the target process exit code
     *
     * @returns { Promise<number> } Return the target process exit code.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
     * @test
     */
    wait(): Promise<number>;

    /**
     * Return it as 'Uint8Array' of the stdout until EOF
     *
     * @returns { Promise<Uint8Array> } Return subprocess standard output.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    /**
     * Return it as 'Uint8Array' of the stdout until EOF
     *
     * @returns { Promise<Uint8Array> } Return subprocess standard output.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
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
    /**
     * Return it as 'Uint8Array of the stderr until EOF
     *
     * @returns { Promise<Uint8Array> } Return subprocess standard error output.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
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
    /**
     * Close the target process
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
     * @test
     */
    close(): void;

    /**
     * Send a signal to process
     *
     * @param { number | string } signal - Number or string represents the signal sent.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7
     * @test
     */
    /**
     * Send a signal to process
     *
     * @param { number | string } signal - Number or string represents the signal sent.
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @crossplatform
     * @since 10
     * @test
     */
    kill(signal: number | string): void;
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
  export class ProcessManager {
    /**
     * Returns a boolean whether the specified uid belongs to a particular application.
     *
     * @param { number } v - An id.
     * @returns { boolean } Return a boolean whether the specified uid belongs to a particular application.
     * @throws { BusinessError } 401 - The type of v must be number.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns a boolean whether the specified uid belongs to a particular application.
     *
     * @param { number } v - An id.
     * @returns { boolean } Return a boolean whether the specified uid belongs to a particular application.
     * @throws { BusinessError } 401 - The type of v must be number.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isAppUid(v: number): boolean;

    /**
     * Returns the uid based on the specified user name.
     *
     * @param { string } v - Process name.
     * @returns { number } Return the uid based on the specified user name.
     * @throws { BusinessError } 401 - The type of v must be string.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the uid based on the specified user name.
     *
     * @param { string } v - Process name.
     * @returns { number } Return the uid based on the specified user name.
     * @throws { BusinessError } 401 - The type of v must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getUidForName(v: string): number;

    /**
     * Returns the thread priority based on the specified tid.
     *
     * @param { number } v - The tid of the process.
     * @returns { number } Return the thread priority based on the specified tid.
     * @throws { BusinessError } 401 - The type of v must be number.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the thread priority based on the specified tid.
     *
     * @param { number } v - The tid of the process.
     * @returns { number } Return the thread priority based on the specified tid.
     * @throws { BusinessError } 401 - The type of v must be number.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getThreadPriority(v: number): number;

    /**
     * Returns the system configuration at runtime.
     *
     * @param { number } name - Parameters defined by the system configuration.
     * @returns { number } Return the system configuration at runtime.
     * @throws { BusinessError } 401 - The type of name must be number.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the system configuration at runtime.
     *
     * @param { number } name - Parameters defined by the system configuration.
     * @returns { number } Return the system configuration at runtime.
     * @throws { BusinessError } 401 - The type of name must be number.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getSystemConfig(name: number): number;

    /**
     * Returns the system value for environment variables.
     *
     * @param { string } name - Parameters defined by the system environment variables.
     * @returns { string } Return the system value for environment variables.
     * @throws { BusinessError } 401 - The type of name must be string.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the system value for environment variables.
     *
     * @param { string } name - Parameters defined by the system environment variables.
     * @returns { string } Return the system value for environment variables.
     * @throws { BusinessError } 401 - The type of name must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getEnvironmentVar(name: string): string;

    /**
     * Process exit
     *
     * @param { number } code - Process exit code.
     * @throws { BusinessError } 401 - The type of code must be number.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Process exit
     *
     * @param { number } code - Process exit code.
     * @throws { BusinessError } 401 - The type of code must be number.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    exit(code: number): void;

    /**
     * Return whether the signal was sent successfully
     *
     * @param { number } signal - Signal sent.
     * @param { number } pid - Send signal to target pid.
     * @returns { boolean } Return the result of the signal.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Return whether the signal was sent successfully
     *
     * @param { number } signal - Signal sent.
     * @param { number } pid - Send signal to target pid.
     * @returns { boolean } Return the result of the signal.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    kill(signal: number, pid: number): boolean;
  }

  /**
   * Returns the numeric valid group ID of the process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  /**
   * Returns the numeric valid group ID of the process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
   * @test
   */
  const egid: number;

  /**
   * Return the numeric valid user identity of the process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  /**
   * Return the numeric valid user identity of the process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
   * @test
   */
  const euid: number;

  /**
   * Returns the numeric group id of the process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  /**
   * Returns the numeric group id of the process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
   * @test
   */
  const gid: number;

  /**
   * Returns the digital user id of the process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * Returns the digital user id of the process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  const uid: number;

  /**
   * Return an array with supplementary group id
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  /**
   * Return an array with supplementary group id
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
   * @test
   */
  const groups: number[];

  /**
   * Return pid is The pid of the current process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * Return pid is The pid of the current process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  const pid: number;

  /**
   * Return ppid is The pid of the current child process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  /**
   * Return ppid is The pid of the current child process
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
   * @test
   */
  const ppid: number;

  /**
   * Returns the tid of the current thread.
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the tid of the current thread.
   *
   * @constant
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  const tid: number;

  /**
   * Returns a boolean whether the process is isolated.
   *
   * @returns { boolean } Return boolean whether the process is isolated.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  function isIsolatedProcess(): boolean;

  /**
   * Returns a boolean whether the specified uid belongs to a particular application.
   *
   * @param { number } v - An id.
   * @returns { boolean } Return a boolean whether the specified uid belongs to a particular application.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.isAppUid
   */
  function isAppUid(v: number): boolean;

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
  function is64Bit(): boolean;

  /**
   * Returns the uid based on the specified user name.
   *
   * @param { string } v - Process name.
   * @returns { number } Return the uid based on the specified user name.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.getUidForName
   */
  function getUidForName(v: string): number;

  /**
   * Returns the thread priority based on the specified tid.
   *
   * @param { number } v - The tid of the process.
   * @returns { number } Return the thread priority based on the specified tid.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.getThreadPriority
   */
  function getThreadPriority(v: number): number;

  /**
   * Returns the elapsed real time (in milliseconds) taken from the start of the system to the start of the process.
   *
   * @returns { number } Return the start of the system to the start of the process.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the elapsed real time (in milliseconds) taken from the start of the system to the start of the process.
   *
   * @returns { number } Return the start of the system to the start of the process.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function getStartRealtime(): number;

  /**
   * Returns the cpu time (in milliseconds) from the time when the process starts to the current time.
   *
   * @returns { number } Return the cpu time (in milliseconds) from the time when the process starts to the current time.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Returns the cpu time (in milliseconds) from the time when the process starts to the current time.
   *
   * @returns { number } Return the cpu time (in milliseconds) from the time when the process starts to the current time.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function getPastCpuTime(): number;

  /**
   * Returns the system configuration at runtime.
   *
   * @param { number } name - Parameters defined by the system configuration.
   * @returns { number } Return the system configuration at runtime.
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.getSystemConfig
   */
  function getSystemConfig(name: number): number;

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
  type EventListener = (evt: Object) => void;
  
  /**
   * Provides the ConditionType type,including the timeout,the killSignal,the maxBuffer.
   *
   * @typedef ConditionType
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   * @test
   */
  interface ConditionType {
	  
    /**
     * Maximum running time (in ms) of the child process.
     *
     * @type { ?number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     * @test
     */
    timeout?: number;
	  
    /**
     * Signal sent to the child process when the running time of a child process exceeds the timeout period.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     * @test
     */
    killSignal?: number | string;
	  
    /**
     * Maximum buffer size for the standard input and output of the child process.
     *
     * @type { ?number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     * @test
     */
    maxBuffer?: number;
  }
  /**
   * Return a child process object and spawns a new ChildProcess to run the command.
   *
   * @param { string } command - String of the shell commands executed by the child process.
   * @param { ConditionType } options - This is an object. The object contains three parameters. Timeout is the running time of the child
   * process, killSignal is the signal sent when the child process reaches timeout, and maxBuffer is the size of the
   * maximum buffer area for standard input and output.
   * @returns { ChildProcess } Return a child process object.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  /**
   * Return a child process object and spawns a new ChildProcess to run the command.
   *
   * @param { string } command - String of the shell commands executed by the child process.
   * @param { ConditionType } options - This is an object. The object contains three parameters. Timeout is the running time of the child
   * process, killSignal is the signal sent when the child process reaches timeout, and maxBuffer is the size of the
   * maximum buffer area for standard input and output.
   * @returns { ChildProcess } Return a child process object.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
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
  /**
   * Register for an event
   *
   * @param { string } type - Indicates the type of event registered.
   * @param { EventListener } listener - Represents the registered event function
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
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
  /**
   * Remove registered event
   *
   * @param { string } type - Remove the type of registered event.
   * @returns { boolean } Return removed result.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
   * @test
   */
  function off(type: string): boolean;

  /**
   * Process exit
   *
   * @param { number } code - Process exit code.
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.exit
   */
  function exit(code: number): void;

  /**
   * Return the current work directory;
   *
   * @returns { string } Return the current work directory.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7
   * @test
   */
  /**
   * Return the current work directory;
   *
   * @returns { string } Return the current work directory.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
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
  /**
   * Change current directory
   *
   * @param { string } dir - The path you want to change.
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @crossplatform
   * @since 10
   * @test
   */
  function chdir(dir: string): void;

  /**
   * Returns the running time of the system
   *
   * @returns { number } Return the running time of the system.
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * Returns the running time of the system
   *
   * @returns { number } Return the running time of the system.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function uptime(): number;

  /**
   * Return whether the signal was sent successfully
   *
   * @param { number } signal - Signal sent.
   * @param { number } pid - Send signal to target pid.
   * @returns { boolean } Return the result of the signal.
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.process.ProcessManager.kill
   */
  function kill(signal: number, pid: number): boolean;
}
export default process;
