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
 * InputMethodExtensionContext模块继承自ExtensionContext，为InputMethodExtension能力提供上下文环境。
 * 
 * 开发者可以使用该模块提供的API完成启动、终止、连接和断开连接能力等操作。
 * 
 * > **说明：**
 * >
 * > - 本模块接口仅在Stage模型下可用。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class InputMethodExtensionContext extends ExtensionContext {
  /**
   * 销毁此输入法。使用callback异步回调返回结果。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当销毁输入法成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  destroy(callback: AsyncCallback<void>): void;

  /**
   * 销毁此输入法。使用Promise异步回调返回结果。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  destroy(): Promise<void>;

  /**
   * 销毁此输入法扩展。使用callback异步回调返回结果。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当销毁输入法扩展成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead InputMethodExtensionContext.destroy(callback: AsyncCallback<void>)
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * 销毁此输入法扩展。使用Promise异步回调返回结果。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead InputMethodExtensionContext.destroy()
   */
  terminateSelf(): Promise<void>;

  /**
   * 启动Ability。使用Promise异步回调返回结果。
   *
   * @param { Want } want - Want类型参数，传入需要启动的Ability的信息，如Ability名称，Bundle名称等。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 启动指定账号的Ability。使用callback异步回调返回结果。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { number } accountId - 系统账号的账号ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动Ability成功，err为undefined，否则为错误对象。
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
   * 启动指定账号的Ability。使用Promise异步回调返回结果。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { number } accountId - 系统账号的账号ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 将此能力连接到ServiceExtensionAbility。
   *
   * @param { Want } want - Want类型参数，传入需要连接的能力的信息，如Ability名称，Bundle名称等。
   * @param { ConnectOptions } options - ConnectOptions类型的回调函数，返回服务连接成功、断开或连接失败后的信息。
   * @returns { number } 返回一个number，用于后续断开连接。
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
   * 连接指定账号的ServiceExtensionAbility。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { number } accountId - 系统账号的账号ID。
   * @returns { number } 连接结果码。
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
   * 将此能力连接到ServiceExtensionAbility。
   *
   * @param { Want } want - Want类型参数，传入需要连接的能力的信息，如Ability名称，Bundle名称等。
   * @param { ConnectOptions } options - ConnectOptions类型的回调函数，返回服务连接成功、断开或连接失败后的信息。
   * @returns { number } 返回一个number，用于后续断开连接。
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
   * 断开此能力与ServiceExtensionAbility的连接。断开连接成功后，将连接时返回的remote对象置为void。使用callback异步回调返回结果。
   *
   * @param { number } connection - connectServiceExtensionAbility调用后返回的number。
   * @param { AsyncCallback<void> } callback - 回调函数。当断开连接成功，err为undefined，否则为错误对象。
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
   * 断开此能力与ServiceExtensionAbility的连接。断开连接成功后，将连接时返回的remote对象置为void。使用Promise异步回调返回结果。
   *
   * @param { number } connection - connectServiceExtensionAbility调用后返回的number。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 断开此能力与ServiceExtensionAbility的连接。断开连接成功后，将连接时返回的remote对象置为void。此接口仅可在主线程调用。使用callback异步回调返回结果。
   *
   * @param { number } connection - connectServiceExtensionAbility调用后返回的number。
   * @param { AsyncCallback<void> } callback - 回调函数。当断开连接成功，err为undefined，否则为错误对象。
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
   * 断开此能力与ServiceExtensionAbility的连接。断开连接成功后，将连接时返回的remote对象置为void。此接口仅可在主线程调用。使用Promise异步回调返回结果。
   *
   * @param { number } connection - connectServiceExtensionAbility调用后返回的number。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
