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
 * UIExtensionContentSession is the UI operation class for the 
 * [UIExtensionAbility]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}. It provides control over page 
 * loading and allows configuration of the window privacy mode of the host application (application that starts the 
 * UIExtensionAbility). When the host application starts a specific UIExtensionAbility, the system creates a 
 * UIExtensionContentSession object and passes it back via the 
 * [onSessionCreate]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate} callback. Each 
 * UIExtensionAbility corresponds to one UIExtensionContentSession object, and these objects operate independently 
 * without interfering with each other.
 *
 * @file
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type { AbilityResult } from './ability/abilityResult';
/*** endif */
import type { AsyncCallback } from './@ohos.base';
import type uiExtensionHost from './@ohos.uiExtensionHost';
import type uiExtension from './@ohos.arkui.uiExtension';
import type AbilityStartCallback from './application/AbilityStartCallback';
import type Want from './@ohos.app.ability.Want';
import type StartOptions from './@ohos.app.ability.StartOptions';
/*** if arkts static */
import { AbilityResult } from './ability/abilityResult';
import { LocalStorage } from '@ohos.arkui.stateManagement';
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * Sets the callback for the ui extension to receive data from an ui extension component.
 *
 * @param { Record<string, RecordData> } data - Indicates the receive data callback to set.
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 23 staticonly
 */
export type OnReceiveDataCallback = (data: Record<string, RecordData>) => void;

/**
 * Sets the callback with return value for the ui extension to receive data from an ui extension component.
 *
 * @param { Record<string, RecordData> } data - Indicates the receive data callback to set.
 * @returns { Record<string, RecordData> } Returns the custom data.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 23 staticonly
 */
export type OnReceiveDataForResultCallback = (data: Record<string, RecordData>) => Record<string, RecordData>;

