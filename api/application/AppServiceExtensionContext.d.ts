/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import ExtensionContext from './ExtensionContext';
import { ConnectOptions } from '../ability/connectOptions';
import Want from '../@ohos.app.ability.Want';
import StartOptions from '../@ohos.app.ability.StartOptions';

/**
 * The AppServiceExtensionContext module provides the context environment for the
 * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md).
 * It inherits from [ExtensionContext]{@link ExtensionContext:ExtensionContext}.
 *
 * AppServiceExtensionContext provides APIs to connect to and disconnect from a ServiceExtensionAbility (an
 * ExtensionAbility for system application background services), as well as to terminate an AppServiceExtensionAbility.
 * Note that a ServiceExtensionAbility can only be developed by system applications and supports connections from third-
 * party applications.
 *
 * > **NOTE**
 * >
 * > - The APIs of this module must be used in the main thread, but not in child threads such as Worker and TaskPool.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare class AppServiceExtensionContext extends ExtensionContext {
  /**
   * Connects this AppServiceExtensionAbility to a ServiceExtensionAbility. It enables communication with the
   * ServiceExtensionAbility via a proxy, allowing access to the capabilities exposed by the ServiceExtensionAbility.
   * This API can be called only by the main thread.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { ConnectOptions } callback - Callback used to return the information indicating that the connection is
   *     successful, failed, or interrupted.
   * @returns { long } Connection ID. The client can call
   *     [disconnectServiceExtensionAbility]{@link AppServiceExtensionContext.disconnectServiceExtensionAbility} with
   *     this ID for disconnection.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  connectServiceExtensionAbility(want: Want, callback: ConnectOptions): long;

  /**
   * Disconnects this AppServiceExtensionAbility from a ServiceExtensionAbility. This API can be called only by the main
   * thread. It uses a promise to return the result.
   *
   * @param { long } connection - Connection ID returned by
   *     [connectServiceExtensionAbility]{@link AppServiceExtensionContext.connectServiceExtensionAbility}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;

  /**
   * Starts the UIAbility. This API can be called only by the main thread. It uses a promise to return the result.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { StartOptions } [options] - Parameters used for starting the ability.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000071 - App clone is not supported.
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @throws { BusinessError } 16000076 - The app instance key is invalid.
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit.
   * @throws { BusinessError } 16000078 - The multi-instance is not supported.
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified.
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Terminates this AppServiceExtensionAbility. This API can be called only by the main thread. It uses a promise to
   * return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;
}
export default AppServiceExtensionContext;