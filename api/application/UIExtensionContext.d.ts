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

import type { AsyncCallback } from '../@ohos.base';
import type ConfigurationConstant from '../@ohos.app.ability.ConfigurationConstant';
import ExtensionContext from './ExtensionContext';
import type Want from '../@ohos.app.ability.Want';
import type StartOptions from '../@ohos.app.ability.StartOptions';
import OpenLinkOptions from '../@ohos.app.ability.OpenLinkOptions';
import type AtomicServiceOptions from '../@ohos.app.ability.AtomicServiceOptions';
/*** if arkts dynamic */
import type { AbilityResult } from '../ability/abilityResult';
import type { ConnectOptions } from '../ability/connectOptions';
import type UIServiceProxy from './UIServiceProxy';
import type UIServiceExtensionConnectCallback from './UIServiceExtensionConnectCallback';
/*** endif */
/*** if arkts static */
import { AbilityResult } from '../ability/abilityResult';
import { ConnectOptions } from '../ability/connectOptions';
import UIServiceProxy from './UIServiceProxy';
import UIServiceExtensionConnectCallback from './UIServiceExtensionConnectCallback';
/*** endif */

/**
 * UIExtensionContext provides the context environment for
 * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. It inherits from
 * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext} and provides UIExtensionAbility-related
 * configuration and APIs for operating the UIExtensionAbility. For example, you can use the APIs to start a
 * UIExtensionAbility.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
declare class UIExtensionContext extends ExtensionContext {
  /**
   * Starts a UIAbility. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want required for starting the UIAbility, which contains information such as the name of the
   *     UIAbility to start.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the UIAbility is started, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application. [since 12]
   * @throws { BusinessError } 16000070 - The extension cannot start the service. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000076 - The app instance key is invalid. [since 14]
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit. [since 14]
   * @throws { BusinessError } 16000078 - The multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified. [since 14]
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported. [since 14]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want required for starting the UIAbility, which contains information such as the name of the
   *     UIAbility to start.
   * @param { StartOptions } options - Extra parameters used for starting the UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the UIAbility is started, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application. [since 12]
   * @throws { BusinessError } 16000070 - The extension cannot start the service. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000076 - The app instance key is invalid. [since 14]
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit. [since 14]
   * @throws { BusinessError } 16000078 - The multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified. [since 14]
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported. [since 14]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want required for starting the UIAbility, which contains information such as the name of the
   *     UIAbility to start.
   * @param { StartOptions } [options] - Extra parameters used for starting the UIAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application. [since 12]
   * @throws { BusinessError } 16000070 - The extension cannot start the service. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000076 - The app instance key is invalid. [since 14]
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit. [since 14]
   * @throws { BusinessError } 16000078 - The multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified. [since 14]
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported. [since 14]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Starts a UIAbility by using App Linking or Deep Linking. This API uses a promise to return the result.
   * A URL in the standard format is passed in to the **link** field to start the target UIAbility based on the implicit
   *  Want matching rules. The target UIAbility must have the following filter characteristics to process links of App
   * Linking:
   *
   * - The **actions** field must contain **ohos.want.action.viewData**.
   * - The **entities** field must contain **entity.system.browsable**.
   * - The **uris** field must contain elements whose **scheme** is **https** and **domainVerify** is **true**.
   * If you want to obtain the result after the started UIAbility is terminated, set the **callback** parameter. For
   * details about how to use this parameter, see
   * [startAbilityForResult]{@link UIExtensionContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   * .
   * If an input parameter is invalid, for example, a mandatory parameter is not set or the URL set in **link** is not
   * in the standard format, an exception is thrown. If the parameter verification is successful but an error occurs
   * when starting the target UIAbility, the error information is returned through promise.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { string } link - URL to open, which must be in the standard format.
   * @param { OpenLinkOptions } [options] - Options of the URL.
   * @param { AsyncCallback<AbilityResult> } [callback] - Callback used to return the result.
   * @returns { Promise<void> } that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
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
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000136 - The UIAbility is prohibited from launching itself via App Linking. [since 23]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  openLink(link: string, options?: OpenLinkOptions, callback?: AsyncCallback<AbilityResult>): Promise<void>;

  /**
   * Starts a UIAbility and returns the exit result of the launched UIAbility via a callback. This API uses an
   * asynchronous callback to return the result. The following situations may be possible for a started UIAbility:
   *
   * - Normally, you can call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility. The result is returned to the caller.
   * - If an exception occurs, for example, the UIAbility is killed, an error message, in which **resultCode** is **-1**
   * , is returned to the initiator UIAbility.
   * - If different applications call this API to start a UIAbility that uses the singleton mode and then call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility, the normal result is returned to the last caller, and an exception message, in which
   * **resultCode** is **-1**, is returned to others.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want required for starting the UIAbility, which contains information such as the name of the
   *     UIAbility to start.
   * @param { AsyncCallback<AbilityResult> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application. [since 12]
   * @throws { BusinessError } 16000070 - The extension cannot start the service. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000076 - The app instance key is invalid. [since 14]
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit. [since 14]
   * @throws { BusinessError } 16000078 - The multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified. [since 14]
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported. [since 14]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts a UIAbility and returns the exit result of the launched UIAbility via a callback. This API uses an
   * asynchronous callback to return the result. The following situations may be possible for a started UIAbility:
   *
   * - Normally, you can call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility. The result is returned to the caller.
   * - If an exception occurs, for example, the UIAbility is killed, an error message, in which **resultCode** is **-1**
   * , is returned to the initiator UIAbility.
   * - If different applications call this API to start a UIAbility that uses the singleton mode and then call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility, the normal result is returned to the last caller, and an exception message, in which
   * **resultCode** is **-1**, is returned to others.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want required for starting the UIAbility, which contains information such as the name of the
   *     UIAbility to start.
   * @param { StartOptions } options - Extra parameters used for starting the UIAbility.
   * @param { AsyncCallback<AbilityResult> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application. [since 12]
   * @throws { BusinessError } 16000070 - The extension cannot start the service. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000076 - The app instance key is invalid. [since 14]
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit. [since 14]
   * @throws { BusinessError } 16000078 - The multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified. [since 14]
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported. [since 14]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, options: StartOptions, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts a UIAbility and returns the exit result of the launched UIAbility via a callback. This API uses a promise to
   *  return the result. The following situations may be possible for a started UIAbility:
   *
   * - Normally, you can call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility. The result is returned to the caller.
   * - If an exception occurs, for example, the UIAbility is killed, an error message, in which **resultCode** is **-1**
   * , is returned to the initiator UIAbility.
   * - If different applications call this API to start a UIAbility that uses the singleton mode and then call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility, the normal result is returned to the last caller, and an exception message, in which
   * **resultCode** is **-1**, is returned to others.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want required for starting the UIAbility, which contains information such as the name of the
   *     UIAbility to start.
   * @param { StartOptions } [options] - Extra parameters used for starting the UIAbility.
   * @returns { Promise<AbilityResult> } Promise used to return the exit result of the launched UIAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application. [since 12]
   * @throws { BusinessError } 16000070 - The extension cannot start the service. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000076 - The app instance key is invalid. [since 14]
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit. [since 14]
   * @throws { BusinessError } 16000078 - The multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified. [since 14]
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported. [since 14]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>;

  /**
   * Starts an ability with the caller information specified. The caller information is carried in **want** and
   * identified at the system service layer. The ability can obtain the caller information from the **want** parameter
   * in the **onCreate** lifecycle callback. When this API is used to start an ability, the caller information carried
   * in **want** is not overwritten by the current application information. The system service layer can obtain the
   * initial caller information. This API uses a promise to return the result.
   *
   * - Normally, you can call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the ability. The result is returned to the caller.
   * - If an exception occurs, for example, the ability is killed, an error message, in which **resultCode** is **-1**,
   * is returned to the caller.
   * - If different applications call this API to start an ability that uses the singleton mode and then call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the ability, the normal result is returned to the last caller, and an exception message, in which
   * **resultCode** is **-1**, is returned to others.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information about the target ability.
   * @param { StartOptions } [options] - Parameters used for starting the ability.
   * @returns { Promise<AbilityResult> } Promise used to return the result.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application.
   * @throws { BusinessError } 16000070 - The extension cannot start the service.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000076 - The app instance key is invalid. [since 14]
   * @throws { BusinessError } 16000077 - The number of app instances reaches the limit. [since 14]
   * @throws { BusinessError } 16000078 - The multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000079 - The APP_INSTANCE_KEY cannot be specified. [since 14]
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported. [since 14]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startAbilityForResultAsCaller(want: Want, options?: StartOptions): Promise<AbilityResult>;

  /**
   * Connects the current UI extension to an service extension ability with a root host token.
   * If the target service extension ability is visible, you can connect the target service extension ability;
   * If the target service extension ability is invisible, you need to apply for
   *     permission:ohos.permission.START_INVISIBLE_ABILITY to connect target invisible service extension ability.
   * If the target service extension ability is in cross-device, you need to apply for
   *     permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - The element name of the service ability
   * @param { ConnectOptions } connect - The remote object instance
   * @returns { long } Returns the number code of the ability connected
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. Possible cause:
   *     target service extension ability is in cross-device and needed designated permission to be started, but
   *     call ability do not have this permission.
   * @throws { BusinessError } 202 - Not system application
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to commnicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000070 - The extension cannot start the service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  connectServiceExtensionAbilityWithRootHostToken(want: Want, connect: ConnectOptions): long;

  /**
   * Connects this UIExtensionAbility to a ServiceExtensionAbility. It enables communication with the
   * ServiceExtensionAbility via a proxy, allowing access to the capabilities exposed by the ServiceExtensionAbility.
   * ServiceExtensionAbility is a special type of
   * [ExtensionAbility](docroot://application-models/extensionability-overview.md) provided by the system. It is
   * designed to offer background services for specific scenarios and is not customizable by developers. It can be
   * connected to by other components and handles requests in the background based on the caller information.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information required for connecting to the ServiceExtensionAbility, including the ability
   *     name and bundle name.
   * @param { ConnectOptions } options - Callback used to return the information indicating that the connection is successful
   *     , failed, or interrupted.
   * @returns { long } Connection ID. The client can call
   *     [disconnectServiceExtensionAbility]{@link UIExtensionContext.disconnectServiceExtensionAbility(connection: long)}
   *     with this ID for disconnection.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000070 - The extension cannot start the service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): long;

  /**
   * Disconnects from a ServiceExtensionAbility. Once the connection is terminated, set the remote object, which is
   * returned when the connection is established, to null. This API uses an asynchronous callback to return the result.
   * ServiceExtensionAbility is a special type of
   * [ExtensionAbility](docroot://application-models/extensionability-overview.md) provided by the system. It is
   * designed to offer background services for specific scenarios and is not customizable by developers. It can be
   * connected to by other components and handles requests in the background based on the caller information.
   *
   * @param { long } connection - ID of the connected ServiceExtensionAbility, that is, **connectionId** returned by
   *     **connectServiceExtensionAbility**.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the disconnection is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void;

  /**
   * Disconnects from a ServiceExtensionAbility. Once the connection is terminated, set the remote object, which is
   * returned when the connection is established, to null. This API uses a promise to return the result.
   * ServiceExtensionAbility is a special type of
   * [ExtensionAbility](docroot://application-models/extensionability-overview.md) provided by the system. It is
   * designed to offer background services for specific scenarios and is not customizable by developers. It can be
   * connected to by other components and handles requests in the background based on the caller information.
   *
   * @param { long } connection - ID of the connected ServiceExtensionAbility, that is, **connectionId** returned by
   *     [connectServiceExtensionAbility]{@link UIExtensionContext#connectServiceExtensionAbility}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;

  /**
   * Called when the window content associated with the UIExtensionAbility finishes drawing. The system uses the
   * information to optimize resource allocation, thereby enhancing the efficiency of application startup and display.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the event is reported, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  reportDrawnCompleted(callback: AsyncCallback<void>): void;

  /**
   * Destroys this UIExtensionAbility and closes the corresponding window. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * Destroys this UIExtensionAbility and closes the corresponding window. This API uses a promise to return the result.
   *
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;

  /**
   * Destroys this UIExtensionAbility, closes the corresponding window, and returns the result to the caller of the
   * UIExtensionAbility (usually a system service). This API uses an asynchronous callback to return the result.
   *
   * @param { AbilityResult } parameter - Information returned to the caller of the UIExtensionAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

  /**
   * Destroys this UIExtensionAbility, closes the corresponding window, and returns the result to the caller of the
   * UIExtensionAbility (usually a system service). This API uses a promise to return the result.
   *
   * @param { AbilityResult } parameter - Information returned to the caller of the UIExtensionAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * Opens an atomic service in an independent window and returns the result. This API uses a promise to return the
   * result.
   * The following situations may be possible for a started atomic service:
   *
   * - Normally, you can call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the atomic service. The result is returned to the caller.
   * - If an exception occurs, for example, the atomic service is killed, an error message, in which **resultCode** is
   * **-1**, is returned to the caller.
   * - If different applications call this API to start an atomic service and then call
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the atomic service, the normal result is returned to the last caller, and an exception message, in
   * which **resultCode** is **-1**, is returned to others.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { string } appId - Unique ID of the application, which is allocated by the cloud.
   * @param { AtomicServiceOptions } [options] - Parameter carried in the request for starting the atomic service.
   * @returns { Promise<AbilityResult> } Promise used to return the information to the caller.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  openAtomicService(appId: string, options?: AtomicServiceOptions): Promise<AbilityResult>;

  /**
   * Starts a UIServiceExtensionAbility. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want for starting the UIServiceExtensionAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  startUIServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * Connects to a UIServiceExtensionAbility. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information used for connection.
   * @param { UIServiceExtensionConnectCallback } callback - Callback for connecting to the UIServiceExtensionAbility.
   * @returns { Promise<UIServiceProxy> } Promise used to return a
   *     [UIServiceProxy]{@link ./application/UIServiceProxy:UIServiceProxy} object when the UIServiceExtensionAbility is
   *     connected. This object can be used to send data to the UIServiceExtensionAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  connectUIServiceExtensionAbility(want: Want, callback: UIServiceExtensionConnectCallback) : Promise<UIServiceProxy>;

  /**
   * Disconnects from a UIServiceExtensionAbility. This API uses a promise to return the result.
   *
   * @param { UIServiceProxy } proxy - Proxy used returned by calling
   *     [connectUIServiceExtensionAbility]{@link UIExtensionContext#connectUIServiceExtensionAbility}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  disconnectUIServiceExtensionAbility(proxy: UIServiceProxy): Promise<void>;

  /**
   * Starts a ServiceExtensionAbility. This API uses a promise to return the result.
   *
   * @param { Want } want - Want information for starting the ServiceExtensionAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  startServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * Starts a ServiceExtensionAbility under a specified system account. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   * >
   * > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information for starting the ServiceExtensionAbility.
   * @param { int } accountId - ID of a system account. For details, see
   *     [getCreatedOsAccountsCount]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  startServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>;

  /**
   * Sets whether the page started by the
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} can be overlaid by the page of
   * the user.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   * >
   * > This API must be called before a window is created. You are advised to call it within the
   * > [onCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onCreate} lifecycle of the
   * > [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}.
   *
   * @param { boolean } isForbidden - Whether the page started by the
   *     [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} can be overlaid by the page of
   *     the user. **true** if the page can be overlaid, **false** otherwise.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  setHostPageOverlayForbidden(isForbidden: boolean) : void;

  /**
   * Sets the dark/light color mode for this UIExtensionAbility. Before calling this API, ensure that the page
   * corresponding to the UIExtensionContext has been loaded. This API can be called only by the main thread.
   *
   * > **NOTE**
   * >
   * > - After this API is called, a new resource manager object is created. If a resource manager was previously cached
   * > , it should be updated accordingly.
   * >
   * > - The priority of the dark/light color mode is as follows: UIExtensionAbility dark/light color mode > Application
   * >  dark/light color mode (set via
   * > [ApplicationContext.setColorMode]{@link ./application/ApplicationContext:ApplicationContext.setColorMode}) > System
   * >  dark/light color mode.
   *
   * @param { ConfigurationConstant.ColorMode } colorMode - Color mode. The options are as follows:<br> - **COLOR_MODE_DARK**
   *     : dark mode.<br> - **COLOR_MODE_LIGHT**: light mode.<br> - **COLOR_MODE_NOT_SET**: not set (following the system or
   *     application).
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  setColorMode(colorMode: ConfigurationConstant.ColorMode): void;

  /**
   * Starts multiple UIAbility components simultaneously. This API uses a promise to return the result.
   * You can pass the Want information of multiple UIAbility instances, which can point to one or more applications. If
   * all the UIAbility instances can be started successfully, the system displays these UIAbility instances in multiple
   * windows simultaneously. Depending on the window handling, different devices may have varying display effects (
   * including window shape, quantity, and layout).
   * This API can be properly called only on phones and tablets. If it is called on other device types, error code 801
   * is returned.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Array<Want> } wantList - List of launch parameters for multiple UIAbility components to be started
   *     simultaneously. A maximum of four Want objects can be passed. The **Want** parameter does not support implicit
   *     launch, cross-user launch, distributed launch, instant installation, or on-demand loading. By default, the main
   *     application is launched unless specified otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @throws { BusinessError } 16000076 - The app instance key is invalid.
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported.
   * @throws { BusinessError } 16000120 - A maximum of four UIAbility instances can be started simultaneously.
   *     The current parameter exceeds the maximum number or is less than 1.
   * @throws { BusinessError } 16000121 - The target component type is not a UIAbility.
   * @throws { BusinessError } 16000122 - The target component is blocked by the system module and
   *     does not support startup.
   * @throws { BusinessError } 16000123 - Implicit startup is not supported.
   * @throws { BusinessError } 16000124 - Starting a remote UIAbility is not supported.
   * @throws { BusinessError } 16000125 - Starting a plugin UIAbility is not supported.
   * @throws { BusinessError } 16000126 - Starting DLP files is not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  startUIAbilities(wantList: Array<Want>): Promise<void>;

  /**
   * Starts a second UIAbility after the first UIAbility instance is created, and displays them in split-screen mode.
   * This API uses a promise to return the result.
   * This API can be properly called only on phones. If it is called on other device types, error code 801 is returned.
   *
   * > **NOTE**
   * >
   * > If the first UIAbility instance is destroyed, the second UIAbility is started in full-screen mode.
   * >
   * > The second UIAbility supports only
   * > [explicit startup](docroot://application-models/explicit-implicit-want-mappings.md#matching-rules-of-explicit-want)
   * > .
   * >
   * > If the caller is running in the background, the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is
   * > required (available only for system applications).
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @permission ohos.permission.START_ABILITIES_FROM_BACKGROUND
   * @param { int } primaryWindowId - ID of the main window of the first UIAbility. The window ID is a property defined in
   *     [WindowProperties](docroot://reference/apis-arkui/arkts-apis-window-i.md#windowproperties), which can be obtained by
   *     calling [getWindowProperties()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9).
   * @param { Want } secondaryWant - Want information required for starting the second UIAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000001 - Target UIAbility does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Failed to connect to the system service or system server handle failed.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @throws { BusinessError } 16000076 - The app instance key is invalid.
   * @throws { BusinessError } 16000080 - Creating a new instance is not supported.
   * @throws { BusinessError } 16000122 - The target component is blocked by the system module and
   *     does not support startup.
   * @throws { BusinessError } 16000123 - Implicit startup is not supported.
   * @throws { BusinessError } 16000124 - Starting a remote UIAbility is not supported.
   * @throws { BusinessError } 16000125 - Starting a plugin UIAbility is not supported.
   * @throws { BusinessError } 16000126 - Starting DLP files is not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  startUIAbilitiesInSplitWindowMode(primaryWindowId: int, secondaryWant: Want): Promise<void>;
}

export default UIExtensionContext;