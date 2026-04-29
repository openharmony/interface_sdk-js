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

import ExtensionContext from './ExtensionContext';
import type Want from '../@ohos.app.ability.Want';
import type StartOptions from '../@ohos.app.ability.StartOptions';
import type AbilityStartCallback from './AbilityStartCallback';
import { ConnectOptions } from '../ability/connectOptions';
/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * UIServiceExtensionContext模块是
 * [UIServiceExtension]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}的上下文环境，继承自
 * [ExtensionContext]{@link ExtensionContext:ExtensionContext}。
 * 
 * UIServiceExtensionContext模块提供访问
 * [UIServiceExtension]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}特定资源以及具有的能力，包括启
 * 动、停止、绑定、解绑Ability。
 * 
 * > **说明：**
 * >
 * > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 14 dynamic
 * @since 23 static
 */
declare class UIServiceExtensionContext extends ExtensionContext {
  /**
   * 启动Ability。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - Want类型参数，传入需要启动的ability的信息，如Ability名称，Bundle名称等。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 销毁[UIServiceExtension]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}。使用Promise异
   * 步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;

  /**
   * 按目标ability的类型启动[UIAbility]{@link ./../@ohos.app.ability.UIAbility}或
   * [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。仅支持处于前台的应用调用。使用Promise异步回调
   * 。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { string } type - 目标ability类型。
   * @param { Record<string, Object> } wantParam - Want参数。
   * @param { AbilityStartCallback } abilityStartCallback - 拉起UIExtensionAbility执行结果的回调。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 按目标ability的类型启动[UIAbility]{@link ./../@ohos.app.ability.UIAbility}或
   * [UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。仅支持处于前台的应用调用。使用Promise异步回调
   * 。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { string } type - 目标ability类型。
   * @param { Record<string, RecordData> } wantParam - Want参数。
   * @param { AbilityStartCallback } abilityStartCallback - 拉起UIExtensionAbility执行结果的回调。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 连接到[UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}，返回连接id。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
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
   * 断开与[UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}的连接，与
   * [connectServiceExtensionAbility]{@link UIServiceExtensionContext.connectServiceExtensionAbility}功能相反。使用Promise异步回调。
   *
   * @param { long } connectionId - 从
   *     [connectServiceExtensionAbility]{@link UIServiceExtensionContext.connectServiceExtensionAbility}接口返回的连接Id。
   * @returns { Promise<void> } Promise对象，无返回结果。
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