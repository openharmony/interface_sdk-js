/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * WindowExtensionAbility基于ExtensionAbility。WindowExtensionAbility中展示的内容可作为一个控件（AbilityComponent）内容展示在其他应用窗口中。
 * 
 * > **说明：**
 * >
 * > - 从API version 21开始废弃，推荐使用[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}，针对设置一
 * > 个嵌入式UIAbility的场景，请参见[UIExtensionAbility使用指南](docroot://application-models/uiextensionability-sys.md)。
 * >
 * > - 本模块接口为系统接口。
 * >
 * > - 本模块接口仅可在Stage模型下使用。
 *
 * @file
 * @kit ArkUI
 */

import rpc from './@ohos.rpc';
import _WindowExtensionContext from './application/WindowExtensionContext';
import Want from './@ohos.app.ability.Want';
import window from './@ohos.window';

/**
 * WindowExtensionAbility类。
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi hide for inner use.
 * @stagemodelonly
 * @since 9 dynamiconly
 * @deprecated since 21
 */
declare class WindowExtensionAbility {
  /**
   * Indicates window extension ability context.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 21
   */
  context: WindowExtensionContext;

  /**
   * 当窗口扩展组件第一次连接ability时回调。
   *
   * @param { Want } want 当前ability的Want类型信息，包括ability名称、bundle名称等。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 21
   */
  onConnect(want: Want): void;

  /**
   * 当所有连接到窗口扩展组件的ability断开连接时回调。
   *
   * @param { Want } want 当前Ability的Want类型信息，包括ability名称、bundle名称等。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 21
   */
  onDisconnect(want: Want): void;

  /**
   * 当窗口被创建时回调。
   *
   * @param { window.Window } window 当前窗口实例。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 21
   */
  onWindowReady(window: window.Window): void;
}

export default WindowExtensionAbility;

/**
 * WindowExtension上下文信息。
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamiconly
 * @deprecated since 21
 */
export type WindowExtensionContext = _WindowExtensionContext;