/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
 * 传递到子进程的参数。[childProcessManager]{@link @ohos.app.ability.childProcessManager:childProcessManager}启动子进程时，可以通过
 * ChildProcessArgs传递参数到子进程中。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export interface ChildProcessArgs {
  /**
   * 开发者自定义参数，透传到子进程中。可以在[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess.onStart}方法中通过
   * args.entryParams获取，entryParams支持传输的最大数据量为150KB。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  entryParams?: string;

  /**
   * 文件描述符句柄集合，用于主进程和子进程通信，通过key-value的形式传入到子进程中，其中key为自定义字符串，value为文件描述符句柄。可以在
   * [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess.onStart}方法中通过args.fds获取fd句柄。
   * 
   * <b>说明：</b> 
   * 
   * - fds最多支持16组，每组key的最大长度为20字符。
   * - 传递到子进程中句柄数字可能会变，但是指向的文件是一致的。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  fds?: Record<string, int>;
}