/**
 * UIExtensionContentSession is the UI operation class for the UIExtensionAbility. It provides control over page loading
 *  and allows configuration of the window privacy mode of the host application.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
declare class UIExtensionContentSession {
  /**
   * Sends data to the UIExtensionComponent.
   *
   * @param { object } data - Data to send. [since 10 - 10]
   * @param { Record<string, Object> } data - Data to send. [since 11]
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  sendData(data: Record<string, Object>): void;

  /**
   * Send data from an ui extension to an ui extension component.
   *
   * @param { Record<string, RecordData> } data - Indicates the data send to ui extension component.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  sendData(data: Record<string, RecordData>): void;

  /**
   * Sets a callback to receive data from the UIExtensionComponent. This API uses an asynchronous callback to return the
   *  result.
   *
   * @param { function } callback - Callback used to return the received data.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   */
  setReceiveDataCallback(callback: (data: Record<string, Object>) => void): void;

  /**
   * Sets the callback for the ui extension to receive data from an ui extension component.
   *
   * @param { OnReceiveDataCallback } callback - Indicates the receive data callback to set.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  setReceiveDataCallback(callback: OnReceiveDataCallback): void;

  /**
   * Sets a callback with a return value to receive data from the UIExtensionComponent. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { function } callback - Callback used to return the received data with a return value.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  setReceiveDataForResultCallback(callback: (data: Record<string, Object>) => Record<string, Object>): void;

  /**
   * Sets the callback with return value for the ui extension to receive data from an ui extension component.
   *
   * @param { OnReceiveDataForResultCallback } callback - Indicates the receive data callback to set.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  setReceiveDataForResultCallback(callback: OnReceiveDataForResultCallback): void;

  /**
   * Loads a page for the [UIExtensionAbility]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}, with 
   * state properties passed to the page through [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). 
   * This API is used to load a page in the 
   * [onSessionCreate]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate} lifecycle of the 
   * UIExtensionAbility.
   *
   * @param { string } path - Path of the page to load. The path is configured using the 
   *     [pages](docroot://quick-start/module-configuration-file.md#pages) tag in the 
   *     [module.json5](docroot://quick-start/module-configuration-file.md) file.
   * @param { LocalStorage } [storage] - A page-level UI state storage unit, which is used to pass state properties to the 
   *     page.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  loadContent(path: string, storage?: LocalStorage): void;

  /**
   * Loads a [named route](docroot://ui/arkts-routing.md#named-route) page for a 
   * [UIExtensionAbility]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}, with state properties passed 
   * to the page through [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). This API is used to load a
   *  named route page in the 
   * [onSessionCreate]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate} lifecycle of the 
   * UIExtensionAbility.
   *
   * @param { string } name - Name of the named route page.
   * @param { LocalStorage } [storage] - A page-level UI state storage unit, which is used to pass state properties to the 
   *     page.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  loadContentByName(name: string, storage?: LocalStorage): void;

  /**
   * Starts an ability. This API uses an asynchronous callback to return the result.
   * UI extension uses this method to start a specific ability.If the caller application is in foreground,
   * you can use this method to start ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   * > > The application where the UIExtensionComponent is located must be running in the foreground and gain focus.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the ability is started, **err** is 
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts an ability with **options** specified. This API uses an asynchronous callback to return the result.
   * UI extension uses this method to start a specific ability.If the caller application is in foreground,
   * you can use this method to start ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   * > > The application where the UIExtensionComponent is located must be running in the foreground and gain focus.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { StartOptions } options - Parameters used for starting the ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the ability is started, **err** is 
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Starts an ability. This API uses a promise to return the result.
   * UI extension uses this method to start a specific ability.If the caller application is in foreground,
   * you can use this method to start ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   * 
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see 
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   * > > The application where the UIExtensionComponent is located must be running in the foreground and gain focus.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { StartOptions } [options] - Parameters used for starting the ability.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Starts an ability as the caller. The initial ability places its caller information (such as the bundle name and 
   * ability name) in the **want** parameter and transfers the information to an ExtensionAbility at the middle layer. 
   * When the ExtensionAbility starts another ability by calling this API, the started ability can obtain the caller 
   * information of the initial ability from the **onCreate** lifecycle. This API uses an asynchronous callback to 
   * return the result.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application is 
   * in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  startAbilityAsCaller(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts an ability as the caller, with **options** specified. The initial ability places its caller information (
   * such as the bundle name and ability name) in the **want** parameter and transfers the information to an 
   * ExtensionAbility at the middle layer. When the ExtensionAbility starts another ability by calling this API, the 
   * started ability can obtain the caller information of the initial ability from the **onCreate** lifecycle. This API 
   * uses an asynchronous callback to return the result.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application is 
   * in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { StartOptions } options - Parameters used for starting the ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  startAbilityAsCaller(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * Starts an ability as the caller. The initial ability places its caller information (such as the bundle name and 
   * ability name) in the **want** parameter and transfers the information to an ExtensionAbility at the middle layer. 
   * When the ExtensionAbility starts another ability by calling this API, the started ability can obtain the caller 
   * information of the initial ability from the **onCreate** lifecycle. This API uses a promise to return the result.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application is 
   * in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { StartOptions } [options] - Parameters used for starting the ability.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  startAbilityAsCaller(want: Want, options?: StartOptions): Promise<void>;

  /**
   * Starts an ability and returns the result to the caller after the ability is terminated. This API uses an 
   * asynchronous callback to return the result.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application
   * is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   * 
   * An ability can be terminated in the following ways:
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
   * > > The application where the UIExtensionComponent is located must be running in the foreground and gain focus.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { AsyncCallback<AbilityResult> } callback - Callback used to return the result. If the ability is started and 
   *     terminated, **err** is **undefined** and **data** is the obtained result code and data; otherwise, **err** is an 
   *     error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts an ability with **options** specified and returns the result to the caller after the ability is terminated. 
   * This API uses an asynchronous callback to return the result.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application
   * is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   * 
   * An ability can be terminated in the following ways:
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
   * > The application where the UIExtensionComponent is located must be running in the foreground and gain focus.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { StartOptions } options - Parameters used for starting the ability.
   * @param { AsyncCallback<AbilityResult> } callback - Callback used to return the result. If the ability is started and 
   *     terminated, **err** is **undefined** and **data** is the obtained result code and data; otherwise, **err** is an 
   *     error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, options: StartOptions, callback: AsyncCallback<AbilityResult>): void;

  /**
   * Starts an ability and returns the result to the caller after the ability is terminated. This API uses a promise to 
   * return the result.
   * If the caller application is in foreground, you can use this method to start ability; If the caller application
   * is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   * If the target ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   * 
   * An ability can be terminated in the following ways:
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
   * > The application where the UIExtensionComponent is located must be running in the foreground and gain focus.
   *
   * @param { Want } want - Want information about the target ability.
   * @param { StartOptions } [options] - Parameters used for starting the ability.
   * @returns { Promise<AbilityResult> } Promise used to return the result code and data.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
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
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>;

  /**
   * Destroys this UIExtensionAbility and closes the corresponding window of the host application. This API uses an 
   * asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * Destroys this UIExtensionAbility and closes the corresponding window of the host application. This API uses a 
   * promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;

  /**
   * Destroys this UIExtensionAbility, closes the corresponding window of the host application, and returns the result 
   * to the host application. This API uses an asynchronous callback to return the result.
   *
   * @param { AbilityResult } parameter - Information returned to the host application.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

  /**
   * Destroys this UIExtensionAbility, closes the corresponding window of the host application, and returns the result 
   * to the host application. This API uses a promise to return the result.
   *
   * @param { AbilityResult } parameter - Information returned to the host application.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * Sets the background color for the loading page of the UIExtensionAbility. This API can be used only after 
   * [loadContent()]{@link ./@ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent} is called 
   * and takes effect.
   *
   * @param { string } color - Background color to set. The value is a hexadecimal RGB or ARGB color code and is case 
   *     insensitive, for example, **#00FF00** or **#FF00FF00**.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  setWindowBackgroundColor(color: string): void;

  /**
   * Enables or disables the window privacy mode of the host application. A window in privacy mode cannot be captured or
   *  recorded. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRIVACY_WINDOW
   * @param { boolean } isPrivacyMode - Whether to enable the privacy mode. **true** to enable, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>;

  /**
   * Enables or disables the window privacy mode of the host application. A window in privacy mode cannot be captured or
   *  recorded. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.PRIVACY_WINDOW
   * @param { boolean } isPrivacyMode - Whether to enable the privacy mode. **true** to enable, **false** otherwise.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the setting is successful, **err** is 
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

  /**
   * Implicitly starts a given type of UIExtensionAbility. This API uses an asynchronous callback to return the result. 
   * It can be called only by applications running in the foreground.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   *
   * @param { string } type - Type of the UIExtensionAbility. For details, see 
   *     [Starting an Application of the Specified Type](docroot://application-models/start-intent-panel.md#matching-rules).
   * @param { Record<string, Object> } wantParam - Parameters passed for starting the UIExtensionAbility.
   * @param { AbilityStartCallback } abilityStartCallback - Execution result of starting the UIExtensionAbility.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 11 - 11]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 11 - 11]
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 11 - 11]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 11 - 11]
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released. [since 11 - 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>): void;

  /**
   * Starts the UIAbility or UIExtensionAbility by type.
   * If the caller application is in the background, it is not allowed to call this interface.
   * If the target ability is visible, you can start the target ability; If the target ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible ability.
   *
   * @param { string } type - The type of target ability.
   * @param { Record<string, RecordData> } wantParam - Indicates the want parameter.
   * @param { AbilityStartCallback } abilityStartCallback - Indicates the abilityStartCallback.
   * @param { AsyncCallback<void> } callback - The callback of startAbility.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>): void;

  /**
   * Implicitly starts a given type of UIExtensionAbility. This API uses a promise to return the result. It can be 
   * called only by applications running in the foreground.
   *
   * @param { string } type - Type of the UIExtensionAbility. For details, see 
   *     [Starting an Application of the Specified Type](docroot://application-models/start-intent-panel.md#matching-rules).
   * @param { Record<string, Object> } wantParam - Parameters passed for starting the UIExtensionAbility.
   * @param { AbilityStartCallback } abilityStartCallback - Execution result of starting the UIExtensionAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 11 - 11]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 11 - 11]
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 11 - 11]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 11 - 11]
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released. [since 11 - 11]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   */
  startAbilityByType(type: string, wantParam: Record<string, Object>,
    abilityStartCallback: AbilityStartCallback): Promise<void>;

  /**
   * Starts the UIAbility or UIExtensionAbility by type.
   * If the caller application is in the background, it is not allowed to call this interface.
   *
   * @param { string } type - The type of target ability.
   * @param { Record<string, RecordData> } wantParam - Indicates the want parameter.
   * @param { AbilityStartCallback } abilityStartCallback - Indicates the abilityStartCallback.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback): Promise<void>;

  /**
   * Obtains the window object corresponding to the current UIExtension to notify the width, height, position, and 
   * avoided area.
   *
   * @returns { uiExtensionHost.UIExtensionHostWindowProxy } Window information of the host application.
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  getUIExtensionHostWindowProxy(): uiExtensionHost.UIExtensionHostWindowProxy;

  /**
   * Obtains the window proxy of this UIExtensionAbility.
   *
   * @returns { uiExtension.WindowProxy } Window proxy of the host application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  getUIExtensionWindowProxy(): uiExtension.WindowProxy;
}

export default UIExtensionContentSession;