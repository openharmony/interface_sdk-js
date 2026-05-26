/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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

import AbilityConstant from '../@ohos.app.ability.AbilityConstant';
/*** if arkts dynamic */
import type UIServiceProxy from './UIServiceProxy';
import type UIServiceExtensionConnectCallback from './UIServiceExtensionConnectCallback';
/*** endif */
import image from '../@ohos.multimedia.image';
import { AbilityInfo } from '../bundleManager/AbilityInfo';
import { AbilityResult } from '../ability/abilityResult';
import { AsyncCallback } from '../@ohos.base';
import Context from './Context';
import dialogRequest from '../@ohos.app.ability.dialogRequest';
import { HapModuleInfo } from '../bundleManager/HapModuleInfo';
import OpenLinkOptions from '../@ohos.app.ability.OpenLinkOptions';
import Want from '../@ohos.app.ability.Want';
import StartOptions from '../@ohos.app.ability.StartOptions';
import { Configuration } from '../@ohos.app.ability.Configuration';
import window from '../@ohos.window';
import { ConnectOptions } from '../ability/connectOptions';
import { Caller } from '../@ohos.app.ability.UIAbility';
import type AtomicServiceOptions from '../@ohos.app.ability.AtomicServiceOptions';
import type ConfigurationConstant from '../@ohos.app.ability.ConfigurationConstant';
import type AbilityStartCallback from './AbilityStartCallback';
/*** if arkts static */
import { LocalStorage } from '@ohos.arkui.stateManagement';
import { RecordData } from '../@ohos.base';
import UIServiceProxy from './UIServiceProxy';
import UIServiceExtensionConnectCallback from './UIServiceExtensionConnectCallback';
/*** endif */

