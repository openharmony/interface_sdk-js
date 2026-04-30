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
 * UIAbilityContext是需要保存状态的[UIAbility]{@link ./../@ohos.app.ability.UIAbility}所对应的context，继承自[Context]{@link ./../app/context}，提供
 * UIAbility的相关配置信息以及操作UIAbility和ServiceExtensionAbility的方法，如启动UIAbility，停止当前UIAbilityContext所属的UIAbility，启动、停止、连接、断开连接
 * ServiceExtensionAbility等。
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
   * UIAbility的相关信息。
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
   * 当前UIAbility所属HAP的信息。
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
   * 应用运行时的环境变量，如语言、颜色模式等。
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
   * 当前WindowStage对象。仅支持在主线程调用。
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
   * 启动一个UIAbility。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility的必要信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0，message为空字符串；否则err会返回对应的错误码和错误信息。
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
   * 启动一个UIAbility。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility的必要信息。
   * @param { StartOptions } options - 启动UIAbility所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0，message为空字符串；否则err会返回对应的错误码和错误信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 17]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 17]
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
   * 启动一个UIAbility。使用Promise异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility的必要信息。
   * @param { StartOptions } [options] - 启动UIAbility所携带的参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * @crossplatform [since 9 - 13]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want, options?: StartOptions): Promise<void>;

  /**
   * 通过<!--RP2-->[App Linking](docroot://application-models/app-linking-startup.md)<!--RP2End-->或
   * [Deep Linking](docroot://application-models/deep-linking-startup.md)方式启动UIAbility，并通过回调函数接收被拉起的UIAbility退出时的返回结果。使用
   * Promise异步回调。仅支持在主线程调用。
   * 通过在link字段中传入标准格式的URL，基于隐式want匹配规则拉起目标UIAbility。目标方必须同时具备以下过滤器特征，才能处理App Linking链接：
   *
   * - "actions"列表中包含"ohos.want.action.viewData"。
   * - "entities"列表中包含"entity.system.browsable"。
   * - "uris"列表中包含"scheme"为"https"且"domainVerify"为true的元素。
   * 如果希望获取被拉起方终止后的结果，可以设置callback参数，此参数的使用可参照
   * [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
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
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 使用设置的caller信息启动一个UIAbility，caller信息由want携带，在系统服务层识别，UIAbility可以在onCreate生命周期的want参数中获取到caller信息。使用该接口启动一个UIAbility时
   * ，want的caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 使用设置的caller信息启动一个UIAbility，caller信息由want携带，在系统服务层识别，UIAbility可以在onCreate生命周期的want参数中获取到caller信息。使用该接口启动一个UIAbility时
   * ，want的caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { StartOptions } options - 启动UIAbility所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 使用设置的caller信息启动一个UIAbility，caller信息由want携带，在系统服务层识别，UIAbility可以在onCreate生命周期的want参数中获取到caller信息。使用该接口启动一个UIAbility时
   * ，want的caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。使用Promise异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { StartOptions } options - 启动UIAbility所携带的参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 该接口用于获取[Caller]{@link ./../@ohos.app.ability.UIAbility:Caller}通信对象，以便于与
   * [Callee]{@link ./../@ohos.app.ability.UIAbility:Callee}进行通信。如果指定UIAbility未启动，则会将UIAbility启动至前台或后台。使用Promise异步回调。仅支持在主线程调
   * 用。
   * 该接口不支持拉起启动模式为[specified模式](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility。
   *
   * > **说明：**
   * >
   * > - 跨设备场景下，调用方与目标方必须为同一应用。
   * >
   * > - 同设备场景下，要求调用方与目标方为不同应用，且调用方具备ohos.permission.ABILITY_BACKGROUND_COMMUNICATION权限（该权限仅系统应用可申请）。
   * >
   * > - 此外如果应用需要在后台调用该接口，需要具备ohos.permission.START_ABILITIES_FROM_BACKGROUND（该权限仅系统应用可申请）。更多的组件启动规则详见
   * > [组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > **说明：**
   * >
   * > - API version 10及之前版本，需申请ohos.permission.ABILITY_BACKGROUND_COMMUNICATION（该权限仅系统应用可用）。
   * >
   * > - API version 11开始，仅需申请ohos.permission.DISTRIBUTED_DATASYNC（该权限仅当执行应用间建链操作时由软总线实施权限校验，在应用拉起阶段不做校验）。
   *
   * @permission ohos.permission.ABILITY_BACKGROUND_COMMUNICATION [since 9 - 13]
   * @permission ohos.permission.DISTRIBUTED_DATASYNC [since 11]
   * @param { Want } want - 传入需要启动的UIAbility信息，包含abilityName、moduleName、bundleName、deviceId、parameters（可选）。将parameters中的'
   *     ohos.aafwk.param.callAbilityToForeground'配置为true可将UIAbility拉起到前台；否则表示将UIAbility拉起到后台。
   * @returns { Promise<Caller> } Promise对象，获取要通讯的caller对象。
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
   * 根据accountId对指定的UIAbility进行call调用，并且可以使用返回的Caller通信接口与被调用方进行通信。仅支持在主线程调用。使用Promise异步回调。
   * 该接口不支持拉起启动模式为[specified模式](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility。
   * 使用规则：
   *
   * - 跨用户场景下，Call调用目标UIAbility时，调用方应用需同时申请`ohos.permission.ABILITY_BACKGROUND_COMMUNICATION`与`
   * ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS`权限。
   * - 调用方应用位于后台时，使用该接口启动UIAbility需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。
   * - 跨应用场景下，目标UIAbility的exported属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限。
   * - 同设备与跨设备场景下，该接口的使用规则存在差异，详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @permission ohos.permission.ABILITY_BACKGROUND_COMMUNICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 传入需要启动的UIAbility的信息，包含abilityName、moduleName、bundleName、deviceId(可选)、parameters(可选)，其中deviceId缺省或
   *     为空表示启动本地UIAbility，parameters缺省或为空表示后台启动UIAbility。
   * @param { int } accountId - 系统账号的账号ID，-1表示当前活动用户，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @returns { Promise<Caller> } Promise对象，返回要通讯的caller对象。
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
   * 根据want和accountId启动UIAbility。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 根据want、accountId及startOptions启动UIAbility。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { StartOptions } options - 启动UIAbility所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
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
   * 根据want、accountId和startOptions启动UIAbility。使用Promise异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { StartOptions } [options] - 启动UIAbility所携带的参数。
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
   * 启动一个UIAbility，并通过回调函数接收被拉起的UIAbility退出时的返回结果。使用callback异步回调。仅支持在主线程调用。
   * UIAbility被启动后，有如下情况：
   *
   * - 正常情况下可以通过调用
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口销毁自身，并将结果返回给调用方。
   * - 异常情况下比如杀死UIAbility会将异常结果返回给调用方，异常结果中resultCode为-1。
   * - 如果被启动的UIAbility是[单实例模式](docroot://application-models/uiability-launch-type.md#singleton启动模式)，且这个UIAbility被不同应用多次调
   * 用该接口启动，当这个UIAbility调用
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口销毁自身时，只将正常结果返回给最后一个调用方，其它调用方返回异常结果，异常结果中resultCode为-1。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动Ability的必要信息。
   * @param { AsyncCallback<AbilityResult> } callback - 回调函数，当接口调用成功，err中code为0，data为被拉起方退出时的结果码和数据；否则err会返回对应的错误码和错误信息。
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
   * 启动一个UIAbility，并通过回调函数接收被拉起的UIAbility退出时的返回结果。使用callback异步回调。仅支持在主线程调用。
   * UIAbility被启动后，有如下情况：
   *
   * - 正常情况下可以通过调用
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口销毁自身，并将结果返回给调用方。
   * - 异常情况下比如杀死UIAbility会将异常结果返回给调用方，异常结果中resultCode为-1。
   * - 如果被启动的UIAbility是[单实例模式](docroot://application-models/uiability-launch-type.md#singleton启动模式)，且这个UIAbility被不同应用多次调
   * 用该接口启动，当这个UIAbility调用
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口销毁自身时，只将正常结果返回给最后一个调用方，其它调用方返回异常结果，异常结果中resultCode为-1。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动Ability的必要信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<AbilityResult> } callback - 回调函数，当接口调用成功，err中code为0，data为被拉起方退出时的结果码和数据；否则err会返回对应的错误码和错误信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type. [since 9 - 17]
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation and prepare continuation flag is
   *     forbidden. [since 9 - 17]
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
   * 启动一个UIAbility，并通过回调函数接收被拉起的UIAbility退出时的返回结果。使用Promise异步回调。仅支持在主线程调用。
   * UIAbility被启动后，有如下情况：
   *
   * - 正常情况下可以通过调用
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口销毁自身，并将结果返回给调用方。
   * - 异常情况下比如杀死UIAbility会将异常结果返回给调用方，异常结果中resultCode为-1。
   * - 如果被启动的UIAbility是[单实例模式](docroot://application-models/uiability-launch-type.md#singleton启动模式)，且这个UIAbility被不同应用多次调
   * 用该接口启动，当这个UIAbility调用
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口销毁自身时，只将正常结果返回给最后一个调用方，其它调用方返回异常结果，异常结果中resultCode为-1。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动Ability的必要信息。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<AbilityResult> } Promise对象，包含返回给拉起方的信息。
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
   * 启动一个UIAbility并在该UIAbility销毁时返回执行结果。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { AsyncCallback<AbilityResult> } callback - 回调函数，当接口调用成功，err中code为0，data为被拉起的UIAbility销毁时的结果码和数据；否则err会返回对应的错误码和错
   *     误信息。
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
   * 启动一个UIAbility并在该UIAbility销毁时返回执行结果。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { StartOptions } options - 启动UIAbility所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
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
  startAbilityForResultWithAccount(
    want: Want,
    accountId: int,
    options: StartOptions,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 启动一个UIAbility并在该UIAbility销毁时返回执行结果。使用Promise异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { StartOptions } [options] - 启动UIAbility所携带的参数。
   * @returns { Promise<AbilityResult> } Promise对象，包含AbilityResult参数。
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
   * 启动一个新的ServiceExtensionAbility。使用callback异步回调。
   *
   * @param { Want } want - 启动ServiceExtensionAbility的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 启动一个新的ServiceExtensionAbility。使用Promise异步回调。
   *
   * @param { Want } want - 启动ServiceExtensionAbility的Want信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 启动一个新的ServiceExtensionAbility。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动ServiceExtensionAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 启动一个新的ServiceExtensionAbility。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动ServiceExtensionAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 停止指定的ServiceExtensionAbility后台服务。使用callback异步回调。
   *
   * @param { Want } want - 停止ServiceExtensionAbility的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当停止ServiceExtensionAbility的接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 停止同一应用程序内的服务。使用Promise异步回调。
   *
   * @param { Want } want - 停止ServiceExtensionAbility的Want信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 停止同一应用程序内指定账户的服务。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 停止ServiceExtensionAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { AsyncCallback<void> } callback - 回调函数，当停止ServiceExtensionAbility的接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 停止同一应用程序内指定账户的服务。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 停止ServiceExtensionAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 销毁UIAbility自身。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 调用该接口后，任务中心的任务默认不会清理，如需清理，需要配置
   * > [removeMissionAfterTerminate](docroot://quick-start/module-configuration-file.md#abilities标签)为true。
   *
   * @param { AsyncCallback<void> } callback - 回调函数，当销毁UIAbility自身成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 销毁UIAbility自身。使用Promise异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 调用该接口后，任务中心的任务默认不会清理，如需清理，需要配置
   * > [removeMissionAfterTerminate](docroot://quick-start/module-configuration-file.md#abilities标签)为true。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 销毁UIAbility自身。使用callback异步回调。仅支持在主线程调用。
   * 仅当UIAbility通过
   * [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   * 接口拉起时，调用terminateSelfWithResult接口销毁UIAbility，才会返回结果给调用方。
   *
   * > **说明：**
   * >
   * > 调用该接口后，任务中心的任务默认不会清理，如需清理，需要配置
   * > [removeMissionAfterTerminate](docroot://quick-start/module-configuration-file.md#abilities标签)为true。
   *
   * @param { AbilityResult } parameter - 返回给startAbilityForResult?接口调用方的相关信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当销毁UIAbility自身成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 销毁UIAbility自身。使用Promise异步回调。仅支持在主线程调用。
   * 仅当UIAbility通过
   * [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   * 接口拉起时，调用terminateSelfWithResult接口销毁UIAbility，才会返回结果给调用方。
   *
   * > **说明：**
   * >
   * > 调用该接口后，任务中心的任务默认不会清理，如需清理，需要配置
   * > [removeMissionAfterTerminate](docroot://quick-start/module-configuration-file.md#abilities标签)为true。
   *
   * @param { AbilityResult } parameter - 返回给startAbilityForResult?接口调用方的信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 当通过
   * [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   * 或[openLink]{@link UIAbilityContext.openLink}拉起目标方UIAbility，且需要目标方返回结果时，目标方可以通过该接口将结果返回并拉起调用方。与
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 不同的是，本接口在返回时不会销毁当前UIAbility。使用Promise异步回调。
   *
   * @param { AbilityResult } abilityResult - 包含目标方返回给拉起方的结果。
   * @param { string } requestCode - 通过
   *     [startAbilityForResult]{@link UIAbilityContext.startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
   *     或[openLink]{@link UIAbilityContext.openLink}拉起目标方Ability且需要目标方返回结果时，系统生成的用于标识本次调用的requestCode。该值可以通过want中的
   *     [CALLER_REQUEST_CODE]{@link ./../@ohos.app.ability.wantConstant:wantConstant}字段获取。
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 将当前UIAbility连接到一个[ServiceExtensionAbility](docroot://application-models/extensionability-overview.md)，通过返回的proxy与
   * ServiceExtensionAbility进行通信，以使用ServiceExtensionAbility对外提供的能力。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 连接ServiceExtensionAbility的Want信息。
   * @param { ConnectOptions } options - 回调对象，返回服务连接成功、连接失败、断开的信息。
   * @returns { long } 返回连接id，调用方可以通过
   *     [disconnectServiceExtensionAbility]{@link UIAbilityContext.disconnectServiceExtensionAbility(connection: long)}传入该连接
   *     id来断开连接。
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
   * 将当前UIAbility连接到一个指定account的ServiceExtensionAbility。仅支持在主线程调用。
   * 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回16000006错误码。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 当accountId为当前用户时，无需进行权限校验。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - 启动UIAbility的Want信息。
   * @param { int } accountId - 系统账号的账号ID，可以通过
   *     [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     接口获取。
   * @param { ConnectOptions } options - 与ServiceExtensionAbility建立连接后回调函数的实例。
   * @returns { long } 返回Ability连接的结果code。
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
   * 断开与[ServiceExtensionAbility](docroot://application-models/extensionability-overview.md)的连接，断开连接之后开发者需要将连接成功时返回的
   * remote对象置空。使用callback异步回调。仅支持在主线程调用。
   *
   * @param { long } connection - 连接的ServiceExtensionAbility的标识id，即
   *     [connectServiceExtensionAbility]{@link UIAbilityContext.connectServiceExtensionAbility}返回的connectionId。
   * @param { AsyncCallback<void> } callback - 回调函数。当断开与ServiceExtensionAbility的连接成功，err为undefined；否则为错误对象。
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
   * 断开与[ServiceExtensionAbility](docroot://application-models/extensionability-overview.md)的连接，断开连接之后开发者需要将连接成功时返回的
   * remote对象置空。使用Promise异步回调。仅支持在主线程调用。
   *
   * @param { long } connection - 连接的ServiceExtensionAbility的标识id，即
   *     [connectServiceExtensionAbility]{@link UIAbilityContext.connectServiceExtensionAbility}返回的connectionId。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 设置UIAbility在多任务界面中显示的名称。使用callback异步回调。
   *
   * @param { string } label - 任务的名称。
   * @param { AsyncCallback<void> } callback - 回调函数，当设置UIAbility在多任务界面中显示的名称成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 设置UIAbility在多任务界面中显示的名称。使用Promise异步回调。
   *
   * @param { string } label - 任务的名称。
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 设置当前UIAbility在任务中显示的图标，图标大小最大为600M。使用callback异步回调。
   *
   * @param { image.PixelMap } icon - 在最近的任务中显示的UIAbility图标。
   * @param { AsyncCallback<void> } callback - 回调函数，当设置当前UIAbility在任务中显示的图标成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 设置当前UIAbility在任务中显示的图标, 图标大小最大为600M。使用Promise异步回调。
   *
   * @param { image.PixelMap } icon - 在最近的任务中显示的UIAbility图标。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 设置UIAbility任务的流转状态。使用callback异步回调。
   *
   * @param { AbilityConstant.ContinueState } state - 流转状态。
   * @param { AsyncCallback<void> } callback - 回调函数，当设置UIAbility任务的流转状态成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 设置UIAbility任务的流转状态。使用Promise异步回调。
   *
   * @param { AbilityConstant.ContinueState } state - 流转状态。
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 恢复UIAbility中的WindowStage数据。仅支持在主线程调用。
   *
   * @param { LocalStorage } localStorage - 用于恢复window stage的存储数据。
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
   * 查询UIAbility是否处于消亡中状态。
   *
   * @returns { boolean } 表示是否处于消亡中状态。true表示处于消亡中状态，false表示不处于消亡中状态。
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  isTerminating(): boolean;

  /**
   * 启动一个指定的UIAbility，如果这个UIAbility有多个实例，将拉起最近启动的那个实例。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > - 跨设备场景下，调用方与目标方必须为同一应用，且该应用需要具备ohos.permission.DISTRIBUTED_DATASYNC权限，才能启动成功。
   * >
   * > - 跨应用场景下，目标UIAbility的visible属性若配置为false，调用方应用需申请ohos.permission.START_INVISIBLE_ABILITY权限。
   * >
   * > - 如果指定的UIAbility有多个实例，调用方应用需申请ohos.permission.START_RECENT_ABILITY权限（该权限仅系统应用可申请），才能拉起最近启动的那个实例。
   * >
   * > - 如果调用方位于后台，还需要具备ohos.permission.START_ABILITIES_FROM_BACKGROUND（该权限仅系统应用可申请）。
   * > 更多的组件启动规则详见[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 需要启动UIAbility的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 启动一个指定的UIAbility。如果这个UIAbility有多个实例，将拉起最近启动的那个实例。当开发者需要携带启动参数时可以选择此API。使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > - 跨设备场景下，调用方与目标方必须为同一应用，且该应用需要具备ohos.permission.DISTRIBUTED_DATASYNC权限，才能启动成功。
   * >
   * > - 跨应用场景下，目标UIAbility的visible属性若配置为false，调用方应用需申请ohos.permission.START_INVISIBLE_ABILITY权限。
   * >
   * > - 如果指定的UIAbility有多个实例，调用方应用需申请ohos.permission.START_RECENT_ABILITY权限（该权限仅系统应用可申请），才能拉起最近启动的那个实例。
   * >
   * > - 如果调用方位于后台，还需要具备ohos.permission.START_ABILITIES_FROM_BACKGROUND（该权限仅系统应用可申请）。
   * > 更多的组件启动规则详见[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 需要启动UIAbility的Want信息。
   * @param { StartOptions } options - 启动UIAbility所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 启动一个指定的UIAbility。如果这个UIAbility有多个实例，将拉起最近启动的那个实例。使用Promise异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > - 跨设备场景下，调用方与目标方必须为同一应用，且该应用需要具备ohos.permission.DISTRIBUTED_DATASYNC权限，才能启动成功。
   * >
   * > - 跨应用场景下，目标UIAbility的visible属性若配置为false，调用方应用需申请ohos.permission.START_INVISIBLE_ABILITY权限。
   * >
   * > - 如果指定的UIAbility有多个实例，调用方应用需申请ohos.permission.START_RECENT_ABILITY权限（该权限仅系统应用可申请），才能拉起最近启动的那个实例。
   * >
   * > - 如果调用方位于后台，还需要具备ohos.permission.START_ABILITIES_FROM_BACKGROUND（该权限仅系统应用可申请）。
   * > 更多的组件启动规则详见[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 需要启动UIAbility的Want信息。
   * @param { StartOptions } [options] - 启动UIAbility所携带的参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 启动一个支持模态弹框的ServiceExtensionAbility。ServiceExtensionAbility被启动后，应用弹出模态弹框，通过调用
   * [setRequestResult]{@link ./../@ohos.app.ability.dialogRequest:dialogRequest.RequestCallback.setRequestResult}接口返回结果给调用者。
   * 使用callback异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动ServiceExtensionAbility的Want信息。
   * @param { AsyncCallback<dialogRequest.RequestResult> } result - 回调函数，当启动一个支持模态弹框的ServiceExtensionAbility成功，err中code为0，
   *     data为模态弹框请求结果；否则err会返回对应的错误码和错误信息。
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
   * 启动一个支持模态弹框的ServiceExtensionAbility。ServiceExtensionAbility被启动后，应用弹出模态弹框，通过调用
   * [setRequestResult]{@link ./../@ohos.app.ability.dialogRequest:dialogRequest.RequestCallback.setRequestResult}接口返回结果给调用者。
   * 使用Promise异步回调。仅支持在主线程调用。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动ServiceExtensionAbility的Want信息。
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
   * 用于通知系统UIAbility对应的窗口内容已经绘制完成。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数，当通知系统UIAbility对应的窗口内容已经绘制完成的操作成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 通过type隐式启动[UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。使用callback异步回调。仅支持在主线
   * 程调用，仅支持处于前台的应用调用。
   *
   * @param { string } type - 启动的UIExtensionAbility类型，取值详见
   *     [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。
   * @param { Record<string, Object> } wantParam - 表示扩展参数。
   * @param { AbilityStartCallback } abilityStartCallback - 回调函数，返回启动失败后的详细错误信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为undefined；否则为错误对象。
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
   * 通过type隐式启动[UIExtensionAbility]{@link
   * ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。使用callback异步回调。仅支持在主线
   * 程调用，仅支持处于前台的应用调用。
   *
   * @param { string } type - 启动的UIExtensionAbility类型，取值详见
   *     [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。
   * @param { Record<string, RecordData> } wantParam - 表示扩展参数。
   * @param { AbilityStartCallback } abilityStartCallback - 回调函数，返回启动失败后的详细错误信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为undefined；否则为错误对象。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>): void;

  /**
   * 通过type隐式启动[UIExtensionAbility]{@link ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。使用Promise异步回调。仅支持在主线程
   * 调用，仅支持处于前台的应用调用。
   *
   * @param { string } type - 启动的UIExtensionAbility类型，取值详见
   *     [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。
   * @param { Record<string, Object> } wantParam - 表示扩展参数。
   * @param { AbilityStartCallback } abilityStartCallback - 回调函数，返回启动失败后的详细错误信息。
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 通过type隐式启动[UIExtensionAbility]{@link
   * ./../@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}。使用Promise异步回调。仅支持在主线程
   * 调用，仅支持处于前台的应用调用。
   *
   * @param { string } type - 启动的UIExtensionAbility类型，取值详见
   *     [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。
   * @param { Record<string, RecordData> } wantParam - 表示扩展参数。
   * @param { AbilityStartCallback } abilityStartCallback - 回调函数，返回启动失败后的详细错误信息。
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback): Promise<void>;

  /**
   * 请求在指定的前台应用上拉起对应类型的UIExtensionAbility。使用callback异步回调。仅支持在主线程调用。
   * 其中，前台应用通过want.parameters中bundleName来指定，如果未指定前台应用、bundleName指定的应用未在前台或指定的前台应用的bundleName不正确，则在系统界面上直接拉起
   * UIExtensionAbility；被拉起的UIExtensionAbility通过want中bundleName、abilityName、moduleName字段共同确定，同时需要通过want.parameters中的
   * ability.want.params.uiExtensionType字段配置UIExtensionAbility的类型。
   * 在前台应用上拉起UIExtensionAbility之前，必须确保该应用已完成页面初始化，否则将导致拉起失败、并出现"uiContent is nullptr"的报错信息。应用可通过监听页面加载状态来判断拉起
   * UIExtensionAbility的时机，页面初始化成功后会出现关键日志信息"UIContentImpl: focus again"。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } pickerWant - 拉起UIExtension的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当拉起UIExtension成功，err中code为0；否则err会返回对应的错误码和错误信息。
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
   * 请求在指定的前台应用上拉起对应类型的UIExtensionAbility。使用Promise异步回调。仅支持在主线程调用。
   * 其中，前台应用通过want.parameters中bundleName来指定，如果未指定前台应用、bundleName指定的应用未在前台或指定的前台应用的bundleName不正确，则在系统界面上直接拉起
   * UIExtensionAbility；被拉起的UIExtensionAbility通过want中bundleName、abilityName、moduleName字段共同确定，同时需要通过want.parameters中的
   * ability.want.params.uiExtensionType字段配置UIExtensionAbility的类型。
   * 在前台应用上拉起UIExtensionAbility之前，必须确保该应用已完成页面初始化，否则将导致拉起失败、并出现"uiContent is nullptr"的报错信息。应用可通过监听页面加载状态来判断拉起
   * UIExtensionAbility的时机，页面初始化成功后会出现关键日志信息"UIContentImpl: focus again"。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } pickerWant - 拉起UIExtension的Want信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 请求指定的前台应用启动对应类型的UIExtensionAbility。
   * 指定用户。该接口使用promise返回结果。它只能在主线程上调用。
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
   * 启动一个独立窗口的原子化服务。使用Promise异步回调。仅支持在主线程调用。
   * 原子化服务被启动后，有如下情况：
   *
   * - 正常情况下原子化服务可以通过
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口销毁自身，并且返回结果给调用方。
   * - 异常情况下比如杀死原子化服务会返回异常结果给调用方，异常结果的resultCode为-1。
   * - 如果不同应用多次调用该接口启动同一个原子化服务，当这个原子化服务调用
   * [terminateSelfWithResult]{@link UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口销毁自身时，只将正常结果返回给最后一个调用方, 其它调用方返回异常结果，异常结果中resultCode为-1。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { string } appId - 应用的唯一标识，由云端统一分配。
   * @param { AtomicServiceOptions } [options] - 启动原子化服务所携带的参数。
   * @returns { Promise<AbilityResult> } Promise对象，包含返回给拉起方的信息。
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
   * 将处于前台的UIAbility移动到后台。使用Promise异步回调。仅支持在主线程调用。<br/><!--RP1--><!--RP1End-->
   * 从API version 12开始，该接口仅在Phone、Wearable和TV设备中可正常调用，在其他设备上返回16000061错误码。
   * 从API version 13开始，该接口仅在Phone、Tablet、Wearable和TV设备中可正常调用，在其他设备上返回16000061错误码。
   *
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 显示当前UIAbility。使用Promise异步回调。仅支持在主线程调用。
   * 调用此接口前要求确保应用已添加至状态栏。
   * 该接口仅在PC/2in1设备中、或处于[自由多窗模式](docroot://windowmanager/window-terminology.md#自由多窗模式)的Tablet设备中可正常调用，在其他设备中返回801错误码。
   *
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 隐藏当前UIAbility。使用Promise异步回调。仅支持在主线程调用。
   * 调用此接口前要求确保应用已添加至状态栏。
   * 该接口仅在PC/2in1设备中、或处于[自由多窗模式](docroot://windowmanager/window-terminology.md#自由多窗模式)的Tablet设备中可正常调用，在其他设备中返回801错误码。
   *
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 设置UIAbility是否启用备份恢复。
   *
   * @param { boolean } enabled - 表示是否启用恢复。true表示启用，false表示不启用。
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
   * 启动一个UIServiceExtensionAbility。使用Promise异步回调。
   * 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 启动UIServiceExtensionAbility的必要信息。
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 连接一个UIServiceExtensionAbility。使用Promise异步回调。
   * 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 连接UIServiceExtensionAbility的必要信息。
   * @param { UIServiceExtensionConnectCallback } callback - 连接UIServiceExtensionAbility回调。
   * @returns { Promise<UIServiceProxy> } Promise对象，包含connectUIServiceExtensionAbility执行后返回的
   *     [UIServiceProxy]{@link UIServiceProxy:UIServiceProxy}对象。
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
   * 断开与UIServiceExtensionAbility的连接。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   *
   * @param { UIServiceProxy } proxy -    *     [connectUIServiceExtensionAbility]{@link UIAbilityContext.connectUIServiceExtensionAbility}执行返回的Proxy。
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 设置当前UIAbility实例的图标和标签信息。图标与标签信息可在任务中心和快捷栏的界面中显示。使用Promise异步回调。
   * 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * @permission ohos.permission.SET_ABILITY_INSTANCE_INFO
   * @param { string } label - 新的图标标签。标签长度不超过1024字节，且不可为空字符串。
   * @param { image.PixelMap } icon - 新的图标。建议图标大小为512px*512px。
   * @returns { Promise<void> } Promise对象，包含接口执行结果。
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
   * 设置UIAbility的深浅色模式。调用该接口前需要保证该UIAbility对应页面已完成加载。仅支持主线程调用。
   *
   * > **说明**：
   * >
   * > - 调用该接口前，需要确保窗口已完成创建、且UIAbility对应的页面已完成加载，即在
   * > [onWindowStageCreate()]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate}生命周期中通过
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法加载页面之后调用。
   * >
   * > - 调用该接口后会创建新的资源管理器对象，如果此前有缓存资源管理器，需要进行更新。
   * >
   * > - 深浅色模式生效的优先级：UIAbility的深浅色模式 > 应用的深浅色模式（
   * > [ApplicationContext.setColorMode]{@link ./ApplicationContext:ApplicationContext.setColorMode}）> 系统的深浅色模
   * > 式。
   *
   * @param { ConfigurationConstant.ColorMode } colorMode - 设置颜色模式，包括: <br> - COLOR_MODE_DARK：深色模式 <br> - COLOR_MODE_LIGHT：浅色
   *     模式 <br> - COLOR_MODE_NOT_SET：不设置（跟随系统或应用）
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  setColorMode(colorMode: ConfigurationConstant.ColorMode): void;

  /**
   * 启动
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * 实例。使用Promise异步回调。
   * 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * > **说明：**
   * >
   * > 该接口的调用方必须为
   * > [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * > 所属应用或者在AppServiceExtensionAbility支持的应用清单（即
   * > [extensionAbilities标签](docroot://quick-start/module-configuration-file.md#extensionabilities标签)的
   * > appIdentifierAllowList属性）中的应用。
   *
   * @param { Want } want - 启动
   *     [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   *     的Want信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 停止
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * 实例。使用Promise异步回调。
   * 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * > **说明：**
   * >
   * > 该接口的调用方必须为
   * > [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * > 所属应用或者在AppServiceExtensionAbility支持的应用清单（即
   * > [extensionAbilities标签](docroot://quick-start/module-configuration-file.md#extensionabilities标签)的
   * > appIdentifierAllowList属性）中的应用。
   *
   * @param { Want } want - 停止
   *     [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   *     的Want信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 将当前UIAbility连接到
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * 。通过返回的proxy与AppServiceExtensionAbility进行通信，以使用AppServiceExtensionAbility对外提供的能力。仅支持在主线程调用。
   * 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * > **说明：**
   * >
   * > 如果
   * > [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * > 实例未启动，该接口的调用方必须为AppServiceExtensionAbility所属应用或者在AppServiceExtensionAbility支持的应用清单（即
   * > [extensionAbilities标签](docroot://quick-start/module-configuration-file.md#extensionabilities标签)的
   * > appIdentifierAllowList属性）中的应用。
   *
   * @param { Want } want - 连接
   *     [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   *     的Want信息。
   * @param { ConnectOptions } callback - ConnectOptions类型的回调函数，返回服务连接成功、连接失败、断开的信息。
   * @returns { long } 返回连接id，
   *     [disconnectAppServiceExtensionAbility]{@link UIAbilityContext.disconnectAppServiceExtensionAbility}根据该连接id断开连接。
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
   * 断开与
   * [AppServiceExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-ability-appServiceExtensionAbility.md)
   * 的连接。仅支持在主线程调用。使用Promise异步回调。
   * 断开连接之后，为了防止使用可能失效的remote对象进行通信，建议将连接成功时返回的remote对象设置为null。
   * 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * @param { long } connection - 在
   *     [connectAppServiceExtensionAbility]{@link UIAbilityContext.connectAppServiceExtensionAbility}返回的连接id。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 在特定场景下拉起UIAbility时，如果不需要触发[onNewWant]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onNewWant}生命周期回调，可以通过该接口设置。仅支持在主线
   * 程调用。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 该接口通常用于[onCreate]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onCreate}生命周期回调中。入参取值建议包含所有的
   * > [Scenarios]{@link ./../@ohos.app.ability.contextConstant:contextConstant.Scenarios}枚举值。详见下方示例代码。
   *
   * @param { int } scenarios - 取值范围请参考[Scenarios]{@link ./../@ohos.app.ability.contextConstant:contextConstant.Scenarios}。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Connection to service failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  setOnNewWantSkipScenarios(scenarios: int): Promise<void>;

  /**
   * 在当前进程中启动应用程序自己的UIAbility。
   * 从API version 23开始，该接口仅在PC/2in1和Tablet设备中可正常调用，在其他设备中返回801错误码。
   * 从API version 22开始，该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * > **说明：**
   * >
   * > - 只能冷启动目标UIAbility，如果目标UIAbility实例已经启动过，则启动失败。
   * >
   * > - 通过该接口启动的UIAbility实例，将运行在调用方所在的进程中。其他关于目标UIAbility的进程相关的策略（例如在
   * > [module.json5配置文件](docroot://quick-start/module-configuration-file.md)中通过isolationProcess或isolationMode字段来指定进程），均
   * > 不会生效。
   *
   * > **说明**
   * > >
   * > -目标UIAability只能是冷启动的。如果目标UIAability的实例已经
   * > 启动，启动失败。
   * > >
   * > -通过此API启动的UIAbility实例与调用方在同一进程中运行。其他流程相关
   * > 目标UIAability的策略（例如通过**隔离进程**或**隔离模式**指定的策略）
   * > [module.json5](docroot://quick-start/module-configuration-file.md)文件中的字段不生效。
   *
   * @param { Want } want - 启动Ability的必要信息。只支持
   *     [显式启动](docroot://application-models/explicit-implicit-want-mappings.md#显式want匹配原理)，不支持
   *     [隐式启动](docroot://application-models/explicit-implicit-want-mappings.md#隐式want匹配原理)。
   * @param { string } specifiedFlag - UIAbility的ID。此ID不得与任何已运行的ID重复
   *     - 开发者自定义的UIAbility标识。该标识不能与已启动的UIAbility标识相同，否则将返回错误。 <br>**说明：**<br>当通过该接口拉起启动模式为
   *     [specified](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility时，将不会触发
   *     [onAcceptWant]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage.onAcceptWant}回调。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 处于获焦状态的UIAbility可以通过该接口，重启当前UIAbility所在的进程，并拉起应用内的指定UIAbility。仅支持主线程调用。使用Promise异步回调。
   * 如果指定UIAbility就是当前UIAbility，则会刷新窗口至初始状态；如果是其他UIAbility，则会跳转并打开新的UIAbility窗口。
   * 该接口仅在Phone设备中可正常调用，在其他设备中返回801错误码。
   *
   * > **说明：**
   * >
   * > 通过该接口重启进程时，不会触发进程中Ability的onDestroy生命周期回调。
   * >
   * > 在原子化服务调用本接口成功后的3秒内，再次调用本接口、
   * > [restartSelfAtomicService()]{@link ./../@ohos.app.ability.abilityManager:abilityManager.restartSelfAtomicService}或
   * > [ApplicationContext.restartApp()]{@link ./ApplicationContext:ApplicationContext.restartApp}接口中的任一接口，系统将
   * > 返回错误码16000064。
   * >
   * > 在应用调用本接口成功后的3秒内，若再次调用本接口或
   * > [ApplicationContext.restartApp()]{@link ./ApplicationContext:ApplicationContext.restartApp}接口中的任一接口，系统将
   * > 返回错误码16000064。
   *
   * @param { Want } want - Want类型参数，传入需要启动的UIAbility的信息，校验bundleName、abilityName。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 设置当前UIAbility在应用窗口、任务中心应用卡片、快捷栏窗口快照的图标。使用Promise异步回调。
   * 该接口仅在PC/2in1设备中可正常调用，在其他设备中返回801错误码。
   *
   * > **说明：**
   * >
   * > setMissionWindowIcon<!--Del-->、
   * > [setMissionIcon]{@link UIAbilityContext.setMissionIcon(icon: image.PixelMap, callback: AsyncCallback<void>)}
   * > <!--DelEnd-->和
   * > [setAbilityInstanceInfo]{@link UIAbilityContext.setAbilityInstanceInfo}之间不存在调用优先级关系。
   * > 当多个接口被依次调用时，后一次调用的接口所设置的图标信息将覆盖之前调用接口所设置的内容，最终生效的图标以最后一次调用的接口为准。
   *
   * @param { image.PixelMap } windowIcon - 在应用窗口、任务中心应用卡片、快捷栏窗口快照显示的Ability图标。图标必须为正方形，且大小不能超过128M，否则返回401参数错误。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
}

export default UIAbilityContext;