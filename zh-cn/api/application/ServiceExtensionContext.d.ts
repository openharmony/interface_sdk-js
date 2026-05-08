/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import { Caller } from '../@ohos.app.ability.UIAbility';
import OpenLinkOptions from '../@ohos.app.ability.OpenLinkOptions';
import AtomicServiceOptions from '../@ohos.app.ability.AtomicServiceOptions';
import { AsyncCallback } from '../@ohos.base';
import { ConnectOptions } from '../ability/connectOptions';
import ExtensionContext from './ExtensionContext';
import StartOptions from '../@ohos.app.ability.StartOptions';
import Want from '../@ohos.app.ability.Want';

/**
 * ServiceExtensionContext模块是ServiceExtensionAbility的上下文环境，继承自ExtensionContext。
 * 
 * ServiceExtensionContext模块提供ServiceExtensionAbility具有的能力，包括启动、停止、绑定、解绑Ability。
 * 
 * > **说明：**
 * >
 * > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class ServiceExtensionContext extends ExtensionContext {
  /**
   * 启动Ability。仅支持在主线程调用。使用callback异步回调。
   *
   * @param { Want } want - Want类型参数，传入需要启动的Ability的信息，如Ability名称，Bundle名称等。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动Ability成功，err为undefined，否则为错误对象。
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
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * 启动Ability。仅支持在主线程调用。使用callback异步回调。
   *
   * @param { Want } want - 启动Ability的Want信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动Ability成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 11]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 11]
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
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
  startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

  /**
   * 启动Ability。仅支持在主线程调用。使用Promise异步回调。
   *
   * @param { Want } want - Want类型参数，传入需要启动的Ability的信息，如Ability名称，Bundle名称等。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * 通过AppLinking启动UIAbility。仅支持在主线程调用。使用Promise异步回调。
   * 
   * 通过在link字段中传入标准格式的URL，基于隐式Want匹配规则拉起目标UIAbility。目标方必须具备以下过滤器特征，才能处理AppLinking链接：
   * 
   * - "actions"列表中包含"ohos.want.action.viewData"。
   * - "entities"列表中包含"entity.system.browsable"。
   * - "uris"列表中包含"scheme"为"https"且"domainVerify"为true的元素。
   * 
   * 传入的参数不合法时，如未设置必选参数或link字符串不是标准格式的URL，接口会直接抛出异常。参数校验通过，拉起目标方时出现的错误通过promise返回错误信息。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { string } link - 指示要打开的标准格式URL。
   * @param { OpenLinkOptions } [options] - 打开URL的选项参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Failed to start the invisible ability.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000019 - No matching ability is found.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 16000136 - The UIAbility is prohibited from launching itself via App Linking. [since 23]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  openLink(link: string, options?: OpenLinkOptions): Promise<void>;

  /**
   * 使用设置的caller信息启动一个Ability，caller信息由Want携带，在系统服务层识别，Ability可以在onCreate生命周期的Want参数中获取到caller信息。使用该接口启动一个Ability时，Want的
   * caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。仅支持在主线程调用。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动Ability的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动Ability成功，err为undefined，否则为错误对象。
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
   * 使用设置的caller信息启动一个Ability，caller信息由Want携带，在系统服务层识别，Ability可以在onCreate生命周期的Want参数中获取到caller信息。使用该接口启动一个Ability时，Want的
   * caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。仅支持在主线程调用。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动Ability的Want信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动Ability成功，err为undefined，否则为错误对象。
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
   * 使用设置的caller信息启动一个Ability，caller信息由Want携带，在系统服务层识别，Ability可以在onCreate生命周期的Want参数中获取到caller信息。使用该接口启动一个Ability时，Want的
   * caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。仅支持在主线程调用。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动Ability的Want信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 根据accountId启动Ability。仅支持在主线程调用。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { int } accountId - 系统账号的账号ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当根据accountId启动Ability成功，err为undefined，否则为错误对象。
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
   * 根据accountId启动Ability。仅支持在主线程调用。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { int } accountId - 系统账号的账号ID。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当根据accountId启动Ability成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 13]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 13]
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
   * 根据accountId启动Ability。仅支持在主线程调用。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { int } accountId - 系统账号的账号ID。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 启动一个新的ServiceExtensionAbility。使用callback异步回调。
   *
   * @param { Want } want - 启动Ability的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动一个新的ServiceExtensionAbility成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 启动一个新的ServiceExtensionAbility。使用Promise异步回调。
   *
   * @param { Want } want - 启动Ability的Want信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 启动一个新的ServiceExtensionAbility。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。  
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { int } accountId - 系统账号的账号ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动一个新的ServiceExtensionAbility成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 启动一个新的ServiceExtensionAbility。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。  
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { int } accountId - 系统账号的账号ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 停止指定的ServiceExtensionAbility后台服务。使用callback异步回调。
   *
   * @param { Want } want - 停止Ability的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当停止同一应用程序内的服务成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
  stopServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * 停止指定的ServiceExtensionAbility后台服务。使用Promise异步回调。
   *
   * @param { Want } want - 停止Ability的Want信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 停止指定账号下指定的ServiceExtensionAbility后台服务。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 停止Ability的Want信息。
   * @param { int } accountId - 需要停止的系统账号的账号ID。
   * @param { AsyncCallback<void> } callback - 回调函数。当使用账户停止同一应用程序内的服务成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 停止指定账号下指定的ServiceExtensionAbility后台服务。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 停止Ability的Want信息。
   * @param { int } accountId - 需要停止的系统账号的账号ID。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 停止Ability自身。仅支持在主线程调用。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当停止Ability自身成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 9 - 9]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 9 - 9]
   * @throws { BusinessError } 16000005 - The specified process does not have the permission. [since 9 - 9]
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * 停止Ability自身。仅支持在主线程调用。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 16000001 - The specified ability does not exist. [since 9 - 9]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component. [since 9 - 9]
   * @throws { BusinessError } 16000005 - The specified process does not have the permission. [since 9 - 9]
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;

  /**
   * 将当前Ability连接到一个ServiceExtensionAbility。仅支持在主线程调用。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - Want类型参数，传入需要启动的Ability的信息，如Ability名称，Bundle名称等。
   * @param { ConnectOptions } options - ConnectOptions类型的回调函数，返回服务连接成功、断开或连接失败后的信息。
   * @returns { long } 返回一个number，后续根据这个number去断开连接。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): long;

  /**
   * 将当前Ability连接到一个指定account的ServiceExtensionAbility。仅支持在主线程调用。
   * 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回16000006错误码。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。  
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动Ability的Want信息。
   * @param { int } accountId - 系统账号的账号ID。
   * @param { ConnectOptions } options - 远端对象实例。
   * @returns { long } 返回Ability连接的结果code。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 将一个Ability与绑定的服务类型的Ability解绑，断开连接之后需要将连接成功时返回的remote对象置空。仅支持在主线程调用。使用callback异步回调。
   *
   * @param { long } connection - 在connectServiceExtensionAbility中返回的number。
   * @param { AsyncCallback<void> } callback - 回调函数。当Ability与绑定服务类型的Ability解绑成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void;

  /**
   * 将一个Ability与绑定的服务类型的Ability解绑，断开连接之后需要将连接成功时返回的remote对象置空。仅支持在主线程调用。使用Promise异步回调。
   *
   * @param { long } connection - 在connectServiceExtensionAbility中返回的number。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;

  /**
   * 启动指定Ability至前台或后台，同时获取其Caller通信接口，调用方可使用Caller与被启动的Ability进行通信。仅支持在主线程调用。使用Promise异步回调。
   * 
   * 该接口不支持拉起启动模式为[specified模式](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility。
   * 
   * 使用规则：
   * 
   * - 调用方应用位于后台时，使用该接口启动Ability需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。
   * - 跨应用场景下，目标Ability的exported属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限。
   * - 同设备与跨设备场景下，该接口的使用规则存在差异，详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @permission ohos.permission.ABILITY_BACKGROUND_COMMUNICATION
   * @param { Want } want - 传入需要启动的Ability的信息，包含abilityName、moduleName、bundleName、deviceId、parameters(可选)，parameters缺省或为
   *     空表示后台启动Ability。
   * @returns { Promise<Caller> } Promise对象，返回要通讯的caller对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission. [since 9 - 9]
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released. [since 9 - 9]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startAbilityByCall(want: Want): Promise<Caller>;

  /**
   * 根据accountId对指定的Ability进行call调用，并且可以使用返回的Caller通信接口与被调用方进行通信。仅支持在主线程调用。使用Promise异步回调。
   * 
   * 该接口不支持拉起启动模式为[specified模式](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility。
   * 
   * 使用规则：
   * 
   * - 跨用户场景下，Call调用目标Ability时，调用方应用需同时申请`ohos.permission.ABILITY_BACKGROUND_COMMUNICATION`与`
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS`权限。
   * - 调用方应用位于后台时，使用该接口启动Ability需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。
   * - 跨应用场景下，目标Ability的exported属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限。
   * - 同设备与跨设备场景下，该接口的使用规则存在差异，详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @permission ohos.permission.ABILITY_BACKGROUND_COMMUNICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 传入需要启动的Ability的信息，包含abilityName、moduleName、bundleName、deviceId(可选)、parameters(可选)，其中deviceId
   *     缺省或为空表示启动本地Ability，parameters缺省或为空表示后台启动Ability。
   * @param { int } accountId - 系统账号的账号ID，-1表示当前活动用户。
   * @returns { Promise<Caller> } Promise对象，返回要通讯的caller对象。
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
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  startAbilityByCallWithAccount(want: Want, accountId: int): Promise<Caller>;

  /**
   * 启动一个指定的Ability，如果该Ability有多个实例，将拉起最近启动的那个实例。仅支持在主线程调用。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 需要启动Ability的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动一个指定的Ability成功，err为undefined，否则为错误对象。
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
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api. [since 14]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 14]
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
   * 启动一个指定的Ability，如果该Ability有多个实例，将拉起最近启动的那个实例。仅支持在主线程调用。使用callback异步回调。
   * 
   * 当开发者需要携带启动参数时可以选择此API。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 需要启动Ability的Want信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动一个指定的Ability成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 13]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 13]
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 10]
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api. [since 14]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 14]
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
   * 启动一个指定的Ability，如果该Ability有多个实例，将拉起最近启动的那个实例。使用Promise异步回调。仅支持在主线程调用。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 需要启动Ability的Want信息。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<void> } The promise returned by the function.
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
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api. [since 14]
   * @throws { BusinessError } 16000071 - App clone is not supported. [since 14]
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported. [since 14]
   * @throws { BusinessError } 16000073 - The app clone index is invalid. [since 14]
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
   * 请求在指定的获焦应用上拉起对应类型的UIExtensionAbility。其中，获焦应用通过want.parameters中bundleName来指定，如果未指定获焦应用或指定的应用未获焦，则在系统界面上直接拉起
   * UIExtensionAbility；被拉起的UIExtensionAbility通过Want中bundleName、abilityName、moduleName字段共同确定，同时需要通过want.parameters中的
   * ability.want.params.uiExtensionType字段配置UIExtensionAbility的类型。仅支持在主线程调用。使用callback形式异步回调。
   * 
   * 在获焦应用上拉起UIExtensionAbility之前，必须确保该应用已完成页面初始化，否则将导致拉起失败。应用可通过监听页面加载状态来判断拉起UIExtensionAbility的时机。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } pickerWant - 拉起UIExtension的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当拉起UIExtension成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 11 - 11]
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 请求在指定的获焦应用上拉起对应类型的UIExtensionAbility。其中，获焦应用通过want.parameters中bundleName来指定，如果未指定获焦应用或指定的应用未获焦，则在系统界面上直接拉起
   * UIExtensionAbility；被拉起的UIExtensionAbility通过Want中bundleName、abilityName、moduleName字段共同确定，同时需要通过want.parameters中的
   * ability.want.params.uiExtensionType字段配置UIExtensionAbility的类型。仅支持在主线程调用。使用promise形式异步回调。
   * 
   * 在获焦应用上拉起UIExtensionAbility之前，必须确保该应用已完成页面初始化，否则将导致拉起失败。应用可通过监听页面加载状态来判断拉起UIExtensionAbility的时机。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } pickerWant - 拉起UIExtension的Want信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface. [since 11 - 11]
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * 请求指定的焦点应用程序启动对应类型的UIExtensionAbility
   * 指定用户。焦点应用由**want.parameters**中的**bundleName**指定。如果**bundleName**
   * > **说明**
   * > >
   * > 关于stage模型中组件的启动规则，请参见
   * > 【组件启动规则（阶段模型）】(docroot://application-models/component-startup-rules.md)。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } pickerWant - 需要用于启动UIExtensionAbility的信息
   * @param { int } accountId - 要请求的帐户
   *     <br>取值范围为全体整数。
   * @returns { Promise<void> } 不会返回任何值的Promise。
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
   * 打开原子化服务跳过loading框并预打开窗口，使用Promise异步回调。
   * 
   * 参数校验通过，拉起目标方时出现的错误需要通过异常机制捕获。
   *
   * @permission ohos.permission.PRE_START_ATOMIC_SERVICE
   * @param { string } bundleName - 打开原子化服务对应的包名。
   * @param { string } moduleName - 打开原子化服务对应的模块名。
   * @param { string } abilityName - 打开原子化服务对应的能力名。
   * @param { string } startTime - 打开原子化服务对应的开始时间，单位为毫秒级的时间戳。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16300007 - The target free-installation task does not exist.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  preStartMission(bundleName: string, moduleName: string, abilityName: string, startTime: string): Promise<void>;

  /**
   * 启动一个新的[UIServiceExtensionAbility]{@link ./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}
   * 。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - Indicates the want info to start.
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
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
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  startUIServiceExtensionAbility(want: Want): Promise<void>;

  /**
   * 通过应用ID，拉起原子化服务。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { string } appId - 应用的唯一标识，由云端统一分配。
   * @param { AtomicServiceOptions } [options] - 跳出式启动原子化服务所携带的参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  openAtomicService(appId: string, options?: AtomicServiceOptions): Promise<void>;

  /**
   * 同时启动多个UIAbility。使用Promise异步回调。
   * 
   * 开发者可以传入多个UIAbility对应的Want信息，这些UIAbility可以指向一个或多个应用。当所有的UIAbility都能启动成功时，系统会通过多个窗口同时展示这些UIAbility。根据窗口的处理，不同设备上可能会有不
   * 同的展示效果（包括窗口形态、数量和排版布局）。
   * 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Array<Want> } wantList - 需要被同时拉起的多个UIAbility的启动参数列表，最多支持传入4个Want。启动参数Want不支持隐式启动、跨用户启动、分布式、免安装和按需加载，不指明分身的
   *     情况下默认启动主应用。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
}

export default ServiceExtensionContext;