/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit IMEKit
 */

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import ExtensionContext from './application/ExtensionContext';
import { ConnectOptions } from './ability/connectOptions';

/**
 * The **InputMethodExtensionContext** module, inherited from **ExtensionContext**, provides context for 
 * **InputMethodExtension** abilities. You can use the APIs of this module to start, terminate, connect, and disconnect 
 * abilities.
 * 
 * > **NOTE**
 * >
 * > - The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class InputMethodExtensionContext extends ExtensionContext {
  /**
   * Destroys this input method. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  destroy(callback: AsyncCallback<void>): void;

  /**
   * Destroys this input method. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  destroy(): Promise<void>;

  /**
   * Destroys this input method extension. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead InputMethodExtensionContext.destroy(callback: AsyncCallback<void>)
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * Destroys this input method extension. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead InputMethodExtensionContext.destroy()
   */
  terminateSelf(): Promise<void>;

  /**
   * Starts an ability. This API uses a promise to return the result.
   *
   * @param { Want } want - Want information, including the ability name and bundle name of the target application.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
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
   * @throws { BusinessError } 16000061 - Operation not supported.
   * @throws { BusinessError } 16000069 - The extension cannot start the third party application.
   * @throws { BusinessError } 16000070 - The extension cannot start the service.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;

  /**
   * Starts an ability with a specified account. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target ability.
   * @param { number } accountId - ID of the target system account.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the starting is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - not system application.
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
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  startAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;

  /**
   * Starts an ability with a specified account. This API uses a promise to return the result.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target ability.
   * @param { number } accountId - ID of the target system account.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - not system application.
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
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  startAbilityWithAccount(want: Want, accountId: number): Promise<void>;

  /**
   * Connects this ability to a ServiceExtensionAbility.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { ConnectOptions } options - Callback used to return the information indicating that the connection is
   *     successful, interrupted, or failed.
   * @returns { number } A number, based on which the connection will be interrupted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  connectAbility(want: Want, options: ConnectOptions): number;

  /**
   * Connects to a ServiceExtensionAbility with a specified account.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Want information about the target ability.
   * @param { number } accountId - ID of the target system account.
   * @returns { number } Result code of the connection.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  connectAbilityWithAccount(want: Want, accountId: number): number;

  /**
   * Connects this ability to a ServiceExtensionAbility.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { ConnectOptions } options - Callback used to return the information indicating that the connection is
   *     successful, interrupted, or failed.
   * @returns { number } A number, based on which the connection will be interrupted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 10]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 10]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed. [since 10]
   * @throws { BusinessError } 16000008 - The crowdtesting application expires. [since 10]
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI. [since 10]
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 10]
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): number;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote
   * object returned upon the connection to void. This API uses an asynchronous callback to return the result.
   *
   * @param { number } connection - Number returned after **connectServiceExtensionAbility** is called.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If disconnection is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  disconnectAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote
   * object returned upon the connection to void. This API uses a promise to return the result.
   *
   * @param { number } connection - Number returned after **connectServiceExtensionAbility** is called.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  disconnectAbility(connection: number): Promise<void>;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote
   * object returned upon the connection to void. This API can be called only on the main thread.  This API uses an
   * asynchronous callback to return the result.
   *
   * @param { number } connection - Number returned after **connectServiceExtensionAbility** is called.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If disconnection is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  disconnectServiceExtensionAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote
   * object returned upon the connection to void. This API can be called only on the main thread. This API uses a
   * promise to return the result.
   *
   * @param { number } connection - Number returned after **connectServiceExtensionAbility** is called.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed.
   *     2. System service failed to communicate with dependency module.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  disconnectServiceExtensionAbility(connection: number): Promise<void>;
}

export default InputMethodExtensionContext;
