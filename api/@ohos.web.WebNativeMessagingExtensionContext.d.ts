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
 * WebNativeMessagingExtensionContext is the runtime context of the native web message extension (
 * [WebNativeMessagingExtensionAbility]{@link @ohos.web.WebNativeMessagingExtensionAbility}). It inherits from
 * ExtensionContext and provides lifecycle management, ability startup, and native message connection control
 * capabilities for the extension ability. In an extension that inherits from WebNativeMessagingExtensionAbility,
 * developers can obtain this context through `this.context` and then call
 * [startAbility]{@link WebNativeMessagingExtensionContext#startAbility} to start another ability, call
 * [startAbilityForResult]{@link WebNativeMessagingExtensionContext#startAbilityForResult} to start a UIAbility and
 * receive the return result, call [terminateSelf]{@link WebNativeMessagingExtensionContext#terminateSelf} to terminate
 * the current extension, or call [stopNativeConnection]{@link WebNativeMessagingExtensionContext#stopNativeConnection}
 * to stop a specified native web message connection.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @stagemodelonly
 * @since 21 dynamic
 */
export default class WebNativeMessagingExtensionContext extends ExtensionContext {
  /**
   * Starts an ability. This API uses a promise to return the result. To obtain the return result when the started
   * UIAbility exits, use [startAbilityForResult]{@link WebNativeMessagingExtensionContext#startAbilityForResult}.
   *
   * @param { Want } want - Information about the Ability to start, including bundleName, abilityName, and other
   *     attributes, used to specify the target Ability to start.
   * @param { StartOptions } [options] - Start options used to specify the options when starting the target UIAbility,
   *     including but not limited to the window mode and the screen where the target UIAbility is started. This
   *     parameter is passed when custom startup configuration is needed; if not passed, the default system startup
   *     configuration is used.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Starts a UIAbility. This API uses a promise to return the result when the started UIAbility exits.
   *
   * After the UIAbility is started, the following situations may occur:
   *
   * - Under normal circumstances,
   * [terminateSelfWithResult]{@link UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * can be called to terminate the UIAbility and return the result to the caller.
   * - In abnormal cases, such as when the UIAbility is destroyed, exception information is returned to the caller, with
   * resultCode set to -1.
   * - Only UIAbilities of the current app can be started.
   *
   * @param { Want } want - Information about the UIAbility to start, including attributes such as bundleName and
   *     abilityName, used to specify the target UIAbility.
   * @param { StartOptions } [options] - Start options for configuring the window mode of the UIAbility. Pass this
   *     parameter when custom start configuration is required; otherwise, the default system start configuration is
   *     used. For details about the default values of each field, see
   *     [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}.
   * @returns { Promise<AbilityResult> } Promise used to return the result code and data when the started ability exits.
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
   * Destroys the current native web message extension. This method returns a promise for asynchronous processing.
   * Calling this method automatically stops all native web message connections, so there is no need to call
   * stopNativeConnection.
   *
   * @returns { Promise<void> } Promise that returns no value.
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
   * Stops the specified native connection. This API uses a promise to return the result.
   *
   * @param { number } connectionId - ID of the connection to stop. The value must be a positive integer and a valid
   *     connection ID. If the connectionId value is invalid, a corresponding error code is returned.
   * @returns { Promise<void> } Promise that returns no value.
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
