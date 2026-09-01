/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 脚本管理
 * @kit AbilityKit
 */

import Context from './application/Context';

/**
 * 本模块提供管理和组织脚本信息的能力，支持应用的ArkTS脚本执行结果上报。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
declare namespace scriptManager {
  /**
   * 应用的ArkTS脚本入口函数的第一个参数，用于接收系统传递的脚本上下文信息。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface ArkTSScriptInfo {  
  /**
   * 用于标识当前操作的请求码
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  readonly requestCode: string;

   /**
    * 绑定的Ability上下文。
    *
    * @syscap SystemCapability.Ability.AgentRuntime.Core
    * @stagemodelonly
    * @atomicservice
    * @since 26.0.0 dynamic&static
    */
   readonly context: Context;
}

  /**
   * ArkTS脚本执行结果。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  interface ExecuteResult {  
  /**
   * 表示结果码。取值范围为整数，默认值为0。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  code: number;
  
  /**
   * 表示脚本执行结果。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  result?: Record<string, Object>;
  
  /**
   * 表示需要授权给调用方的URI列表。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  uris?: Array<string>;
  
  /**
   * 表示URI的读写权限，与{@link Want#flags}的flags字段含义一致。取值范围如下：
   * {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}：读权限。
   * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}：写权限。
   * 以上两个标志的组合：同时授权读写权限。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  flags?: number;
}

  /**
   * 完成应用的ArkTS脚本执行，上报执行结果。使用Promise异步回调。
   *
   * @param { Context } context - Ability上下文，用于临时文件授权。
   * @param { string } requestCode - 用于标识当前操作的请求码。
   * @param { ExecuteResult } result - ArkTS脚本的执行结果。
   * @returns { Promise<void> } - Promise对象，无返回结果。
   * @throws { BusinessError } 16000020 - The context is not ability context.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed;
   *     3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  function completeArkTSScriptInApp(context: Context, requestCode: string, result: ExecuteResult): Promise<void>;
}

export default scriptManager;