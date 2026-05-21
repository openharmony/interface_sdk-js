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
 * UIServiceExtensionAbility provides extended capabilities related to the floating window component. It inherits from 
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}. It is mainly used to provide services 
 * with UIs for third-party applications.
 * 
 * > **NOTE**
 * >
 * > The APIs of this module must be used in the main thread, but not in child threads such as Worker and TaskPool.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 14 dynamic
 * @since 23 static
 */
declare class UIServiceExtensionAbility extends ExtensionAbility {
  /**
   * Context environment for a 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}. This 
   * context inherits from [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  context: UIServiceExtensionContext;

  /**
   * Called to initialize the service logic.
   *
   * @param { Want } want - [Want]{@link @ohos.app.ability.Want:Want} information about the 
   *     [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}, including 
   *     the ability name and bundle name.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Called to request to start a 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}. If the 
   * UIServiceExtensionAbility is started by calling 
   * [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, callback: AsyncCallback<void>)}
   *  or 
   * [startUIServiceExtensionAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startUIServiceExtensionAbility}
   * , this callback will be invoked after [onCreate]{@link UIServiceExtensionAbility#onCreate}. The value of 
   * **startId** is incremented for each UIServiceExtensionAbility that is started.
   *
   * @param { Want } want - [Want]{@link @ohos.app.ability.Want:Want} information about the 
   *     [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}, including 
   *     the ability name and bundle name.
   * @param { int } startId - Number of times the instance has been started. The initial value is **1** for the first start, 
   *     and it increments automatically for subsequent starts.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onRequest(want: Want, startId: int): void;

  /**
   * Called when the connection to a 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility} is 
   * established. If the UIServiceExtensionAbility is started by calling 
   * [connectUIServiceExtensionAbility()]{@link ./application/UIExtensionContext:UIExtensionContext.connectUIServiceExtensionAbility}
   * , this callback will be invoked after [onCreate()]{@link UIServiceExtensionAbility.onCreate}. This callback 
   * receives a [UIServiceHostProxy]{@link ./application/UIServiceHostProxy:UIServiceHostProxy} object for communication 
   * between the client and server.
   *
   * @param { Want } want - [Want]{@link @ohos.app.ability.Want:Want} information about the 
   *     [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}, including 
   *     the ability name and bundle name.
   * @param { UIServiceHostProxy } proxy - [UIServiceHostProxy]{@link ./application/UIServiceHostProxy:UIServiceHostProxy} 
   *     object, used for communication between the client and server.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onConnect(want: Want, proxy: UIServiceHostProxy): void;

  /**
   * Called when the connection to a 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility} is 
   * interrupted.
   *
   * @param { Want } want - [Want]{@link @ohos.app.ability.Want:Want} information about the 
   *     [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}, including 
   *     the ability name and bundle name.
   * @param { UIServiceHostProxy } proxy - Proxy that sends data to the sender.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDisconnect(want: Want, proxy: UIServiceHostProxy): void;

  /**
   * Called when a window will be created for the 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}. Through 
   * **window.ExtensionWindowConfig** in the callback, the foreground application sends the parameters for creating the 
   * window to the 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}.
   *
   * @param { window.ExtensionWindowConfig } config - Window configuration information.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onWindowWillCreate(config: window.ExtensionWindowConfig): void;

  /**
   * Called when a window is created for the 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility}. Through 
   * this callback, the 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility} passes the
   *  created window object to the foreground application.
   *
   * @param { window.Window } window - Window object created.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onWindowDidCreate(window: window.Window): void;

  /**
   * Callback invoked when data is received.
   *
   * @param { UIServiceHostProxy } proxy - Proxy that sends data to the client.
   * @param { Record<string, Object> } data - Data received.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   */
  onData(proxy: UIServiceHostProxy, data: Record<string, Object>): void;

  /**
   * Called back when data is sent.
   *
   * @param { UIServiceHostProxy } proxy - Indicates the UI service host proxy.
   * @param { Record<string, RecordData> } data - Indicates the received data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onData(proxy: UIServiceHostProxy, data: Record<string, RecordData>): void;

  /**
   * Called to clear resources when this 
   * [UIServiceExtensionAbility]{@link @ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility} is 
   * destroyed.
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