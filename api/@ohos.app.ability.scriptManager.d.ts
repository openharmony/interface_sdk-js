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
 * @file Script Management
 * @kit AbilityKit
 */

import Context from './application/Context';

/**
 * This module provides the capability to manage and organize script information, and supports reporting the
 * execution results of ArkTS scripts in an app.
 * 
 * > **NOTE**
 * > The ArkTS script of an app must be bound to an ability. Configure the corresponding ability in the
 * > [skillProfiles tag](docroot://quick-start/module-configuration-file.md#skillprofiles) of 
 * > [module.json5](docroot://quick-start/module-configuration-file.md).
 * > The script is exported through export default class. The first parameter of its entry function is fixed as
 * > [ArkTSScriptInfo]{@link ArkTSScriptInfo}, which is used to receive the script context information passed
 * > by the system. Developers can add custom parameters after the first parameter.
 *
 * @namespace scriptManager
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamiconly
 */
declare namespace scriptManager {
  /**
   * The first parameter of the ArkTS script entry function of an app, used to receive the script context information
   * passed by the system.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface ArkTSScriptInfo {  
  /**
   * Request code for identifying the current operation
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  readonly requestCode: string;

  /**
   * Tool call ID passed by the caller, used to associate this arkTS script
   * invocation with a test step. It is undefined when the caller does not
   * pass a tool call ID or passes an empty string.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  readonly toolCallId?: string;

   /**
    * The context of the bound ability.
    *
    * @syscap SystemCapability.Ability.AgentRuntime.Core
    * @stagemodelonly
    * @atomicservice
    * @since 26.0.0 dynamic&static
    */
   readonly context: Context;
}

  /**
   * Result of arkTS script execution.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  interface ExecuteResult {  
  /**
   * Result code. The value is an integer, and the default value is 0.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  code: number;
  
  /**
   * Indicates execute result.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  result?: Record<string, Object>;
  
  /**
   * Indicates the URIs will be authorized to the caller.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  uris?: Array<string>;
  
  /**
   * Read/write permission of the URIs, which is the same as the flags field of
   * [Want]{@link @ohos.app.ability.Want:Want}. The value can be any of the following:
   * - [wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION]{@link @ohos.app.ability.wantConstant:wantConstant.Flags#FLAG_AUTH_READ_URI_PERMISSION}:
   * read permission.
   * - [wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION]{@link @ohos.app.ability.wantConstant:wantConstant.Flags#FLAG_AUTH_WRITE_URI_PERMISSION}:
   * write permission.
   * - A combination of the two flags above: grants both read and write permissions.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamiconly
   */
  flags?: number;
}

  /**
   * Completes the ArkTS script execution of an app and reports the execution result. This API uses a promise
   * to return the result.
   *
   * @param { Context } context - Ability context, Used for temporary file authorization.
   * @param { string } requestCode - Identifying the current operation. It is from ArkTSScriptInfo.requestCode.
   * @param { ExecuteResult } result - The result of arkTS script execution.
   * @returns { Promise<void> } - Promise object that returns no value.
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
