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
 * UIExtensionContext是[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}的上下文环境，继承自
 * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}，提供UIExtensionAbility的相关配置信息以及操作UIAbility的方法，如
 * 启动UIAbility等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
declare class UIExtensionContext extends ExtensionContext {
  /**
   * 启动一个UIAbility。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility时必要的Want，包含待启动UIAbility的名称等信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动UIAbility成功时，err为undefined，否则为错误对象。
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
   * 启动一个UIAbility。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility时必要的Want，包含待启动UIAbility的名称等信息。
   * @param { StartOptions } options - 启动UIAbility所携带的额外参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动UIAbility成功时，err为undefined，否则为错误对象。
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
   * 启动一个UIAbility。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility时必要的Want，包含待启动UIAbility的名称等信息。
   * @param { StartOptions } [options] - 启动UIAbility所携带的额外参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 通过App Linking或Deep Linking方式启动UIAbility。使用Promise异步回调。
   * 通过在link字段中传入标准格式的URL，基于隐式want匹配规则拉起目标UIAbility。目标方必须具备以下过滤器特征，才能处理App Linking链接：
   * 
   * - "actions"列表中包含"ohos.want.action.viewData"。
   * - "entities"列表中包含"entity.system.browsable"。
   * - "uris"列表中包含"scheme"为"https"且"domainVerify"为true的元素。
   * 如果希望获取被拉起方终止后的结果，可以设置callback参数，此参数的使用可参照
   * [startAbilityForResult]{@link UIExtensionContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   * 接口。
   * 传入的参数不合法时，如未设置必选参数或link字符串不是标准格式的URL，接口会直接抛出异常。参数校验通过，拉起目标方时出现的错误通过promise返回错误信息。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { string } link - 指示要打开的标准格式URL。
   * @param { OpenLinkOptions } [options] - 打开URL的选项参数。
   * @param { AsyncCallback<AbilityResult> } [callback] - 回调函数，包含返回给拉起方的信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 启动一个UIAbility，开发者可以通过回调函数接收被拉起的UIAbility退出时的返回结果。使用callback异步回调。UIAbility被启动后，有如下情况:
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死UIAbility会返回异常信息给调用方, 异常信息中resultCode为-1。
   * - 如果被启动的UIAbility模式是单实例模式, 不同应用多次调用该接口启动这个UIAbility，当这个UIAbility调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方, 其它调用方返回异常信息, 异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility时必要的Want，包含待启动UIAbility的名称等信息。
   * @param { AsyncCallback<AbilityResult> } callback - 回调函数，包含返回给拉起方的信息。
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
   * 启动一个UIAbility，开发者可以通过回调函数接收被拉起的UIAbility退出时的返回结果。使用callback异步回调。UIAbility被启动后，有如下情况:
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死UIAbility会返回异常信息给调用方，异常信息中resultCode为-1。
   * - 如果被启动的UIAbility模式是单实例模式, 不同应用多次调用该接口启动这个UIAbility，当这个UIAbility调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方，其它调用方返回异常信息, 异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility时必要的Want，包含待启动UIAbility的名称等信息。
   * @param { StartOptions } options - 启动UIAbility所携带的额外参数。
   * @param { AsyncCallback<AbilityResult> } callback - 回调函数，包含返回给拉起方的信息。
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
   * 启动一个UIAbility，开发者可以通过回调函数接收被拉起的UIAbility退出时的返回结果。使用Promise异步回调。UIAbility被启动后，有如下情况:
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死UIAbility会返回异常信息给调用方, 异常信息中resultCode为-1。
   * - 如果被启动的UIAbility模式是单实例模式, 不同应用多次调用该接口启动这个UIAbility，当这个UIAbility调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方, 其它调用方返回异常信息, 异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility时必要的Want，包含待启动UIAbility的名称等信息。
   * @param { StartOptions } [options] - 启动UIAbility所携带的额外参数。
   * @returns { Promise<AbilityResult> } Promise对象，返回被拉起的UIAbility退出时的返回结果。
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
   * 使用设置的caller信息启动一个Ability，caller信息由want携带，在系统服务层识别，Ability可以在onCreate生命周期的want参数中获取到caller信息。使用该接口启动一个Ability时，want的
   * caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。使用Promise异步回调。
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死Ability会返回异常信息给调用方，异常信息中resultCode为-1。
   * - 如果被启动的Ability模式是单实例模式，不同应用多次调用该接口启动这个Ability，当这个Ability调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方，其它调用方返回异常信息，异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<AbilityResult> } Promise对象，返回Ability结果对象。
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
   * 将当前UIExtensionAbility连接到一个
   * [ServiceExtensionAbility]{@link @ohos.app.ability.ServiceExtensionAbility:ServiceExtensionAbility#onConnect}，通过返回的远
   * 程代理对象与ServiceExtensionAbility进行通信，以使用ServiceExtensionAbility对外提供的能力。与此同时，该方法会将UIExtensionAbility的原始宿主Ability的Token传
   * 递给被连接的ServiceExtensionAbility，ServiceExtensionAbility可以在
   * [onCreate()]{@link @ohos.app.ability.ServiceExtensionAbility:ServiceExtensionAbility#onCreate}或
   * [onConnect()]{@link @ohos.app.ability.ServiceExtensionAbility:ServiceExtensionAbility#onConnect}方法中，通过Want参数的
   * [UI_EXTENSION_ROOT_TOKEN]{@link @ohos.app.ability.wantConstant:wantConstant.Params}获取该Token。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 连接ServiceExtensionAbility的Want信息，包括Ability名称、Bundle名称等。
   * @param { ConnectOptions } connect - ConnectOptions类型的回调函数，返回服务连接成功、连接失败、断开的信息。
   * @returns { long } 返回连接标识ID，客户端可以通过
   *     [disconnectServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-inner-application-uiExtensionContext.md#disconnectserviceextensionability)
   *     传入该连接标识ID来断开连接。
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
   * 将当前UIExtensionAbility连接到一个ServiceExtensionAbility，通过返回的proxy与ServiceExtensionAbility进行通信，以使用ServiceExtensionAbility
   * 对外提供的能力。
   * ServiceExtensionAbility是一类特殊的[ExtensionAbility](docroot://application-models/extensionability-overview.md)组件，这类组件由系
   * 统提供，通常用于提供指定场景后台服务能力，不支持开发者自定义。ServiceExtensionAbility可以被其他组件连接，并根据调用者的请求信息在后台处理相关事务。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 连接ServiceExtensionAbility的Want信息，包括Ability名称，Bundle名称等。
   * @param { ConnectOptions } options - ConnectOptions类型的回调函数，返回服务连接成功、连接失败、断开的信息。
   * @returns { long } 返回连接id，客户端可以通过
   *     [disconnectServiceExtensionAbility]{@link UIExtensionContext.disconnectServiceExtensionAbility(connection: long)}传入该
   *     连接id来断开连接。
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
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
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
   * 断开与ServiceExtensionAbility的连接，断开连接之后开发者需要将连接成功时返回的remote对象置空。使用callback异步回调。
   * ServiceExtensionAbility是一类特殊的[ExtensionAbility](docroot://application-models/extensionability-overview.md)组件，这类组件由系
   * 统提供，通常用于提供指定场景后台服务能力，不支持开发者自定义。ServiceExtensionAbility可以被其他组件连接，并根据调用者的请求信息在后台处理相关事务。
   *
   * @param { long } connection - 连接的ServiceExtensionAbility的标识Id，即connectServiceExtensionAbility返回的connectionId。
   * @param { AsyncCallback<void> } callback - 回调函数。当断开与ServiceExtensionAbility的连接成功，err为undefined，否则为错误对象。
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
   * 断开与ServiceExtensionAbility的连接，断开连接之后开发者需要将连接成功时返回的remote对象置空。使用Promise异步回调。
   * ServiceExtensionAbility是一类特殊的[ExtensionAbility](docroot://application-models/extensionability-overview.md)组件，这类组件由系
   * 统提供，通常用于提供指定场景后台服务能力，不支持开发者自定义。ServiceExtensionAbility可以被其他组件连接，并根据调用者的请求信息在后台处理相关事务。
   *
   * @param { long } connection - 连接的ServiceExtensionAbility的标识Id，即
   *     [connectServiceExtensionAbility]{@link UIExtensionContext#connectServiceExtensionAbility}返回的connectionId。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 用于应用通知系统UIExtensionAbility对应的窗口内容已绘制完成。系统会根据开发者调用的时机进行资源分配优化等，以优化应用启动及显示时间。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当打点成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  reportDrawnCompleted(callback: AsyncCallback<void>): void;

  /**
   * 销毁UIExtensionAbility自身，同时关闭对应的窗口界面。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。UIExtensionAbility停止成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * 销毁UIExtensionAbility自身，同时关闭对应的窗口界面。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;

  /**
   * 销毁UIExtensionAbility自身，同时关闭对应的窗口界面，并将结果返回给UIExtensionAbility的拉起方，拉起方通常为系统服务。使用callback异步回调。
   *
   * @param { AbilityResult } parameter - 返回给UIExtensionAbility拉起方的信息。
   * @param { AsyncCallback<void> } callback - 回调函数。UIExtensionAbility停止成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

  /**
   * 销毁UIExtensionAbility自身，同时关闭对应的窗口界面，并将结果返回给UIExtensionAbility的拉起方，拉起方通常为系统服务。使用Promise异步回调。
   *
   * @param { AbilityResult } parameter - 返回给UIExtensionAbility拉起方的信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * 打开一个独立窗口的原子化服务，并返回结果。使用Promise异步回调。
   * 分为以下几种情况：
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死原子化服务会返回异常信息给调用方，异常信息中resultCode为-1。
   * - 如果不同应用多次调用该接口启动同一个原子化服务，当这个原子化服务调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方, 其它调用方返回异常信息，异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { string } appId - 应用的唯一标识，由云端统一分配。
   * @param { AtomicServiceOptions } [options] - 启动原子化服务所携带的参数。
   * @returns { Promise<AbilityResult> } Promise对象。返回给拉起方的信息。
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
   * 启动一个UIServiceExtensionAbility。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIServiceExtensionAbility的Want。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 连接到一个UIServiceExtensionAbility。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 用于连接的Want信息。
   * @param { UIServiceExtensionConnectCallback } callback - 连接UIServiceExtensionAbility回调。
   * @returns { Promise<UIServiceProxy> } Promise对象，连接UIServiceExtensionAbility成功时，返回
   *     [UIServiceProxy]{@link ./application/UIServiceProxy:UIServiceProxy}对象，借助该对象可以往UIServiceExtensionAbility发送数据。
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
   * 断开UIServiceExtensionAbility。使用Promise异步回调。
   *
   * @param { UIServiceProxy } proxy -    *     [connectUIServiceExtensionAbility]{@link UIExtensionContext#connectUIServiceExtensionAbility}返回的Proxy。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 启动一个ServiceExtensionAbility。使用Promise异步回调。
   *
   * @param { Want } want - 启动ServiceExtensionAbility的Want信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 启动一个指定系统账号下的ServiceExtensionAbility。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * >
   * > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动ServiceExtensionAbility的Want信息。
   * @param { int } accountId - 系统账号的ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 是否允许[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}拉起的页面被使用方的页面覆盖。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * >
   * > 该接口需要在窗口创建之前调用。建议在[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}的
   * > [onCreate]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility#onCreate}生命周期内调用。
   *
   * @param { boolean } isForbidden - 是否允许[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}
   *     拉起的页面被使用方的页面覆盖。true表示不允许，false表示允许。
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
   * 设置UIExtensionAbility的深浅色模式。调用该接口前需要保证该UIExtensionContext对应页面已完成加载。仅支持主线程调用。
   * 
   * > **说明**：
   * >
   * > - 调用该接口后会创建新的资源管理器对象，如果此前有缓存资源管理器，需要进行更新。
   * >
   * > - 深浅色模式生效的优先级：UIExtensionAbility的深浅色模式 > 应用的深浅色模式（
   * > [ApplicationContext.setColorMode]{@link ./application/ApplicationContext:ApplicationContext.setColorMode}）> 系统的深浅色模
   * > 式。
   *
   * @param { ConfigurationConstant.ColorMode } colorMode - 设置颜色模式，包括：<br> - COLOR_MODE_DARK：深色模式 <br> - COLOR_MODE_LIGHT：浅色模
   *     式 <br> - COLOR_MODE_NOT_SET：不设置（跟随系统或应用）
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  setColorMode(colorMode: ConfigurationConstant.ColorMode): void;

  /**
   * 同时启动多个UIAbility。使用Promise异步回调。
   * 开发者可以传入多个UIAbility对应的Want信息，这些UIAbility可以指向一个或多个应用。当所有的UIAbility都能启动成功时，系统会通过多个窗口同时展示这些UIAbility。根据窗口的处理，不同设备上可能会有不
   * 同的展示效果（包括窗口形态、数量和排版布局）。
   * 该接口仅在Phone和Tablet设备中可正常调用，在其他设备中返回801错误码。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Array<Want> } wantList - 需要被同时拉起的多个UIAbility的启动参数列表，最多支持传入4个Want。启动参数Want不支持隐式启动、跨用户启动、分布式、免安装和按需加载，不指明分身的情况下默认
   *     启动主应用。
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

  /**
   * 当第一个UIAbility实例被创建后，启动第二个UIAbility，并以分屏模式进行显示。使用Promise异步回调。
   * 该接口仅在Phone设备中可正常调用，在其他设备中返回801错误码。
   * 
   * > **说明：**
   * >
   * > 如果第一个UIAbility实例被销毁，那么第二个UIAbility将以全屏模式启动。
   * >
   * > 第二个UIAbility仅支持[显示启动](docroot://application-models/explicit-implicit-want-mappings.md#显式want匹配原理)。
   * >
   * > 如果调用方位于后台，还需要具备ohos.permission.START_ABILITIES_FROM_BACKGROUND (该权限仅系统应用可申请)。
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @permission ohos.permission.START_ABILITIES_FROM_BACKGROUND
   * @param { int } primaryWindowId - 启动第一个UIAbility的主窗的窗口ID。窗口ID是
   *     [WindowProperties](docroot://reference/apis-arkui/arkts-apis-window-i.md#windowproperties)的属性，WindowProperties可通过
   *     [getWindowProperties()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9)获取。
   * @param { Want } secondaryWant - 启动第二个UIAbility所需的Want信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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