/**
 * UIAbilityContext provides the context environment for a [UIAbility]{@link ./../@ohos.app.ability.UIAbility} that needs to 
 * store its status. It inherits from [Context]{@link ./../app/context} and provides UIAbility-related configuration and APIs
 *  for operating UIAbility and ServiceExtensionAbility components. For example, you can use the APIs to start a 
 * UIAbility, terminate a UIAbility to which the UIAbilityContext belongs, and start, terminate, connect to, or 
 * disconnect from a ServiceExtensionAbility.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class UIAbilityContext extends Context {
  /**
   * UIAbility information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  abilityInfo: AbilityInfo;

  /**
   * Information about the HAP to which the UIAbility belongs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  currentHapModuleInfo: HapModuleInfo;

  /**
   * Environment variables for the application runtime, such as language and color mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  config: Configuration;

  /**
   * WindowStage object. It can be called only on the main thread.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 21]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  windowStage: window.WindowStage;

  /**
   * Starts a UIAbility. This API uses an asynchronous callback to return the result. It can be called only on the main 
   * thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Mandatory information for starting the UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0** and **message** is an empty string. Otherwise, **err** contains the corresponding error code and 
   *     error information.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
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
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility. This API uses an asynchronous callback to return the result. It can be called only on the main 
   * thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Mandatory information for starting the UIAbility.
   * @param { StartOptions } options - Parameters used for starting the UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0** and **message** is an empty string. Otherwise, **err** contains the corresponding error code and 
   *     error information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 -9]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 9]
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 801 - Capability not support. [since 12]
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000067 - The StartOptions check failed. [since 12]
   * @throws { BusinessError } 16000068 - The ability is already running. [since 12]
   * @throws { BusinessError } 16300003 - The target application is not the current application. [since 12]
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
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility. This API uses a promise to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Mandatory information for starting the UIAbility.
   * @param { StartOptions } [options] - Parameters used for starting the UIAbility.
   * @returns { Promise<void> } Promise that returns no value.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 801 - Capability not support. [since 12]
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version
   *     greater than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000067 - The StartOptions check failed. [since 12]
   * @throws { BusinessError } 16000068 - The ability is already running. [since 12]
   * @throws { BusinessError } 16300003 - The target application is not the current application. [since 12]
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
   * @crossplatform [since 9]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Starts a UIAbility by using <!--RP2-->[App Linking](docroot://application-models/app-linking-startup.md)<!--RP2End-
   * -> or [Deep Linking](docroot://application-models/deep-linking-startup.md), and returns the exit result of the 
   * launched UIAbility via a callback. This API uses a promise to return the result. It can be called only on the main 
   * thread.
   * A URL in the standard format is passed in to the **link** field to start the target UIAbility based on the implicit
   *  Want matching rules. The target UIAbility must have the following filter characteristics to process links of App 
   * Linking:
   * 
   * - The **actions** field must contain **ohos.want.action.viewData**.
   * - The **entities** field must contain **entity.system.browsable**.
   * - The **uris** field must contain elements whose **scheme** is **https** and **domainVerify** is **true**.
   * If you want to obtain the result after the started UIAbility is terminated, set the **callback** parameter. For 
   * details about how to use this parameter, see 
   * [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
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
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000136 - The UIAbility is prohibited from launching itself via App Linking. [since 23]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  openLink(link: string, options?: OpenLinkOptions, callback?: AsyncCallback<AbilityResult>): Promise<void>;

  /**
   * Starts a UIAbility with the caller information specified. The caller information is carried in **want** and 
   * identified at the system service layer. The UIAbility can obtain the caller information from the **want** parameter
   *  in the **onCreate** lifecycle callback. When this API is used to start a UIAbility, the caller information carried
   *  in **want** is not overwritten by the current application information. The system service layer can obtain the 
   * initial caller information. This API uses an asynchronous callback to return the result. It can be called only on 
   * the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information about the target UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityAsCaller(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility with the caller information and start options specified. The caller information is carried in 
   * **want** and identified at the system service layer. The UIAbility can obtain the caller information from the 
   * **want** parameter in the **onCreate** lifecycle callback. When this API is used to start a UIAbility, the caller 
   * information carried in **want** is not overwritten by the current application information. The system service layer
   *  can obtain the initial caller information. This API uses an asynchronous callback to return the result. It can be 
   * called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information about the target UIAbility.
   * @param { StartOptions } options - Parameters used for starting the UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityAsCaller(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility with the caller information specified. The caller information is carried in **want** and 
   * identified at the system service layer. The UIAbility can obtain the caller information from the **want** parameter
   *  in the **onCreate** lifecycle callback. When this API is used to start a UIAbility, the caller information carried
   *  in **want** is not overwritten by the current application information. The system service layer can obtain the 
   * initial caller information. This API uses a promise to return the result. It can be called only on the main thread.
   * 
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information about the target UIAbility.
   * @param { StartOptions } options - Parameters used for starting the UIAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityAsCaller(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Obtains a [Caller]{@link ./../@ohos.app.ability.UIAbility:Caller} object for communicating with a 
   * [Callee]{@link ./../@ohos.app.ability.UIAbility:Callee} object. If the specified UIAbility is not started, the UIAbility
   *  will be started in the foreground or background. This API uses a promise to return the result. It can be called 
   * only on the main thread.
   * This API cannot be used to start the UIAbility with the launch type set to 
   * [specified](docroot://application-models/uiability-launch-type.md#specified).
   * 
   * > **NOTE**
   * >
   * > - In cross-device scenarios, the caller and the callee must belong to the same application.
   * >
   * > - In same-device scenarios, the caller and the callee must belong to different applications, and the caller must 
   * > have the ohos.permission.ABILITY_BACKGROUND_COMMUNICATION permission (available only for system applications).
   * >
   * > - In addition, if the application needs to call this API in the background, the 
   * > ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is required (available only for system applications). 
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   * > > **NOTE**
   * >
   * > - For API version 10 and earlier, the permission ohos.permission.ABILITY_BACKGROUND_COMMUNICATION is required. 
   * > This permission is available only to system applications.
   * >
   * > - For API version 11 and later, only the permission ohos.permission.DISTRIBUTED_DATASYNC is required. This 
   * > permission is verified by the DSoftBus subsystem only when the link between applications is established. No 
   * > verification is conducted during the application launch phase.
   *
   * @permission ohos.permission.ABILITY_BACKGROUND_COMMUNICATION [since 9 - 13]
   * @permission ohos.permission.DISTRIBUTED_DATASYNC [since 11]
   * @param { Want } want - Information about the UIAbility to start, including the ability name, module name, bundle name, 
   *     device ID, and parameters (optional). If **'ohos.aafwk.param.callAbilityToForeground'** in **parameters** is set to 
   *     **true**, the UIAbility is brought to the foreground. Otherwise, the UIAbility is brought to the background.
   * @returns { Promise<Caller> } Promise used to return the Caller object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission. [since 9 - 13]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   *     2.Sending restart message to system service failed. 3.System service failed to communicate with dependency module.
   *     4.Non-system applications are only allowed to call this interface across devices, not on the current device.
   * @throws { BusinessError } 16200001 - The caller has been released. [since 9 - 13]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version greater
   *     than 11. [since 12]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityByCall(want: Want): Promise<Caller>;

  /**
   * Starts a UIAbility with the account ID specified and obtains the caller object for communicating with the 
   * UIAbility. This API can be called only on the main thread. This API uses a promise to return the result.
   * This API cannot be used to start the UIAbility with the launch type set to 
   * [specified](docroot://application-models/uiability-launch-type.md#specified).
   * Observe the following when using this API:
   * 
   * - If an application needs to call this API to start a UIAbility that belongs to another user, it must have the 
   * ohos.permission.ABILITY_BACKGROUND_COMMUNICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permissions.
   * - If an application running in the background needs to call this API to start a UIAbility, it must have the 
   * ohos.permission.START_ABILITIES_FROM_BACKGROUND permission.
   * - If **exported** of the target UIAbility is **false** in cross-application scenarios, the caller must have the 
   * ohos.permission.START_INVISIBLE_ABILITY permission.
   * - The rules for using this API in the same-device and cross-device scenarios are different. For details, see 
   * [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @permission ohos.permission.ABILITY_BACKGROUND_COMMUNICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Information about the UIAbility to start, including **abilityName**, **moduleName**, 
   *     **bundleName**, **deviceId** (optional), and **parameters** (optional). If **deviceId** is left blank or null, the 
   *     local UIAbility is started. If **parameters** is left blank or null, the UIAbility is started in the background.
   * @param { int } accountId - ID of a system account. The value **-1** indicates the current user. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<Caller> } Promise used to return the caller object to communicate with.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityByCallWithAccount(want: Want, accountId: int): Promise<Caller>;

  /**
   * Starts a UIAbility with want and the account ID specified. This API uses an asynchronous callback to return the 
   * result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target UIAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
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
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility with want, the account ID, and start options specified. This API uses an asynchronous callback 
   * to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target UIAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { StartOptions } options - Parameters used for starting the UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 9]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 9]
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityWithAccount(want: Want, accountId: int, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility with want, the account ID, and start options specified. This API uses a promise to return the 
   * result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target UIAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { StartOptions } [options] - Parameters used for starting the UIAbility.
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
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityWithAccount(want: Want, accountId: int, options?: StartOptions): Promise<void>;

  /**
   * Starts a UIAbility and returns the exit result of the launched UIAbility via a callback. This API uses an 
   * asynchronous callback to return the result. It can be called only on the main thread.
   * The following situations may be possible for a started UIAbility:
   * 
   * - Normally, you can call 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility and return the result to the caller.
   * - If an exception occurs, for example, the UIAbility is killed, an exception result, in which **resultCode** is **-
   * 1**, is returned to the caller.
   * - If the UIAbility is in [singleton mode](docroot://application-models/uiability-launch-type.md#singleton) and this
   *  UIAbility is started multiple times by different applications calling this API, when the UIAbility calls 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate itself, it will only return the normal result to the last caller. All other callers will receive an 
   * exception result with **resultCode** set to **-1**.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Mandatory information for starting the UIAbility.
   * @param { AsyncCallback<AbilityResult> } callback - Callback used to return the result. If the API call is successful, 
   *     **code** in **err** is **0** and **data** is the result code and data when the UIAbility exits. Otherwise, **err** 
   *     contains the corresponding error code and error information.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version greater
   *     than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
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
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts a UIAbility and returns the exit result of the launched UIAbility via a callback. This API uses an 
   * asynchronous callback to return the result. It can be called only on the main thread.
   * The following situations may be possible for a started UIAbility:
   * 
   * - Normally, you can call 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility and return the result to the caller.
   * - If an exception occurs, for example, the UIAbility is killed, an exception result, in which **resultCode** is **-
   * 1**, is returned to the caller.
   * - If the UIAbility is in [singleton mode](docroot://application-models/uiability-launch-type.md#singleton) and this
   *  UIAbility is started multiple times by different applications calling this API, when the UIAbility calls 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate itself, it will only return the normal result to the last caller. All other callers will receive an 
   * exception result with **resultCode** set to **-1**.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Mandatory information for starting the UIAbility.
   * @param { StartOptions } options - Parameters used for starting the UIAbility.
   * @param { AsyncCallback<AbilityResult> } callback - Callback used to return the result. If the API call is successful, 
   *     **code** in **err** is **0** and **data** is the result code and data when the UIAbility exits. Otherwise, **err** 
   *     contains the corresponding error code and error information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 9]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 9]
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version greater
   *     than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
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
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, options: StartOptions, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts a UIAbility and returns the exit result of the launched UIAbility via a callback. This API uses a promise to
   *  return the result. It can be called only on the main thread.
   * The following situations may be possible for a started UIAbility:
   * 
   * - Normally, you can call 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate the UIAbility and return the result to the caller.
   * - If an exception occurs, for example, the UIAbility is killed, an exception result, in which **resultCode** is **-
   * 1**, is returned to the caller.
   * - If the UIAbility is in [singleton mode](docroot://application-models/uiability-launch-type.md#singleton) and this
   *  UIAbility is started multiple times by different applications calling this API, when the UIAbility calls 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate itself, it will only return the normal result to the last caller. All other callers will receive an 
   * exception result with **resultCode** set to **-1**.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Mandatory information for starting the UIAbility.
   * @param { StartOptions } [options] - Parameters used for starting the UIAbility.
   * @returns { Promise<AbilityResult> } Promise used to return the result.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000018 - Redirection to a third-party application is not allowed in API version greater
   *     than 11. [since 12]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
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
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>;

  /**
   * Starts a UIAbility with the account ID specified and returns the result when the UIAbility is terminated. This API 
   * uses an asynchronous callback to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target UIAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<AbilityResult> } callback - Callback used to return the result. If the API call is successful, 
   *     **code** in **err** is **0** and **data** is the result code and data when the UIAbility is terminated. Otherwise, 
   *     **err** contains the corresponding error code and error information.
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
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityForResultWithAccount(want: Want, accountId: int, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts a UIAbility with the account ID and start options specified and returns the result when the UIAbility is 
   * terminated. This API uses an asynchronous callback to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target UIAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { StartOptions } options - Parameters used for starting the UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 9]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 9]
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityForResultWithAccount(
    want: Want,
    accountId: int,
    options: StartOptions,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Starts a UIAbility with the account ID specified and returns the result when the UIAbility is terminated. This API 
   * uses a promise to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target UIAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { StartOptions } [options] - Parameters used for starting the UIAbility.
   * @returns { Promise<AbilityResult> } Promise that contains the **AbilityResult** parameter.
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
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityForResultWithAccount(want: Want, accountId: int, options?: StartOptions): Promise<AbilityResult>;

  /**
   * Starts a ServiceExtensionAbility. This API uses an asynchronous callback to return the result.
   *
   * @param { Want } want - Want information for starting the ServiceExtensionAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void;

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
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * Starts a ServiceExtensionAbility with the account ID specified. This API uses an asynchronous callback to return 
   * the result.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information for starting the ServiceExtensionAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startServiceExtensionAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void;

  /**
   * Starts a ServiceExtensionAbility with the account ID specified. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information for starting the ServiceExtensionAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000019 - No matching ability is found. [since 12]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>;

  /**
   * Stops a ServiceExtensionAbility. This API uses an asynchronous callback to return the result.
   *
   * @param { Want } want - Want information for stopping the ServiceExtensionAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  stopServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Stops a ServiceExtensionAbility in the same application. This API uses a promise to return the result.
   *
   * @param { Want } want - Want information for stopping the ServiceExtensionAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  stopServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * Stops a ServiceExtensionAbility with the account ID specified in the same application. This API uses an 
   * asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information for stopping the ServiceExtensionAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  stopServiceExtensionAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void;

  /**
   * Stops a ServiceExtensionAbility with the account ID specified in the same application. This API uses a promise to 
   * return the result.
   * 
   * > **NOTE**
   * >
   * > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information for stopping the ServiceExtensionAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  stopServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>;

  /**
   * Terminates this UIAbility. This API uses an asynchronous callback to return the result. It can be called only on 
   * the main thread.
   * 
   * > **NOTE**
   * >
   * > After this API is called, missions in the task center are not cleared by default. To clear missions, set 
   * > [removeMissionAfterTerminate](docroot://quick-start/module-configuration-file.md#abilities) to **true**.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 9 - 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 9 - 10]
   * @throws { BusinessError } 16000005 - The specified process does not have the permission. [since 9 - 10]
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * Terminates this UIAbility. This API uses a promise to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > After this API is called, missions in the task center are not cleared by default. To clear missions, set 
   * > [removeMissionAfterTerminate](docroot://quick-start/module-configuration-file.md#abilities) to **true**.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 9 - 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 9 - 10]
   * @throws { BusinessError } 16000005 - The specified process does not have the permission. [since 9 - 10]
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;

  /**
   * Terminates this UIAbility. This API uses an asynchronous callback to return the result. It can be called only on 
   * the main thread.
   * The result is returned to the caller when **terminateSelfWithResult** is called to terminate the UIAbility that is 
   * started by calling 
   * [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   * .
   * 
   * > **NOTE**
   * >
   * > After this API is called, missions in the task center are not cleared by default. To clear missions, set 
   * > [removeMissionAfterTerminate](docroot://quick-start/module-configuration-file.md#abilities) to **true**.
   *
   * @param { AbilityResult } parameter - Information returned to the caller.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 9 - 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 9 - 10]
   * @throws { BusinessError } 16000005 - The specified process does not have the permission. [since 9 - 10]
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

  /**
   * Terminates this UIAbility. This API uses a promise to return the result. It can be called only on the main thread.
   * The result is returned to the caller when **terminateSelfWithResult** is called to terminate the UIAbility that is 
   * started by calling 
   * [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   * .
   * 
   * > **NOTE**
   * >
   * > After this API is called, missions in the task center are not cleared by default. To clear missions, set 
   * > [removeMissionAfterTerminate](docroot://quick-start/module-configuration-file.md#abilities) to **true**.
   *
   * @param { AbilityResult } parameter - Information returned to the caller.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 9 - 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 9 - 10]
   * @throws { BusinessError } 16000005 - The specified process does not have the permission. [since 9 - 10]
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * Returns the startup result to the caller of 
   * [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   *  or [openLink]{@link UIAbilityContext.openLink}. Different from 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * , this API does not destroy the current UIAbility when it returns the result. This API uses a promise to return the
   *  result.
   *
   * @param { AbilityResult } abilityResult - Result returned to the caller.
   * @param { string } requestCode - Request code generated by the system when the target UIAbility is started using 
   *     [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   *     or [openLink]{@link UIAbilityContext.openLink}. The value can be obtained from the 
   *     [CALLER_REQUEST_CODE]{@link ./../@ohos.app.ability.wantConstant:wantConstant} field in **want**.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000074 - The caller does not exist.
   * @throws { BusinessError } 16000075 - BackToCaller is not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  backToCallerAbilityWithResult(abilityResult: AbilityResult, requestCode: string): Promise<void>;

  /**
   * Connects this UIAbility to a [ServiceExtensionAbility](docroot://application-models/extensionability-overview.md). 
   * It enables communication with the ServiceExtensionAbility via a proxy, allowing access to the capabilities exposed 
   * by the ServiceExtensionAbility. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information for connecting to the ServiceExtensionAbility.
   * @param { ConnectOptions } options - Callback used to return the information indicating that the connection is successful
   *     , failed, or interrupted.
   * @returns { long } Connection ID. A caller can call 
   *     [disconnectServiceExtensionAbility]{@link UIAbilityContext.disconnectServiceExtensionAbility(connection: long)} with
   *     this ID for disconnection.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): long;

  /**
   * Connects this UIAbility to a ServiceExtensionAbility, with the account ID specified. This API can be called only on
   *  the main thread.
   * This API can be properly called on phones and tablets. If it is called on other devices, error code 16000006 is 
   * returned.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target UIAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { ConnectOptions } options - Instance of the callback function after the connection to the 
   *     ServiceExtensionAbility is set up.
   * @returns { long } Result code of the connection.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  connectServiceExtensionAbilityWithAccount(want: Want, accountId: int, options: ConnectOptions): long;

  /**
   * Disconnects from a [ServiceExtensionAbility](docroot://application-models/extensionability-overview.md). Once the 
   * connection is terminated, set the remote object, which is returned when the connection is established, to null. 
   * This API uses an asynchronous callback to return the result. It can be called only on the main thread.
   *
   * @param { long } connection - ID of the connected ServiceExtensionAbility, that is, **connectionId** returned by 
   *     [connectServiceExtensionAbility]{@link UIAbilityContext.connectServiceExtensionAbility}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **err** is 
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void;

  /**
   * Disconnects from a [ServiceExtensionAbility](docroot://application-models/extensionability-overview.md). Once the 
   * connection is terminated, set the remote object, which is returned when the connection is established, to null. 
   * This API uses a promise to return the result. It can be called only on the main thread.
   *
   * @param { long } connection - ID of the connected ServiceExtensionAbility, that is, **connectionId** returned by 
   *     [connectServiceExtensionAbility]{@link UIAbilityContext.connectServiceExtensionAbility}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;

  /**
   * Sets a mission label for this UIAbility on the multitasking screen. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { string } label - Mission label.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  setMissionLabel(label: string, callback: AsyncCallback<void>): void;

  /**
   * Sets a mission label for this UIAbility on the multitasking screen. This API uses a promise to return the result.
   *
   * @param { string } label - Mission label.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  setMissionLabel(label: string): Promise<void>;

  /**
   * Sets an icon for this UIAbility in the mission. The maximum size of the icon is 600 MB. This API uses an 
   * asynchronous callback to return the result.
   *
   * @param { image.PixelMap } icon - Icon of the UIAbility to set.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  setMissionIcon(icon: image.PixelMap, callback: AsyncCallback<void>): void;

  /**
   * Sets an icon for this UIAbility in the mission. The maximum size of the icon is 600 MB. This API uses a promise to 
   * return the result.
   *
   * @param { image.PixelMap } icon - Icon of the UIAbility to set.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  setMissionIcon(icon: image.PixelMap): Promise<void>;

  /**
   * Sets the mission continuation state of this UIAbility. This API uses an asynchronous callback to return the result.
   * 
   *
   * @param { AbilityConstant.ContinueState } state - Mission continuation state.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  setMissionContinueState(state: AbilityConstant.ContinueState, callback: AsyncCallback<void>): void;

  /**
   * Sets the mission continuation state of this UIAbility. This API uses a promise to return the result.
   *
   * @param { AbilityConstant.ContinueState } state - Mission continuation state.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  setMissionContinueState(state: AbilityConstant.ContinueState): Promise<void>;

  /**
   * Restores the WindowStage data in the UIAbility. It can be called only on the main thread.
   *
   * @param { LocalStorage } localStorage - Storage used to store the restored window stage.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  restoreWindowStage(localStorage: LocalStorage): void;

  /**
   * Checks whether this UIAbility is in the terminating state.
   *
   * @returns { boolean } Check result for whether the UIAbility is in the terminating state. **true** if in the terminating 
   *     state, **false** otherwise.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  isTerminating(): boolean;

  /**
   * Starts a UIAbility. If the UIAbility has multiple instances, the latest instance is started. This API uses an 
   * asynchronous callback to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > - For a successful launch in cross-device scenarios, the caller and target must be the same application and the 
   * > application must have the ohos.permission.DISTRIBUTED_DATASYNC permission.
   * >
   * > - If **visible** of the target UIAbility is **false** in cross-application scenarios, the caller must have the 
   * > ohos.permission.START_INVISIBLE_ABILITY permission.
   * >
   * > - If the specified UIAbility has multiple instances, the caller must have the 
   * > ohos.permission.START_RECENT_ABILITY permission (available only for system applications) to start the latest 
   * > instance.
   * >
   * > - If the caller is running in the background, the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is 
   * > required (available only for system applications).
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information about the target UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api. [since 14]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startRecentAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility with the start options specified. If the UIAbility has multiple instances, the latest instance 
   * is started.  This API uses an asynchronous callback to return the result. It can be called only on the main thread.
   * 
   * 
   * > **NOTE**
   * >
   * > - For a successful launch in cross-device scenarios, the caller and target must be the same application and the 
   * > application must have the ohos.permission.DISTRIBUTED_DATASYNC permission.
   * >
   * > - If **visible** of the target UIAbility is **false** in cross-application scenarios, the caller must have the 
   * > ohos.permission.START_INVISIBLE_ABILITY permission.
   * >
   * > - If the specified UIAbility has multiple instances, the caller must have the 
   * > ohos.permission.START_RECENT_ABILITY permission (available only for system applications) to start the latest 
   * > instance.
   * >
   * > - If the caller is running in the background, the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is 
   * > required (available only for system applications).
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information about the target UIAbility.
   * @param { StartOptions } options - Parameters used for starting the UIAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 9]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 9]
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api. [since 14]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startRecentAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Starts a UIAbility. If the UIAbility has multiple instances, the latest instance is started. This API uses a 
   * promise to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > - For a successful launch in cross-device scenarios, the caller and target must be the same application and the 
   * > application must have the ohos.permission.DISTRIBUTED_DATASYNC permission.
   * >
   * > - If **visible** of the target UIAbility is **false** in cross-application scenarios, the caller must have the 
   * > ohos.permission.START_INVISIBLE_ABILITY permission.
   * >
   * > - If the specified UIAbility has multiple instances, the caller must have the 
   * > ohos.permission.START_RECENT_ABILITY permission (available only for system applications) to start the latest 
   * > instance.
   * >
   * > - If the caller is running in the background, the ohos.permission.START_ABILITIES_FROM_BACKGROUND permission is 
   * > required (available only for system applications).
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information about the target UIAbility.
   * @param { StartOptions } [options] - Parameters used for starting the UIAbility.
   * @returns { Promise<void> } Promise that returns no value.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 12]
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api. [since 14]
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
   * @since 9 dynamic
   * @since 23 static
   */
  startRecentAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Starts a ServiceExtensionAbility that supports modal dialog boxes. After the ServiceExtensionAbility is started, 
   * the application displays a modal dialog box. You can call 
   * [setRequestResult]{@link ./../@ohos.app.ability.dialogRequest:dialogRequest.RequestCallback.setRequestResult} to obtain 
   * the result. This API uses an asynchronous callback to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information for starting the ServiceExtensionAbility.
   * @param { AsyncCallback<dialogRequest.RequestResult> } result - Callback used to return the result. If the API call is 
   *     successful, **code** in **err** is **0** and **data** the result of the request for a modal dialog box. Otherwise, 
   *     **err** contains the corresponding error code and error information.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  requestDialogService(want: Want, result: AsyncCallback<dialogRequest.RequestResult>): void;

  /**
   * Starts a ServiceExtensionAbility that supports modal dialog boxes. After the ServiceExtensionAbility is started, 
   * the application displays a modal dialog box. You can call 
   * [setRequestResult]{@link ./../@ohos.app.ability.dialogRequest:dialogRequest.RequestCallback.setRequestResult} to obtain 
   * the result. This API uses a promise to return the result. It can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Want information for starting the ServiceExtensionAbility.
   * @returns { Promise<dialogRequest.RequestResult> } Promise that returns no value.
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
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 16000012 - The application is controlled. [since 10]
   * @throws { BusinessError } 16000013 - The application is controlled by EDM. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  requestDialogService(want: Want): Promise<dialogRequest.RequestResult>;

  /**
   * Called when the window content associated with the UIAbility finishes drawing. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  reportDrawnCompleted(callback: AsyncCallback<void>): void;

  /**
   * Implicitly starts a given type of 
   * [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. This API uses an 
   * asynchronous callback to return the result. It can be called only in the main thread and by applications running 
   * in the foreground.
   *
   * @param { string } type - Type of the UIExtensionAbility to start. For details, see 
   *     [Starting an Application of the Specified Type](docroot://application-models/start-intent-panel.md#matching-rules).
   * @param { Record<string, Object> } wantParam - Extended parameter.
   * @param { AbilityStartCallback } abilityStartCallback - Callback used to return the detailed error information if the 
   *     startup fails.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **err** is 
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 11 - 11]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 11 - 11]
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 11 - 11]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 11 - 11]
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released. [since 11 - 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>): void;

  /**
   * Implicitly starts a given type of
   * [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. This API uses an
   * asynchronous callback to return the result. It can be called only in the main thread and by applications running
   * in the foreground.
   *
   * @param { string } type - Type of the UIExtensionAbility to start. For details, see
   *     [Starting an Application of the Specified
   *     Type](docroot://application-models/start-intent-panel.md#matching-rules)
   *     .
   * @param { Record<string, RecordData> } wantParam - Extended parameter.
   * @param { AbilityStartCallback } abilityStartCallback - Callback used to return the detailed error information if
   *     the startup fails.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>): void;

  /**
   * Implicitly starts a given type of 
   * [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. This API uses a promise to 
   * return the result. It can be called only in the main thread and by applications running in the foreground.
   *
   * @param { string } type - Type of the UIExtensionAbility to start. For details, see 
   *     [Starting an Application of the Specified Type](docroot://application-models/start-intent-panel.md#matching-rules).
   * @param { Record<string, Object> } wantParam - Extended parameter.
   * @param { AbilityStartCallback } abilityStartCallback - Callback used to return the detailed error information if the 
   *     startup fails.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 11 - 11]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 11 - 11]
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 11 - 11]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 11 - 11]
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released. [since 11 - 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 11 dynamic
   */
  startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback): Promise<void>;

  /**
   * Implicitly starts a given type of
   * [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. This API uses a promise
   * to return the result. It can be called only in the main thread and by applications running in the foreground.
   *
   * @param { string } type - Type of the UIExtensionAbility to start. For details, see
   *     [Starting an Application of the Specified
   *     Type](docroot://application-models/start-intent-panel.md#matching-rules)
   *     .
   * @param { Record<string, RecordData> } wantParam - Extended parameter.
   * @param { AbilityStartCallback } abilityStartCallback - Callback used to return the detailed error information if
   *     the startup fails.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback): Promise<void>;

  /**
   * Requests the specified foreground application to start the UIExtensionAbility of the corresponding type. This API 
   * uses an asynchronous callback to return the result. It can be called only on the main thread.
   * The foreground application is specified by **bundleName** in **want.parameters**. If **bundleName** is left 
   * unspecified, or if the application specified by **bundleName** is not running in the foreground or does not exist, 
   * the UIExtensionAbility is directly started on the system UI. The UIExtensionAbility to start is determined by the 
   * combination of the **bundleName**, **abilityName**, and **moduleName** fields in **want**, and its type is 
   * determined by the **ability.want.params.uiExtensionType** field in **want.parameters**.
   * Before starting the UIExtensionAbility, ensure that the foreground application has finished page initialization. 
   * Otherwise, the UIExtensionAbility fails to start and the error message "uiContent is nullptr" is displayed. The 
   * application can determine the time to start the UIExtensionAbility by listening for the page loading status. After 
   * the page initialization is successful, the key log information "UIContentImpl: focus again" is recorded.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } pickerWant - Want information used to start the UIExtensionAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **code** in
   *     **err** is **0**. Otherwise, **err** contains the corresponding error code and error information.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 11 - 11]
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 11 - 11]
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 11 - 11]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 11 - 11]
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released. [since 11 - 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  requestModalUIExtension(pickerWant: Want, callback: AsyncCallback<void>): void;

  /**
   * Requests the specified foreground application to start the UIExtensionAbility of the corresponding type. This API 
   * uses a promise to return the result. It can be called only on the main thread.
   * The foreground application is specified by **bundleName** in **want.parameters**. If **bundleName** is left 
   * unspecified, or if the application specified by **bundleName** is not running in the foreground or does not exist, 
   * the UIExtensionAbility is directly started on the system UI. The UIExtensionAbility to start is determined by the 
   * combination of the **bundleName**, **abilityName**, and **moduleName** fields in **want**, and its type is 
   * determined by the **ability.want.params.uiExtensionType** field in **want.parameters**.
   * Before starting the UIExtensionAbility, ensure that the foreground application has finished page initialization. 
   * Otherwise, the UIExtensionAbility fails to start and the error message "uiContent is nullptr" is displayed. The 
   * application can determine the time to start the UIExtensionAbility by listening for the page loading status. After 
   * the page initialization is successful, the key log information "UIContentImpl: focus again" is recorded.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } pickerWant - Want information used to start the UIExtensionAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 11 - 11]
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 11 - 11]
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 11 - 11]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 11 - 11]
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released. [since 11 - 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  requestModalUIExtension(pickerWant: Want): Promise<void>;

  /**
   * Requests the specified foreground application to start the UIExtensionAbility of the corresponding type for the
   * specified user. This API uses a promise to return the result. It can be called only on the main thread.
   * The foreground application is specified by **bundleName** in **want.parameters**. If **bundleName** is left 
   * unspecified, or if the application specified by **bundleName** is not running in the foreground or does not exist, 
   * the UIExtensionAbility is directly started on the system UI. The UIExtensionAbility to start is determined by the 
   * combination of the **bundleName**, **abilityName**, and **moduleName** fields in **want**, and its type is 
   * determined by the **ability.want.params.uiExtensionType** field in **want.parameters**.
   * 
   * Before starting the UIExtensionAbility, ensure that the foreground application has finished page initialization. 
   * Otherwise, the UIExtensionAbility fails to start and the error message "uiContent is nullptr" is displayed. The 
   * application can determine the time to start the UIExtensionAbility by listening for the page loading status. After 
   * the page initialization is successful, the key log information "UIContentImpl: focus again" is recorded.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } pickerWant - Want information used to start the UIExtensionAbility.
   * @param { int } accountId - The account to request.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   *     4.The logical screen corresponding to the specified accountId is not in the foreground.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  requestModalUIExtensionWithAccount(pickerWant: Want, accountId: int): Promise<void>;

  /**
   * Opens an atomic service in an independent window. This API uses a promise to return the result. It can be called 
   * only on the main thread.
   * After an atomic service is started, the following situations may occur:
   * 
   * - Normally, the atomic service can call 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate itself. The result is returned to the caller.
   * - If an exception occurs, for example, the atomic service is killed, an exception result, in which **resultCode** 
   * is **-1**, is returned to the caller.
   * - If the atomic service is started multiple times by different applications calling this API, when the atomic 
   * service calls 
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   *  to terminate itself, it will only return the normal result to the last caller. All other callers will receive an 
   * exception result with **resultCode** set to **-1**.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { string } appId - Unique ID of the application, which is allocated by the cloud.
   * @param { AtomicServiceOptions } [options] - Parameter carried in the request for starting the atomic service.
   * @returns { Promise<AbilityResult> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000003 - The specified ID does not exist.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  openAtomicService(appId: string, options?: AtomicServiceOptions): Promise<AbilityResult>;

  /**
   * Moves this UIAbility from the foreground to the background. This API uses a promise to return the result. It can be
   *  called only on the main thread.<br><!--RP1--><!--RP1End-->
   * Starting from API version 12, this API can be properly called on phones, wearables, and TVs. If it is called on 
   * other device types, error code 16000061 is returned.
   * Starting from API version 13, this API can be properly called on phones, tablets, wearables, and TVs. If it is 
   * called on other device types, error code 16000061 is returned.
   * **Atomic service API**: This API can be used in atomic services since API version 12.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000065 - The API can be called only when the ability is running in the foreground.
   * @throws { BusinessError } 16000066 - An ability cannot switch to the foreground or background in Wukong mode.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  moveAbilityToBackground(): Promise<void>;

  /**
   * Shows this UIAbility. This API uses a promise to return the result. It can be called only on the main thread.
   * Before calling this API, ensure that the application has been added to the status bar.
   * This API can be properly called only on PC/2-in-1 devices and tablets. On other devices, it returns the error code 
   * 801.
   * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000067 - The StartOptions check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  showAbility(): Promise<void>;

  /**
   * Hides this UIAbility. This API uses a promise to return the result. It can be called only on the main thread.
   * Before calling this API, ensure that the application has been added to the status bar.
   * This API can be properly called only on PC/2-in-1 devices and tablets. On other devices, it returns the error code 
   * 801.
   * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000067 - The StartOptions check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  hideAbility(): Promise<void>;

  /**
   * Sets whether to enable backup and restore for this UIAbility.
   *
   * @param { boolean } enabled - Whether to enable backup and restore. **true** to enable, **false** otherwise.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  setRestoreEnabled(enabled: boolean): void;

  /**
   * Starts a UIServiceExtensionAbility. This API uses a promise to return the result.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801 
   * is returned.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Mandatory information for starting the UIServiceExtensionAbility.
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
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  startUIServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * Connects to a UIServiceExtensionAbility. This API uses a promise to return the result.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801 
   * is returned.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Want } want - Mandatory information for connecting to the UIServiceExtensionAbility.
   * @param { UIServiceExtensionConnectCallback } callback - Callback for connecting to the UIServiceExtensionAbility.
   * @returns { Promise<UIServiceProxy> } Promise used to return the result, which is a 
   *     [UIServiceProxy]{@link UIServiceProxy:UIServiceProxy} object.
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
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  connectUIServiceExtensionAbility(want: Want, callback: UIServiceExtensionConnectCallback) : Promise<UIServiceProxy>;

  /**
   * Disconnects from a UIServiceExtensionAbility. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { UIServiceProxy } proxy - Proxy returned after 
   *     [connectUIServiceExtensionAbility]{@link UIAbilityContext.connectUIServiceExtensionAbility} is called.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  disconnectUIServiceExtensionAbility(proxy: UIServiceProxy): Promise<void>;

  /**
   * Sets the icon and label for this UIAbility. The icon and label can be displayed in the task center and the shortcut
   *  bar. This API uses a promise to return the result.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801 
   * is returned.
   * **Required permissions**: ohos.permission.SET_ABILITY_INSTANCE_INFO
   *
   * @permission ohos.permission.SET_ABILITY_INSTANCE_INFO
   * @param { string } label - New icon label. The label cannot be an empty string, and can contain a maximum of 1024 bytes.
   * @param { image.PixelMap } icon - Icon. The recommended icon size is 512 px * 512 px.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 15 dynamic
   * @since 23 static
   */
  setAbilityInstanceInfo(label: string, icon: image.PixelMap): Promise<void>;

  /**
   * When the first UIAbility launched under a module needs to redirect to another UIAbility, the target UIAbility is 
   * known as the DelegatorAbility. For details about how to set up the DelegatorAbility, see step 1 in the example 
   * provided for this API.
   * Once the DelegatorAbility has completed its specific operations, you can use this API to revert to the first 
   * UIAbility. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > After the API is successfully called, the [Window]{@link ./../@ohos.window} API within the DelegatorAbility becomes 
   * > invalid.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not support.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000065 - The API can be called only when the ability is running in the foreground.
   * @throws { BusinessError } 16000084 - Only DelegatorAbility is allowed to call this API, and only once.
   * @throws { BusinessError } 16000085 - An error occurred during the interaction between the ability and window.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 17 dynamic
   * @since 23 static
   */
  revokeDelegator(): Promise<void>;

  /**
   * Sets the dark/light color mode for this UIAbility. Before calling this API, ensure that the page corresponding to 
   * the UIAbility has been loaded. This API can be called only on the main thread.
   * 
   * > **NOTE**
   * >
   * > - Before calling this API, ensure that the window has been created and the page corresponding to the UIAbility 
   * > has been loaded (using the 
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9) API in the 
   * > [onWindowStageCreate()]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate} lifecycle).
   * >
   * > - After this API is called, a new resource manager object is created. If a resource manager was previously cached
   * > , it should be updated accordingly.
   * >
   * > - The priority of the dark/light color mode is as follows: UIAbility dark/light color mode > Application dark/
   * > light color mode (set via 
   * > [ApplicationContext.setColorMode]{@link ./ApplicationContext:ApplicationContext.setColorMode}) > System
   * >  dark/light color mode.
   *
   * @param { ConfigurationConstant.ColorMode } colorMode - Color mode. The options are as follows:<br> - **COLOR_MODE_DARK**
   *     : dark mode.<br> - **COLOR_MODE_LIGHT**: light mode.<br> - **COLOR_MODE_NOT_SET**: not set (following the system or 
   *     application).
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  setColorMode(colorMode: ConfigurationConstant.ColorMode): void;

  /**
   * Starts an 
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   *  instance. This API uses a promise to return the result.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801 
   * is returned.
   * 
   * > **NOTE**
   * >
   * > The caller of this API must be the application to which the 
   * > [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * >  instance belongs or an application in the application list supported by the AppServiceExtensionAbility instance 
   * > (configured in the **appIdentifierAllowList** property of 
   * > [extensionAbilities](docroot://quick-start/module-configuration-file.md#extensionabilities)).
   *
   * @param { Want } want - Want information for starting the 
   *     [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.
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
   * @throws { BusinessError } 16000200 - The caller is not in the appIdentifierAllowList of the target application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  startAppServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * Stops an 
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   *  instance. This API uses a promise to return the result.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801 
   * is returned.
   * 
   * > **NOTE**
   * >
   * > The caller of this API must be the application to which the 
   * > [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * >  instance belongs or an application in the application list supported by the AppServiceExtensionAbility instance 
   * > (configured in the **appIdentifierAllowList** property of 
   * > [extensionAbilities](docroot://quick-start/module-configuration-file.md#extensionabilities)).
   *
   * @param { Want } want - Want information for stoping the 
   *     [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000200 - The caller is not in the appIdentifierAllowList of the target application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  stopAppServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * Connects this UIAbility to an 
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * . It enables communication with the AppServiceExtensionAbility via a proxy, allowing access to the capabilities 
   * exposed by the AppServiceExtensionAbility. It can be called only on the main thread.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801 
   * is returned.
   * 
   * > **NOTE**
   * >
   * > If the 
   * > [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * >  instance is not started, the caller of this API must be the application to which the 
   * > [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * >  instance belongs or an application in the application list supported by the AppServiceExtensionAbility instance 
   * > (configured in the **appIdentifierAllowList** property of 
   * > [extensionAbilities](docroot://quick-start/module-configuration-file.md#extensionabilities)).
   *
   * @param { Want } want - Want information for connecting to the 
   *     [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   *     .
   * @param { ConnectOptions } callback - Callback used to return the information indicating that the connection is 
   *     successful, failed, or interrupted.
   * @returns { long } Connection ID. A caller can call 
   *     [disconnectAppServiceExtensionAbility]{@link UIAbilityContext.disconnectAppServiceExtensionAbility} with this ID for
   *     disconnection.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000201 - The target service has not been started yet.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  connectAppServiceExtensionAbility(want: Want, callback: ConnectOptions): long;

  /**
   * Disconnects from an 
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * . It can be called only on the main thread. This API uses a promise to return the result.
   * Once the connection is terminated, you are advised to set the remote object returned when the connection is 
   * established to null, so as to prevent communication using the remote object that may become invalid.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801 
   * is returned.
   * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
   *
   * @param { long } connection - Connection ID returned by 
   *     [connectAppServiceExtensionAbility]{@link UIAbilityContext.connectAppServiceExtensionAbility}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  disconnectAppServiceExtensionAbility(connection: long): Promise<void>;

  /**
   * Sets whether to trigger the [onNewWant]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onNewWant} lifecycle callback 
   * when a UIAbility is started in a specific scenario. It can be called only on the main thread. This API uses a 
   * promise to return the result.
   * 
   * > **NOTE**
   * >
   * > This API is usually used within the [onCreate]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onCreate} lifecycle 
   * > callback. You are advised to include all the enumerated values of 
   * > [Scenarios]{@link ./../@ohos.app.ability.contextConstant:contextConstant.Scenarios} when specifying the **scenarios** 
   * > parameter. For details, see the sample code below.
   *
   * @param { int } scenarios - Scenarios. For details about the available options, see 
   *     [Scenarios]{@link ./../@ohos.app.ability.contextConstant:contextConstant.Scenarios}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Connection to service failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  setOnNewWantSkipScenarios(scenarios: int): Promise<void>;

  /**
   * Starts the application's own UIAbility within the current process.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801
   * is returned.
   *
   * > **NOTE**
   * >
   * > - The target UIAbility can only be cold-started. If an instance of the target UIAbility has already been
   * > launched, the startup fails.
   * >
   * > - The UIAbility instance started through this API runs in the same process as the caller. Other process-related
   * > policies for the target UIAbility (such as those specified via the **isolationProcess** or **isolationMode**
   * > fields in the [module.json5](docroot://quick-start/module-configuration-file.md) file) does not take effect.
   *
   * @param { Want } want - Mandatory information for starting the UIAbility. Only
   *     [explicit startup](docroot://application-models/explicit-implicit-want-mappings.md
   *     #matching-rules-of-explicit-want) is supported.
   *     [Implicit startup](docroot://application-models/explicit-implicit-want-mappings.md#
   *     matching-rules-of-implicit-want) is not supported.
   * @param { string } specifiedFlag - ID of the UIAbility. This ID must not duplicate that of any already running
   *     UIAbility instance; otherwise, an error is returned.<br>**NOTE**<br>When this API is used to start a
   *     UIAbility instance in [specified](docroot://application-models/uiability-launch-type.md#specified) mode, the
   *     [onAcceptWant]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage.onAcceptWant} callback is not triggered.
   * @param { StartOptions } [options] - Parameters used for starting the UIAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Connect to system service failed.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000122 - The target component is blocked by the system module and
   *     does not support startup.
   * @throws { BusinessError } 16000123 - Implicit startup is not supported.
   * @throws { BusinessError } 16000124 - Starting a remote UIAbility is not supported.
   * @throws { BusinessError } 16000130 - The UIAbility not belong to caller.
   * @throws { BusinessError } 16000131 - The UIAbility is already exist, can not start again.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  startSelfUIAbilityInCurrentProcess(want: Want, specifiedFlag: string, options?: StartOptions): Promise<void>;

  /**
   * Called by a focused UIAbility to restart its own process and launch a specified UIAbility within the same 
   * application. This API can be called only on the main thread. This API uses a promise to return the result.
   * If the target UIAbility is the current one, this action resets the window to its initial state. If it is a 
   * different UIAbility, the system navigates to and open a new window for that UIAbility.
   * This API can be properly called only on phones. If it is called on other device types, error code 801 is returned.
   * 
   * > **NOTE**
   * >
   * > When this API is called to restart the process, the **onDestroy** lifecycle callback of the UIAbility in the 
   * > process is not triggered.
   * >
   * > If an atomic service calls this API, 
   * > [restartSelfAtomicService()]{@link ./../@ohos.app.ability.abilityManager:abilityManager.restartSelfAtomicService}, or 
   * > [ApplicationContext.restartApp()]{@link ./application/ApplicationContext:ApplicationContext.restartApp} within 3 
   * > seconds after a successful call to this API, the system returns error code 16000064.
   * >
   * > If an application calls this API or 
   * > [ApplicationContext.restartApp()]{@link ./ApplicationContext:ApplicationContext.restartApp} within 3 
   * > seconds after a successful call to this API, the system returns error code 16000064.
   *
   * @param { Want } want - Want information about the UIAbility to start. The bundle name and ability name are verified.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Connect to system server error.
   * @throws { BusinessError } 16000063 - The target to restart does not belong to the caller or is not a UIAbility.
   * @throws { BusinessError } 16000064 - Restart too frequently.
   * @throws { BusinessError } 16000065 - The API can be called only when the ability is focused.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  restartApp(want: Want): Promise<void>;

  /**
   * Sets the icon for this UIAbility, which is displayed in the application window, application card in the mission 
   * center, and window snapshot in the shortcut bar. This API uses a promise to return the result.
   * This API can be properly called only on PCs/2-in-1 devices. If it is called on other device types, error code 801 
   * is returned.
   * 
   * > **NOTE**
   * >
   * > There is no priority relationship among the **setMissionWindowIcon**<!--Del-->, 
   * > [setMissionIcon]{@link UIAbilityContext.setMissionIcon(icon: image.PixelMap, callback: AsyncCallback<void>)}
   * > ,<!--DelEnd--> and 
   * > [setAbilityInstanceInfo]{@link UIAbilityContext.setAbilityInstanceInfo}. The icon 
   * > set by the last called API takes effect. If these APIs are called sequentially, the icon set by the last call 
   * > takes precedence and overwrites any previous settings.
   *
   * @param { image.PixelMap } windowIcon - Icon of the UIAbility displayed in the application window, application card in 
   *     the mission center, and window snapshot in the shortcut bar. The icon must be a square and its size must not
   *     exceed 128 MB. Otherwise, error code 401 is returned.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error. 1. Connect to system service failed;
   *     2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000135 - The main window of this ability not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  setMissionWindowIcon(windowIcon: image.PixelMap): Promise<void>;

  /**
   * Connects this UIAbility to a ServiceExtensionAbility, with the account ID specified. This API can be called only on
   *  the main thread.
   * This API can be properly called on phones and tablets. If it is called on other devices, error code 16000006 is 
   * returned.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md). 
   * > > Permission verification is not required when **accountId** specifies the current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target UIAbility.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getCreatedOsAccountsCount]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}
   *     .
   * @param { ConnectOptions } options - Instance of the callback function after the connection to the 
   *     ServiceExtensionAbility is set up.
   * @returns { long } Result code of the connection.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead UIAbilityContext#connectServiceExtensionAbilityWithAccount(want: Want, accountId: int, options: ConnectOptions)
   */
  connectAbilityWithAccount(want: Want, accountId: int, options: ConnectOptions): long;

  /**
   * Disconnects from a [ServiceExtensionAbility](docroot://application-models/extensionability-overview.md). Once the 
   * connection is terminated, set the remote object, which is returned when the connection is established, to null. 
   * This API uses an asynchronous callback to return the result. It can be called only on the main thread.
   *
   * @param { long } connection - ID of the connected ServiceExtensionAbility, that is, **connectionId** returned by 
   *     [connectServiceExtensionAbility]{@link UIAbilityContext.connectServiceExtensionAbility}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead UIAbilityContext#disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>)
   */
  disconnectAbility(connection: long, callback: AsyncCallback<void>): void;
  
  /**
   * Disconnects from a [ServiceExtensionAbility](docroot://application-models/extensionability-overview.md). Once the 
   * connection is terminated, set the remote object, which is returned when the connection is established, to null. 
   * This API uses a promise to return the result. It can be called only on the main thread.
   *
   * @param { long } connection - ID of the connected ServiceExtensionAbility, that is, **connectionId** returned by 
   *     [connectServiceExtensionAbility]{@link UIAbilityContext.connectServiceExtensionAbility}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead UIAbilityContext#disconnectServiceExtensionAbility(connection: long)
   */
  disconnectAbility(connection: long): Promise<void>;

  /**
   * Bring the current UIAbility instance to the foreground.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported, because starting self to foreground
   *     from background is not supported in current devive or current UIAbility is a non-native UIAbility.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Connect to system service failed.
   * @throws { BusinessError } 16000082 - The UIAbility is being started.
   *     The UIAbility has not completed onCreate or onWindowStageCreate.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  startSelf(): Promise<void>;

  /**
  * Launch the application's own UIAbility in the child process.
  * If the launchMode of UIAbility is specified, you can set specified flag.
  *
  * @param { Want } want - Indicates the ability to start.
  * @param { string } specifiedFlag - If the launchType of target UIAbility is specified,
  *     you can set specifiedFlag by this param, and system will not call onAcceptWant.
  * @returns { Promise<void> } The promise returned by the function.
  * @throws { BusinessError } 801 - Capability not supported.
  * @throws { BusinessError } 16000001 - The specified ability does not exist.
  * @throws { BusinessError } 16000008 - The crowdtesting application expires.
  * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
  * @throws { BusinessError } 16000011 - The context does not exist.
  * @throws { BusinessError } 16000050 - Internal error. Connect to system service failed.
  * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
  * @throws { BusinessError } 16000122 - The target component is blocked by the system module and
  *     does not support startup.
  * @throws { BusinessError } 16000123 - Implicit startup is not supported.
  * @throws { BusinessError } 16000124 - Starting a remote UIAbility is not supported.
  * @throws { BusinessError } 16000130 - The UIAbility not belong to caller.
  * @throws { BusinessError } 16000131 - The UIAbility is already exist, can not start again.
  * @syscap SystemCapability.Ability.AbilityRuntime.Core
  * @stagemodelonly
  * @since 26.0.0 dynamic&static
  */
  startSelfUIAbilityInChildProcess(want: Want, specifiedFlag: string): Promise<void>;
}

export default UIAbilityContext;