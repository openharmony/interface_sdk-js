/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
  * @kit ArkWeb
 */

import ExtensionContext from './application/ExtensionContext';
import Want from './@ohos.app.ability.Want';
import StartOptions from './@ohos.app.ability.StartOptions';
import { AbilityResult } from './ability/abilityResult';

/**
 * WebNativeMessagingExtensionContext是Web原生消息扩展（
 * [WebNativeMessagingExtensionAbility]{@link @ohos.web.WebNativeMessagingExtensionAbility}）的运行上下文，继承自ExtensionContext，为
 * 扩展Ability提供生命周期管理、Ability启动以及原生消息连接控制能力。开发者可在继承WebNativeMessagingExtensionAbility的扩展中通过`this.context`获取该上下文，进而调用
 * [startAbility]{@link WebNativeMessagingExtensionContext#startAbility}启动其他Ability、调用
 * [startAbilityForResult]{@link WebNativeMessagingExtensionContext#startAbilityForResult}启动UIAbility并接收返回结果、调用
 * [terminateSelf]{@link WebNativeMessagingExtensionContext#terminateSelf}结束当前扩展，或调用
 * [stopNativeConnection]{@link WebNativeMessagingExtensionContext#stopNativeConnection}停止指定的Web原生消息连接。
 * 
 * > **说明:**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 21 dynamic
 */
export default class WebNativeMessagingExtensionContext extends ExtensionContext {
  /**
   * 使用Promise异步回调启动Ability。如需获取启动的UIAbility退出时的返回结果，可以使用
   * [startAbilityForResult]{@link WebNativeMessagingExtensionContext#startAbilityForResult}。
   *
   * @param { Want } want - 表示需要启动的Ability的信息，包含bundleName、abilityName等属性，用于指定要启动的目标Ability。
   * @param { StartOptions } [options] - 启动选项，用于指定目标UIAbility启动时的选项，包括但不局限于窗口模式、目标UIAbility启动时所在的屏幕等。当需要自定义启动配置时传入，不传入时使
   *     用系统默认启动配置。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000071 - App clone is not supported.
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @throws { BusinessError } 16000076 - The app instance key is invalid.
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit.
   * @throws { BusinessError } 16000078 - The multi-instance is not supported.
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified.
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * 启动一个UIAbility，使用Promise异步回调接收被拉起的UIAbility退出时的返回结果。
   * UIAbility被启动后，有如下情况:
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如销毁UIAbility会返回异常信息给调用方，异常信息中resultCode为-1。
   * - 只支持拉起自己应用的UIAbility。
   *
   * @param { Want } want - 表示需要启动的UIAbility的信息，包含bundleName、abilityName等属性，用于指定要启动的目标UIAbility。
   * @param { StartOptions } [options] - 启动选项，用于配置UIAbility的窗口模式等。当需要自定义启动配置时传入，不传入时使用系统默认启动配置。各字段默认值参考
   *     [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}说明。
   * @returns { Promise<AbilityResult> } Promise对象，返回被启动方退出时的结果码和数据。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled by the AppGallery and cannot be started.
   * @throws { BusinessError } 16000013 - The application is controlled by Enterprise Device Manager and
   *     cannot be started.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000071 - The application does not support appClone mode in multiAppMode.
   * @throws { BusinessError } 16000072 - The application does not support appClone and multi-instance mode in
   *     multiAppMode.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @throws { BusinessError } 16000076 - The app instance key is invalid.
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit.
   * @throws { BusinessError } 16000078 - The application does not support multiple instances.
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified.
   * @throws { BusinessError } 16000080 - Instances cannot be created for other applications during
   *     inter-application startup.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>;

  /**
   * 销毁当前Web原生消息扩展。该方法返回一个Promise对象用于异步处理，调用此方法会自动停止所有Web原生消息连接，无需再调用stopNativeConnection。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  terminateSelf(): Promise<void>;

  /**
   * 停止指定的本地连接。使用Promise异步回调。
   *
   * @param { number } connectionId - 要停止的连接ID。取值范围为正整数，必须是有效的连接ID。当connectionId值无效时，会对应返回错误码。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Web.Webview.Core
   * @stagemodelonly
   * @since 21 dynamic
   */
  stopNativeConnection(connectionId: number): Promise<void>;
}