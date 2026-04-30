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

/**
 * @file
 * @kit AbilityKit
 */

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
/*** if arkts dynamic */
import type Want from './@ohos.app.ability.Want';
import type UIServiceExtensionContext from './application/UIServiceExtensionContext';
import type UIServiceHostProxy from './application/UIServiceHostProxy';
/*** endif */
/*** if arkts static */
import Want from './@ohos.app.ability.Want';
import UIServiceExtensionContext from './application/UIServiceExtensionContext';
import UIServiceHostProxy from './application/UIServiceHostProxy';
import { RecordData } from './@ohos.base';
/*** endif */
import window from './@ohos.window';

/**
 * UIServiceExtensionAbility提供浮窗组件相关扩展能力，继承自[ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}.
 * 主要用于向三方应用提供带界面的服务。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 14 dynamic
 * @since 23 static
 */
declare class UIServiceExtensionAbility extends ExtensionAbility {
  /**
   * 	UIServiceExtension的上下文环境，继承自[ExtensionContext]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  context: UIServiceExtensionContext;

  /**
   * [UIServiceExtensionContext]{@link ./application/UIServiceExtensionContext:UIServiceExtensionContext}生命周期创建接口，执行初始化
   * 业务逻辑操作。
   *
   * @param { Want } want - 当前
   *     [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}相关的
   *     [Want]{@link @ohos.app.ability.Want:Want}类型信息，包括Ability名称、Bundle名称等。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * 请求拉起UIServiceExtension服务处理。如果是
   * [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>)}
   * 或者
   * [startUIServiceExtensionAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startUIServiceExtensionAbility}
   * 拉起的服务，会在[onCreate]{@link UIServiceExtensionAbility#onCreate}之后回调。每次拉起服务都会回调，startId会递增。
   *
   * @param { Want } want - 当前
   *     [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}相关的
   *     [Want]{@link @ohos.app.ability.Want:Want}类型信息，包括Ability名称、Bundle名称等。
   * @param { int } startId - 返回浮窗拉起次数。首次拉起初始值返回1，多次之后自动递增。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onRequest(want: Want, startId: int): void;

  /**
   * UIServiceExtension生命周期回调。如果是
   * [connectUIServiceExtensionAbility()]{@link ./application/UIExtensionContext:UIExtensionContext.connectUIServiceExtensionAbility}
   * 拉起的服务，会在[onCreate()]{@link UIServiceExtensionAbility.onCreate}之后回调。接收一个
   * [UIServiceHostProxy]{@link ./application/UIServiceHostProxy:UIServiceHostProxy}对象，用于客户端和服务端进行通信。
   *
   * @param { Want } want - 当前
   *     [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}相关的
   *     [Want]{@link @ohos.app.ability.Want:Want}类型信息，包括Ability名称、Bundle名称等。
   * @param { UIServiceHostProxy } proxy - 一个[UIServiceHostProxy]{@link ./application/UIServiceHostProxy:UIServiceHostProxy}
   *     对象，用于客户端和服务端进行通信。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onConnect(want: Want, proxy: UIServiceHostProxy): void;

  /**
   * 断开与UIServiceExtension的连接。
   *
   * @param { Want } want - 当前
   *     [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}相关的
   *     [Want]{@link @ohos.app.ability.Want:Want}类型信息，包括Ability名称、Bundle名称等。
   * @param { UIServiceHostProxy } proxy - 往发起方发送数据的Proxy。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDisconnect(want: Want, proxy: UIServiceHostProxy): void;

  /**
   * UIServiceExtension窗体创建前的回调。前台应用把要创建windows的参数通过window.ExtensionWindowConfig传回给UIServiceExtension服务。
   *
   * @param { window.ExtensionWindowConfig } config - UIServiceExtension窗体配置信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onWindowWillCreate(config: window.ExtensionWindowConfig): void;

  /**
   * UIServiceExtension创建后回调。UIServiceExtension服务创建窗口成功后，通过onWindowDidCreate接口把创建的窗口对象传递给前台应用。
   *
   * @param { window.Window } window - 表示已创建的Window。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onWindowDidCreate(window: window.Window): void;

  /**
   * 接收到数据的回调。
   *
   * @param { UIServiceHostProxy } proxy - 往客户端发送数据的Proxy。
   * @param { Record<string, Object> } data - 表示接收到的数据。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  onData(proxy: UIServiceHostProxy, data: Record<string, Object>): void;

  /**
   * 接收到数据的回调。
   *
   * @param { UIServiceHostProxy } proxy - 往客户端发送数据的Proxy。
   * @param { Record<string, RecordData> } data - 表示接收到的数据。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onData(proxy: UIServiceHostProxy, data: Record<string, RecordData>): void;

  /**
   * UIServiceExtension销毁时回调，执行资源清理等操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDestroy(): void;
}

export default UIServiceExtensionAbility;