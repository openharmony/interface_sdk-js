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
 * UIExtensionContentSession是[UIExtensionAbility]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}组件的界面
 * 操作类，提供页面加载、设置宿主应用（UIExtensionAbility组件的拉起方）窗口隐私模式等功能。当宿主应用拉起指定的UIExtensionAbility组件时，系统创建UIExtensionContentSession对象
 * ，并通过[onSessionCreate]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate}回调传递给开发者。一个
 * UIExtensionAbility组件对应一个UIExtensionContentSession对象，每个UIExtensionAbility组件的UIExtensionContentSession对象之间互不影响。
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
 * 从UIExtensionComponent控件接收数据的回调方法。
 *
 * @param { Record<string, RecordData> } data - 回调函数，返回接收的数据。
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 23 staticonly
 */
export type OnReceiveDataCallback = (data: Record<string, RecordData>) => void;

/**
 * 从UIExtensionComponent控件接收数据带返回值的回调方法。
 *
 * @param { Record<string, RecordData> } data - 回调函数，返回带返回值的接收的数据。
 * @returns { Record<string, RecordData> } 	返回的数据对象。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 23 staticonly
 */
export type OnReceiveDataForResultCallback = (data: Record<string, RecordData>) => Record<string, RecordData>;

/**
 * UIExtensionAbility组件的界面操作类，提供页面加载、设置宿主应用窗口隐私模式等功能。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
declare class UIExtensionContentSession {
  /**
   * 发送数据给UIExtensionComponent控件。
   *
   * @param { Record<string, Object> } data - 发送给UIExtensionComponent控件的数据参数。
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
   * 发送数据给UIExtensionComponent控件。
   *
   * @param { Record<string, RecordData> } data - 	发送给UIExtensionComponent控件的数据参数。
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  sendData(data: Record<string, RecordData>): void;

  /**
   * 设置从UIExtensionComponent控件接收数据的回调方法。使用callback异步回调。
   *
   * @param { function } callback - 回调函数，返回接收的数据。
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
   * 设置从UIExtensionComponent控件接收数据的回调方法。使用callback异步回调。
   *
   * @param { OnReceiveDataCallback } callback - 回调函数，返回接收的数据。
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  setReceiveDataCallback(callback: OnReceiveDataCallback): void;
  
  /**
   * 设置从UIExtensionComponent控件接收数据带返回值的回调方法。使用callback异步回调。
   *
   * @param { function } callback - 回调函数，返回带返回值的接收的数据。
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
   * 设置从UIExtensionComponent控件接收数据带返回值的回调方法。使用callback异步回调。
   *
   * @param { OnReceiveDataForResultCallback } callback - 回调函数，返回带返回值的接收的数据。
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  setReceiveDataForResultCallback(callback: OnReceiveDataForResultCallback): void;

  /**
   * 为[UIExtensionAbility]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}组件加载页面，支持通过
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)传递状态属性给被加载的页面。该接口用于开发者在UIExtensionAbility组件的
   * [onSessionCreate]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate}生命周期中加载页面。
   *
   * @param { string } path - 要加载的页面所在的路径，该路径通过[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的
   *     [pages标签](docroot://quick-start/module-configuration-file.md#pages标签)配置。
   * @param { LocalStorage } [storage] - 页面级UI状态存储单元，开发者可通过该参数为加载的页面传递状态属性。
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
   * 为[UIExtensionAbility]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility}组件加载
   * [命名路由](docroot://ui/arkts-routing.md#命名路由)页面，支持通过
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)传递状态属性给被加载的页面。该接口用于开发者在UIExtensionAbility组件的
   * [onSessionCreate]{@link ./@ohos.app.ability.UIExtensionAbility:UIExtensionAbility.onSessionCreate}生命周期中加载命名路由页面。
   *
   * @param { string } name - 命名路由页面的名称。
   * @param { LocalStorage } [storage] - 页面级UI状态存储单元，开发者可通过该参数为加载的页面传递状态属性。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  loadContentByName(name: string, storage?: LocalStorage): void;

  /**
   * 启动Ability。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动成功，err为undefined，否则为错误对象。
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
   * 启动Ability。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动成功，err为undefined，否则为错误对象。
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
   * 启动Ability。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 初始Ability将自己的caller信息（如BundleName、AbilityName等）置于want参数中，传递给中间层的ExtensionAbility。当ExtensionAbility通过该接口拉起另外一个
   * Ability，被拉起的Ability可以从onCreate生命周期获取到初始Ability的caller信息。使用callback异步回调。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动Ability成功，err为undefined，否则为错误对象。
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
   * 初始Ability将自己的caller信息（如BundleName、AbilityName等）置于want参数中，传递给中间层的ExtensionAbility。当ExtensionAbility通过该接口拉起另外一个
   * Ability，被拉起的Ability可以从onCreate生命周期获取到初始Ability的caller信息。使用callback异步回调。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动Ability成功，err为undefined，否则为错误对象。
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
   * 初始Ability将自己的caller信息（如BundleName、AbilityName等）置于want参数中，传递给中间层的ExtensionAbility。当ExtensionAbility通过该接口拉起另外一个
   * Ability，被拉起的Ability可以从onCreate生命周期获取到初始Ability的caller信息。使用Promise异步回调。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 启动一个Ability，在Ability终止后返回结果给调用方。使用callback异步回调。
   * Ability的终止方式包括以下几种情况：
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死Ability会返回异常信息给调用方，异常信息中resultCode为-1。
   * - 如果被启动的Ability模式是单实例模式，不同应用多次调用该接口启动这个Ability，当这个Ability调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方，其他调用方返回异常信息，异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { AsyncCallback<AbilityResult> } callback - 回调函数。当Ability启动并终止成功，err为undefined，data为获取到的结果码和数据；否则为错误对象。
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
   * 启动一个Ability，在Ability终止后返回结果给调用方。使用callback异步回调。
   * Ability的终止方式包括以下几种情况：
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死Ability会返回异常信息给调用方，异常信息中resultCode为-1。
   * - 如果被启动的Ability模式是单实例模式，不同应用多次调用该接口启动这个Ability，当这个Ability调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方，其他调用方返回异常信息，异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { StartOptions } options - 启动Ability所携带的参数。
   * @param { AsyncCallback<AbilityResult> } callback - 回调函数。当Ability启动并终止成功，err为undefined，data为获取到的结果码和数据；否则为错误对象。
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
   * 启动一个Ability，在Ability终止后返回结果给调用方。使用Promise异步回调。
   * Ability的终止方式包括以下几种情况：
   * 
   * - 正常情况下可通过调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止并且返回结果给调用方。
   * - 异常情况下比如杀死Ability会返回异常信息给调用方，异常信息中resultCode为-1。
   * - 如果被启动的Ability模式是单实例模式，不同应用多次调用该接口启动这个Ability，当这个Ability调用
   * [terminateSelfWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
   * 接口使之终止时，只将正常结果返回给最后一个调用方，其他调用方返回异常信息，异常信息中resultCode为-1。
   * 
   * > **说明：**
   * >
   * > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。
   * > > 对应UIExtensionComponent控件所在的应用需要处于前台获焦状态。
   *
   * @param { Want } want - 启动Ability的want信息。
   * @param { StartOptions } [options] - 启动Ability所携带的参数。
   * @returns { Promise<AbilityResult> } Promise对象，返回结果码和数据。
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
   * 销毁UIExtensionAbility组件自身，同时关闭对应的宿主应用窗口界面。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * 销毁UIExtensionAbility组件自身，同时关闭对应的宿主应用窗口界面。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  terminateSelf(): Promise<void>;

  /**
   * 销毁UIExtensionAbility组件自身，关闭对应的宿主应用窗口界面，并将结果返回给宿主应用。使用callback异步回调。
   *
   * @param { AbilityResult } parameter - 返回给宿主应用的信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

  /**
   * 销毁UIExtensionAbility组件自身，关闭对应的宿主应用窗口界面，并将结果返回给宿主应用。使用Promise异步回调。
   *
   * @param { AbilityResult } parameter - 返回给宿主应用的信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

  /**
   * 设置UIExtensionAbility加载界面的背景色。该接口需要在
   * [loadContent()]{@link ./@ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent}调用生效后使用。
   *
   * @param { string } color - 需要设置的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如`#00FF00`或`#FF00FF00`。
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
   * 设置宿主应用窗口的隐私模式开启或关闭。设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。使用Promise异步回调。
   *
   * @permission ohos.permission.PRIVACY_WINDOW
   * @param { boolean } isPrivacyMode - 表示是否开启隐私模式。true表示开启；false表示关闭。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 设置宿主应用窗口的隐私模式开启或关闭。设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。使用callback异步回调。
   *
   * @permission ohos.permission.PRIVACY_WINDOW
   * @param { boolean } isPrivacyMode - 表示是否开启隐私模式。true表示开启；false表示关闭。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置成功，err为undefined，否则为错误对象。
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
   * 通过type隐式启动UIExtensionAbility。使用callback异步回调。仅支持处于前台的应用调用。
   *
   * @param { string } type - UIExtensionAbility组件类型，取值详见
   *     [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。
   * @param { Record<string, Object> } wantParam - 表示启动UIExtensionAbility组件时传递的参数。
   * @param { AbilityStartCallback } abilityStartCallback - 表示启动UIExtensionAbility组件的执行结果。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为undefined，否则为错误对象。
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
   * 通过type隐式启动UIExtensionAbility。使用callback异步回调。仅支持处于前台的应用调用。
   *
   * @param { string } type - 显示拉起的UIExtensionAbility类型，取值详见
   *     [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。
   * @param { Record<string, RecordData> } wantParam - 	表示扩展参数。
   * @param { AbilityStartCallback } abilityStartCallback - 回调函数，返回启动失败后的详细错误信息。
   * @param { AsyncCallback<void> } callback - 回调函数。当启动Ability成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback, callback: AsyncCallback<void>): void;

  /**
   * 通过type隐式启动UIExtensionAbility组件。使用Promise异步回调。仅支持处于前台的应用调用。
   *
   * @param { string } type - UIExtensionAbility组件类型，取值详见
   *     [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。
   * @param { Record<string, Object> } wantParam - 表示启动UIExtensionAbility组件时传递的参数。
   * @param { AbilityStartCallback } abilityStartCallback - 表示启动UIExtensionAbility组件的执行结果。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 通过type隐式启动UIExtensionAbility。使用callback异步回调。仅支持处于前台的应用调用。
   *
   * @param { string } type - 显示拉起的UIExtensionAbility类型，取值详见
   *     [通过startAbilityByType接口拉起垂类面板](docroot://application-models/start-intent-panel.md#匹配规则)。
   * @param { Record<string, RecordData> } wantParam - 	表示扩展参数。
   * @param { AbilityStartCallback } abilityStartCallback - 	回调函数，返回启动失败后的详细错误信息。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  startAbilityByType(type: string, wantParam: Record<string, RecordData>,
    abilityStartCallback: AbilityStartCallback): Promise<void>;

  /**
   * 获取当前UIExtension对应的窗口对象，用于通知宽高、位置、避让信息等。
   *
   * @returns { uiExtensionHost.UIExtensionHostWindowProxy } 宿主应用窗口信息。
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
   * 获取UIExtension窗口代理。
   *
   * @returns { uiExtension.WindowProxy } UIExtensionAbility组件的宿主应用窗口代理。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  getUIExtensionWindowProxy(): uiExtension.WindowProxy;
}

export default UIExtensionContentSession;