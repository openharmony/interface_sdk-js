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
 * 
 * 在使用InputMethodExtensionContext的功能前，需要通过InputMethodExtensionAbility子类实例获取。
 *
 * @file InputMethodExtensionContext
 * @kit IMEKit
 */

import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import ExtensionContext from './application/ExtensionContext';
import { ConnectOptions } from './ability/connectOptions';

/**
 * **@ohos.InputMethodExtensionContext**模块是InputMethodExtensionAbility的上下文环境，继承于ExtensionContext，为输入法扩展能力提供上下文级别的操作接口。
 * 
 * 本模块是输入法ExtensionAbility的上下文类，继承自`ExtensionContext`，作为`InputMethodExtensionAbility`实例的`context`属性提供。它承载了输入法扩展应用在其生命周期内
 * 可使用的上下文能力，包括销毁自身和拉起其他应用。
 * 
 * 本模块提供两大核心能力：1）通过`destroy()`销毁输入法ExtensionAbility自身，实现输入法应用的生命周期终止；2）通过`startAbility()`拉起目标应用，使输入法应用能够启动其他Ability进行交互，
 * 拓展输入法功能的灵活性和可扩展性。
 * 
 * 当开发输入法ExtensionAbility并需要在其生命周期内执行上下文级操作时使用本模块。典型场景包括：输入法应用在`onDestroy`回调中主动销毁自身、输入法应用需要拉起设置页面或其他辅助应用等。
 * 
 * 模块内的核心API按功能分为两类：
 * 
 * 1. **生命周期管理**：`destroy()`用于销毁输入法ExtensionAbility自身，终止输入法应用运行。
 * 2. **Ability交互**：`startAbility()`用于从输入法应用拉起目标Ability（如设置页面等），拓展输入法应用与其他应用的交互能力。
 * 
 * 典型使用流程：在`InputMethodExtensionAbility`的`onCreate`回调中获取`this.context` → 在需要终止输入法时调用`context.destroy()` → 在需要拉起其他应用时调用
 * `context.startAbility(want)`。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class InputMethodExtensionContext extends ExtensionContext {
  /**
   * 销毁输入法应用。使用callback异步回调。
   * 
   * - **含义/功能**：销毁当前的InputMethodExtensionAbility，终止输入法应用的运行。调用后系统将触发`InputMethodExtensionAbility.onDestroy()`生命周期回调。
   * - **使用场景**：当输入法应用需要主动终止自身运行时使用。例如：输入法应用在处理完特定任务后主动退出、或在`onDestroy`回调中配合销毁以确保资源释放。
   * - **使用后效果**：调用成功后，当前的InputMethodExtensionAbility将被销毁，系统触发`onDestroy()`生命周期回调，输入法应用进程终止。调用后再进行其他上下文操作将不起效。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当销毁输入法应用成功时，err为undefined；否则为错误对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  destroy(callback: AsyncCallback<void>): void;

  /**
   * 销毁输入法应用。使用Promise异步回调。
   * 
   * - **含义/功能**：销毁当前的InputMethodExtensionAbility，终止输入法应用的运行。调用后系统将触发`InputMethodExtensionAbility.onDestroy()`生命周期回调。
   * - **使用场景**：当输入法应用需要主动终止自身运行时使用。与callback形式功能相同，适合需要使用Promise链式调用的场景。
   * - **使用后效果**：调用成功后，当前的InputMethodExtensionAbility将被销毁，系统触发`onDestroy()`生命周期回调，输入法应用进程终止。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。Promise回调成功时表示销毁成功，失败时返回错误对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  destroy(): Promise<void>;

  /**
   * 销毁输入法ExtensionAbility。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当销毁输入法应用成功时，err为undefined；否则为错误对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead InputMethodExtensionContext.destroy(callback: AsyncCallback<void>)
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * 销毁输入法ExtensionAbility。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead InputMethodExtensionContext.destroy()
   */
  terminateSelf(): Promise<void>;

  /**
   * 拉起目标应用。使用Promise异步回调。
   * 
   * - **含义/功能**：从输入法应用启动指定的Ability，使输入法应用能够与其他应用交互。通过Want参数指定目标应用的Ability名称和Bundle名称。
   * - **使用场景**：当输入法应用需要拉起其他应用时使用。例如：输入法应用拉起系统设置页面供用户配置输入法、拉起浏览器打开帮助文档等。
   * - **使用后效果**：调用成功后，目标Ability被启动并显示在前台。输入法应用自身不会受到影响，继续正常运行。
   *
   * @param { Want } want - 用于指定目标应用的Want类型信息，包括ability名称、bundle名称等。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 以指定账户拉起目标应用。使用callback异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 用于指定目标应用的Want类型信息。
   * @param { number } accountId - 目标系统账户的ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当拉起目标应用成功时，err为undefined；否则为错误对象。
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
   * 以指定账户拉起目标应用。使用Promise异步回调。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 用于指定目标应用的Want类型信息。
   * @param { number } accountId - 目标系统账户的ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 将当前Ability连接到ServiceExtensionAbility。
   *
   * @param { Want } want - 用于指定目标ServiceExtensionAbility的Want类型信息。
   * @param { ConnectOptions } options - 连接回调，用于返回连接成功、中断或失败的信息。
   * @returns { number } 连接的数字标识，用于后续断开连接时传入。
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
   * 以指定账户连接ServiceExtensionAbility。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 用于指定目标ServiceExtensionAbility的Want类型信息。
   * @param { number } accountId - 目标系统账户的ID。
   * @returns { number } 连接的数字标识，用于后续断开连接时传入。
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
   * 将当前Ability连接到ServiceExtensionAbility。
   *
   * @param { Want } want - 用于指定目标ServiceExtensionAbility的Want类型信息。
   * @param { ConnectOptions } options - 连接回调，用于返回连接成功、中断或失败的信息。
   * @returns { number } 连接的数字标识，用于后续断开连接时传入。
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
   * 断开与ServiceExtensionAbility的连接。使用callback异步回调。
   *
   * @param { number } connection - 连接的数字标识，由connectAbility/connectServiceExtensionAbility返回。
   * @param { AsyncCallback<void> } callback - 回调函数。当断开连接成功时，err为undefined；否则为错误对象。
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
   * 断开与ServiceExtensionAbility的连接。使用Promise异步回调。
   *
   * @param { number } connection - 连接的数字标识，由connectAbility/connectServiceExtensionAbility返回。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 断开与ServiceExtensionAbility的连接。使用callback异步回调。
   *
   * @param { number } connection - 连接的数字标识，由connectServiceExtensionAbility返回。
   * @param { AsyncCallback<void> } callback - 回调函数。当断开连接成功时，err为undefined；否则为错误对象。
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
   * 断开与ServiceExtensionAbility的连接。使用Promise异步回调。
   *
   * @param { number } connection - 连接的数字标识，由connectServiceExtensionAbility返回。
   * @returns { Promise<void> } Promise对象，无返回结果。
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