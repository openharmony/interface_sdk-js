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
 * **process** 模块提供进程管理相关接口，例如获取进程信息的接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
declare namespace process {
  /**
   * childprocess 对象可用于创建新的进程。
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  export interface ChildProcess {
    /**
     * 返回 pid 表示当前进程的 pid。
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    readonly pid: number;

    /**
     * 返回 ppid 表示当前子进程的 pid。
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    readonly ppid: number;

    /**
     * 返回 exitCode 表示当前子进程的退出码。
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    readonly exitCode: number;

    /**
     * 返回 boolean 表示当前进程信号是否发送成功。
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    readonly killed: boolean;

    /**
     * 返回 number 表示目标进程的退出码。
     *
     * @returns { Promise<number> } 返回目标进程的退出码。
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    wait(): Promise<number>;

    /**
     * 返回子进程的标准输出，以 Uint8Array 形式返回直到 EOF。
     *
     * @returns { Promise<Uint8Array> } 返回子进程的标准输出。
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    getOutput(): Promise<Uint8Array>;

    /**
     * 返回子进程的标准错误输出，以 Uint8Array 形式返回直到 EOF。
     *
     * @returns { Promise<Uint8Array> } 返回子进程的标准错误输出。
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    getErrorOutput(): Promise<Uint8Array>;

    /**
     * 关闭目标进程。
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    close(): void;

    /**
     * 向进程发送信号。
     *
     * @param { number | string } signal - number 或 string，表示发送的信号。
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 7 dynamiconly
     * @test
     */
    kill(signal: number | string): void;
    }

  /**
   * 提供进程管理相关接口，包括进程 UID 判断、用户信息查询、线程优先级获取、环境变量获取、进程退出和信号发送等功能。
   *
   * 通过 `new process.ProcessManager()` 构造 ProcessManager 对象。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @name ProcessManager
   */
  export class ProcessManager {
    /**
     * 判断 uid 是否属于当前应用程序。
     *
     * @param { number } v - 应用程序的 uid。可通过 process.uid 获取。
     * @returns { boolean } 返回判断结果。如果是应用程序的 uid 则返回 true；
     *     否则返回 false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    isAppUid(v: number): boolean;

    /**
     * 根据指定的用户名，从系统的用户数据库中获取该用户 uid。
     *
     * @param { string } v - 用户名。
     * @returns { number } 获取用户 uid，如果用户不存在则返回 -1。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    getUidForName(v: string): number;

    /**
     * 根据指定的 tid 获取线程优先级。
     *
     * @param { number } v - 指定的线程 tid。
     * @returns { number } 返回线程的优先级。优先级顺序取决于当前操作系统。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    getThreadPriority(v: number): number;

    /**
     * 获取系统配置信息。
     *
     * @param { number } name - 指定系统配置参数名。
     * @returns { number } 返回系统配置信息。如果配置不存在，返回 -1。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    getSystemConfig(name: number): number;

    /**
     * 获取环境变量对应的值。
     *
     * > **说明**
     * >
     * > 获取环境变量的值。如果环境变量不存在，返回 **undefined**。
     *
     * @param { string } name - 环境变量名。
     * @returns { string } 返回指定环境变量名对应的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    getEnvironmentVar(name: string): string;

    /**
     * 终止程序。
     *
     * 请谨慎使用此接口，此接口调用后应用会退出，如果入参非 0 会产生数据丢失或者异常情况。
     *
     * @param { number } code - 进程的退出码。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    exit(code: number): void;

    /**
     * 发送 signal 到指定的进程，结束指定进程（仅支持结束本进程）。
     *
     * @param { number } signal - 发送特定的信号给目标进程。取值范围：1 <= signal <= 64。
     * @param { number } pid - 进程的 id。
     * @returns { boolean } 信号是否发送成功。如果信号发送成功则返回 true；
     *     否则返回 false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     */
    kill(signal: number, pid: number): boolean;
    }

  /**
   * 返回进程的有效组 ID（数值形式）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const egid: number;

  /**
   * 返回进程的有效用户标识（数值形式）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const euid: number;

  /**
   * 返回进程的组 ID（数值形式）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const gid: number;

  /**
   * 进程的用户标识（UID）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  const uid: number;

  /**
   * 返回包含补充组 ID 的数组。
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const groups: number[];

  /**
   * 进程的 ID（PID）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  const pid: number;

  /**
   * 返回 ppid 表示当前子进程的 pid。
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  const ppid: number;

  /**
   * 线程的 ID（TID）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  const tid: number;

  /**
   * 检查进程是否已被隔离。
   *
   * @returns { boolean } 返回判断结果。如果进程被隔离则返回 true；否则，
   *     返回 false。
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  function isIsolatedProcess(): boolean;

  /**
   * 判断 uid 是否属于应用程序。
   *
   * @param { number } v - 应用程序的 uid。
   * @returns { boolean } 返回判断结果。如果是应用程序的 uid 则返回 true；
   *     否则返回 false。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.isAppUid
   */
  function isAppUid(v: number): boolean;

  /**
   * 检查运行环境是否为 64 位。
   *
   * @returns { boolean } 返回判断结果。如果运行环境是 64 位则返回 true；
   *     否则返回 false。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  function is64Bit(): boolean;

  /**
   * 根据指定的用户名，从系统的用户数据库中获取该用户的 uid。
   *
   * @param { string } v - 用户名。
   * @returns { number } 返回用户 uid。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.getUidForName
   */
  function getUidForName(v: string): number;

  /**
   * 根据指定的 tid 获取线程优先级，优先级顺序取决于当前操作系统。
   *
   * @param { number } v - 指定的线程 tid。
   * @returns { number } 返回线程的优先级。优先级顺序取决于当前操作系统。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.getThreadPriority
   */
  function getThreadPriority(v: number): number;

  /**
   * 获取系统启动到进程启动的实时时间（以毫秒为单位，不包含系统休眠时间）。
   *
   * @returns { number } 返回经过的实时时间。单位：毫秒。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  function getStartRealtime(): number;

  /**
   * 获取进程启动到当前时间的 CPU 时间（以毫秒为单位）。
   *
   * @returns { number } 返回经过的 CPU 时间。单位：毫秒。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   */
  function getPastCpuTime(): number;

  /**
   * 获取系统配置信息。
   *
   * @param { number } name - 指定系统配置参数名。
   * @returns { number } 返回系统配置信息。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.getSystemConfig
   */
  function getSystemConfig(name: number): number;

  /**
   * 获取环境变量名对应的值。
   *
   * @param { string } name - 环境变量名。
   * @returns { string } 返回环境变量名对应的值。
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.getEnvironmentVar
   */
  function getEnvironmentVar(name: string): string;

  /**
   * 用户存储的事件信息。
   *
   * @param { Object } evt - 用户事件。 [since 12]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  type EventListener = (evt: Object) => void;

  /**
   * 提供 ConditionType 类型，包括 timeout、killSignal、maxBuffer。
   *
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 10 dynamiconly
   * @test
   */
  interface ConditionType {

    /**
     * 子进程的最大运行时间（单位：毫秒）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10 dynamiconly
     * @test
     */
    timeout?: number;

    /**
     * 当子进程运行时间超过 timeout 时，向子进程发送的信号。
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10 dynamiconly
     * @test
     */
    killSignal?: number | string;

    /**
     * 子进程标准输入和输出的最大缓冲区大小。
     *
     * @syscap SystemCapability.Utils.Lang
     * @systemapi Hide this for inner system use
     * @since 10 dynamiconly
     * @test
     */
    maxBuffer?: number;
    }
  /**
   * 返回一个子进程对象，并 spawn 一个新的 ChildProcess 来运行命令。
   *
   * @param { string } command - 子进程执行的 shell 命令字符串。
   * @param { ConditionType } options - 是一个对象，包含三个参数。timeout 是子进程的运行时间，killSignal 是子进程达到 timeout 时发送的信号，maxBuffer 是标准输入和输出的最大缓冲区大小。
   * @returns { ChildProcess } 返回一个子进程对象。
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
   * 中止进程并生成核心文件。该方法会导致进程立即退出，请谨慎使用。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  function abort(): void;

  /**
   * 注册事件。
   *
   * @param { string } type - 表示注册的事件类型。
   * @param { EventListener } listener - 表示注册的事件函数。
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function on(type: string, listener: EventListener): void;

  /**
   * 移除已注册的事件。
   *
   * @param { string } type - 要移除的已注册事件类型。
   * @returns { boolean } 返回移除结果。
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function off(type: string): boolean;

  /**
   * 终止程序。
   *
   * 请谨慎使用此接口。调用此接口后应用将退出。如果输入参数非 0，可能会导致数据丢失或出现异常。
   *
   * @param { number } code - 进程的退出码。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.exit
   */
  function exit(code: number): void;

  /**
   * 返回当前工作目录。
   *
   * @returns { string } 返回当前工作目录。
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function cwd(): string;

  /**
   * 修改当前目录。
   *
   * @param { string } dir - 要切换到的路径。
   * @syscap SystemCapability.Utils.Lang
   * @systemapi Hide this for inner system use
   * @since 7 dynamiconly
   * @test
   */
  function chdir(dir: string): void;

  /**
   * 获取当前系统已运行的时间（以秒为单位）。
   *
   * @returns { number } 当前系统已运行的时间。单位：秒。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  function uptime(): number;

  /**
   * 发送信号到指定进程，结束该进程。
   *
   * @param { number } signal - 发送的信号。
   * @param { number } pid - 进程的 id。
   * @returns { boolean } 信号发送成功返回 true，失败返回 false。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead process.ProcessManager.kill
   */
  function kill(signal: number, pid: number): boolean;
  }

export default process;
