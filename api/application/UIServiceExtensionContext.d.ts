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

import ExtensionContext from './ExtensionContext';
import type Want from '../@ohos.app.ability.Want';
import type StartOptions from '../@ohos.app.ability.StartOptions';
import type AbilityStartCallback from './AbilityStartCallback';
import { ConnectOptions } from '../ability/connectOptions';
/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * The UIServiceExtensionContext module provides the context environment for a
 * [UIServiceExtensionAbility]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}. It
 * inherits from [ExtensionContext]{@link ExtensionContext:ExtensionContext}.
 *
 * UIServiceExtensionContext provides access to a
 * [UIServiceExtensionAbility]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility} and
 * APIs for operating the ability, for example, starting, terminating, connecting, and disconnecting ability.
 *
 * > **NOTE**
 * >
 * > - The APIs of this module must be used on the main thread, but not on child threads such as Worker and TaskPool.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 14 dynamic
 * @since 23 static
 */
declare class UIServiceExtensionContext extends ExtensionContext {
  /**
   * Starts an ability. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { StartOptions } [options] - Parameters used for starting the ability.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Terminates this
   * [UIServiceExtensionAbility]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}. This
   * API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;

  /**
   * Starts a [UIAbility]{@link ./../@ohos.app.ability.UIAbility} or
   * [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility} based on the type of the
   * target ability. This API can be called only by applications running in the foreground. This API uses a promise to
   * return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { string } type - Type of the target ability.
   * @param { Record<string, Object> } wantParam - Want parameter.
   * @param { AbilityStartCallback } abilityStartCallback - Callback invoked to return the UIExtensionAbility startup
   *     result.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     . Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback): Promise<void>;

  /**
   * Starts a [UIAbility]{@link ./../@ohos.app.ability.UIAbility} or
   * [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility} based on the type of the
   * target ability. This API can be called only by applications running in the foreground. This API uses a promise to
   * return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { string } type - Type of the target ability.
   * @param { Record<string, RecordData> } wantParam - Want parameter.
   * @param { AbilityStartCallback } abilityStartCallback - Callback invoked to return the UIExtensionAbility startup
   *     result.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback): Promise<void>;

  /**
   * Connects to a [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility} and returns
   * the connection ID.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want parameter.
   * @param { ConnectOptions } options - Connection options.
   * @returns { long } Connection ID.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): long;

  /**
   * Disconnects from a [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. This
   * API is opposite to [connectServiceExtensionAbility]{@link UIServiceExtensionContext.connectServiceExtensionAbility}
   * . This API uses a promise to return the result.
   *
   * @param { long } connectionId - Connection ID returned by
   *     [connectServiceExtensionAbility]{@link UIServiceExtensionContext.connectServiceExtensionAbility}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connectionId: long): Promise<void>;
}

export default UIServiceExtensionContext;