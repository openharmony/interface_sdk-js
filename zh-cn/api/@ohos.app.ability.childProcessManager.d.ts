/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type { ChildProcessArgs } from './@ohos.app.ability.ChildProcessArgs';
import type { ChildProcessOptions } from './@ohos.app.ability.ChildProcessOptions';

/**
 * childProcessManager模块提供子进程管理能力，支持子进程创建和启动操作。
 * 创建的子进程会随着父进程的退出而退出，无法脱离父进程独立运行。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace childProcessManager {

  /**
   * 子进程启动模式枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export const enum StartMode {

    /**
     * 从App自身进程Fork子进程。以该模式启动的子进程会继承父进程资源，不能使用Binder IPC和其他进程通信，否则会导致子进程崩溃退出。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    SELF_FORK = 0,

    /**
     * 从AppSpawn Fork子进程。以该模式启动的子进程不会继承父进程资源，可以使用Binder IPC和其他进程通信。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    APP_SPAWN_FORK = 1
  }

  /**
   * 启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用Promise异步回调。
   * 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回16000061错误码。
   *
   * > **说明：**
   * >
   * > 调用该接口创建子进程成功会返回子进程pid，然后执行子进程的[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数
   * > ，[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数执行完后子进程会自动销毁。
   * >
   * > 调用该接口创建的子进程不支持异步ArkTS API调用，仅支持同步ArkTS API调用。
   *
   * @param { string } srcEntry - 子进程源文件路径，只支持源文件放在entry类型的模块中，以src/main为根目录。例如子进程文件在entry模块下src/main/ets/process/
   *     DemoProcess.ets，则srcEntry为"./ets/process/DemoProcess.ets"。<br/>另外，需要确保子进程源文件被其它文件引用到，防止被构建工具优化掉。（详见下方示例代码）
   * @param { StartMode } startMode - 子进程启动模式。
   * @returns { Promise<int> } Promise对象，返回子进程pid。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function startChildProcess(srcEntry: string, startMode: StartMode): Promise<int>;

  /**
   * 启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用callback异步回调。
   * 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回16000061错误码。
   *
   * > **说明：**
   * >
   * > 调用该接口创建子进程成功会返回子进程pid，然后执行子进程的[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数
   * > ，[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数执行完后子进程会自动销毁。
   * >
   * > 调用该接口创建的子进程不支持异步ArkTS API调用，仅支持同步ArkTS API调用。
   *
   * @param { string } srcEntry - 子进程源文件路径，只支持源文件放在entry类型的模块中，以src/main为根目录。例如子进程文件在entry模块下src/main/ets/process/
   *     DemoProcess.ets，则srcEntry为"./ets/process/DemoProcess.ets"。<br/>另外，需要确保子进程源文件被其它文件引用到，防止被构建工具优化掉。（详见下方示例代码）
   * @param { StartMode } startMode - 子进程启动模式。
   * @param { AsyncCallback<int> } callback - 回调函数。当子进程启动成功，err为undefined，data为获取到的子进程pid；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function startChildProcess(srcEntry: string, startMode: StartMode, callback: AsyncCallback<int>): void;

  /**
   * 启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用Promise异步回调。
   * 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回801错误码。
   *
   * > **说明：**
   * >
   * > 调用该接口创建的子进程不会继承父进程资源，子进程创建成功会返回子进程pid，然后执行子进程的
   * > [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数。
   * > [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数执行完后子进程不会自动销毁，需要子进程调用
   * > [process.abort]{@link @ohos.process:process.abort}销毁。调用该接口的进程销毁后，所创建的子进程也会一并销毁。
   *
   * @param { string } srcEntry - 子进程源文件路径，不支持源文件放在HAR类型的模块中。由“模块名” + “/” + “文件路径”组成，文件路径以src/main为根目录。例如子进程文件在module1模块下src/
   *     main/ets/process/DemoProcess.ets，则srcEntry为"module1/ets/process/DemoProcess.ets"。<br/>另外，需要确保子进程源文件被其它文件引用到，防止被构建工具优
   *     化掉。（详见下方示例代码）
   * @param { ChildProcessArgs } args - 传递到子进程的参数。
   * @param { ChildProcessOptions } [options] - 子进程的启动配置选项。
   * @returns { Promise<int> } Promise对象，返回子进程pid。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit. [since 13]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function startArkChildProcess(srcEntry: string, args: ChildProcessArgs, options?: ChildProcessOptions): Promise<int>;

  /**
   * 启动[Native子进程](docroot://application-models/ability-terminology.md#native子进程)。使用Promise异步回调。
   * 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回801错误码。
   *
   * > **说明：**
   * >
   * > 调用该接口创建的子进程不会继承父进程资源，子进程创建成功会返回子进程pid，然后加载参数中指定的动态链接库文件并执行子进程的入口函数，入口函数执行完后子进程会自动销毁。调用该接口的进程销毁后，所创建的子进程也会一并销毁。
   *
   * @param { string } entryPoint - 子进程中调用动态库的符号和入口函数，中间用“:”隔开（例如“libentry.so:Main”)。
   * @param { ChildProcessArgs } args - 传递到子进程的参数。
   * @param { ChildProcessOptions } [options] - 子进程的启动配置选项。
   * @returns { Promise<int> } Promise对象，返回子进程pid。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000062 - The number of child processes exceeds the upper limit.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  function startNativeChildProcess(entryPoint: string, args: ChildProcessArgs, options?: ChildProcessOptions): Promise<int>;
}

export default childProcessManager;