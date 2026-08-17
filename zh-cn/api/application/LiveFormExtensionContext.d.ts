/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit FormKit
 */
 
import ExtensionContext from './ExtensionContext';
import Want from '../@ohos.app.ability.Want';
/*** if arkts static */
import type { ConnectOptions } from '../ability/connectOptions';
/*** endif */

/**
 * LiveFormExtensionContext是[LiveFormExtensionAbility]{@link @ohos.app.form.LiveFormExtensionAbility}的上下文，继承自
 * [ExtensionContext]{@link ./ExtensionContext:ExtensionContext}。它提供访问特定于LiveFormExtensionAbility资源的能力，支持在互动卡片中拉起应用页面，适用
 * 于需要在互动卡片中响应用户点击并跳转到应用页面的场景，解决了互动卡片无法主动拉起应用页面的限制问题。
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
declare class LiveFormExtensionContext extends ExtensionContext {
  /**
   * 拉起互动卡片提供方（应用）的页面，使用Promise异步回调。
   * 
   * 该接口仅支持拉起互动卡片提供方（应用）的页面，不支持拉起其他应用的页面，否则会抛出错误码16501011。
   * 
   * 该接口仅限在点击事件回调中调用，且需要直接调用，不支持延时后调用，否则会抛出错误码16501011。
   * 
   * - 互动卡片激活态中点击跳转到应用主页或详情页。
   *
   * @param { Want } want - 需要被拉起的应用页面信息。取值原则：仅支持使用显式Want，必须包含bundleName和abilityName字段。详见
   *     [使用显式Want启动应用组件](docroot://application-models/ability-startup-with-explicit-want.md)。
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported due to limited device capabilities.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501011 - The form can not support this operation
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  startAbilityByLiveForm(want: Want): Promise<void>;

  /**
   * 将当前LiveFormExtensionAbility客户端连接到一个
   * [ServiceExtensionAbility](docroot://application-models/serviceextensionability-sys.md)服务端。
   * 
   * 调用该接口前，必须实现[ConnectOptions]{@link ../ability/connectOptions}接口。
   * 
   * 通过本接口连接成功后，LiveFormExtensionAbility可以通过ConnectOptions返回的[IRemoteObject]{@link @ohos.rpc:rpc.IRemoteObject}与
   * ServiceExtensionAbility进行通信，以使用ServiceExtensionAbility对外提供的能力。
   * 
   * ServiceExtensionAbility是一类特殊的[ExtensionAbility](docroot://application-models/extensionability-overview.md)组件，这类组件由系
   * 统提供，通常用于提供指定场景后台服务能力，不支持开发者自定义。
   * 
   * ServiceExtensionAbility提供后台服务扩展能力，支持后台运行并对外提供相应能力。三方应用可以连接该ExtensionAbility，并进行通信。
   * 
   * 通过本接口连接成功后，会启动ServiceExtensionAbility组件，具体请参考[组件启动规则](docroot://application-models/component-startup-rules.md)。
   *
   * @param { Want } want - 连接ServiceExtensionAbility的Want信息，包括Ability名称、Bundle名称等。
   * @param { ConnectOptions } connection - ConnectOptions类型的回调函数，返回服务连接成功、连接失败、断开的信息，连接成功会返回
   *     [IRemoteObject]{@link @ohos.rpc:rpc.IRemoteObject}实例。
   * @returns { long } 返回连接id，客户端可以通过
   *     [disconnectServiceExtensionAbility]{@link LiveFormExtensionContext#disconnectServiceExtensionAbility}传入该连接id来断开
   *     连接。
   * @throws { BusinessError } 202 - Permission verification failed,
   *     application which is not a system application uses system API.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501011 - The form can not support this operation
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  public connectServiceExtensionAbility(want: Want, connection: ConnectOptions): long;

  /**
   * 断开与[ServiceExtensionAbility](docroot://application-models/serviceextensionability-sys.md)的连接，断开连接之后开发者需要将连接成功时返回的
   * IRemoteObject对象置空。使用Promise异步回调。
   * 
   * ServiceExtensionAbility是一类特殊的[ExtensionAbility](docroot://application-models/extensionability-overview.md)组件，这类组件由系
   * 统提供，通常用于提供指定场景后台服务能力，不支持开发者自定义。ServiceExtensionAbility提供后台服务扩展能力，支持后台运行并对外提供相应能力。三方应用可以连接该ExtensionAbility，并进行通信。
   *
   * @param { long } connectionId - 连接的ServiceExtensionAbility的连接id，即
   *     [connectServiceExtensionAbility]{@link LiveFormExtensionContext#connectServiceExtensionAbility}返回的connectionId。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed,
   *     application which is not a system application uses system API.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501011 - The form can not support this operation
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  public disconnectServiceExtensionAbility(connectionId: long): Promise<void>;
}
export default LiveFormExtensionContext;