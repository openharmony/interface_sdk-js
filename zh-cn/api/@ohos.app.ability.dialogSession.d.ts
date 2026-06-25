/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import type Want from './@ohos.app.ability.Want';
import type { MultiAppMode } from './bundleManager/ApplicationInfo';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * dialogSession模块用于支持系统应用弹框功能。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace dialogSession {

  /**
   * 提供会话组件信息，包括包名、模块名、组件名等信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DialogAbilityInfo {

    /**
     * 表示包名。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 表示模块名。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * 表示组件名。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 表示Ability图标ID。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityIconId: int;

    /**
     * 表示Ability标签ID。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityLabelId: int;

    /**
     * 表示Bundle图标ID。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleIconId: int;

    /**
     * 表示Bundle标签ID。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleLabelId: int;

    /**
     * 表示Ability是否可见。true表示Ability可见，false表示Ability不可见。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    visible: boolean;

    /**
     * 表示应用的分身索引。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appIndex: int;

    /**
     * 表示应用的多开模式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    multiAppMode: MultiAppMode;

    /**
     * 表示应用程序的安装目录。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    codePath?: string;

    /**
     * 表示应用程序的安装来源，支持的取值如下：
     * 
     * - pre-installed：表示首次开机时安装的预置应用。
     * - ota：表示系统升级时新增的预置应用。
     * - recovery：表示用户卸载后又手动恢复的预置应用。
     * - bundleName：表示由此包名对应的应用安装。该bundleName代表变量，以实际值为准。
     * - unknown：表示应用安装来源未知。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    installSource?: string;
  }

  /**
   * 提供会话信息，包括请求方信息、目标组件信息列表、其他参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DialogSessionInfo {

    /**
     * 表示请求方组件信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    callerAbilityInfo: DialogAbilityInfo;

    /**
     * 表示目标组件信息列表。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    targetAbilityInfos: Array<DialogAbilityInfo>;

    /**
     * 表示其他参数。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * 表示其他参数。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * 通过dialogSessionId获取会话信息。
   *
   * @param { string } dialogSessionId - 用户请求会话ID。
   * @returns { DialogSessionInfo } 同步返回会话信息。
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo;

  /**
   * 根据dialogSessionId获取会话信息。
   *
   * @param { string } dialogSessionId - 用户请求会话ID。
   * @returns { DialogSessionInfo | null } Returns the session info when the target DialogSessionInfo of
   *     dialogSessionId exists. Returns null if the target DialogSessionInfo of dialogSessionId not exist.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo | null;

  /**
   * 发送用户请求。使用Promise异步回调。
   *
   * @param { string } dialogSessionId - 用户请求会话ID。
   * @param { Want } targetWant - 用户请求目标。
   * @param { boolean } isAllowed - 是否允许拉起目标Ability。true表示允许，false表示不允许。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean): Promise<void>;

  /**
   * 发送用户请求。使用callback异步回调。
   *
   * @param { string } dialogSessionId - 用户请求会话ID。
   * @param { Want } targetWant - 用户请求目标。
   * @param { boolean } isAllowed - 是否允许拉起目标Ability。true表示允许，false表示不允许。
   * @param { AsyncCallback<void> } callback - 回调函数。当发送用户请求成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean, callback: AsyncCallback<void>): void;
}

export default dialogSession;