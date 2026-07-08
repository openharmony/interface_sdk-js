/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

/**
 * # 使用说明
 * 
 * - 当前仅支持2in1设备。
 * - 应用集成AppServiceExtensionAbility的组件需要申请ACL权限（ohos.permission.SUPPORT_APP_SERVICE_EXTENSION）。该ACL权限当前只对企业普通应用开放申请，申请方
 * 式参考权限申请指导。
 */

/**
 * # 生命周期
 *
 * AppServiceExtensionAbility提供了[onCreate()]{@link AppServiceExtensionAbility.onCreate}、
 * [onRequest()]{@link AppServiceExtensionAbility.onRequest}、[onConnect()]{@link AppServiceExtensionAbility.onConnect}和
 * [onDestroy()]{@link AppServiceExtensionAbility.onDestroy}生命周期回调，开发者可根据需要重写对应的回调方法。下图展示了AppServiceExtensionAbility的生命
 * 周期。
 * 
 * ![AppServiceExtensionAbility-lifecycle](docroot://application-models/figures/AppServiceExtensionAbility-lifecycle.png)
 */

import rpc from './@ohos.rpc';
import AppServiceExtensionContext from './application/AppServiceExtensionContext';
import Want from './@ohos.app.ability.Want';
import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';

/**
 * AppServiceExtensionAbility模块提供后台服务相关扩展能力，包括后台服务的创建、销毁、连接、断开等生命周期回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare class AppServiceExtensionAbility extends ExtensionAbility {
  /**
   * AppServiceExtensionAbility的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  context: AppServiceExtensionContext;

  /**
   * 在AppServiceExtensionAbility实例创建时，系统会触发该回调。应用可以在该接口中执行自己的业务逻辑初始化操作，例如注册公共事件监听等。
   * 
   * > **说明：**
   * >
   * > 如果AppServiceExtensionAbility实例已创建，再次启动或连接该实例时不会触发onCreate()回调。
   *
   * @param { Want } want - 调用方拉起当前AppServiceExtensionAbility实例时传递的Want类型信息，包括Ability名称、Bundle名称等。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * 在AppServiceExtensionAbility实例销毁时，系统会触发该回调。应用可以在该接口中执行资源清理等操作，如注销监听等。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onDestroy(): void;

  /**
   * 调用方每次使用
   * [startAppServiceExtensionAbility()]{@link ./application/UIAbilityContext:UIAbilityContext.startAppServiceExtensionAbility}
   * 拉起AppServiceExtensionAbility实例时，系统都会触发该回调。
   *
   * @param { Want } want - 调用方拉起当前AppServiceExtensionAbility实例时传递的Want类型信息，包括Ability名称、Bundle名称等。
   * @param { int } startId - 返回拉起次数。首次拉起初始值返回1，多次拉起时自动递增。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onRequest(want: Want, startId: int): void;

  /**
   * 调用方使用
   * [connectAppServiceExtensionAbility()]{@link ./application/UIAbilityContext:UIAbilityContext.connectAppServiceExtensionAbility}
   * 连接AppServiceExtensionAbility实例时，系统会触发该回调。
   * 
   * 应用需要在该接口中返回一个RemoteObject对象，用于客户端和服务端进行通信。当AppServiceExtensionAbility实例处于连接状态时，如果调用方发起新的连接，系统会返回缓存的RemoteObject对象，
   * 而不会重复回调onConnect()接口。
   *
   * @param { Want } want - 调用方拉起当前AppServiceExtensionAbility实例时传递的Want类型信息，包括Ability名称、Bundle名称等。
   * @returns { rpc.RemoteObject } 一个RemoteObject对象，用于客户端和服务端进行通信。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onConnect(want: Want): rpc.RemoteObject;

  /**
   * 当所有连接方断开与AppServiceExtensionAbility实例的连接时，系统会触发该回调。
   *
   * @param { Want } want - AppServiceExtensionAbility实例最近一次被拉起或者连接时，调用方传递的Want类型信息，包括Ability名称、Bundle名称等。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onDisconnect(want: Want): void;
}
export default AppServiceExtensionAbility;