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

import type { ChildProcessArgs } from './@ohos.app.ability.ChildProcessArgs';

/**
 * 开发者自定义子进程的基类。通过[childProcessManager]{@link @ohos.app.ability.childProcessManager:childProcessManager}启动子进程时，需要继承此类并重写
 * 入口方法。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare class ChildProcess {

  /**
   * 子进程的入口方法，通过[childProcessManager]{@link @ohos.app.ability.childProcessManager:childProcessManager}启动子进程后调用。
   *
   * @param { ChildProcessArgs } [args] - 传递到子进程的参数。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onStart(args?: ChildProcessArgs): void;
}

export default ChildProcess;